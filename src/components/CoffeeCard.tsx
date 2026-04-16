import { useState } from 'react';
import { useScrollFade } from './useScrollFade';
import { useLanguage } from '../i18n/LanguageContext';

interface CoffeeCardProps {
  imageName: string;
  name: string;
  body: string;
  details: string;
  tags: readonly string[];
  gradient: string;
  compact?: boolean;
  mini?: boolean;
}

export default function CoffeeCard({
  name,
  body,
  details,
  tags,
  gradient,
  compact = false,
  mini = false,
}: CoffeeCardProps) {
  const { ref, visible } = useScrollFade<HTMLDivElement>();
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  // mini mode
  if (mini) {
    return (
      <div
        ref={ref}
        className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col card-hover transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col flex-1 p-4 pt-5 space-y-1.5">
          {/* Name */}
          <h3
            className="font-script text-[#2C2D2E] text-center leading-[1.15] pb-1"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            {name.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
          </h3>

          {/* Thin pink separator */}
          <div className="flex items-center justify-center">
            <div className="w-10 h-px bg-[#E11D48]/40" />
          </div>

          {/* Body text */}
          <p className="font-[Tenor_Sans] text-[#2C2D2E]/70 italic leading-relaxed text-center text-xs line-clamp-1">
            {body}
          </p>

          {/* Tags — max 2 */}
          <div className="flex flex-wrap justify-center mt-auto gap-1.5">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="border border-[#E11D48]/40 text-[#E11D48] rounded-full font-[Jost] text-[9px] px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer gradient bar — 4px */}
        <div className="h-1" style={{ background: gradient }} />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl shadow-md overflow-hidden flex flex-col card-hover transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Card body */}
      <div className={`flex flex-col flex-1 ${compact ? 'p-4 md:p-5 space-y-2' : 'p-5 pb-4 md:p-8 md:pb-6'}`}>
        {/* Name in Great Vibes */}
        <h3
          className={`font-script text-[#2C2D2E] text-center leading-none ${compact ? '' : 'mb-3'}`}
          style={{ fontSize: compact ? 'clamp(1.75rem, 3vw, 2.25rem)' : 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          {name.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
        </h3>

        {/* Thin pink separator */}
        <div className={`flex items-center justify-center ${compact ? '' : 'mb-5'}`}>
          <div className="w-10 h-px bg-[#E11D48]/40" />
        </div>

        {/* Body text */}
        <p className={`font-[Tenor_Sans] text-[#2C2D2E]/70 italic leading-relaxed text-center ${compact ? 'text-xs md:text-sm line-clamp-2' : 'text-base mb-3'}`}>
          {body}
        </p>

        {/* Expandable details - only non-compact */}
        {!compact && (
          <div
            className={`overflow-hidden transition-all duration-500 ${
              expanded ? 'max-h-60 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'
            }`}
          >
            <p className="font-[Jost] text-[#2C2D2E]/55 text-sm leading-relaxed text-center mt-2">
              {details}
            </p>
          </div>
        )}

        {/* Tags */}
        <div className={`flex flex-wrap justify-center mt-auto ${compact ? 'gap-1.5' : 'gap-2 mb-5'}`}>
          {tags.map((tag) => (
            <span
              key={tag}
              className={`border border-[#E11D48]/40 text-[#E11D48] rounded-full font-[Jost] ${compact ? 'text-[9px] tracking-[0.15em] px-2 py-0.5' : 'text-xs tracking-wide px-3 py-1'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Gradient footer - only non-compact */}
      {!compact && (
        <div
          className="px-8 py-5 flex flex-col items-center gap-3"
          style={{ background: gradient }}
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 border-2 border-white text-white font-[Jost] font-medium text-xs tracking-widest uppercase rounded-full hover:bg-white hover:text-[#2C2D2E] transition-all duration-200"
          >
            {expanded ? t.readLess : t.readMore}
            <span
              className={`transition-transform duration-300 text-sm ${expanded ? 'rotate-180' : ''}`}
            >
              ↓
            </span>
          </button>
        </div>
      )}

      {/* Compact gradient strip (no button) */}
      {compact && (
        <div
          className="py-3"
          style={{ background: gradient }}
        />
      )}
    </div>
  );
}
