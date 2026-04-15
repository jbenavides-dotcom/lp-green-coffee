import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { imgDark } from '../lib/cloudinary';
import { useScrollFade } from './useScrollFade';

export default function CraftLab() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="craft-lab"
      ref={ref}
      className={`relative overflow-hidden bg-[#2C2D2E] transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={imgDark('craft-lab-banner', 1920)}
          alt="Craft Lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2C2D2E]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-32 md:py-40">
        <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-4">
          Exclusive
        </p>
        <h2 className="font-[Baskervville] text-[#FCF7EC] text-4xl md:text-6xl mb-8">
          {t.craftLab.heading}
        </h2>
        <p className="font-[Jost] text-[#FCF7EC]/75 text-lg leading-relaxed mb-4">
          {t.craftLab.body}
        </p>

        {/* Expandable details */}
        <div
          className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}
        >
          <p className="font-[Jost] text-[#FCF7EC]/60 text-base leading-relaxed">{t.craftLab.details}</p>
        </div>

        {/* Learn More / Show Less button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-[#CB9F5B] text-sm font-[Jost] font-medium tracking-wide hover:text-[#e0b96e] transition-colors duration-200"
          >
            {expanded ? t.readLess : t.readMore}
            <span className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
              ↓
            </span>
          </button>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {t.craftLab.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#CB9F5B]/50 text-[#CB9F5B] text-xs px-4 py-1.5 tracking-wider font-[Jost]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
