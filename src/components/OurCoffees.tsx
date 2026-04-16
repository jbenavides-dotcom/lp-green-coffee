import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';
import CoffeeCard from './CoffeeCard';
import { imgTrim, imgCrop } from '../lib/cloudinary';

const GRADIENTS: Record<string, string> = {
  connect: 'linear-gradient(135deg, #E11D48, #9B1B47)',
  pulse: 'linear-gradient(135deg, #9B1B47, #E11D48)',
  beat: 'linear-gradient(135deg, #E11D48, #CB9F5B)',
};

export default function OurCoffees() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();
  const [amistadExpanded, setAmistadExpanded] = useState(false);
  const [labExpanded, setLabExpanded] = useState(false);

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
          <p className="font-[Tenor_Sans] italic text-sm text-[#2C2D2E]/70 mt-3 max-w-xl mx-auto">
            {t.ourCoffees.sub}
          </p>
        </div>

        {/* Estate row */}
        <div className="mb-10">
          <p className="font-[Jost] uppercase tracking-[0.3em] text-[10px] text-[#2D5A3D]/70 mb-4 text-center">
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
          <p className="font-[Jost] uppercase tracking-[0.3em] text-[10px] text-[#9B1B47]/70 mb-4 text-center">
            {t.ourCoffees.collabEyebrow}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
            {/* La Amistad */}
            <article className="flex flex-col space-y-3">
              <div className="aspect-square overflow-hidden rounded-2xl bg-white">
                <img
                  src={imgTrim('la-amistad', 900, 20)}
                  alt="La Amistad"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-[Tenor_Sans] text-xl text-[#2C2D2E]">La Amistad</h3>
              <div className="flex-1">
                <p className="font-[Tenor_Sans] italic text-sm text-[#2C2D2E]/75 leading-relaxed line-clamp-3">
                  {t.laAmistad.body}
                </p>
                <div className={`overflow-hidden transition-all duration-500 ${amistadExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <p className="font-[Jost] text-[#2C2D2E]/60 text-sm leading-relaxed">
                    {t.laAmistad.details}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {t.laAmistad.tags.map((tag) => (
                  <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-[#9B1B47]/10 text-[#9B1B47] font-[Jost]">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setAmistadExpanded(!amistadExpanded)}
                className="font-[Jost] text-xs tracking-[0.2em] uppercase text-[#9B1B47] hover:text-[#E11D48] transition-colors duration-200 text-left"
              >
                {amistadExpanded ? t.readLess : t.readMore} →
              </button>
            </article>

            {/* Craft Lab */}
            <article className="flex flex-col space-y-3">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-[#F1ECDF]">
                <img
                  src={imgCrop('craft-lab-banner', 900, '16:10')}
                  alt="Craft Lab"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h3 className="font-[Tenor_Sans] text-xl text-[#2C2D2E]">Craft Lab</h3>
                <p className="font-script text-[#9B1B47] text-lg italic leading-none mt-0.5">
                  {t.craftLab.imageQuote}
                </p>
              </div>
              <div className="flex-1">
                <p className="font-[Tenor_Sans] italic text-sm text-[#2C2D2E]/75 leading-relaxed line-clamp-3">
                  {t.craftLab.body}
                </p>
                <div className={`overflow-hidden transition-all duration-500 ${labExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <p className="font-[Jost] text-[#2C2D2E]/60 text-sm leading-relaxed">
                    {t.craftLab.details}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.craftLab.tags.map((tag) => (
                  <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-[#9B1B47]/10 text-[#9B1B47] font-[Jost]">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setLabExpanded(!labExpanded)}
                className="font-[Jost] text-xs tracking-[0.2em] uppercase text-[#9B1B47] hover:text-[#E11D48] transition-colors duration-200 text-left"
              >
                {labExpanded ? t.readLess : t.readMore} →
              </button>
              <p className="font-[Jost] text-[10px] tracking-[0.2em] uppercase text-[#2C2D2E]/50 mt-auto">
                Limited to 50 partners worldwide
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
