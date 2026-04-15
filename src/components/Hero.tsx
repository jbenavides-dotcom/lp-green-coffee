import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-center overflow-hidden min-h-[70vh] md:min-h-[85vh] px-6 py-20"
      style={{ background: 'linear-gradient(135deg, #E891B8 0%, #D4749E 50%, #C75D8A 100%)' }}
    >
      {/* Title */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1
          className="font-[Tenor_Sans] text-[#9B1B47] leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 11rem)' }}
        >
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p
          className="font-[Tenor_Sans] text-white text-lg md:text-2xl lg:text-[clamp(1.25rem,2.5vw,2.25rem)] leading-relaxed text-center max-w-4xl mx-auto mt-8 md:mt-12"
        >
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
