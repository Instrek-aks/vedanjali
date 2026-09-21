import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import FundingPage from './pages/FundingPage';
import RegistrationPage from './pages/RegistrationPage';
import TrademarkPage from './pages/TrademarkPage';
import InsurancePage from './pages/InsurancePage';
import ITSoftwarePage from './pages/ITSoftwarePage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export const ROUTES = {
  home: '/',
  funding: '/funding',
  registration: '/registration',
  trademark: '/trademark',
  insurance: '/insurance',
  itsoftware: '/itsoftware',
  marketing: '/marketing',
  about: '/about',
  contact: '/contact'
};

const PATH_TO_PAGE = {
  '/': 'home',
  '/home': 'home',
  '/funding': 'funding',
  '/registration': 'registration',
  '/trademark': 'trademark',
  '/insurance': 'insurance',
  '/itsoftware': 'itsoftware',
  '/it-software': 'itsoftware',
  '/marketing': 'marketing',
  '/digital-marketing': 'marketing',
  '/about': 'about',
  '/about-us': 'about',
  '/contact': 'contact',
  '/contact-us': 'contact'
};

function getPageFromLocation() {
  const path = (window.location.pathname || '/').toLowerCase().replace(/\/$/, '') || '/';
  if (PATH_TO_PAGE[path]) {
    return PATH_TO_PAGE[path];
  }
  // Check hash fallback (e.g. #funding or #/funding)
  const hash = (window.location.hash || '').replace(/^#\/?/, '').toLowerCase();
  if (hash && PATH_TO_PAGE['/' + hash]) {
    return PATH_TO_PAGE['/' + hash];
  }
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromLocation);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromLocation());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (pageId) => {
    const newPath = ROUTES[pageId] || '/';
    if (window.location.pathname !== newPath) {
      window.history.pushState({ page: pageId }, '', newPath);
    }
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'funding':
        return <FundingPage onNavigate={handleNavigate} />;
      case 'registration':
        return <RegistrationPage onNavigate={handleNavigate} />;
      case 'trademark':
        return <TrademarkPage onNavigate={handleNavigate} />;
      case 'insurance':
        return <InsurancePage onNavigate={handleNavigate} />;
      case 'itsoftware':
        return <ITSoftwarePage onNavigate={handleNavigate} />;
      case 'marketing':
        return <DigitalMarketingPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-container">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}
