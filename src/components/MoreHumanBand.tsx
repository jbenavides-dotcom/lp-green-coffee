import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

export default function MoreHumanBand() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  return (
    <section ref={ref} aria-label="More human than ever">
      <div
        className={`bg-[#b61667] text-white px-6 py-16 md:py-20 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="font-[PP_Hatton] leading-[1.15]"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
          >
            {t.moreHuman.l1}
          </p>
          <p
            className="font-[PP_Hatton] leading-[1.15] mt-2"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
          >
            {t.moreHuman.l2}
          </p>
          <p
            className="font-[PP_Hatton] italic leading-[1.15] mt-3"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
          >
            {t.moreHuman.l3}
          </p>

          <p
            className="font-[Apercu] text-white/85 text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-8"
            style={{ fontWeight: 300 }}
          >
            {t.moreHuman.sub}
          </p>
        </div>
      </div>
      {/* decorative pink stripe */}
      <div className="h-6 md:h-8 bg-[#ef5aa0]" aria-hidden />
    </section>
  );
}
