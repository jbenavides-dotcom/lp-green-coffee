import { useLanguage } from '../i18n/LanguageContext';
import { img } from '../lib/cloudinary';

export default function Header() {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#2C2D2E]/80 backdrop-blur-md">
      <a href="#hero" className="flex items-center gap-3">
        <img
          src={img('logo', 160)}
          alt="La Palma y El Tucán"
          className="h-10 w-auto object-contain"
        />
      </a>
      <button
        onClick={toggleLang}
        aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
        className="px-4 py-1.5 border border-[#CB9F5B] text-[#CB9F5B] text-sm tracking-widest font-[Jost] font-medium hover:bg-[#CB9F5B] hover:text-[#2C2D2E] transition-colors duration-200"
      >
        {t.nav.toggle}
      </button>
    </header>
  );
}
