import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

export default function WhatComesNext() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  return (
    <section
      id="what-comes-next"
      ref={ref}
      className={`bg-[#FCF7EC] py-16 px-6 text-center transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Eyebrow */}
        <p className="font-[Jost] uppercase tracking-[0.4em] text-[#CB9F5B] text-xs mb-4">
          {t.whatComesNext.eyebrow}
        </p>

        {/* Heading */}
        <h2
          className="font-[Tenor_Sans] text-[#2C2D2E] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {t.whatComesNext.heading}
        </h2>

        {/* Sub */}
        <p className="font-[Tenor_Sans] italic text-[#2C2D2E]/70">
          {t.whatComesNext.sub}
        </p>
      </div>
    </section>
  );
}
