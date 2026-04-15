import { useState } from 'react';
import { useScrollFade } from './useScrollFade';
import { useLanguage } from '../i18n/LanguageContext';
import { img } from '../lib/cloudinary';

interface CoffeeCardProps {
  imageName: string;
  name: string;
  body: string;
  details: string;
  tags: readonly string[];
  reversed?: boolean;
}

export default function CoffeeCard({ imageName, name, body, details, tags, reversed = false }: CoffeeCardProps) {
  const { ref, visible } = useScrollFade<HTMLDivElement>();
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-0 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Image */}
      <div className="md:w-2/5 aspect-square overflow-hidden bg-[#2C2D2E]">
        <img
          src={img(imageName, 600)}
          alt={name}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="md:w-3/5 bg-[#2C2D2E] flex flex-col justify-center px-10 py-12 md:px-16">
        <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-4">
          Estate-Grown
        </p>
        <h3 className="font-[Baskervville] text-[#FCF7EC] text-4xl md:text-5xl mb-6">{name}</h3>
        <p className="font-[Jost] text-[#FCF7EC]/70 text-base leading-relaxed mb-4">{body}</p>

        {/* Expandable details */}
        <div
          className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}`}
        >
          <p className="font-[Jost] text-[#FCF7EC]/60 text-sm leading-relaxed">{details}</p>
        </div>

        {/* Learn More / Show Less button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-[#CB9F5B] text-sm font-[Jost] font-medium tracking-wide mb-8 hover:text-[#e0b96e] transition-colors duration-200 w-fit"
        >
          {expanded ? t.readLess : t.readMore}
          <span className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
            ↓
          </span>
        </button>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#CB9F5B]/40 text-[#CB9F5B] text-xs px-3 py-1 tracking-wide font-[Jost]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
