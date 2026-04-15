import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { img } from '../lib/cloudinary';

export default function Header() {
  const { lang, t, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#intro', label: lang === 'en' ? 'About' : 'Nosotros' },
    { href: '#estate', label: lang === 'en' ? 'Our Lines' : 'Nuestras Líneas' },
    { href: '#collaborative', label: lang === 'en' ? 'Collaborative' : 'Colaborativo' },
    { href: '#craft-lab', label: 'Craft Lab' },
    { href: '#contact', label: lang === 'en' ? 'Contact' : 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E0D0]'
          : 'bg-[#FFFFFF]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 md:py-6 flex items-center justify-between">
        {/* Nav links — left (desktop) */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[Jost] text-[#2C2D2E]/70 text-sm tracking-wide hover:text-[#E11D48] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Logo — centered */}
        <a href="#hero" className="flex items-center mx-auto md:mx-0 md:absolute md:left-1/2 md:-translate-x-1/2">
          <img
            src={img('logo', 400)}
            srcSet={`${img('logo', 300)} 300w, ${img('logo', 600)} 600w, ${img('logo', 900)} 900w`}
            sizes="(max-width: 768px) 200px, 250px"
            alt="La Palma y El Tucán"
            width={200}
            height={42}
            className="h-14 md:h-16 w-auto object-contain"
          />
        </a>

        {/* Nav links — right (desktop) + lang toggle */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.slice(2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[Jost] text-[#2C2D2E]/70 text-sm tracking-wide hover:text-[#E11D48] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
            className="px-3 py-1 border border-[#E11D48] text-[#E11D48] text-xs tracking-widest font-[Jost] font-medium rounded-full hover:bg-[#E11D48] hover:text-white transition-all duration-200"
          >
            {t.nav.toggle}
          </button>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-3 py-1 border border-[#E11D48] text-[#E11D48] text-xs tracking-widest font-[Jost] font-medium rounded-full hover:bg-[#E11D48] hover:text-white transition-all duration-200"
          >
            {t.nav.toggle}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-1"
          >
            <span className={`block w-5 h-px bg-[#2C2D2E] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-[#2C2D2E] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-[#2C2D2E] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[#E5E0D0] ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[Jost] text-[#2C2D2E]/70 text-sm tracking-wide hover:text-[#E11D48] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
