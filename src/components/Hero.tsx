import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, Factory } from 'lucide-react';

const BANNERS = [
  { src: '/heroBanner1.jpg', alt: 'Corrugated cartons on the Print Gallery production floor' },
  { src: '/herobanner2.jpg', alt: 'Printed packaging manufactured by Print Gallery' },
];

const HIGHLIGHTS = [
  '3, 5 & 7-ply heavy cartons',
  'Die-cut e-commerce mailers',
  '100% recyclable kraft paper',
];

const STATS = [
  { value: '15+', label: 'Years in packaging' },
  { value: '2,000+', label: 'Boxes per day' },
  { value: '8+', label: 'In-house QC tests' },
  { value: '100%', label: 'Recyclable material' },
];

const SLIDE_MS = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % BANNERS.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-slate-950 text-white pt-28 pb-10 lg:pt-40 lg:pb-14"
    >
      {/* Crossfading banner photos */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        {BANNERS.map((b, i) => (
          <img
            key={b.src}
            src={b.src}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Navy overlays keep text readable on any photo */}
      <div className="absolute inset-0 -z-10 bg-slate-950/50 lg:bg-transparent" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-slate-950/80 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* <p className="border-l-4 border-amber-500 pl-3 text-sm font-medium text-slate-200">
            Print Gallery · Corrugated packaging manufacturer, Noida
          </p> */}

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.08]">
            High quality printing and packaging, made to your specification
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-200">
            Print Gallery supplies innovative, sustainable packaging to businesses across industries.
            Modern machinery and strict in-house testing keep every order consistent from the first
            box to the ten-thousandth.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-100">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-900/20 transition-colors hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <span>Get a quote</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#infrastructure"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <Factory className="h-4 w-4" />
              <span>View machinery and lab</span>
            </a>
            <a
              href="tel:+919810466405"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-slate-100 transition-colors hover:text-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <Phone className="h-4 w-4 text-amber-400" />
              <span>Call factory sales</span>
            </a>
          </div>
        </div>

        {/* Stat bar + slide controls */}
        <div className="mt-14 lg:mt-20">
          <dl className="grid grid-cols-2 sm:grid-cols-4 overflow-hidden rounded-xl border border-white/15 bg-white/10 backdrop-blur-md divide-x divide-y sm:divide-y-0 divide-white/15">
            {STATS.map((s) => (
              <div key={s.label} className="px-5 py-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold tracking-tight text-white">{s.value}</dd>
                <dd className="mt-0.5 text-xs font-medium text-slate-300">{s.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 flex justify-end gap-2" role="group" aria-label="Banner slides">
            {BANNERS.map((b, i) => (
              <button
                key={b.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show banner ${i + 1}: ${b.alt}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${
                  i === index ? 'w-8 bg-amber-500' : 'w-4 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}