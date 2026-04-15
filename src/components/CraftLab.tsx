import { useLanguage } from '../i18n/LanguageContext';
import { img } from '../lib/cloudinary';
import { useScrollFade } from './useScrollFade';

export default function CraftLab() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  return (
    <section
      id="craft-lab"
      ref={ref}
      className={`relative overflow-hidden bg-[#2C2D2E] transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={img('craft-lab-banner', 1920)}
          alt="Craft Lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2C2D2E]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-32 md:py-40">
        <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-4">
          Exclusive
        </p>
        <h2 className="font-[Baskervville] text-[#FCF7EC] text-4xl md:text-6xl mb-8">
          {t.craftLab.heading}
        </h2>
        <p className="font-[Jost] text-[#FCF7EC]/75 text-lg leading-relaxed mb-10">
          {t.craftLab.body}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {t.craftLab.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#CB9F5B]/50 text-[#CB9F5B] text-xs px-4 py-1.5 tracking-wider font-[Jost]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
