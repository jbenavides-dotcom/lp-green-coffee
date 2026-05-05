import { useLanguage } from '../i18n/LanguageContext';

export default function TopBar() {
  const { t } = useLanguage();

  const items = [
    t.topbar.vip,
    t.topbar.vip2,
    t.topbar.secure,
    t.topbar.collection,
  ];

  return (
    <div className="sticky top-0 z-[60] bg-[#b61667] text-white">
      <div className="max-w-7xl mx-auto px-4">
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
      </div>
    </div>
  );
}
