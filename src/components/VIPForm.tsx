import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollFade } from './useScrollFade';
import { insertLead } from '../lib/supabase';

const leadSchema = z.object({
  name: z.string().min(2, 'required').max(120),
  company: z.string().max(200).optional().or(z.literal('')),
  email: z.string().email('invalid'),
  coffees: z.array(z.string()).optional(),
  message: z.string().max(2000).optional().or(z.literal('')),
});

type LeadForm = z.infer<typeof leadSchema>;
type Submitted = 'idle' | 'submitting' | 'ok' | 'error';

export default function VIPForm() {
  const { t, lang } = useLanguage();
  const { ref, visible } = useScrollFade<HTMLElement>();
  const [state, setState] = useState<Submitted>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [meta, setMeta] = useState<{
    utm_source: string | null;
    utm_medium: string | null;
    utm_campaign: string | null;
    referrer: string | null;
    user_agent: string | null;
  }>({
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    referrer: null,
    user_agent: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadForm>({ resolver: zodResolver(leadSchema) });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    setMeta({
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
    });
  }, []);

  const onSubmit = async (values: LeadForm) => {
    setState('submitting');
    setErrorMsg(null);
    try {
      await insertLead({
        name: values.name.trim(),
        email: values.email.trim().toLowerCase(),
        company: values.company?.trim() || null,
        country: null,
        interest: values.coffees?.length ? values.coffees.join(', ') : null,
        message: values.message?.trim() || null,
        lang,
        ...meta,
      });
      setState('ok');
      reset();
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error');
    }
  };

  const inputClass =
    'w-full border-0 border-b border-[#2C2D2E]/20 bg-transparent py-3 px-1 font-[Apercu] text-[#2C2D2E] text-sm focus:outline-none focus:border-[#b61667] transition-colors placeholder:text-[#2C2D2E]/30';

  const labelClass =
    'block font-[Apercu] text-[10px] tracking-[0.25em] uppercase text-[#2C2D2E]/55 mb-2';

  const errorClass = 'mt-1 font-[Apercu] text-[10px] text-[#ef5aa0]';

  return (
    <section
      id="vip-form"
      ref={ref}
      className={`bg-white px-6 py-20 md:py-24 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 items-start gap-12 md:gap-16">
        {/* Left column — heading */}
        <div className="md:col-span-5 md:pt-4 md:sticky md:top-32">
          <span className="inline-block border border-[#b61667] text-[#b61667] uppercase tracking-[0.2em] font-[Apercu] text-[10px] md:text-xs rounded-full px-6 py-1.5 mb-7">
            {t.vipForm.pill}
          </span>
          <h2
            className="font-[PP_Hatton] text-[#2C2D2E] leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            {t.vipForm.title}
          </h2>
          <div className="w-16 h-px bg-[#CB9F5B] mt-6 mb-6" />
          <p
            className="font-[Apercu] text-[#2C2D2E]/80 text-base md:text-lg leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            {t.vipForm.lead}
          </p>
        </div>

        {/* Right column — form */}
        <div className="md:col-span-7 bg-white rounded-3xl shadow-md p-7 md:p-8 border border-[#2C2D2E]/5">
          {state === 'ok' ? (
            <div className="text-center py-10">
              <p
                className="font-[PP_Hatton] italic text-[#b61667] leading-none mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
              >
                {t.vipForm.thanks}
              </p>
              <div className="w-16 h-px bg-[#CB9F5B] mx-auto mb-6" aria-hidden />
              <p
                className="font-[Apercu] italic text-[#2C2D2E]/70"
                style={{ fontWeight: 300 }}
              >
                {t.vipForm.thanksNote}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{t.vipForm.n_name}</label>
                  <input {...register('name')} className={inputClass} autoComplete="name" />
                  {errors.name && <p className={errorClass}>{t.vipForm.n_name} *</p>}
                </div>
                <div>
                  <label className={labelClass}>{t.vipForm.n_company}</label>
                  <input
                    {...register('company')}
                    className={inputClass}
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>{t.vipForm.n_email}</label>
                <input
                  {...register('email')}
                  type="email"
                  className={inputClass}
                  autoComplete="email"
                />
                {errors.email && <p className={errorClass}>{t.vipForm.n_email} *</p>}
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <label className={labelClass + ' mb-0'}>{t.vipForm.n_calling}</label>
                  <span className="font-[Apercu] text-[10px] italic text-[#2C2D2E]/50">
                    {t.vipForm.n_callingHint}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {t.vipForm.coffeeOptions.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 cursor-pointer group select-none"
                    >
                      <input
                        type="checkbox"
                        value={opt}
                        {...register('coffees')}
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden
                        className="w-4 h-4 rounded-sm border border-[#2C2D2E]/30 flex items-center justify-center peer-checked:bg-[#b61667] peer-checked:border-[#b61667] transition-colors"
                      >
                        <svg
                          viewBox="0 0 12 12"
                          className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="font-[Apercu] text-sm text-[#2C2D2E]/85 group-hover:text-[#b61667] transition-colors">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>{t.vipForm.n_message}</label>
                <textarea
                  {...register('message')}
                  rows={2}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="pt-4 border-t border-[#2C2D2E]/10 space-y-4">
                <div className="space-y-1">
                  <p className="font-[Apercu] text-[11px] text-[#2C2D2E]/55">
                    {t.vipForm.micro1}
                  </p>
                  <p className="font-[Apercu] text-[11px] text-[#2C2D2E]/55">
                    {t.vipForm.micro2}
                  </p>
                  <p className="font-[Apercu] text-[11px] text-[#2C2D2E]/55">
                    {t.vipForm.micro3}
                  </p>
                </div>
                {state === 'error' && (
                  <p className="font-[Apercu] text-[11px] text-[#ef5aa0]">
                    {errorMsg ?? 'Something went wrong. Please try again.'}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={state === 'submitting'}
                  className="inline-flex items-center gap-2 bg-[#b61667] hover:bg-[#ef5aa0] disabled:opacity-60 disabled:cursor-not-allowed text-white font-[Apercu] font-medium text-xs tracking-[0.2em] uppercase rounded-full px-8 py-3.5 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {state === 'submitting' ? '···' : t.vipForm.cta}
                  <span className="text-base leading-none">→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
