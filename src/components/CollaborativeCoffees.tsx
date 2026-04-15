import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { imgCard } from '../lib/cloudinary';
import { useScrollFade } from './useScrollFade';

const LA_AMISTAD_GRADIENT = 'linear-gradient(135deg, #F5E6C8, #E8C98A, #F0D9A0)';

export default function CollaborativeCoffees() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="collaborative"
      ref={ref}
      className={`bg-[#FCF7EC] py-24 md:py-32 px-6 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-3">
            Community
          </p>
          <h2 className="font-[Baskervville] text-[#2C2D2E] text-3xl md:text-5xl">
            {t.collaborativeSection.heading}
          </h2>
          <div className="flex items-center justify-center mt-5 gap-3">
            <div className="w-16 h-px bg-[#ED728B]/30" />
            <div className="w-2 h-2 rounded-full bg-[#ED728B]/40" />
            <div className="w-16 h-px bg-[#ED728B]/30" />
          </div>
        </div>

        {/* La Amistad card — wide layout */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md overflow-hidden card-hover">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={imgCard('la-amistad')}
                alt="La Amistad"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="md:w-3/5 flex flex-col p-8 md:p-10">
              {/* Decorative script name */}
              <h3
                className="font-script text-[#2C2D2E] mb-2 leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                La Amistad
              </h3>

              <div className="flex items-center mb-5">
                <div className="w-10 h-px bg-[#ED728B]/40" />
              </div>

              <p className="font-[Baskervville] text-[#2C2D2E]/70 text-base italic leading-relaxed mb-4">
                {t.laAmistad.body}
              </p>

              {/* Expandable details */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expanded ? 'max-h-60 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'
                }`}
              >
                <p className="font-[Jost] text-[#2C2D2E]/55 text-sm leading-relaxed">
                  {t.laAmistad.details}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {t.laAmistad.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#ED728B]/40 text-[#ED728B] text-xs px-3 py-1 rounded-full tracking-wide font-[Jost]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA gradient footer */}
              <div
                className="rounded-2xl px-6 py-4 flex justify-center"
                style={{ background: LA_AMISTAD_GRADIENT }}
              >
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-1.5 px-6 py-2 border-2 border-white text-white font-[Jost] font-medium text-xs tracking-widest uppercase rounded-full hover:bg-white hover:text-[#2C2D2E] transition-all duration-200"
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
      </div>
    </section>
  );
}
