import { useLanguage } from '../i18n/LanguageContext';

export default function TopBar() {
  const { t, toggleLang, lang } = useLanguage();

  const items = [
    t.topbar.vip,
    t.topbar.vip2,
    t.topbar.secure,
    t.topbar.collection,
  ];

  // Set duplicado para loop sin huecos
  const renderItems = (keyPrefix: string) =>
    items.map((label, i) => (
      <span key={`${keyPrefix}-${i}`} className="flex items-center mx-3 md:mx-5">
        <span className="font-[Apercu] uppercase tracking-[0.18em] text-[10px] md:text-[11px] text-white/95">
          {label}
        </span>
        <span aria-hidden className="text-white/45 text-[10px] md:text-xs ml-3 md:ml-5">·</span>
      </span>
    ));

  return (
    <div className="sticky top-0 z-[60] bg-[#b61667] text-white">
      <div className="relative max-w-7xl mx-auto">
        {/* Marquee container — overflow oculto recorta los items que pasan los bordes */}
        <div
          className="topbar-marquee-mask relative overflow-hidden py-3 md:py-3.5 pr-14 pl-4"
          aria-label="VIP top bar"
        >
          <div className="topbar-marquee flex items-center whitespace-nowrap">
            {renderItems('a')}
            {renderItems('b')}
          </div>
        </div>

        {/* Botón ES/EN sobre el marquee — fondo sólido + z alto para taparlo */}
        <button
          onClick={toggleLang}
          aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
          className="absolute right-3 top-1/2 -translate-y-1/2 px-2.5 py-0.5 border border-white/70 text-white text-[10px] tracking-[0.2em] font-[Apercu] uppercase rounded-full bg-[#b61667] z-20 hover:bg-white hover:text-[#b61667] transition-all duration-200"
        >
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
      </div>
    </div>
  );
}
