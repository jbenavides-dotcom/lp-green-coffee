import { useLanguage } from '../i18n/LanguageContext';
import { img } from '../lib/cloudinary';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={img('banner-main', 1920)}
          alt="La Palma y El Tucán coffee farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2C2D2E]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-6">
          La Palma y El Tucán — Green Coffee
        </p>
        <h1 className="font-[Baskervville] text-[#FCF7EC] text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          {t.hero.title}
        </h1>
        <p className="font-[Jost] text-[#FCF7EC]/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          {t.hero.subtitle}
        </p>
        <a
          href="#intro"
          className="inline-block px-10 py-4 bg-[#ED728B] text-white font-[Jost] font-medium text-sm tracking-widest uppercase hover:bg-[#d96178] transition-colors duration-200"
        >
          {t.hero.cta}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-[#CB9F5B]/50" />
      </div>
    </section>
  );
}
