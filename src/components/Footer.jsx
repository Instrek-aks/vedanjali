import React from 'react';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleLink = (e, pageId) => {
    e.preventDefault();
    onNavigate(pageId);
  };

  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          {/* Brand & Mission Column */}
          <div className="fcol brand-col">
            <a
              href="/"
              className="fbrand"
              onClick={(e) => handleLink(e, 'home')}
              aria-label="Vedanjali Consultant Home"
            >
              <img src="/logo.png" alt="Vedanjali Consultant" className="flogo-img" />
              <div className="flogo-text">
                <span className="flogo-title">Vedanjali</span>
                <span className="flogo-sub">Consultant</span>
              </div>
            </a>
            <p>
              End-to-end consulting for business funding, company registration, trademark &amp; IP protection, insurance advisory, plus custom software, ERP and digital marketing.
            </p>
          </div>

          {/* Core Services (All Unique Route Pages) */}
          <div className="fcol">
            <h5>Our Services</h5>
            <ul>
              <li><a href="/funding" onClick={(e) => handleLink(e, 'funding')}>Business Funding &amp; Loans</a></li>
              <li><a href="/registration" onClick={(e) => handleLink(e, 'registration')}>Company &amp; MSME Registration</a></li>
              <li><a href="/trademark" onClick={(e) => handleLink(e, 'trademark')}>Trademark, Patent &amp; IP</a></li>
              <li><a href="/insurance" onClick={(e) => handleLink(e, 'insurance')}>Business Insurance Advisory</a></li>
              <li><a href="/itsoftware" onClick={(e) => handleLink(e, 'itsoftware')}>IT, ERP &amp; Custom Software</a></li>
              <li><a href="/marketing" onClick={(e) => handleLink(e, 'marketing')}>Digital Marketing &amp; SEO</a></li>
            </ul>
          </div>

          {/* Company & Quick Links */}
          <div className="fcol">
            <h5>Company</h5>
            <ul>
              <li><a href="/about" onClick={(e) => handleLink(e, 'about')}>About Vedanjali</a></li>
              <li><a href="/funding" onClick={(e) => handleLink(e, 'funding')}>70+ Lending Partners</a></li>
              <li><a href="/itsoftware" onClick={(e) => handleLink(e, 'itsoftware')}>Software Architectures</a></li>
              <li><a href="/about" onClick={(e) => handleLink(e, 'about')}>How We Work</a></li>
              <li><a href="/contact" onClick={(e) => handleLink(e, 'contact')}>Book Consultation</a></li>
            </ul>
          </div>

          {/* Direct Contact & Support */}
          <div className="fcol">
            <h5>Get In Touch</h5>
            <div className="fcontact-item">
              <span className="ficon">&#9742;</span>
              <div>
                <a href="tel:+919213588029">+91 92135 88029</a>
              </div>
            </div>
            <div className="fcontact-item">
              <span className="ficon">&#9993;</span>
              <div>
                <a href="mailto:info@vedanjaliconsultant.in">info@vedanjaliconsultant.in</a>
              </div>
            </div>
            <div className="fcontact-item">
              <span className="ficon">&#9200;</span>
              <div>Mon - Sat: 9:30 AM - 7:00 PM</div>
            </div>
            <div style={{ marginTop: '14px' }}>
              <a
                href="/contact"
                className="btn btn-p"
                style={{ padding: '8px 16px', fontSize: '13px', minHeight: '36px' }}
                onClick={(e) => handleLink(e, 'contact')}
              >
                Talk to an Advisor
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="fbot">
          <div>&copy; <span id="yr">{currentYear}</span> Vedanjali Consultant. All rights reserved.</div>
          <div>
            <a href="mailto:info@vedanjaliconsultant.in">info@vedanjaliconsultant.in</a> &nbsp;&middot;&nbsp;{' '}
            <a href="tel:+919213588029">+91 92135 88029</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
