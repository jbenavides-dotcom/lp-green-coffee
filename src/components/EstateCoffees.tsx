import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';
import CoffeeCard from './CoffeeCard';

const GRADIENTS: Record<string, string> = {
  connect: 'linear-gradient(135deg, #E11D48, #9B1B47)',
  pulse: 'linear-gradient(135deg, #9B1B47, #E11D48)',
  beat: 'linear-gradient(135deg, #E11D48, #CB9F5B)',
};

export default function EstateCoffees() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  const coffees = [
    { imageName: 'connect', ...t.connect },
    { imageName: 'pulse', ...t.pulse },
    { imageName: 'beat', ...t.beat },
  ];

  return (
    <section
      id="estate"
      ref={ref}
      className={`bg-[#FFFFFF] py-16 md:py-20 px-6 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-3">
            {t.estateSection.sectionOurLines}
          </p>
          <h2 className="font-[Tenor_Sans] text-[#2C2D2E] text-3xl md:text-5xl">
            {t.estateSection.heading}
          </h2>
          {/* Decorative underline */}
          <div className="flex items-center justify-center mt-5 gap-3">
            <div className="w-16 h-px bg-[#E11D48]/30" />
            <div className="w-2 h-2 rounded-full bg-[#E11D48]/40" />
            <div className="w-16 h-px bg-[#E11D48]/30" />
          </div>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.imageName}
              imageName={coffee.imageName}
              name={coffee.name}
              body={coffee.body}
              details={coffee.details}
              tags={coffee.tags}
              gradient={GRADIENTS[coffee.imageName] ?? GRADIENTS.connect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
