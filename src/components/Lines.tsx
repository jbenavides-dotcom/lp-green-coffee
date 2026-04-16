// @deprecated — reemplazado por OurCoffees (2026-04-17)
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';
import CoffeeCard from './CoffeeCard';

const GRADIENTS: Record<string, string> = {
  connect: 'linear-gradient(135deg, #E11D48, #9B1B47)',
  pulse: 'linear-gradient(135deg, #9B1B47, #E11D48)',
  beat: 'linear-gradient(135deg, #E11D48, #CB9F5B)',
};

export default function Lines() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  return (
    <section
      id="lines"
      ref={ref}
      className={`py-16 md:py-20 px-6 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 60%, #FCF7EC 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-[Jost] uppercase tracking-[0.35em] text-[11px] text-[#CB9F5B]">
            {t.whatComesNext.eyebrow}
          </p>
          <h2 className="font-[Tenor_Sans] text-[#2C2D2E] text-2xl md:text-3xl mt-2">
            {t.whatComesNext.heading}
          </h2>
          <p className="font-[Tenor_Sans] italic text-sm text-[#2C2D2E]/70 mt-3 max-w-xl mx-auto">
            {t.whatComesNext.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CoffeeCard
            mini
            imageName="connect"
            name={t.connect.name}
            body={t.connect.body}
            details={t.connect.details}
            tags={t.connect.tags}
            gradient={GRADIENTS.connect}
          />
          <CoffeeCard
            mini
            imageName="pulse"
            name={t.pulse.name}
            body={t.pulse.body}
            details={t.pulse.details}
            tags={t.pulse.tags}
            gradient={GRADIENTS.pulse}
          />
          <CoffeeCard
            mini
            imageName="beat"
            name={t.beat.name}
            body={t.beat.body}
            details={t.beat.details}
            tags={t.beat.tags}
            gradient={GRADIENTS.beat}
          />
        </div>
      </div>
    </section>
  );
}
