import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';
import { img } from '../lib/cloudinary';

export default function CommunityAndLab() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();
  const [amistadExpanded, setAmistadExpanded] = useState(false);
  const [labExpanded, setLabExpanded] = useState(false);

  const craftLabImage = 'https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto,w_900,c_fill,g_center,ar_4:5/lp-green-coffee/craft-lab-banner';

  return (
    <section
      id="community-lab"
      ref={ref}
      className={`bg-[#FCF7EC] py-20 md:py-28 px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start">
        {/* LA AMISTAD */}
        <article className="space-y-5">
          <p className="font-[Jost] uppercase tracking-[0.4em] text-[#CB9F5B] text-xs">
            Community
          </p>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#F1ECDF]">
            <img
              src={img('la-amistad', 900)}
              alt="La Amistad"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-[Tenor_Sans] text-[#2C2D2E] text-2xl md:text-3xl">
            La Amistad
          </h3>
          <p className="font-[Tenor_Sans] italic text-[#2C2D2E]/75 leading-relaxed">
            {t.laAmistad.body}
          </p>
          <div className={`overflow-hidden transition-all duration-500 ${amistadExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="font-[Jost] text-[#2C2D2E]/60 text-sm leading-relaxed">
              {t.laAmistad.details}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {t.laAmistad.tags.map((tag) => (
              <span key={tag} className="border border-[#E11D48]/40 text-[#E11D48] text-xs px-3 py-1 rounded-full tracking-wide font-[Jost]">
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => setAmistadExpanded(!amistadExpanded)}
            className="inline-flex items-center gap-1.5 px-6 py-2 border-2 border-[#9B1B47] text-[#9B1B47] font-[Jost] font-medium text-xs tracking-widest uppercase rounded-full hover:bg-[#9B1B47] hover:text-white transition-all duration-200"
          >
            {amistadExpanded ? t.readLess : t.readMore}
            <span className={`transition-transform duration-300 text-sm ${amistadExpanded ? 'rotate-180' : ''}`}>↓</span>
          </button>
        </article>

        {/* CRAFT LAB */}
        <article className="space-y-5">
          <p className="font-[Jost] uppercase tracking-[0.4em] text-[#CB9F5B] text-xs">
            Exclusive
          </p>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#F1ECDF]">
            <img
              src={craftLabImage}
              alt="Craft Lab"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-[Tenor_Sans] text-[#2C2D2E] text-2xl md:text-3xl">
            Craft Lab
          </h3>
          <p className="font-script text-[#9B1B47] text-xl leading-tight">
            {t.craftLab.imageQuote}
          </p>
          <p className="font-[Tenor_Sans] italic text-[#2C2D2E]/75 leading-relaxed">
            {t.craftLab.body}
          </p>
          <div className={`overflow-hidden transition-all duration-500 ${labExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="font-[Jost] text-[#2C2D2E]/60 text-sm leading-relaxed">
              {t.craftLab.details}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {t.craftLab.tags.map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-[#E11D48]/10 text-[#9B1B47] text-xs font-[Jost] uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => setLabExpanded(!labExpanded)}
            className="inline-flex items-center gap-1.5 px-6 py-2 border-2 border-[#E11D48] text-[#E11D48] font-[Jost] font-medium text-xs tracking-widest uppercase rounded-full hover:bg-[#E11D48] hover:text-white transition-all duration-200"
          >
            {labExpanded ? t.readLess : t.readMore}
            <span className={`transition-transform duration-300 text-sm ${labExpanded ? 'rotate-180' : ''}`}>↓</span>
          </button>
          <p className="font-[Jost] text-[11px] tracking-[0.2em] uppercase text-[#2C2D2E]/50 pt-2">
            Limited to 50 partners worldwide
          </p>
        </article>
      </div>
    </section>
  );
}
