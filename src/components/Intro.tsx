import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

export default function Intro() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  const statLabels = [
    { label: t.intro.stats.founded, value: '2012' },
    { label: t.intro.stats.altitude },
    { label: t.intro.stats.families },
    { label: t.intro.stats.varieties },
  ];

  return (
    <section
      id="intro"
      ref={ref}
      className={`bg-[#FCF7EC] py-24 md:py-32 px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-[Baskervville] text-[#2C2D2E] text-xl md:text-2xl lg:text-3xl leading-relaxed italic mb-16">
          "{t.intro.body}"
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#2C2D2E]/10 pt-12">
          {statLabels.map((stat, i) => (
            <div key={i} className="text-center">
              {stat.value && (
                <p className="font-[Baskervville] text-[#CB9F5B] text-4xl mb-1">{stat.value}</p>
              )}
              <p className="font-[Jost] text-[#2C2D2E]/60 text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
