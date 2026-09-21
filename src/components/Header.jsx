import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { LOGO_LIGHT } from '../data/images';

export default function Header({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when escape key pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Smart header hide on scroll down, reveal on scroll up
  useEffect(() => {
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

      setIsScrolled(currentScrollY > 15);

      if (menuOpen) {
        setHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= 60) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 4) {
        // Scrolling down -> hide
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 4) {
        // Scrolling up -> show
        setHeaderVisible(true);
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    onNavigate(pageId);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={`${!headerVisible ? 'header-hidden' : ''} ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="nav">
          <a
            className="brand"
            href="/"
            onClick={(e) => handleNavClick(e, 'home')}
            aria-label="Vedanjali Consultant Home"
          >
            <img src={LOGO_LIGHT} alt="Vedanjali Consultant" />
          </a>

          <div className={`menu ${menuOpen ? 'open' : ''}`} id="menu">
            <a
              href="/"
              className={currentPage === 'home' ? 'on' : ''}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
            <a
              href="/funding"
              className={currentPage === 'funding' ? 'on' : ''}
              onClick={(e) => handleNavClick(e, 'funding')}
            >
              Funding
            </a>
            <a
              href="/registration"
              className={currentPage === 'registration' ? 'on' : ''}
              onClick={(e) => handleNavClick(e, 'registration')}
            >
              Registration
            </a>
            <a
              href="/trademark"
              className={currentPage === 'trademark' ? 'on' : ''}
              onClick={(e) => handleNavClick(e, 'trademark')}
            >
              Trademark &amp; IP
            </a>
            <a
              href="/insurance"
              className={currentPage === 'insurance' ? 'on' : ''}
              onClick={(e) => handleNavClick(e, 'insurance')}
            >
              Insurance
            </a>
            <a
              href="/itsoftware"
              className={currentPage === 'itsoftware' ? 'on' : ''}
              onClick={(e) => handleNavClick(e, 'itsoftware')}
            >
              IT &amp; Software
            </a>
            <a
              href="/marketing"
              className={currentPage === 'marketing' ? 'on' : ''}
              onClick={(e) => handleNavClick(e, 'marketing')}
            >
              Digital Marketing
            </a>
            <a
              href="/about"
              className={currentPage === 'about' ? 'on' : ''}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
            <a
              href="/contact"
              className={`btn btn-p nav-cta-btn ${currentPage === 'contact' ? 'on' : ''}`}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Talk to an Advisor
            </a>
          </div>

          <ThemeToggle />

          <button
            className={`burger ${menuOpen ? 'open' : ''}`}
            id="burger"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`menu-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
