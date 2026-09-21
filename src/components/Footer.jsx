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
          <div className="fcol brand-col">
            <div className="flogo">Vedanjali Consultant</div>
            <p>
              Business funding, company registration, trademark &amp; patent protection, business insurance advisory, plus custom websites, ERP, CRM and digital marketing. Delivered end-to-end.
            </p>
          </div>
          <div className="fcol">
            <h5>Funding Solutions</h5>
            <ul>
              <li><a href="#" onClick={(e) => handleLink(e, 'home')}>Business Loans</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'home')}>MSME &amp; SME Funding</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'home')}>Startup Funding Advisory</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'home')}>Loan Against Property</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'home')}>CGTMSE &amp; CGSS Schemes</a></li>
            </ul>
          </div>
          <div className="fcol">
            <h5>Registration &amp; IP</h5>
            <ul>
              <li><a href="#" onClick={(e) => handleLink(e, 'registration')}>Pvt Ltd &amp; LLP Registration</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'registration')}>Startup India &amp; DPIIT</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'registration')}>MSME / Udyam &amp; GST</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'trademark')}>Trademark Registration</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'trademark')}>Patent &amp; Copyright</a></li>
            </ul>
          </div>
          <div className="fcol">
            <h5>Insurance &amp; Tech</h5>
            <ul>
              <li><a href="#" onClick={(e) => handleLink(e, 'insurance')}>Business &amp; Asset Insurance</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'insurance')}>Group Health &amp; Keyman Cover</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'itsoftware')}>Websites &amp; Mobile Apps</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'itsoftware')}>ERP &amp; CRM Systems</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'itsoftware')}>Digital Marketing</a></li>
            </ul>
          </div>
        </div>
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
