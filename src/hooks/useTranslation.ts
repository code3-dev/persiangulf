import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: keyof typeof translations.en) => {
    try {
      // Make sure the key exists in the translations
      if (translations[language] && translations[language][key]) {
        return translations[language][key];
      }
      
      // Fallback to English if the key doesn't exist in the selected language
      if (translations.en[key]) {
        return translations.en[key];
      }
      
      // If the key doesn't exist in any language, return the key itself
      console.warn(`Translation key "${key}" not found`);
      return key;
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  };

  return { t };
}; 