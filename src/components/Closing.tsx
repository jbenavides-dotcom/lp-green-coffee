import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

export default function Closing() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();

  return (
    <section
      id="closing"
      ref={ref}
      className={`bg-[#FCF7EC] py-24 px-6 text-center transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto">
        {/* 1. Kicker */}
        <p className="font-[Jost] uppercase tracking-[0.4em] text-[#CB9F5B] text-xs mb-8">
          {t.closing.kicker}
        </p>

        {/* 2. Body paragraphs */}
        <p className="font-[Tenor_Sans] text-[#2C2D2E]/80 text-lg leading-relaxed mb-4">
          {t.closing.body1}
        </p>
        <p className="font-[Tenor_Sans] text-[#2C2D2E]/80 text-lg leading-relaxed mb-4">
          {t.closing.body2}
        </p>
        <p className="font-[Tenor_Sans] text-[#2C2D2E]/80 text-lg leading-relaxed mb-4">
          {t.closing.body3}
        </p>

        {/* 3. Divider */}
        <div className="w-24 h-px bg-[#CB9F5B] mx-auto my-10" />

        {/* 4. QR placeholder */}
        <div className="w-[180px] h-[180px] border-2 border-dashed border-[#CB9F5B]/60 flex items-center justify-center mx-auto my-10">
          <span className="font-[Jost] uppercase tracking-[0.25em] text-[#CB9F5B]/70 text-xs">
            {t.closing.qrPlaceholder}
          </span>
        </div>

        {/* 5. Punchlines */}
        <p className="font-[Tenor_Sans] font-medium text-[#9B1B47] text-xl mb-2">
          {t.closing.punchline1}
        </p>
        <p className="font-[Tenor_Sans] font-medium text-[#9B1B47] text-xl mb-2">
          {t.closing.punchline2}
        </p>

        {/* 6. Script */}
        <p
          className="font-script text-[#9B1B47] my-10 leading-none"
          style={{ fontSize: 'clamp(4rem, 8vw, 6rem)' }}
        >
          {t.closing.script}
        </p>

        {/* 7. Signature */}
        <p className="font-[Tenor_Sans] italic text-[#2C2D2E]/70 mb-2">
          {t.closing.sigLead}
        </p>
        <p className="font-[Tenor_Sans] text-[#2C2D2E] font-medium">
          {t.closing.signature}
        </p>
      </div>
    </section>
  );
}
