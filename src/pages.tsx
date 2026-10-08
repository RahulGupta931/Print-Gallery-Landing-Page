import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowRight, CheckCircle2, Home, Phone } from 'lucide-react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import Values from './components/Values';
import type { ServicePageData } from './serviceData';

function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="min-h-[60vh] pt-24">{children}</main>
      <Footer />
    </div>
  );
}

function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li><a className="hover:text-amber-700" href="/">Home</a></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-slate-700">{current}</li>
      </ol>
    </nav>
  );
}

export function ServicePage({ service }: { service: ServicePageData }) {
  return (
    <PageShell>
      <article className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs current={service.name} />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              Print Gallery · Noida, India
            </p>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{service.description}</p>
            <a className="btn-primary mt-7" href="/#contact">
              Request a quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <img
            src={service.image}
            alt={service.name}
            className="aspect-[4/3] w-full rounded-2xl border border-slate-200 object-cover shadow-sm"
            loading="eager"
          />
        </div>
        <section className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-slate-900">Options and capabilities</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {service.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </section>
        <p className="mt-8 text-sm text-slate-600">
          Specifications and availability depend on your product and order requirements.{' '}
          <a className="font-semibold text-amber-800 underline" href="/#contact">Talk with our team</a>{' '}
          to discuss a suitable option.
        </p>
      </article>
    </PageShell>
  );
}

export function AboutPage() {
  return (
    <PageShell>
      <section className="relative isolate overflow-hidden border-b border-slate-800 bg-slate-950 text-white">
        <div className="absolute inset-0 -z-20" aria-hidden="true">
          <img
            src="/gallery.jpeg"
            alt=""
            className="h-full w-full object-cover opacity-35"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/45" aria-hidden="true" />
        <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Breadcrumbs current="About us" />
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
              Print Gallery · Noida, India
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Packaging built on precision, partnership and purpose
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              We bring thoughtful design, dependable manufacturing and careful quality checks
              together to help businesses protect and present their products.
            </p>
            <a className="btn-primary mt-8" href="/contact">
              Meet your packaging partner <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <About />
      <Team />
      <Values />
      <section className="bg-amber-500 px-4 py-12 text-center text-slate-950 sm:px-6">
        <h2 className="text-2xl font-black sm:text-3xl">Let’s make your next pack work harder.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-800 sm:text-base">
          Talk with our team about your product, packaging requirements and production plans.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
        >
          Contact our team <ArrowRight className="h-4 w-4" />
        </a>
      </section>
    </PageShell>
  );
}

export function ContactPage() {
  return (
    <PageShell>
      <section className="border-b border-slate-200 bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-16">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs current="Contact" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
            We’re here to help
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Let’s talk about your packaging
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Share your requirements with our Noida team. We’ll help you explore the right
            materials, format and next steps for your project.
          </p>
        </div>
      </section>
      <Contact />
    </PageShell>
  );
}

export function PolicyPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const isPrivacy = kind === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Use';
  return (
    <PageShell>
      <article className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs current={title} />
        <h1 className="text-4xl font-black tracking-tight text-slate-950">{title}</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: October 7, 2026</p>
        {isPrivacy ? (
          <div className="mt-8 space-y-7 leading-relaxed text-slate-700">
            <section>
              <h2 className="text-xl font-bold text-slate-900">Who we are</h2>
              <p className="mt-2">Print Gallery provides printing and packaging services from E-block, Building No. 67, Sector 63, Noida, Uttar Pradesh, India. For privacy enquiries, contact <a className="underline" href="mailto:printgallery17@gmail.com">printgallery17@gmail.com</a>.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900">Information you choose to share</h2>
              <p className="mt-2">This website does not submit quote-form details to a Print Gallery server. When you choose to prepare an enquiry, the information you enter and the selected handoff link are kept temporarily in your browser session so you can continue to WhatsApp or your email app from the thank-you page. You decide whether to send the message. WhatsApp, your email provider, and Google Maps may process information under their own privacy policies when you use those services.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900">Cookies and analytics</h2>
              <p className="mt-2">Google Analytics is not active unless the site owner configures a GA4 measurement ID for deployment. If enabled, Google Analytics may process website-usage data and use cookies or similar identifiers. Embedded map content is provided by Google and may use its own technologies when loaded. The applicable Google privacy information is available from Google.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900">Your choices</h2>
              <p className="mt-2">You can browse without submitting an enquiry. If you contact us, you may ask us about the information you sent and request correction or deletion, subject to applicable law and any records we must retain.</p>
            </section>
          </div>
        ) : (
          <div className="mt-8 space-y-7 leading-relaxed text-slate-700">
            <section>
              <h2 className="text-xl font-bold text-slate-900">Website information</h2>
              <p className="mt-2">This website provides general information about Print Gallery’s printing and packaging capabilities. Product examples and specifications are illustrative; confirm dimensions, materials, prices, lead times, and availability with our team before placing an order.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900">Quotes and orders</h2>
              <p className="mt-2">A quote request is an enquiry, not an accepted order. An order is subject to a separate written confirmation covering the final specifications, price, delivery terms, and payment terms.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900">Use of this website</h2>
              <p className="mt-2">You may use this website lawfully and must not interfere with its operation or misuse its content. Product names, photographs, and other materials may not be reused in a way that infringes applicable rights.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900">Third-party services</h2>
              <p className="mt-2">Links and embedded content from services such as WhatsApp, email providers, or Google Maps are operated by their respective providers and are subject to their terms.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-900">Contact</h2>
              <p className="mt-2">For questions about these terms, email <a className="underline" href="mailto:printgallery17@gmail.com">printgallery17@gmail.com</a>.</p>
            </section>
          </div>
        )}
      </article>
    </PageShell>
  );
}

export function ThankYouPage() {
  const [handoff, setHandoff] = useState<{ url: string; label: string } | null>(null);

  useEffect(() => {
    try {
      const savedHandoff = sessionStorage.getItem('printGalleryQuoteHandoff');
      if (!savedHandoff) return;
      const parsed: unknown = JSON.parse(savedHandoff);
      if (
        typeof parsed === 'object' &&
        parsed !== null &&
        'url' in parsed &&
        'label' in parsed &&
        typeof parsed.url === 'string' &&
        typeof parsed.label === 'string' &&
        (parsed.url.startsWith('https://wa.me/919810466405?') ||
          parsed.url.startsWith('mailto:printgallery17@gmail.com?'))
      ) {
        setHandoff({ url: parsed.url, label: parsed.label });
      }
    } catch (error) {
      console.error('Unable to read the enquiry handoff from this browser session.', error);
    }
  }, []);

  return (
    <PageShell>
      <section className="container mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
        <h1 className="mt-5 text-4xl font-black text-slate-950">Your enquiry is ready</h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-600">
          {handoff
            ? 'Continue to your selected app and send the prepared message to complete your enquiry.'
            : 'Thank you for contacting Print Gallery. You can reach our team by phone or email.'}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {handoff && (
            <a className="btn-primary" href={handoff.url}>
              {handoff.label} <ArrowRight className="h-4 w-4" />
            </a>
          )}
          <a className="btn-secondary" href="/"><Home className="h-4 w-4" /> Back to home</a>
          <a className="btn-secondary" href="tel:+919810466405"><Phone className="h-4 w-4" /> Call +91 9810466405</a>
        </div>
      </section>
    </PageShell>
  );
}

export function NotFoundPage() {
  return (
    <PageShell>
      <section className="container mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">404 · Page not found</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950">This page isn’t available</h1>
        <p className="mt-4 text-slate-600">The address may have changed or the page may no longer exist.</p>
        <a className="btn-primary mt-8" href="/">Return to Print Gallery</a>
      </section>
    </PageShell>
  );
}
