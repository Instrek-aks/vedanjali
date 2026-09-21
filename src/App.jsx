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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (pageId) => {
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
