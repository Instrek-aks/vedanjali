import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { LOGO_LIGHT, LOGO_DARK } from '../data/images';

export default function Header({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    onNavigate(pageId);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="nav">
        <a
          className="brand"
          href="#"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Vedanjali Consultant Home"
        >
          <img className="logo-light" src={LOGO_LIGHT} alt="Vedanjali Consultant" width="80" />
          <img className="logo-dark" src={LOGO_DARK} alt="Vedanjali Consultant" width="104" />
        </a>

        <div className={`menu ${menuOpen ? 'open' : ''}`} id="menu">
          <a
            href="#"
            className={currentPage === 'home' ? 'on' : ''}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#"
            className={currentPage === 'funding' ? 'on' : ''}
            onClick={(e) => handleNavClick(e, 'funding')}
          >
            Funding
          </a>
          <a
            href="#"
            className={currentPage === 'registration' ? 'on' : ''}
            onClick={(e) => handleNavClick(e, 'registration')}
          >
            Registration
          </a>
          <a
            href="#"
            className={currentPage === 'trademark' ? 'on' : ''}
            onClick={(e) => handleNavClick(e, 'trademark')}
          >
            Trademark &amp; IP
          </a>
          <a
            href="#"
            className={currentPage === 'insurance' ? 'on' : ''}
            onClick={(e) => handleNavClick(e, 'insurance')}
          >
            Insurance
          </a>
          <a
            href="#"
            className={currentPage === 'itsoftware' ? 'on' : ''}
            onClick={(e) => handleNavClick(e, 'itsoftware')}
          >
            IT &amp; Software
          </a>
          <a
            href="#"
            className={currentPage === 'marketing' ? 'on' : ''}
            onClick={(e) => handleNavClick(e, 'marketing')}
          >
            Digital Marketing
          </a>
          <a
            href="#"
            className={currentPage === 'about' ? 'on' : ''}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          <a
            href="#"
            className={`btn btn-p ${currentPage === 'contact' ? 'on' : ''}`}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Talk to an Advisor
          </a>
        </div>

        <ThemeToggle />

        <button
          className="burger"
          id="burger"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
