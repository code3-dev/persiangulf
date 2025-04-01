import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

export const GulfSurvey = () => {
  const { t } = useTranslation();
  const { direction } = useLanguage();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelection = (option: string) => {
    setIsAnimating(true);
    setSelectedOption(option);
    setTimeout(() => {
      setShowResult(true);
      setIsAnimating(false);
    }, 500);
  };

  const resetSurvey = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedOption(null);
      setShowResult(false);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden transition-all transform hover:shadow-blue-500/10 duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-2">{t('selectOption')}</h2>
          <p className="text-blue-100 max-w-xl mx-auto">{t('surveyIntro')}</p>
        </div>

        <div className="p-8 bg-gradient-to-b from-white to-blue-50">
          {!showResult ? (
            <div className={`${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transform transition-all duration-500`}>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button
                  onClick={() => handleSelection('persian')}
                  className="group relative px-8 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1 hover:scale-105 duration-300 text-lg font-medium overflow-hidden"
                >
                  <span className="relative z-10">{t('persianGulf')}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                <button
                  onClick={() => handleSelection('arabian')}
                  className="group relative px-8 py-5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl shadow-lg hover:shadow-red-500/50 transition-all transform hover:-translate-y-1 hover:scale-105 duration-300 text-lg font-medium overflow-hidden"
                >
                  <span className="relative z-10">{t('arabianGulf')}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>
          ) : (
            <div className={`${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transform transition-all duration-500`}>
              {selectedOption === 'persian' ? (
                <div className="animate-fadeIn">
                  <div className="text-green-600 text-3xl font-bold mb-6 text-center">{t('correctAnswer')}</div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg mb-8">
                    <p className="text-gray-700 mb-4">
                      {t('correctAnswerText')}
                    </p>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={resetSurvey}
                      className="px-8 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all transform hover:scale-105 duration-300"
                    >
                      {t('chooseOption')}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="animate-fadeIn">
                  <div className="text-red-600 text-3xl font-bold mb-6 text-center">{t('wrongAnswer')}</div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg mb-8">
                    <p dir={direction} className="text-gray-700 mb-4">
                      {t('wrongAnswerText')}
                    </p>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={resetSurvey}
                      className="px-8 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all transform hover:scale-105 duration-300"
                    >
                      {t('chooseOption')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 