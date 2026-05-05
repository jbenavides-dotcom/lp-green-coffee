import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

export default function HeartOfJourney() {
  const { t, lang } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  return (
    <section
      id="heart"
      ref={ref}
      className={`bg-white px-6 py-20 md:py-28 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Pill */}
        <span className="inline-block border border-[#b61667] text-[#b61667] uppercase tracking-[0.2em] font-[Apercu] text-[10px] md:text-xs rounded-full px-6 py-1.5 mb-8">
          {t.heartJourney.pill}
        </span>

        {/* Eyebrow */}
        <p className="font-[Apercu] uppercase tracking-[0.2em] text-[11px] md:text-xs text-[#b61667] mb-8">
          {t.heartJourney.eyebrow}
        </p>

        {/* H1 */}
        <h1
          className="font-[PP_Hatton] text-[#2C2D2E] leading-[1.05] tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          {t.heartJourney.titleA}{' '}
          <span className="italic text-[#b61667]">{t.heartJourney.titleB}</span>
        </h1>

        {/* Body paragraphs */}
        <div
          lang={lang}
          className="mt-10 md:mt-12 font-[Apercu] text-[#2C2D2E]/85 text-base md:text-lg leading-relaxed max-w-2xl space-y-6"
          style={{ fontWeight: 300 }}
        >
          <p>{t.heartJourney.p1}</p>
          <p>{t.heartJourney.p2}</p>
          <p className="italic">{t.heartJourney.p3}</p>
          <p>{t.heartJourney.p4}</p>

          <div className="w-16 h-px bg-[#CB9F5B] mx-auto my-8" aria-hidden />

          <p>{t.heartJourney.p5}</p>
          <p>{t.heartJourney.p6}</p>
          <p className="font-[PP_Hatton] italic text-[#b61667] text-lg md:text-xl">
            {t.heartJourney.p7}
          </p>
        </div>
      </div>
    </section>
  );
}
