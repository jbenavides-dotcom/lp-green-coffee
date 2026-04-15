import { useLanguage } from '../i18n/LanguageContext';
import { img } from '../lib/cloudinary';

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    <footer className="bg-[#2C2D2E] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <img
          src={img('logo', 400)}
          srcSet={`${img('logo', 300)} 300w, ${img('logo', 600)} 600w, ${img('logo', 900)} 900w`}
          sizes="(max-width: 768px) 200px, 250px"
          alt="La Palma y El Tucán"
          width={200}
          height={42}
          className="h-12 w-auto object-contain mx-auto mb-8 opacity-75"
        />

        {/* Tagline */}
        <p className="font-[Tenor_Sans] text-[#FCF7EC]/55 text-lg italic max-w-xl mx-auto mb-10 leading-relaxed">
          &ldquo;{t.footer.tagline}&rdquo;
        </p>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <a
            href="https://www.instagram.com/lapalmayeltucan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#FCF7EC]/35 hover:text-[#E11D48] transition-colors duration-200"
          >
            <IconInstagram />
          </a>
          <a
            href="https://www.facebook.com/lapalmayeltucan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#FCF7EC]/35 hover:text-[#E11D48] transition-colors duration-200"
          >
            <IconFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@lapalmayeltucan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-[#FCF7EC]/35 hover:text-[#E11D48] transition-colors duration-200"
          >
            <IconTikTok />
          </a>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-[#FCF7EC]/10 pt-8">
          <p className="font-[Jost] font-light text-[#FCF7EC]/25 text-xs tracking-widest">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
