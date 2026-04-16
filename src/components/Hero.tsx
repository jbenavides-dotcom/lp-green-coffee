// @deprecated — reemplazado en release "From the Heart" 2026-04-16
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FCF7EC 0%, #FCF7EC 60%, #FFFFFF 100%)' }}
    >
      {/* Watermark: "Green Coffee Series" in brand pink at 10% opacity */}
      <h1
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-[Tenor_Sans] text-[#E11D48]/10 text-center leading-[0.88] tracking-[-0.02em] px-4 pointer-events-none select-none"
        style={{ fontSize: 'clamp(3.5rem, 14vw, 13rem)' }}
      >
        {t.hero.watermark}
      </h1>

      {/* Content on top */}
      <div className="relative z-10 text-center px-6">
        {/* Kicker */}
        <p className="font-[Jost] text-[#2D5A3D] uppercase tracking-[0.25em] text-xs md:text-sm mb-6">
          {t.hero.kicker}
        </p>

        {/* Main title: "Meet our new" */}
        <h2
          className="font-[Tenor_Sans] text-[#9B1B47] leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          {t.hero.titlePrefix}{' '}
          <span className="font-script italic font-normal text-[#CB9F5B]">
            {t.hero.titleScript}
          </span>{' '}
          {t.hero.titleSuffix}
        </h2>

        {/* Subtitle */}
        <p
          className="font-[Tenor_Sans] text-[#2C2D2E] mt-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.25rem)' }}
        >
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
