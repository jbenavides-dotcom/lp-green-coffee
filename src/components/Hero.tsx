import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#F8F7F5]"
    >
      {/* Watermark: "Green Coffee Series" in very light pink behind */}
      <h1
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-[Tenor_Sans] text-[#F4D5DF] text-center leading-[0.88] tracking-[-0.02em] px-4 pointer-events-none select-none"
        style={{ fontSize: 'clamp(3.5rem, 14vw, 13rem)' }}
      >
        {t.hero.watermark}
      </h1>

      {/* Content on top */}
      <div className="relative z-10 text-center px-6">
        {/* Kicker */}
        <p className="font-[Jost] text-[#9B1B47] uppercase tracking-[0.25em] text-xs md:text-sm mb-6">
          {t.hero.kicker}
        </p>

        {/* Main title: "Meet our new" */}
        <h2
          className="font-[Tenor_Sans] text-[#9B1B47] leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          {t.hero.titlePrefix}{' '}
          <span className="font-script italic font-normal text-[#C75D8A]">
            {t.hero.titleScript}
          </span>{' '}
          {t.hero.titleSuffix}
        </h2>

        {/* Subtitle */}
        <p
          className="font-[Tenor_Sans] text-[#2C2D2E]/80 mt-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.25rem)' }}
        >
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
