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
}

export default function CoffeeCard({
  name,
  body,
  details,
  tags,
  gradient,
}: CoffeeCardProps) {
  const { ref, visible } = useScrollFade<HTMLDivElement>();
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl shadow-md overflow-hidden flex flex-col card-hover transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 pb-4 md:p-8 md:pb-6">
        {/* Name in Great Vibes */}
        <h3
          className="font-script text-[#2C2D2E] text-center mb-3 leading-none"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          {name.charAt(0) + name.slice(1).toLowerCase()}
        </h3>

        {/* Thin pink separator */}
        <div className="flex items-center justify-center mb-5">
          <div className="w-10 h-px bg-[#E11D48]/40" />
        </div>

        {/* Body text */}
        <p className="font-[Tenor_Sans] text-[#2C2D2E]/70 text-base italic leading-relaxed text-center mb-3">
          {body}
        </p>

        {/* Expandable details */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? 'max-h-60 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'
          }`}
        >
          <p className="font-[Jost] text-[#2C2D2E]/55 text-sm leading-relaxed text-center mt-2">
            {details}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-5 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#E11D48]/40 text-[#E11D48] text-xs px-3 py-1 rounded-full tracking-wide font-[Jost]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Gradient footer */}
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
    </div>
  );
}
