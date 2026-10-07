# Print Gallery

React + Vite site for Print Gallery's printing and packaging services.

## Build and deploy

Run `npm run build` to type-check, build the client assets, statically render the public routes, and generate the custom `404.html`. Deploy the `dist` directory to Vercel. The included `vercel.json` enables extensionless service/legal URLs and redirects requests arriving on `printgallerys.com` and `www.printgallerys.com` to the canonical domain. Both legacy domains must be assigned to the Vercel project and their DNS pointed to Vercel for those redirects to take effect.

The sitemap and crawler rules are in `public/sitemap.xml` and `public/robots.txt`. The old domain's accessible sitemap exposed only the canonical homepage URL; additional legacy paths require a previous-site crawl or URL export before they can be mapped accurately.

## Analytics and Search Console

Copy `.env.example` to `.env.local` and set:

- `VITE_GA4_MEASUREMENT_ID` to the GA4 measurement ID (`G-...`).
- `VITE_GSC_VERIFICATION` to the HTML meta-tag verification value supplied by Search Console.

Rebuild and deploy after setting either value. Search Console domain-property verification can instead be completed with a DNS TXT record at the domain provider. Neither integration is active until the account/property values are supplied.

## Quote enquiries

The quote form validates the enquiry and prepares a WhatsApp message or email draft on the visitor's device. The thank-you page provides a continuation link; the visitor must send the message in WhatsApp or their email app. The website does not store or transmit form details to a Print Gallery server.

## Legal content

The privacy and terms pages are initial website copy based on the current site behavior and known business contact details. Have the business owner review them for accuracy and legal sufficiency before launch.

## Quality checks

After deployment, verify the public sitemap and robots URLs, each service/legal URL, an unknown path (custom 404), legacy-domain redirects, Search Console ownership, and a Lighthouse mobile run. A PageSpeed score depends on the production hosting, network, and third-party services and is not guaranteed by a local build.
