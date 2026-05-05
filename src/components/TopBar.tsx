import { useLanguage } from '../i18n/LanguageContext';

export default function TopBar() {
  const { t, toggleLang, lang } = useLanguage();

  const items = [
    t.topbar.vip,
    t.topbar.vip2,
    t.topbar.secure,
    t.topbar.collection,
  ];

  return (
    <div className="sticky top-0 z-[60] bg-[#b61667] text-white">
      <div className="relative max-w-7xl mx-auto px-4">
        <nav
          className="topbar-scroll flex items-center justify-center gap-3 md:gap-5 overflow-x-auto whitespace-nowrap py-3 md:py-3.5"
          aria-label="VIP top bar"
        >
          {items.map((label, i) => (
            <span key={i} className="flex items-center gap-3 md:gap-5">
              <span className="font-[Apercu] uppercase tracking-[0.18em] text-[10px] md:text-[11px] text-white/95">
                {label}
              </span>
              {i < items.length - 1 && (
                <span aria-hidden className="text-white/45 text-[10px] md:text-xs">
                  ·
                </span>
              )}
            </span>
          ))}
        </nav>

        {/* Language toggle — pegado a la derecha */}
        <button
          onClick={toggleLang}
          aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
          className="absolute right-4 top-1/2 -translate-y-1/2 px-2.5 py-0.5 border border-white/70 text-white text-[10px] tracking-[0.2em] font-[Apercu] uppercase rounded-full hover:bg-white hover:text-[#b61667] transition-all duration-200"
        >
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
      </div>
    </div>
  );
}
