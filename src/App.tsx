import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { GulfSurvey } from './components/GulfSurvey';
import { PersianGulfHistory } from './components/PersianGulfHistory';
import { About } from './components/About';
import { Developer } from './components/Developer';
import { LanguageProvider } from './context/LanguageContext';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from './context/LanguageContext';
import './App.css';

function AppContent() {
  const [showInitialAnimation, setShowInitialAnimation] = useState(false);
  const { language } = useLanguage();
  const isFirstLoad = useRef(true);

  // Only show animation if there's a previously saved language and it's not the first site visit in this session
  useEffect(() => {
    // Check if this is the initial load from localStorage (we don't want to show animation)
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      
      // Set a flag in sessionStorage to track if the user has visited the site in this browser session
      const hasVisitedInSession = sessionStorage.getItem('hasVisitedPersianGulf');
      
      if (hasVisitedInSession) {
        // If user has already visited in this session and there's a language change, show animation
        setShowInitialAnimation(true);
      } else {
        // First visit in this session, just mark as visited
        sessionStorage.setItem('hasVisitedPersianGulf', 'true');
      }
    } else {
      // Not the first load, user manually changed language
      setShowInitialAnimation(true);
    }
    
    // Hide animation after delay
    if (showInitialAnimation) {
      const timer = setTimeout(() => {
        setShowInitialAnimation(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [language]);

  return (
    <Layout>
      
      <Hero />
      <div className="py-10">
        <GulfSurvey />
      </div>
      <PersianGulfHistory />
      <About />
      <Developer />
    </Layout>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
