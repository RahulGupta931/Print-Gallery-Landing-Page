import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const outputDirectory = resolve('dist');
const publicDirectory = resolve('public');
const siteOrigin = 'https://www.printgallerys.com';
const template = await readFile(resolve(outputDirectory, 'index.html'), 'utf8');
const serverEntryPath = resolve(outputDirectory, 'server/entry-server.js');
const { render, servicePages, getSeoMetadata, getStructuredData } = await import(pathToFileURL(serverEntryPath).href);
const paths = [
  '/',
  ...servicePages.map((service) => `/${service.slug}`),
  '/privacy-policy',
  '/terms',
  '/thank-you',
  '/404',
];
const sitemapPaths = paths.filter((pathname) => !getSeoMetadata(pathname).noindex);

function escapeAttribute(value) {
  return value.replace(/[&"<>]/g, (character) => ({
    '&': '&amp;',
    '"': '&quot;',
    '<': '&lt;',
    '>': '&gt;',
  })[character]);
}

function setMeta(html, attributeName, attributeValue, content) {
  const expression = new RegExp(`<meta\\s+${attributeName}="${attributeValue}"[^>]*>`);
  const match = html.match(expression);
  if (!match) throw new Error(`Required metadata tag is missing: ${attributeName}=${attributeValue}`);
  const tag = match[0].replace(/content="[^"]*"/, `content="${escapeAttribute(content)}"`);
  return html.replace(expression, tag);
}

function renderDocument(pathname) {
  const metadataPath = pathname === '/404' ? '/404' : pathname;
  const metadata = getSeoMetadata(metadataPath);
  const renderedApp = render(pathname === '/404' ? '/unavailable-page' : pathname);
  if (!metadata.noindex && (metadata.title.length < 50 || metadata.title.length > 60)) {
    throw new Error(`Indexable page title must be 50–60 characters: ${pathname} (${metadata.title.length})`);
  }
  if (!metadata.noindex && (renderedApp.match(/<h1\b/g) ?? []).length !== 1) {
    throw new Error(`Indexable page must render exactly one H1: ${pathname}`);
  }
  const resourceHints = [...renderedApp.matchAll(/<link rel="preload"[^>]*\/?>/g)]
    .map(([link]) => link);
  const appMarkup = renderedApp.replace(/<link rel="preload"[^>]*\/?>/g, '');
  let html = template.replace('<div id="root"></div>', `<div id="root">${appMarkup}</div>`);
  if (resourceHints.length > 0) {
    html = html.replace('</head>', `  ${resourceHints.join('\n  ')}\n  </head>`);
  }
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(metadata.title)}</title>`);
  html = setMeta(html, 'name', 'description', metadata.description);
  html = setMeta(html, 'property', 'og:title', metadata.title);
  html = setMeta(html, 'property', 'og:description', metadata.description);
  html = setMeta(html, 'property', 'og:url', `https://www.printgallerys.com${metadata.path}`);
  html = html.replace(/<link rel="canonical"[^>]*>/g, '');
  if (pathname !== '/404') {
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="https://www.printgallerys.com${metadata.path}" />\n  </head>`,
    );
  }
  if (metadata.noindex) {
    html = html.replace('</head>', '  <meta name="robots" content="noindex,follow" />\n  </head>');
  } else {
    html = html.replace('</head>', '  <meta name="robots" content="index,follow" />\n  </head>');
  }
  const structuredData = getStructuredData(metadata)
    .map((data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`)
    .join('\n  ');
  return html.replace('</head>', `  ${structuredData}\n  </head>`);
}

for (const pathname of paths) {
  const html = renderDocument(pathname);
  if (pathname === '/') {
    await writeFile(resolve(outputDirectory, 'index.html'), html);
  } else if (pathname === '/404') {
    await writeFile(resolve(outputDirectory, '404.html'), html);
  } else {
    const routeDirectory = resolve(outputDirectory, pathname.slice(1));
    await mkdir(routeDirectory, { recursive: true });
    await writeFile(resolve(routeDirectory, 'index.html'), html);
  }
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapPaths.map((pathname) => `  <url><loc>${siteOrigin}${pathname}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
await writeFile(resolve(publicDirectory, 'sitemap.xml'), sitemap);
await writeFile(resolve(outputDirectory, 'sitemap.xml'), sitemap);

await rm(resolve(outputDirectory, 'server'), { recursive: true, force: true });
console.log(`Pre-rendered ${paths.length} routes and indexed ${sitemapPaths.length} URLs in the sitemap.`);
