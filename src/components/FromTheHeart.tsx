import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

export default function FromTheHeart() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  const bodyLines = t.fromTheHeart.body.split('\n');

  const stats = [
    { value: t.fromTheHeart.stats.founded },
    { value: t.fromTheHeart.stats.altitude },
    { value: t.fromTheHeart.stats.families },
  ];

  return (
    <section
      id="from-the-heart"
      ref={ref}
      className={`bg-white py-24 px-6 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="font-[Jost] uppercase tracking-[0.4em] text-[#CB9F5B] text-xs mb-6">
          {t.fromTheHeart.eyebrow}
        </p>

        {/* Body */}
        <div className="font-[Tenor_Sans] text-[#2C2D2E]/80 text-lg leading-relaxed">
          {bodyLines.map((line, i) => (
            <span key={i} className="block mb-4">
              {line}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-[#CB9F5B] mx-auto my-12" />

        {/* Stats trio */}
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="font-[Tenor_Sans] text-[#9B1B47] leading-none"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
