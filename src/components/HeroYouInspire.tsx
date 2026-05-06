import { useLanguage } from '../i18n/LanguageContext';

export default function HeroYouInspire() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative">
      {/* Background photo */}
      <picture className="absolute inset-0 w-full h-full">
        <source media="(max-width: 768px)" srcSet="/hero-finca-mobile.jpg" />
        <img
          src="/hero-finca.jpg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      {/* Subtle dark overlay for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 md:pt-40 pb-32 md:pb-40 min-h-[60vh] md:min-h-[70vh] justify-center">
        <img
          src="/brand-vip/YOU INSPIRE US white.svg"
          alt={t.youInspire.title}
          className="w-full h-auto object-contain drop-shadow-lg"
          style={{
            maxWidth: 'clamp(300px, 70vw, 880px)',
          }}
        />

        <p
          className="font-[Apercu] text-white text-base md:text-lg leading-relaxed max-w-xl mt-8 md:mt-10 drop-shadow"
          style={{ fontWeight: 300 }}
        >
          {t.youInspire.lead}
        </p>
      </div>

      {/* Pill — anclado al borde inferior del hero, cabalgando sobre la siguiente sección */}
      <span className="absolute z-20 left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 inline-block border-2 border-[#b61667] text-[#b61667] bg-[#FCF7EC] uppercase tracking-[0.3em] font-[Apercu] font-medium text-[11px] md:text-sm rounded-full px-9 py-3 shadow-lg shadow-[#b61667]/20 whitespace-nowrap">
        VIP — VERY INSPIRING PEOPLE
      </span>
    </section>
  );
}
