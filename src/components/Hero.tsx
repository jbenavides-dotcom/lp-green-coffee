import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-center overflow-hidden bg-[#FDEEF0] py-24 md:py-32"
    >
      {/* Decorative large background text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-[Baskervville] text-[#ED728B]/8 text-[clamp(6rem,20vw,18rem)] leading-none whitespace-nowrap"
        >
          Green Coffee
        </span>
      </div>

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(237,114,139,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-20">
        {/* Eyebrow */}
        <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-8">
          La Palma y El Tucán — Colombia
        </p>

        {/* Hero headline with Great Vibes intercalated */}
        <h1
          className="font-[Baskervville] text-[#2C2D2E] leading-tight mb-8"
          style={{ fontSize: 'clamp(2rem, 7vw, 5rem)' }}
        >
          <span className="block">
            {t.hero.heroLine1}{' '}
            <em
              className="font-script not-italic text-[#ED728B]"
              style={{ fontSize: '1.15em', lineHeight: 1 }}
            >
              {t.hero.heroScript1}
            </em>
          </span>
          <span className="block">
            {t.hero.heroLine2}{' '}
            <em
              className="font-script not-italic text-[#ED728B]"
              style={{ fontSize: '1.15em', lineHeight: 1 }}
            >
              {t.hero.heroScript2}
            </em>
          </span>
          <span className="block">
            {t.hero.heroLine3}
          </span>
        </h1>

        {/* Divider line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-[#ED728B]/40" />
          <div className="w-2 h-2 rounded-full bg-[#ED728B]/40" />
          <div className="w-12 h-px bg-[#ED728B]/40" />
        </div>

        {/* Subtitle */}
        <p className="font-[Jost] text-[#2C2D2E]/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
          {t.hero.subtitle}
        </p>

        {/* CTA — pill shape */}
        <a
          href="#intro"
          className="inline-block px-10 py-4 bg-[#ED728B] text-white font-[Jost] font-medium text-sm tracking-widest uppercase rounded-full hover:bg-[#d96178] transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {t.hero.cta}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-[#ED728B]/30" />
        <div className="w-1 h-1 rounded-full bg-[#ED728B]/40" />
      </div>
    </section>
  );
}
