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
      .catch(() => setSubmitted(true)); // show success even on placeholder
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`bg-[#FCF7EC] py-24 md:py-32 px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-2xl mx-auto">
        <p className="text-[#CB9F5B] text-xs tracking-[0.4em] uppercase font-[Jost] font-medium mb-3 text-center">
          Partnership
        </p>
        <h2 className="font-[Baskervville] text-[#2C2D2E] text-3xl md:text-4xl text-center mb-12 leading-snug">
          {t.contact.heading}
        </h2>

        {submitted ? (
          <div className="text-center py-16">
            <p className="font-[Baskervville] text-[#2C2D2E] text-2xl mb-3">Thank you.</p>
            <p className="font-[Jost] text-[#2C2D2E]/60">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-[Jost] text-xs tracking-widest uppercase text-[#2C2D2E]/50 mb-1.5">
                  {t.contact.name}
                </label>
                <input
                  name="name"
                  required
                  className="w-full border-b border-[#2C2D2E]/20 bg-transparent py-2.5 font-[Jost] text-[#2C2D2E] text-sm focus:outline-none focus:border-[#CB9F5B] transition-colors"
                />
              </div>
              <div>
                <label className="block font-[Jost] text-xs tracking-widest uppercase text-[#2C2D2E]/50 mb-1.5">
                  {t.contact.email}
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border-b border-[#2C2D2E]/20 bg-transparent py-2.5 font-[Jost] text-[#2C2D2E] text-sm focus:outline-none focus:border-[#CB9F5B] transition-colors"
                />
              </div>
              <div>
                <label className="block font-[Jost] text-xs tracking-widest uppercase text-[#2C2D2E]/50 mb-1.5">
                  {t.contact.company}
                </label>
                <input
                  name="company"
                  className="w-full border-b border-[#2C2D2E]/20 bg-transparent py-2.5 font-[Jost] text-[#2C2D2E] text-sm focus:outline-none focus:border-[#CB9F5B] transition-colors"
                />
              </div>
              <div>
                <label className="block font-[Jost] text-xs tracking-widest uppercase text-[#2C2D2E]/50 mb-1.5">
                  {t.contact.country}
                </label>
                <input
                  name="country"
                  className="w-full border-b border-[#2C2D2E]/20 bg-transparent py-2.5 font-[Jost] text-[#2C2D2E] text-sm focus:outline-none focus:border-[#CB9F5B] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-[Jost] text-xs tracking-widest uppercase text-[#2C2D2E]/50 mb-1.5">
                {t.contact.interest}
              </label>
              <select
                name="interest"
                className="w-full border-b border-[#2C2D2E]/20 bg-transparent py-2.5 font-[Jost] text-[#2C2D2E] text-sm focus:outline-none focus:border-[#CB9F5B] transition-colors appearance-none"
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
              <label className="block font-[Jost] text-xs tracking-widest uppercase text-[#2C2D2E]/50 mb-1.5">
                {t.contact.message}
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full border-b border-[#2C2D2E]/20 bg-transparent py-2.5 font-[Jost] text-[#2C2D2E] text-sm focus:outline-none focus:border-[#CB9F5B] transition-colors resize-none"
              />
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="inline-block px-12 py-4 bg-[#ED728B] text-white font-[Jost] font-medium text-sm tracking-widest uppercase hover:bg-[#d96178] transition-colors duration-200"
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
