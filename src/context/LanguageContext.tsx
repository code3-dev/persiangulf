import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fa' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const LANGUAGE_STORAGE_KEY = 'persianGulf_language';

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');
  const [direction, setDirection] = useState<Direction>('ltr');
  const [initialized, setInitialized] = useState(false);
  
  // Initialize language from localStorage or browser preference
  useEffect(() => {
    // Prevent this effect from running multiple times
    if (initialized) return;

    // First check localStorage
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fa' || savedLanguage === 'ar')) {
      setLanguageState(savedLanguage);
    } else {
      // If no localStorage, check browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (browserLang === 'fa' || browserLang === 'ar' || browserLang === 'en') {
        setLanguageState(browserLang);
      }
    }
    
    setInitialized(true);
  }, [initialized]);

  // Set language and save to localStorage
  const setLanguage = (lang: Language) => {
    // Only update if the language has actually changed
    if (lang !== language) {
      setLanguageState(lang);
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
  };

  // Update direction when language changes
  useEffect(() => {
    // Set direction based on language
    setDirection(language === 'en' ? 'ltr' : 'rtl');
    document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = language;
  }, [language]);

  const translate = (key: string) => {
    // This will be implemented with translations from i18n files
    // For now, return the key
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 