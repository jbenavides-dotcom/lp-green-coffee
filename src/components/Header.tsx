import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
  const { t, toggleLang, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-[44px] z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E0D0]'
          : 'bg-white/85 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex items-center justify-between">
        {/* spacer */}
        <div className="w-[68px] md:w-[80px]" />

        {/* Logo centered */}
        <a href="#top" className="flex items-center mx-auto" aria-label="La Palma y El Tucán">
          <img
            src="/brand-vip/LA PALMA LOGO.svg"
            alt="La Palma y El Tucán"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>

        {/* Lang toggle */}
        <button
          onClick={toggleLang}
          aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
          className="px-3 py-1 border border-[#b61667] text-[#b61667] text-[10px] md:text-xs tracking-[0.2em] font-[Apercu] uppercase rounded-full hover:bg-[#b61667] hover:text-white transition-all duration-200"
        >
          {t.nav.toggle}
        </button>
      </div>
    </header>
  );
}
