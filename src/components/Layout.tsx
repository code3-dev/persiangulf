import { ReactNode, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageSelector } from './LanguageSelector';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { direction } = useLanguage();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`flex flex-col min-h-screen ${direction === 'rtl' ? 'font-vazir' : 'font-sans'}`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold bg-gradient-to-r ${direction === 'rtl' ? 'from-teal-500 to-blue-600' : 'from-blue-600 to-teal-500'} bg-clip-text text-transparent`}>
                {t('siteName')}
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className={`hidden md:flex items-center ${direction === 'rtl' ? 'space-x-8 space-x-reverse' : 'space-x-8'}`}>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {t('home')}
              </a>
              <a href="#history" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {t('history')}
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {t('about')}
              </a>
              <a href="#developer" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {t('developer')}
              </a>
              <LanguageSelector />
            </nav>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 pb-3 border-t border-gray-200">
              <nav className={`flex flex-col ${direction === 'rtl' ? 'space-y-reverse' : ''} space-y-4 mt-4`}>
                <a 
                  href="#" 
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-3 ${direction === 'rtl' ? 'text-right pr-4' : 'text-left pl-4'} border-b border-gray-100`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('home')}
                </a>
                <a 
                  href="#history" 
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-3 ${direction === 'rtl' ? 'text-right pr-4' : 'text-left pl-4'} border-b border-gray-100`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('history')}
                </a>
                <a 
                  href="#about" 
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-3 ${direction === 'rtl' ? 'text-right pr-4' : 'text-left pl-4'} border-b border-gray-100`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('about')}
                </a>
                <a 
                  href="#developer" 
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-3 ${direction === 'rtl' ? 'text-right pr-4' : 'text-left pl-4'} border-b border-gray-100`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('developer')}
                </a>
                <div className={`pt-4 pb-2 ${direction === 'rtl' ? 'text-right pr-4' : 'text-left pl-4'}`}>
                  <LanguageSelector />
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${direction === 'rtl' ? 'dir-rtl' : ''}`}>
            <div>
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${direction === 'rtl' ? 'from-teal-300 to-blue-400' : 'from-blue-400 to-teal-300'} bg-clip-text text-transparent`}>{t('siteName')}</h3>
              <p className="text-gray-400">{t('welcome')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{t('quickLinks')}</h3>
              <ul className={`${direction === 'rtl' ? 'space-y-reverse' : ''} space-y-2`}>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('home')}</a></li>
                <li><a href="#history" className="text-gray-400 hover:text-white transition-colors">{t('history')}</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('about')}</a></li>
                <li><a href="#developer" className="text-gray-400 hover:text-white transition-colors">{t('developer')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{t('languages')}</h3>
              <LanguageSelector />
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}; 