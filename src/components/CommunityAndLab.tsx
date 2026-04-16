// @deprecated — reemplazado por OurCoffees (2026-04-17)
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';
import { imgPad, imgCrop } from '../lib/cloudinary';

export default function CommunityAndLab() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();
  const [amistadExpanded, setAmistadExpanded] = useState(false);
  const [labExpanded, setLabExpanded] = useState(false);

  return (
    <section
      id="community-lab"
      ref={ref}
      className={`bg-[#FCF7EC] py-14 md:py-18 px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
        {/* LA AMISTAD */}
        <article className="h-full flex flex-col space-y-3">
          <p className="font-[Jost] uppercase tracking-[0.35em] text-[#CB9F5B] text-[10px] mb-2">
            Community
          </p>
          <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-[#F1ECDF]">
            <img
              src={imgPad('la-amistad', 900, '16:10', 'FCF7EC')}
              alt="La Amistad"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="font-[Tenor_Sans] text-[#2C2D2E] text-xl md:text-2xl">
            La Amistad
          </h3>
          <div className="flex-1">
            <p className="font-[Tenor_Sans] italic text-[#2C2D2E]/75 text-sm leading-relaxed line-clamp-4">
              {t.laAmistad.body}
            </p>
            <div className={`overflow-hidden transition-all duration-500 ${amistadExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <p className="font-[Jost] text-[#2C2D2E]/60 text-sm leading-relaxed">
                {t.laAmistad.details}
              </p>
            </div>
          </div>
          <div className="space-y-2 mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {t.laAmistad.tags.map((tag) => (
                <span key={tag} className="border border-[#E11D48]/40 text-[#E11D48] text-[10px] tracking-[0.15em] px-2.5 py-1 rounded-full font-[Jost]">
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => setAmistadExpanded(!amistadExpanded)}
              className="font-[Jost] text-xs tracking-[0.2em] uppercase text-[#9B1B47] hover:text-[#E11D48] transition-colors duration-200"
            >
              {amistadExpanded ? t.readLess : t.readMore} →
            </button>
          </div>
        </article>

        {/* CRAFT LAB */}
        <article className="h-full flex flex-col space-y-3">
          <p className="font-[Jost] uppercase tracking-[0.35em] text-[#CB9F5B] text-[10px] mb-2">
            Exclusive
          </p>
          <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-[#F1ECDF]">
            <img
              src={imgCrop('craft-lab-banner', 900, '16:10')}
              alt="Craft Lab"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-[Tenor_Sans] text-[#2C2D2E] text-xl md:text-2xl">
            Craft Lab
            <span className="block font-script text-[#9B1B47] text-sm font-normal mt-1">
              {t.craftLab.imageQuote}
            </span>
          </h3>
          <div className="flex-1">
            <p className="font-[Tenor_Sans] italic text-[#2C2D2E]/75 text-sm leading-relaxed line-clamp-4">
              {t.craftLab.body}
            </p>
            <div className={`overflow-hidden transition-all duration-500 ${labExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <p className="font-[Jost] text-[#2C2D2E]/60 text-sm leading-relaxed">
                {t.craftLab.details}
              </p>
            </div>
          </div>
          <div className="space-y-2 mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {t.craftLab.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full bg-[#E11D48]/10 text-[#9B1B47] text-[10px] tracking-[0.15em] font-[Jost] uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => setLabExpanded(!labExpanded)}
              className="font-[Jost] text-xs tracking-[0.2em] uppercase text-[#9B1B47] hover:text-[#E11D48] transition-colors duration-200"
            >
              {labExpanded ? t.readLess : t.readMore} →
            </button>
            <p className="font-[Jost] text-[10px] tracking-[0.2em] uppercase text-[#2C2D2E]/50 pt-1">
              Limited to 50 partners worldwide
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
