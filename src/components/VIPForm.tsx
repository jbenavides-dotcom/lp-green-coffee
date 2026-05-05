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
    'w-full bg-white text-[#2C2D2E] font-[Apercu] text-sm py-3 px-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition';

  const labelClass =
    'block font-[Apercu] text-[10px] tracking-[0.25em] uppercase text-white/95 mb-2';

  const errorClass = 'mt-1 font-[Apercu] text-[10px] text-white/90';

  return (
    <section
      id="vip-form"
      ref={ref}
      className={`bg-[#b61667] text-white transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-24">
        {/* Header centered */}
        <div className="text-center mb-12">
          <span className="inline-block border border-white/80 text-white uppercase tracking-[0.25em] font-[Apercu] text-[10px] md:text-xs rounded-full px-7 py-2 mb-8">
            {t.vipForm.pill}
          </span>
          <h2
            className="font-[PP_Hatton] text-white leading-[1.1]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            {t.vipForm.title}
          </h2>
          <p
            className="font-[Apercu] text-white/85 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-6"
            style={{ fontWeight: 300 }}
          >
            {t.vipForm.lead}
          </p>
        </div>

        {state === 'ok' ? (
          <div className="text-center py-10">
            <p
              className="font-[PP_Hatton] italic text-white leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
            >
              {t.vipForm.thanks}
            </p>
            <div className="w-16 h-px bg-white/60 mx-auto mb-6" aria-hidden />
            <p
              className="font-[Apercu] italic text-white/85"
              style={{ fontWeight: 300 }}
            >
              {t.vipForm.thanksNote}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
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
              <div className="flex items-baseline justify-between mb-2">
                <label className={labelClass + ' mb-0'}>{t.vipForm.n_calling}</label>
                <span className="font-[Apercu] text-[10px] italic text-white/70">
                  {t.vipForm.n_callingHint}
                </span>
              </div>
              <div className="bg-white rounded-sm px-4 py-3 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
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
                      className="w-4 h-4 rounded-sm border border-[#2C2D2E]/40 flex items-center justify-center peer-checked:bg-[#b61667] peer-checked:border-[#b61667] transition-colors flex-shrink-0"
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
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </div>

            {state === 'error' && (
              <p className="font-[Apercu] text-[11px] text-white/90 text-center">
                {errorMsg ?? 'Something went wrong. Please try again.'}
              </p>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={state === 'submitting'}
                className="w-full bg-[#ef5aa0] hover:bg-white hover:text-[#b61667] disabled:opacity-60 disabled:cursor-not-allowed text-white font-[Apercu] font-medium text-xs md:text-sm tracking-[0.3em] uppercase py-4 transition-all duration-200"
              >
                {state === 'submitting' ? '···' : t.vipForm.cta}
              </button>
            </div>

            <div className="text-center space-y-1 pt-6">
              <p className="font-[Apercu] text-[11px] text-white/80">{t.vipForm.micro1}</p>
              <p className="font-[Apercu] text-[11px] text-white/80">{t.vipForm.micro2}</p>
              <p className="font-[Apercu] text-[11px] text-white/80">{t.vipForm.micro3}</p>
            </div>
          </form>
        )}
      </div>

      {/* decorative pink stripe at bottom */}
      <div className="h-6 md:h-8 bg-[#ef5aa0]" aria-hidden />
    </section>
  );
}
