import { useEffect, useState } from 'react';
import { ShieldCheck, Leaf, Settings, Handshake } from 'lucide-react';

const banner = '/banner1.jpg';
const banner1 = '/banner.jpg';

const BANNERS = [banner, banner1];

const CATEGORIES = ['Corrugated boxes', 'Paper rolls', 'Packaging solutions'];

const FEATURES = [
  { icon: ShieldCheck, title: 'Superior Strength', text: 'Built for safe transit' },
  { icon: Leaf, title: 'Eco Friendly', text: 'Sustainable packaging solutions' },
  { icon: Settings, title: 'Custom Sizes & Solutions', text: 'As per your business needs' },
  { icon: Handshake, title: 'Reliable Supply', text: 'On time, every time' },
];

const SLIDE_MS = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (BANNERS.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % BANNERS.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate flex flex-col overflow-hidden bg-white text-slate-800 pt-28 lg:pt-36"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.52), rgba(15, 23, 42, 0.62)), url('${BANNERS[index]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Banner photos (crossfade) */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        {BANNERS.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 h-full w-full object-cover object-right transition-opacity duration-1000 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Full image banner */}
      <div className="absolute inset-0 bg-slate-950/25" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center lg:text-center">
          <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white/90">
            {CATEGORIES.map((c, i) => (
              <li key={c} className="flex items-center justify-center">
                {i > 0 && <span className="mx-3 h-3 w-px bg-white/60" aria-hidden="true" />}
                {c}
              </li>
            ))}
          </ul>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-md">
            Strong Packaging
            <br />
            for a <span className="text-amber-500">Better Tomorrow</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-100">
            We supply high-quality corrugated boxes and paper rolls for businesses that value
            strength, reliability and sustainable packaging solutions.
          </p>

          {/* <div className="mt-8 flex flex-wrap items-center gap-4"> */}
            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#9c6a32] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#9c6a32]/30 transition-colors hover:bg-[#845729] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9c6a32] focus-visible:ring-offset-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </a> */}
            {/* <a
              href="tel:+919810466405"
              className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-[#9c6a32] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9c6a32]"
            >
              <Phone className="h-4 w-4 text-[#9c6a32]" />
              <span>Call factory sales</span>
            </a> */}
          {/* </div> */}
        </div>
      </div>

      {/* Slide dots */}
      {BANNERS.length > 1 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div className="flex justify-end gap-2" role="group" aria-label="Banner slides">
            {BANNERS.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show banner ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9c6a32] ${
                  i === index ? 'w-8 bg-[#9c6a32]' : 'w-4 bg-slate-400/70 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Feature bar */}
      <div className="border-t border-white/60 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-slate-300/70">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-center gap-4 py-5 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <Icon className="h-9 w-9 flex-shrink-0 text-slate-700" strokeWidth={1.25} />
                <div>
                  <div className="text-sm font-semibold text-slate-800">{title}</div>
                  <div className="text-xs text-slate-500">{text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}