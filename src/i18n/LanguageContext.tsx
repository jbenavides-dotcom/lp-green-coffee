import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Lang } from './translations';

interface LanguageContextType {
  lang: Lang;
  t: typeof translations.en | typeof translations.es;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
