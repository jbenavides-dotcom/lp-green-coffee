import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { img } from '../lib/cloudinary';
import { useScrollFade } from './useScrollFade';

export default function CollaborativeCoffees() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="collaborative"
      ref={ref}
      className={`bg-[#FCF7EC] py-24 md:py-32 px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-3 text-center">
          Community
        </p>
        <h2 className="font-[Baskervville] text-[#2C2D2E] text-3xl md:text-5xl text-center mb-16">
          {t.collaborativeSection.heading}
        </h2>

        {/* La Amistad card */}
        <div className="flex flex-col md:flex-row gap-0 max-w-5xl mx-auto shadow-lg overflow-hidden">
          {/* Image */}
          <div className="md:w-2/5 aspect-square overflow-hidden bg-[#2C2D2E]">
            <img
              src={img('la-amistad', 600)}
              alt="La Amistad"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Content */}
          <div className="md:w-3/5 bg-[#2C2D2E] flex flex-col justify-center px-10 py-12 md:px-16">
            <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-4">
              Collaborative
            </p>
            <h3 className="font-[Baskervville] text-[#FCF7EC] text-4xl md:text-5xl mb-6">
              {t.laAmistad.name}
            </h3>
            <p className="font-[Jost] text-[#FCF7EC]/70 text-base leading-relaxed mb-4">
              {t.laAmistad.body}
            </p>

            {/* Expandable details */}
            <div
              className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}`}
            >
              <p className="font-[Jost] text-[#FCF7EC]/60 text-sm leading-relaxed">{t.laAmistad.details}</p>
            </div>

            {/* Learn More / Show Less button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-[#CB9F5B] text-sm font-[Jost] font-medium tracking-wide mb-8 hover:text-[#e0b96e] transition-colors duration-200 w-fit"
            >
              {expanded ? t.readLess : t.readMore}
              <span className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
                ↓
              </span>
            </button>

            <div className="flex flex-wrap gap-2">
              {t.laAmistad.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#CB9F5B]/40 text-[#CB9F5B] text-xs px-3 py-1 tracking-wide font-[Jost]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
