import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useTranslation();
  const { direction } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            {t('about')}
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r ${direction === 'rtl' ? 'from-teal-400 to-blue-500' : 'from-blue-500 to-teal-400'} mx-auto mb-4`}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('discoverText')}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 ${direction === 'rtl' ? 'dir-rtl' : ''}`}>
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className={`h-3 bg-gradient-to-r ${direction === 'rtl' ? 'from-blue-600 to-blue-500' : 'from-blue-500 to-blue-600'}`}></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center ${direction === 'rtl' ? 'ml-4' : 'mr-4'} text-blue-600`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl text-blue-700 font-bold">{t('geography')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('geographyText1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('geographyText2')}
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className={`h-3 bg-gradient-to-r ${direction === 'rtl' ? 'from-teal-500 to-teal-400' : 'from-teal-400 to-teal-500'}`}></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center ${direction === 'rtl' ? 'ml-4' : 'mr-4'} text-teal-600`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl text-teal-700 font-bold">{t('economicImportance')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('economicText1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('economicText2')}
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className={`h-3 bg-gradient-to-r ${direction === 'rtl' ? 'from-indigo-600 to-indigo-500' : 'from-indigo-500 to-indigo-600'}`}></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center ${direction === 'rtl' ? 'ml-4' : 'mr-4'} text-indigo-600`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl text-indigo-700 font-bold">{t('culturalHeritage')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('culturalText1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('culturalText2')}
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className={`h-3 bg-gradient-to-r ${direction === 'rtl' ? 'from-green-600 to-green-500' : 'from-green-500 to-green-600'}`}></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-green-100 rounded-full flex items-center justify-center ${direction === 'rtl' ? 'ml-4' : 'mr-4'} text-green-600`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl text-green-700 font-bold">{t('environmentalConcerns')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('environmentText1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('environmentText2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 