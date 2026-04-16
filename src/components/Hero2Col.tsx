import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

export default function Hero2Col() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch('https://formspree.io/f/placeholder', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  const inputClass =
    'w-full border-0 border-b border-[#2C2D2E]/20 bg-transparent py-3 px-1 font-[Jost] text-[#2C2D2E] text-sm focus:outline-none focus:border-[#9B1B47] transition-colors placeholder:text-[#2C2D2E]/30';

  const labelClass =
    'block font-[Jost] text-[10px] tracking-[0.25em] uppercase text-[#2C2D2E]/55 mb-2';

  const leadLines = t.hero2.lead.split('\n');

  return (
    <section
      id="hero2"
      ref={ref}
      className={`min-h-[90vh] px-6 py-16 md:py-0 flex items-center transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ background: 'linear-gradient(180deg, #FCF7EC 0%, #FCF7EC 60%, #FFFFFF 100%)' }}
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 items-center gap-12 md:gap-0">
        {/* Left column */}
        <div className="md:col-span-6 md:pr-8">
          {/* Kicker */}
          <p className="font-[Jost] uppercase tracking-[0.25em] text-[#2D5A3D] text-xs mb-6">
            {t.hero2.kicker}
          </p>

          {/* Title */}
          <h1
            className="font-script text-[#CB9F5B] leading-none mb-8"
            style={{ fontSize: 'clamp(4rem, 9vw, 7rem)' }}
          >
            {t.hero2.title}
          </h1>

          {/* Lead */}
          <p
            className="font-[Tenor_Sans] text-[#2C2D2E] leading-relaxed"
            style={{ fontSize: 'clamp(1.15rem, 1.6vw, 1.5rem)' }}
          >
            {leadLines.map((line, i) => (
              <span key={i} className="block">
                {line}
                {i < leadLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        {/* Right column — card */}
        <div className="md:col-span-6">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-[#2C2D2E]/5">
            {submitted ? (
              <div className="text-center py-8">
                <p
                  className="font-script text-[#9B1B47] leading-none mb-6"
                  style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}
                >
                  {t.hero2.submitted}
                </p>
                <div className="w-16 h-px bg-[#CB9F5B] mx-auto mb-6" />
                <p className="font-[Tenor_Sans] text-[#2C2D2E]/70 italic">
                  {t.hero2.submittedNote}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: name + email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{t.hero2.name}</label>
                    <input name="name" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t.hero2.email}</label>
                    <input name="email" type="email" required className={inputClass} />
                  </div>
                </div>

                {/* Row 2: company + country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{t.hero2.company}</label>
                    <input name="company" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t.hero2.country}</label>
                    <input name="country" className={inputClass} />
                  </div>
                </div>

                {/* Select interest */}
                <div>
                  <label className={labelClass}>{t.hero2.interest}</label>
                  <select
                    name="interest"
                    className={`${inputClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22><path fill=%22%232C2D2E%22 d=%22M6 9L1 4h10z%22/></svg>')] bg-no-repeat bg-right bg-[length:10px_10px]`}
                  >
                    <option value="">{t.hero2.selectInterest}</option>
                    {t.hero2.interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Textarea */}
                <div>
                  <label className={labelClass}>{t.hero2.message}</label>
                  <textarea name="message" rows={2} className={`${inputClass} resize-none`} />
                </div>

                {/* microCopy + button */}
                <div className="pt-4 border-t border-[#2C2D2E]/10 space-y-4">
                  <p className="font-[Jost] text-[11px] text-[#2C2D2E]/50">
                    {t.hero2.microCopy}
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#9B1B47] hover:bg-[#E11D48] text-white font-[Jost] font-medium text-xs tracking-[0.2em] uppercase rounded-full px-8 py-3.5 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {t.hero2.submit}
                    <span className="text-base leading-none">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
