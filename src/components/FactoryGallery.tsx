import type { CSSProperties } from 'react';

interface FactoryGalleryProps {
  images: string[];
  /** Seconds each image spends crossing the screen. Higher = slower. */
  secondsPerImage?: number;
}

export default function FactoryGallery({ images, secondsPerImage = 6 }: FactoryGalleryProps) {
  const duration = Math.max(images.length * secondsPerImage, 20);

  return (
    <section id="factory-gallery" className="bg-slate-50 py-20 lg:py-24 border-b border-slate-200">
      {/* Self-contained marquee styles: pauses on hover, scrolls manually if motion is reduced */}
      <style>{`
        .factory-marquee {
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .factory-marquee-track {
          animation: factory-scroll var(--factory-duration) linear infinite;
        }
        .factory-marquee:hover .factory-marquee-track,
        .factory-marquee:focus-within .factory-marquee-track {
          animation-play-state: paused;
        }
        @keyframes factory-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .factory-marquee { overflow-x: auto; -webkit-mask-image: none; mask-image: none; }
          .factory-marquee-track { animation: none; }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
            <span className="h-px w-8 bg-amber-500/60" aria-hidden="true" />
            Factory Gallery
            <span className="h-px w-8 bg-amber-500/60" aria-hidden="true" />
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Inside our production floor
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Modern machinery, organised workflows and careful quality checks, from raw kraft paper to
            finished cartons.
          </p>
        </div>
      </div>

      {/* Full-bleed marquee with faded edges */}
      <div className="factory-marquee overflow-hidden" role="region" aria-label="Factory photo gallery">
        <div
          className="factory-marquee-track flex w-max"
          style={{ '--factory-duration': `${duration}s` } as CSSProperties}
        >
          {[0, 1].map((copy) =>
            images.map((image, i) => (
              <figure
                key={`${copy}-${image}-${i}`}
                aria-hidden={copy === 1}
                className="group mr-5 sm:mr-6 h-64 w-80 sm:h-72 sm:w-[26rem] lg:h-80 lg:w-[30rem] shrink-0 overflow-hidden rounded-2xl bg-slate-200 shadow-md shadow-slate-900/10 ring-1 ring-slate-900/5"
              >
                <img
                  src={image}
                  alt={copy === 0 ? `Print Gallery production floor, photo ${i + 1}` : ''}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            ))
          )}
        </div>
      </div>
    </section>
  );
}