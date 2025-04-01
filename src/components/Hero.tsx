import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useTranslation();
  const { direction } = useLanguage();

  return (
    <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transform scale-105" 
        style={{ 
          backgroundImage: "url('/persian-gulf.jpg')", 
          backgroundAttachment: "fixed" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/75 to-teal-800/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto ${direction === 'rtl' ? 'space-y-8' : 'space-y-8'} animate-fadeIn`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
          {t('siteName')}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          {t('welcome')}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#history" 
            className="px-10 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all transform hover:scale-105 duration-300 shadow-xl w-full sm:w-auto text-lg"
          >
            {t('exploreHistory')}
          </a>
          <a 
            href="#about" 
            className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all transform hover:scale-105 duration-300 shadow-xl w-full sm:w-auto text-lg"
          >
            {t('learnMore')}
          </a>
        </div>
      </div>

      {/* Modern wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,186.7C672,213,768,235,864,229.3C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}; 