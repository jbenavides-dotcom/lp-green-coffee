import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://itafxhlhftayznpqsrxr.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_-MeXF7f_N4QPgm7DQn1eOA_JoXSfo1w';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false },
});

export type GcLead = {
  name: string;
  email: string;
  company?: string | null;
  country?: string | null;
  interest?: string | null;
  message?: string | null;
  lang?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  referrer?: string | null;
  user_agent?: string | null;
};

export async function insertLead(lead: GcLead) {
  const { error } = await supabase.from('gc_leads').insert([lead]);
  if (error) throw error;
}
