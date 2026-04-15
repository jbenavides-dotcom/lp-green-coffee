import { useLanguage } from '../i18n/LanguageContext';
import CoffeeCard from './CoffeeCard';

export default function EstateCoffees() {
  const { t } = useLanguage();

  const coffees = [
    { imageName: 'connect', ...t.connect, reversed: false },
    { imageName: 'pulse', ...t.pulse, reversed: true },
    { imageName: 'beat', ...t.beat, reversed: false },
  ];

  return (
    <section id="estate" className="bg-[#2C2D2E]">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-4">
        <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-3 text-center">
          Our Lines
        </p>
        <h2 className="font-[Baskervville] text-[#FCF7EC] text-3xl md:text-5xl text-center mb-16">
          {t.estateSection.heading}
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        {coffees.map((coffee) => (
          <div key={coffee.name} className="mb-1">
            <CoffeeCard
              imageName={coffee.imageName}
              name={coffee.name}
              body={coffee.body}
              details={coffee.details}
              tags={coffee.tags}
              reversed={coffee.reversed}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
