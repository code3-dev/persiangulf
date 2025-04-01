import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

export const PersianGulfHistory = () => {
  const { t } = useTranslation();
  const { direction } = useLanguage();

  return (
    <section id="history" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            {t('history')}
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r ${direction === 'rtl' ? 'from-teal-400 to-blue-500' : 'from-blue-500 to-teal-400'} mx-auto mb-4`}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('exploreHistory')}
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`hidden md:block absolute ${direction === 'rtl' ? 'right-1/2 transform translate-x-1/2' : 'left-1/2 transform -translate-x-1/2'} h-full w-1 bg-gradient-to-b from-blue-400 to-teal-400`}></div>
          
          {/* Ancient History */}
          <div className="relative mb-24">
            <div className={`md:flex items-center justify-between ${direction === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-5/12 mb-10 md:mb-0">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-blue-700">{t('ancientHistory')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('ancientHistoryText1')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('ancientHistoryText2')}
                  </p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold">500 BCE</span>
                </div>
              </div>
              
              <div className="md:w-5/12">
                <div className={`bg-blue-50 p-6 rounded-lg ${direction === 'rtl' ? 'border-r-4 border-blue-500' : 'border-l-4 border-blue-500'}`}>
                  <p className="italic text-gray-700">
                    {t('straboQuote')}
                    <br />
                    <span className={`font-medium block mt-4 ${direction === 'rtl' ? 'text-left' : 'text-right'}`}>— Strabo, Geography (ca. 23 CE)</span>
                  </p>
                </div>
                <div className="mt-8 relative">
                  <img 
                    src="/20190905_persepolis_5958.jpg" 
                    alt="Ancient Persian Empire" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                  <div className={`absolute bottom-4 ${direction === 'rtl' ? 'right-4' : 'left-4'} text-white text-sm`}>Ancient Persian Relief</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Medieval Period */}
          <div className="relative mb-24">
            <div className={`md:flex items-center justify-between ${direction === 'rtl' ? '' : ''}`}>
              <div className={`md:w-5/12 ${direction === 'rtl' ? 'order-1' : 'order-2 md:order-3'} mb-10 md:mb-0`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-700">{t('medievalPeriod')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('medievalPeriodText1')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('medievalPeriodText2')}
                  </p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center order-2">
                <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold">800 CE</span>
                </div>
              </div>
              
              <div className={`md:w-5/12 ${direction === 'rtl' ? 'order-3' : 'order-1'}`}>
                <div className="relative">
                  <img 
                    src="/gulf.jpg" 
                    alt="Medieval Map" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                  <div className={`absolute bottom-4 ${direction === 'rtl' ? 'right-4' : 'left-4'} text-white text-sm`}>Medieval Persian Gulf Map</div>
                </div>
                <div className={`mt-8 bg-indigo-50 p-6 rounded-lg ${direction === 'rtl' ? 'border-r-4 border-indigo-500' : 'border-l-4 border-indigo-500'}`}>
                  <p className="italic text-gray-700">
                    {t('alIdrisiQuote')}
                    <br />
                    <span className={`font-medium block mt-4 ${direction === 'rtl' ? 'text-left' : 'text-right'}`}>— Al-Idrisi, 12th Century</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modern Era */}
          <div className="relative">
            <div className={`md:flex items-center justify-between ${direction === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-5/12 mb-10 md:mb-0">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-teal-700">{t('modernEra')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('modernEraText1')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('modernEraText2')}
                  </p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold">1960+</span>
                </div>
              </div>
              
              <div className="md:w-5/12">
                <div className={`bg-gradient-to-r ${direction === 'rtl' ? 'from-teal-500 to-blue-500' : 'from-blue-500 to-teal-500'} p-8 rounded-xl shadow-lg text-white`}>
                  <h4 className="text-xl font-bold mb-4">{t('unitedNationsPosition')}</h4>
                  <p className="mb-6 leading-relaxed">
                    {t('unitedNationsText')}
                  </p>
                  <div className={`flex items-center ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-12 h-12 bg-white/20 rounded-full flex items-center justify-center ${direction === 'rtl' ? 'ml-4' : 'mr-4'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-white/90">UN Document UNAD, 311/Gen (1994)</p>
                  </div>
                </div>
                <div className={`mt-8 flex items-center ${direction === 'rtl' ? 'justify-start' : 'justify-end'}`}>
                  <a href="#" className={`inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all transform hover:scale-105 duration-200 shadow-lg ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    {direction === 'rtl' ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2 rotate-180">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        {t('readMore')}
                      </>
                    ) : (
                      <>
                        {t('readMore')}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};