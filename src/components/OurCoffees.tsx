import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

interface BandProps {
  children: React.ReactNode;
}

function Band({ children }: BandProps) {
  return (
    <div className="bg-[#b61667] text-white py-3 md:py-3.5">
      <p className="text-center font-[Apercu] uppercase tracking-[0.3em] text-[11px] md:text-xs text-white/95">
        {children}
      </p>
    </div>
  );
}

interface EstateItemProps {
  svg: string;
  alt: string;
  caption: string;
  color: string;
}

function EstateItem({ svg, alt, caption, color }: EstateItemProps) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="h-24 md:h-28 flex items-center justify-center w-full">
        <img src={svg} alt={alt} className="max-h-full w-auto object-contain" />
      </div>
      <p
        className="font-[Apercu] text-sm md:text-[15px] mt-5 leading-relaxed max-w-[260px]"
        style={{ color, fontWeight: 300 }}
      >
        {caption}
      </p>
    </div>
  );
}

export default function OurCoffees() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  return (
    <section
      id="coffees"
      ref={ref}
      className={`bg-white transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Header (centered) */}
      <div className="max-w-4xl mx-auto px-6 pt-20 md:pt-24 pb-12 md:pb-16 text-center">
        <p className="font-[Apercu] uppercase tracking-[0.3em] text-[11px] md:text-xs text-[#b61667] mb-5">
          {t.whatComesNextVip.eyebrow}
        </p>
        <h2
          className="font-[PP_Hatton] italic text-[#b61667] leading-[1.05]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          {t.whatComesNextVip.title}
        </h2>
      </div>

      {/* Estate band */}
      <Band>{t.whatComesNextVip.estateBand}</Band>

      {/* 3 estate columns */}
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <EstateItem
            svg="/brand-vip/CONNECT.svg"
            alt="Connect"
            caption={t.coffees.connect}
            color="#9074dd"
          />
          <EstateItem
            svg="/brand-vip/BEAT.svg"
            alt="Beat"
            caption={t.coffees.beat}
            color="#b73283"
          />
          <EstateItem
            svg="/brand-vip/PULSE.svg"
            alt="Pulse"
            caption={t.coffees.pulse}
            color="#fa5753"
          />
        </div>

        {/* Estate caption */}
        <p
          className="font-[Apercu] italic text-[#2C2D2E]/80 text-sm md:text-base leading-relaxed text-center max-w-xl mx-auto mt-12 md:mt-14"
          style={{ fontWeight: 300 }}
        >
          {t.whatComesNextVip.estateCaption}
        </p>
      </div>

      {/* Neighbors band */}
      <Band>{t.whatComesNextVip.neighborsBand}</Band>

      {/* La Amistad block */}
      <div className="max-w-3xl mx-auto px-6 py-14 md:py-16 text-center">
        <div className="flex items-center justify-center h-32">
          <img
            src="/brand-vip/LA AMISTAD.svg"
            alt="La Amistad"
            className="max-h-full w-auto object-contain"
          />
        </div>
        <p
          className="font-[Apercu] uppercase tracking-[0.25em] text-[11px] md:text-xs mt-6"
          style={{ color: '#c0bc6a', fontWeight: 300 }}
        >
          {t.whatComesNextVip.neighborsLabel}
        </p>
        <p
          className="font-[Apercu] text-[#2C2D2E]/85 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-6"
          style={{ fontWeight: 300 }}
        >
          {t.whatComesNextVip.neighborsBody}
        </p>
      </div>

      {/* Craft Lab band */}
      <Band>{t.whatComesNextVip.craftLabBand}</Band>

      {/* Craft Lab block — slightly smaller than La Amistad */}
      <div className="max-w-3xl mx-auto px-6 py-10 md:py-12 text-center">
        <div className="flex items-center justify-center h-20 md:h-24">
          <p
            className="font-script text-[#b61667] leading-[0.95]"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Craft Lab
          </p>
        </div>
        <p
          className="font-[Apercu] uppercase tracking-[0.25em] text-[11px] md:text-xs mt-4 text-[#b61667]"
          style={{ fontWeight: 300 }}
        >
          {t.craftLab.imageQuote}
        </p>
        <p
          className="font-[Apercu] text-[#2C2D2E]/85 text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto mt-4"
          style={{ fontWeight: 300 }}
        >
          {t.craftLab.body}
        </p>
      </div>
    </section>
  );
}
