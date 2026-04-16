// @deprecated — absorbido en Hero2Col + Lines 2026-04-17
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';
import CoffeeCard from './CoffeeCard';

const GRADIENTS: Record<string, string> = {
  connect: 'linear-gradient(135deg, #E11D48, #9B1B47)',
  pulse: 'linear-gradient(135deg, #9B1B47, #E11D48)',
  beat: 'linear-gradient(135deg, #E11D48, #CB9F5B)',
};

export default function NarrativeAndLines() {
  const { t, lang } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();
  const bodyLines = t.fromTheHeart.body.split('\n');

  return (
    <section
      id="narrative-lines"
      ref={ref}
      className={`bg-white py-20 md:py-28 px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        {/* LEFT — sticky narrative */}
        <div className="md:col-span-5 md:sticky md:top-28 space-y-8">
          <p className="font-[Jost] uppercase tracking-[0.4em] text-[#CB9F5B] text-xs">
            {t.fromTheHeart.eyebrow}
          </p>
          <div
            lang={lang}
            className="space-y-4 font-[Tenor_Sans] text-[#2C2D2E] text-base md:text-lg leading-relaxed italic text-justify hyphens-auto"
            style={{ textJustify: 'inter-word' }}
          >
            {bodyLines.map((line, i) => (
              <p key={i} className="text-justify">{line}</p>
            ))}
          </div>
          <div className="w-16 h-px bg-[#CB9F5B]" />
          {/* Stats trio inline */}
          <div className="flex gap-8 items-baseline">
            <div>
              <p className="font-[Tenor_Sans] text-[#9B1B47] text-2xl md:text-3xl leading-none">
                {t.fromTheHeart.stats.founded}
              </p>
              <p className="font-[Jost] text-[10px] tracking-[0.2em] uppercase text-[#2C2D2E]/55 mt-2">
                Founded
              </p>
            </div>
            <div>
              <p className="font-[Tenor_Sans] text-[#9B1B47] text-2xl md:text-3xl leading-none">
                {t.fromTheHeart.stats.altitude}
              </p>
            </div>
            <div>
              <p className="font-[Tenor_Sans] text-[#9B1B47] text-2xl md:text-3xl leading-none">
                {t.fromTheHeart.stats.families}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — coffee lines */}
        <div className="md:col-span-7">
          <p className="font-[Jost] uppercase tracking-[0.4em] text-[#CB9F5B] text-[11px] mb-2">
            {t.whatComesNext.eyebrow}
          </p>
          <h2 className="font-[Tenor_Sans] text-[#2C2D2E] text-xl md:text-2xl mb-2">
            {t.whatComesNext.heading}
          </h2>
          <p className="font-[Tenor_Sans] italic text-[#2C2D2E]/70 text-sm mb-6">
            {t.whatComesNext.sub}
          </p>

          {/* 2+1 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <CoffeeCard
              compact
              imageName="connect"
              name={t.connect.name}
              body={t.connect.body}
              details={t.connect.details}
              tags={t.connect.tags}
              gradient={GRADIENTS.connect}
            />
            <CoffeeCard
              compact
              imageName="pulse"
              name={t.pulse.name}
              body={t.pulse.body}
              details={t.pulse.details}
              tags={t.pulse.tags}
              gradient={GRADIENTS.pulse}
            />
            <div className="md:col-span-2 flex justify-center">
              <div className="w-full md:max-w-[48%]">
                <CoffeeCard
                  compact
                  imageName="beat"
                  name={t.beat.name}
                  body={t.beat.body}
                  details={t.beat.details}
                  tags={t.beat.tags}
                  gradient={GRADIENTS.beat}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
