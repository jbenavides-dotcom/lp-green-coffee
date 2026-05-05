import { useLanguage } from '../i18n/LanguageContext';

function IconInstagram() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.26 8.26 0 0 0 4.84 1.55V6.86a4.85 4.85 0 0 1-1.07-.17z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      {/* Decorative pink stripe */}
      <div className="h-6 md:h-8 bg-[#ef5aa0]" aria-hidden />

      {/* Burdeos block */}
      <div className="bg-[#b61667] text-white px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-10">
            <img
              src="/brand-vip/FROM THE HEART.svg"
              alt="From the heart"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>

          <p
            className="font-[Apercu] italic text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontWeight: 300 }}
          >
            {t.footerVip.quote}
          </p>

          <div className="w-16 h-px bg-white/40 mx-auto my-10" aria-hidden />

          <p
            className="font-[Apercu] italic text-white/85 text-sm"
            style={{ fontWeight: 300 }}
          >
            {t.footerVip.signLine1}
          </p>
          <p
            className="font-[Apercu] text-white text-sm md:text-base mt-2"
            style={{ fontWeight: 300 }}
          >
            {t.footerVip.signLine2}
          </p>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://www.instagram.com/lapalmayeltucan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/55 hover:text-white transition-colors duration-200"
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.facebook.com/lapalmayeltucan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/55 hover:text-white transition-colors duration-200"
            >
              <IconFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@lapalmayeltucan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white/55 hover:text-white transition-colors duration-200"
            >
              <IconTikTok />
            </a>
          </div>

          <p
            className="font-[Apercu] uppercase tracking-[0.25em] text-[10px] text-white/45 mt-10"
            style={{ fontWeight: 300 }}
          >
            {t.footer.copyright}
          </p>
        </div>
      </div>

      {/* Bottom black strip */}
      <div className="h-1 bg-black" aria-hidden />
    </footer>
  );
}
