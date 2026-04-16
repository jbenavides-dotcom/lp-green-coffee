// @deprecated — absorbido en NarrativeAndLines / CommunityAndLab (2026-04-17)
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

export default function CraftLab() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="craft-lab"
      ref={ref}
      className={`py-20 md:py-28 bg-[#FCF7EC] px-6 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-[Jost] uppercase tracking-[0.25em] text-xs text-[#9B1B47] mb-4">
            Exclusive
          </p>
          <h2
            className="font-script text-[#2C2D2E] leading-none"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Craft Lab
          </h2>
          <div className="w-16 h-px bg-[#CB9F5B] mx-auto mt-6" />
        </div>

        {/* Stacked layout: image on top, text below centered */}
        <div className="flex flex-col gap-12 items-center">
          {/* Image — clean, no overlay, no text on top */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[16/9] w-full bg-[#F1ECDF]">
            <img
              src="https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto,w_1800,c_fill,g_center,ar_16:9/lp-green-coffee/craft-lab-banner"
              alt="Craft Lab"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text — centered below image */}
          <div className="space-y-6 max-w-3xl text-center">
            <h3 className="font-[Tenor_Sans] text-[#2C2D2E] text-3xl md:text-4xl lg:text-5xl leading-tight">
              {t.craftLab.imageQuote}
            </h3>

            <p className="font-[Tenor_Sans] text-[#2C2D2E]/70 text-lg italic leading-relaxed">
              {t.craftLab.body}
            </p>

            {/* Expandable details */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                expanded ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="font-[Jost] text-[#2C2D2E]/55 text-sm leading-relaxed">
                {t.craftLab.details}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2 justify-center">
              {t.craftLab.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-[#E11D48]/10 text-[#9B1B47] text-xs font-[Jost] uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Learn More button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 px-8 py-3 border-2 border-[#E11D48] text-[#E11D48] font-[Jost] font-medium text-xs tracking-widest uppercase rounded-full hover:bg-[#E11D48] hover:text-white transition-all duration-200"
            >
              {expanded ? t.readLess : t.readMore}
              <span className={`transition-transform duration-300 text-sm ${expanded ? 'rotate-180' : ''}`}>
                ↓
              </span>
            </button>
          </div>
        </div>

        {/* Exclusivity note */}
        <p className="text-center font-[Jost] text-[#2C2D2E]/40 text-xs tracking-widest uppercase mt-12">
          Limited to 50 partners worldwide
        </p>
      </div>
    </section>
  );
}
