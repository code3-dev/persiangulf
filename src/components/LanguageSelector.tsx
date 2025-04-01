import { useLanguage } from '../context/LanguageContext';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: 'en' | 'fa' | 'ar') => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center justify-center gap-2 relative">
      <div className="flex rounded-full bg-gray-100 p-1 shadow-inner">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
            language === 'en'
              ? 'bg-white text-blue-600 shadow-md'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <span className="relative z-10">English</span>
          {language === 'en' && (
            <span className="absolute inset-0 bg-white rounded-full shadow-sm transition-all duration-300"></span>
          )}
        </button>
        <button
          onClick={() => handleLanguageChange('fa')}
          className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
            language === 'fa'
              ? 'bg-white text-blue-600 shadow-md'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <span className="relative z-10">فارسی</span>
          {language === 'fa' && (
            <span className="absolute inset-0 bg-white rounded-full shadow-sm transition-all duration-300"></span>
          )}
        </button>
        <button
          onClick={() => handleLanguageChange('ar')}
          className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
            language === 'ar'
              ? 'bg-white text-blue-600 shadow-md'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <span className="relative z-10">العربية</span>
          {language === 'ar' && (
            <span className="absolute inset-0 bg-white rounded-full shadow-sm transition-all duration-300"></span>
          )}
        </button>
      </div>
    </div>
  );
}; 