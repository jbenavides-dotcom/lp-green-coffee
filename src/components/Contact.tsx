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

  const inputClass =
    'w-full border border-[#E5E0D0] bg-white rounded py-3 px-4 font-[Jost] text-[#2C2D2E] text-sm focus:outline-none focus:border-[#E11D48] transition-colors placeholder:text-[#2C2D2E]/30';

  const labelClass =
    'block font-[Jost] text-xs tracking-widest uppercase text-[#2C2D2E]/50 mb-1.5';

  return (
    <section
      id="contact"
      ref={ref}
      className={`bg-white py-16 md:py-20 px-6 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-3">
            Partnership
          </p>
          <h2 className="font-[Tenor_Sans] text-[#2C2D2E] text-3xl md:text-4xl leading-snug mb-4">
            {t.contact.heading}
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-[#E11D48]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#E11D48]/40" />
            <div className="w-12 h-px bg-[#E11D48]/30" />
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-16 bg-[#FFFFFF] rounded-3xl">
            <p
              className="font-script text-[#E11D48] mb-3"
              style={{ fontSize: '3rem' }}
            >
              Thank you
            </p>
            <p className="font-[Jost] text-[#2C2D2E]/60 text-sm">
              We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                className={`${inputClass} cursor-pointer`}
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

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="inline-block px-8 py-4 bg-[#E11D48] text-white font-[Jost] font-medium text-sm tracking-widest uppercase rounded-full hover:bg-[#d96178] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {t.contact.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
