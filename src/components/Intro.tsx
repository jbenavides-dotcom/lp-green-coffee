import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

export default function Intro() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  const stats = [
    { value: '2012', label: t.intro.stats.founded },
    { value: '1,700m', label: t.intro.stats.altitude },
    { value: '200+', label: t.intro.stats.families },
    { value: '8', label: t.intro.stats.varieties },
  ];

  return (
    <section
      id="intro"
      ref={ref}
      className={`bg-white py-24 md:py-32 px-6 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-6">
          Our Story
        </p>

        {/* Pull quote */}
        <p className="font-[Baskervville] text-[#2C2D2E] text-xl md:text-2xl lg:text-3xl leading-relaxed italic mb-16">
          &ldquo;{t.intro.body}&rdquo;
        </p>

        {/* Divider with pink line */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex-1 h-px bg-[#ED728B]/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#ED728B]/40" />
          <div className="flex-1 h-px bg-[#ED728B]/20" />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center py-6 px-4 ${
                i < stats.length - 1
                  ? 'border-r border-[#E5E0D0] md:border-r border-b md:border-b-0 border-[#E5E0D0]'
                  : ''
              }`}
            >
              <p className="font-[Baskervville] text-[#ED728B] text-3xl md:text-4xl mb-2">
                {stat.value}
              </p>
              <p className="font-[Jost] text-[#2C2D2E]/50 text-xs tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
