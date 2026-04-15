import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';
import { img } from '../lib/cloudinary';

const CRAFT_GRADIENT = 'linear-gradient(135deg, #C8E6D4, #A8D5BE, #F4D0D8, #F7C7C7)';

export default function CraftLab() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="craft-lab"
      ref={ref}
      className={`bg-white py-16 md:py-20 px-6 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Card */}
        <div
          className="rounded-3xl shadow-lg card-hover"
          style={{ background: CRAFT_GRADIENT }}
        >
          <div className="px-8 py-10 md:px-16 md:py-14 text-center overflow-hidden rounded-3xl">
            {/* Eyebrow */}
            <p className="text-white/80 text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-4">
              Exclusive
            </p>

            {/* Script name */}
            <h2
              className="font-script text-white leading-none mb-4"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)' }}
            >
              Craft Lab
            </h2>

            {/* Thin separator */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-white/50" />
            </div>

            {/* Craft Lab image with HTML overlay text */}
            <div className="relative mb-6 overflow-hidden rounded-2xl aspect-video">
              <img
                src={img('craft-lab-banner', 1600)}
                alt="Craft Lab"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              {/* Dark gradient overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
              {/* Text overlay */}
              <p
                className="absolute inset-0 flex items-center px-6 md:px-10 font-[Baskervville] text-white text-2xl md:text-4xl lg:text-5xl leading-tight max-w-[80%]"
              >
                {t.craftLab.imageQuote}
              </p>
            </div>

            {/* Body */}
            <p className="font-[Baskervville] text-white text-lg italic leading-relaxed mb-4">
              {t.craftLab.body}
            </p>

            {/* Expandable details */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                expanded ? 'max-h-60 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'
              }`}
            >
              <p className="font-[Jost] text-white/80 text-sm leading-relaxed mt-2">
                {t.craftLab.details}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {t.craftLab.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/60 text-white text-xs px-4 py-1.5 rounded-full tracking-wider font-[Jost]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 px-8 py-3 border-2 border-white text-white font-[Jost] font-medium text-xs tracking-widest uppercase rounded-full hover:bg-white hover:text-[#2C2D2E] transition-all duration-200"
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

        {/* Exclusivity note */}
        <p className="text-center font-[Jost] text-[#2C2D2E]/40 text-xs tracking-widest uppercase mt-8">
          Limited to 50 partners worldwide
        </p>
      </div>
    </section>
  );
}
