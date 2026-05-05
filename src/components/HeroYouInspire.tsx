import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

export default function HeroYouInspire() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  return (
    <section
      id="top"
      ref={ref}
      className={`bg-[#FCF7EC] px-6 py-24 md:py-32 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <img
          src="/brand-vip/YOU INSPIRE US.svg"
          alt={t.youInspire.title}
          className="w-full h-auto object-contain"
          style={{
            maxWidth: 'clamp(280px, 60vw, 720px)',
          }}
        />

        <p
          className="font-[Apercu] text-[#2C2D2E] text-base md:text-lg leading-relaxed max-w-xl mt-10 md:mt-12"
          style={{ fontWeight: 300 }}
        >
          {t.youInspire.lead}
        </p>
      </div>
    </section>
  );
}
