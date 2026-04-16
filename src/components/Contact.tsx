// @deprecated — reemplazado en release "From the Heart" 2026-04-16
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';

export default function Contact() {
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

  // Clean bottom-border inputs — more premium than boxed
  const inputClass =
    'w-full border-0 border-b border-[#2C2D2E]/20 bg-transparent py-3 px-1 font-[Jost] text-[#2C2D2E] text-sm focus:outline-none focus:border-[#9B1B47] transition-colors placeholder:text-[#2C2D2E]/30';

  const labelClass =
    'block font-[Jost] text-[10px] tracking-[0.25em] uppercase text-[#2C2D2E]/55 mb-2';

  return (
    <section
      id="contact"
      ref={ref}
      className={`bg-[#FCF7EC] py-20 md:py-28 px-6 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-4">
            Partnership
          </p>
          <h2
            className="font-[Tenor_Sans] text-[#2C2D2E] leading-[1.1]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            {t.contact.heading}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-[#E11D48]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#E11D48]/40" />
            <div className="w-12 h-px bg-[#E11D48]/30" />
          </div>
        </div>

        {submitted ? (
          <div className="max-w-2xl mx-auto text-center py-20">
            <p
              className="font-script text-[#9B1B47] mb-4 leading-none"
              style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}
            >
              Thank you
            </p>
            <div className="w-16 h-px bg-[#CB9F5B] mx-auto mb-4" />
            <p className="font-[Tenor_Sans] text-[#2C2D2E]/70 italic">
              We'll be in touch within 48 hours.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            {/* Left column — narrative + stats */}
            <div className="md:col-span-2 space-y-8">
              {/* Scarcity badge */}
              <div className="inline-flex items-center gap-2 border border-[#9B1B47]/30 bg-white/60 rounded-full px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
                <span className="font-[Jost] text-[10px] tracking-[0.25em] uppercase text-[#9B1B47]">
                  Only 50 partners worldwide
                </span>
              </div>

              {/* Philosophy quote */}
              <blockquote className="border-l-2 border-[#CB9F5B] pl-5">
                <p className="font-[Tenor_Sans] italic text-[#2C2D2E]/80 text-base leading-relaxed">
                  Our partners don't just buy coffee — they join a movement.
                  Each bag tells a story of direct trade, traceability, and
                  neighboring farms growing together.
                </p>
              </blockquote>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#2C2D2E]/10">
                <div>
                  <p
                    className="font-[Tenor_Sans] text-[#9B1B47] leading-none"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                  >
                    50
                  </p>
                  <p className="font-[Jost] text-[10px] tracking-[0.2em] uppercase text-[#2C2D2E]/55 mt-2">
                    Global partners
                  </p>
                </div>
                <div>
                  <p
                    className="font-[Tenor_Sans] text-[#9B1B47] leading-none"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                  >
                    6+
                  </p>
                  <p className="font-[Jost] text-[10px] tracking-[0.2em] uppercase text-[#2C2D2E]/55 mt-2">
                    Countries served
                  </p>
                </div>
                <div>
                  <p
                    className="font-[Tenor_Sans] text-[#9B1B47] leading-none"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                  >
                    2013
                  </p>
                  <p className="font-[Jost] text-[10px] tracking-[0.2em] uppercase text-[#2C2D2E]/55 mt-2">
                    Direct-trade since
                  </p>
                </div>
              </div>

              {/* What to expect */}
              <div className="space-y-3 pt-2">
                <p className="font-[Jost] text-[11px] tracking-[0.25em] uppercase text-[#2C2D2E]/55">
                  What happens next
                </p>
                <ol className="space-y-2 font-[Tenor_Sans] text-[#2C2D2E]/75 text-sm">
                  <li className="flex gap-3">
                    <span className="font-[Jost] font-medium text-[#9B1B47] w-5 flex-shrink-0">01</span>
                    <span>We review your application within 48 hours.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-[Jost] font-medium text-[#9B1B47] w-5 flex-shrink-0">02</span>
                    <span>Samples shipped to qualified partners.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-[Jost] font-medium text-[#9B1B47] w-5 flex-shrink-0">03</span>
                    <span>Onboarding call with Felipe & the team.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right column — form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-[#2C2D2E]/5">
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>{t.contact.name}</label>
                      <input name="name" required className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t.contact.email}</label>
                      <input name="email" type="email" required className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t.contact.company}</label>
                      <input name="company" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t.contact.country}</label>
                      <input name="country" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t.contact.interest}</label>
                    <select
                      name="interest"
                      className={`${inputClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22><path fill=%22%232C2D2E%22 d=%22M6 9L1 4h10z%22/></svg>')] bg-no-repeat bg-right bg-[length:10px_10px]`}
                    >
                      <option value="">{t.contact.selectInterest}</option>
                      {t.contact.interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>{t.contact.message}</label>
                    <textarea
                      name="message"
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#2C2D2E]/10">
                    <p className="font-[Jost] text-[11px] text-[#2C2D2E]/50 text-center md:text-left">
                      We typically respond within 48 hours.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#9B1B47] text-white font-[Jost] font-medium text-xs tracking-[0.2em] uppercase rounded-full hover:bg-[#E11D48] transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      {t.contact.submit}
                      <span className="text-base leading-none">→</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
