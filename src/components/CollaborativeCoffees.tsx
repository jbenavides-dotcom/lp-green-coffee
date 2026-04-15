import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

export default function CollaborativeCoffees() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="collaborative"
      ref={ref}
      className={`bg-[#FFFFFF] py-16 md:py-24 px-6 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-3">
            Community
          </p>
          <h2 className="font-[Tenor_Sans] text-[#2C2D2E] text-3xl md:text-5xl">
            {t.collaborativeSection.heading}
          </h2>
          <div className="flex items-center justify-center mt-5 gap-3">
            <div className="w-16 h-px bg-[#E11D48]/30" />
            <div className="w-2 h-2 rounded-full bg-[#E11D48]/40" />
            <div className="w-16 h-px bg-[#E11D48]/30" />
          </div>
        </div>

        {/* Stacked layout: image on top full-width, text centered below */}
        <div className="flex flex-col gap-12 items-center">
          {/* Image — clean, no text overlay (image itself already has "La Amistad" script) */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[16/9] w-full bg-[#F1ECDF]">
            <img
              src="https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto,w_1800,c_fill,g_center,ar_16:9/lp-green-coffee/la-amistad"
              alt="La Amistad"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text — centered below image */}
          <div className="space-y-6 max-w-3xl text-center">
            <p className="font-[Tenor_Sans] text-[#2C2D2E]/75 text-lg italic leading-relaxed">
              {t.laAmistad.body}
            </p>

            {/* Expandable details */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                expanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="font-[Jost] text-[#2C2D2E]/60 text-sm leading-relaxed">
                {t.laAmistad.details}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2 justify-center">
              {t.laAmistad.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#E11D48]/40 text-[#E11D48] text-xs px-3 py-1 rounded-full tracking-wide font-[Jost]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1.5 px-6 py-2 border-2 border-[#9B1B47] text-[#9B1B47] font-[Jost] font-medium text-xs tracking-widest uppercase rounded-full hover:bg-[#9B1B47] hover:text-white transition-all duration-200"
              >
                {expanded ? t.readLess : t.readMore}
                <span
                  className={`transition-transform duration-300 text-sm ${expanded ? 'rotate-180' : ''}`}
                >
                  ↓
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
