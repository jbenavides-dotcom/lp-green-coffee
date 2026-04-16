import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';
import CoffeeCard from './CoffeeCard';

const GRADIENTS: Record<string, string> = {
  connect: 'linear-gradient(135deg, #E11D48, #9B1B47)',
  pulse: 'linear-gradient(135deg, #9B1B47, #E11D48)',
  beat: 'linear-gradient(135deg, #E11D48, #CB9F5B)',
  laAmistad: 'linear-gradient(135deg, #9B1B47, #CB9F5B)',
  craftLab: 'linear-gradient(135deg, #CB9F5B, #E11D48)',
};

export default function OurCoffees() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  return (
    <section
      id="coffees"
      ref={ref}
      className={`bg-white py-16 md:py-20 px-6 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <p className="font-[Jost] uppercase tracking-[0.35em] text-[11px] text-[#CB9F5B] mb-2">
            {t.ourCoffees.eyebrow}
          </p>
          <h2 className="font-[Tenor_Sans] text-2xl md:text-3xl text-[#2C2D2E]">
            {t.ourCoffees.heading}
          </h2>
          <p className="font-[Tenor_Sans] italic text-base md:text-lg text-[#2C2D2E]/80 mt-4 max-w-xl mx-auto">
            {t.ourCoffees.sub}
          </p>
        </div>

        {/* Estate row */}
        <div className="mb-10">
          <p className="font-[Jost] uppercase tracking-[0.35em] text-sm md:text-base text-[#2D5A3D]/85 mb-6 text-center">
            {t.ourCoffees.estateEyebrow}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CoffeeCard mini imageName="connect" name={t.connect.name} body={t.connect.body}
              details={t.connect.details} tags={t.connect.tags} gradient={GRADIENTS.connect} />
            <CoffeeCard mini imageName="pulse" name={t.pulse.name} body={t.pulse.body}
              details={t.pulse.details} tags={t.pulse.tags} gradient={GRADIENTS.pulse} />
            <CoffeeCard mini imageName="beat" name={t.beat.name} body={t.beat.body}
              details={t.beat.details} tags={t.beat.tags} gradient={GRADIENTS.beat} />
          </div>
        </div>

        {/* Collab row */}
        <div>
          <p className="font-[Jost] uppercase tracking-[0.35em] text-sm md:text-base text-[#9B1B47]/85 mb-6 text-center">
            {t.ourCoffees.collabEyebrow}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <CoffeeCard
              mini
              imageName="la-amistad"
              name={t.laAmistad.name}
              body={t.laAmistad.body}
              details={t.laAmistad.details}
              tags={t.laAmistad.tags}
              gradient={GRADIENTS.laAmistad}
            />
            <CoffeeCard
              mini
              imageName="craft-lab-banner"
              name={t.craftLab.name}
              body={t.craftLab.body}
              details={t.craftLab.details}
              tags={t.craftLab.tags}
              gradient={GRADIENTS.craftLab}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
