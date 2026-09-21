import React from 'react';
import FAQSection from '../components/FAQSection';
import CTABand from '../components/CTABand';

export default function RegistrationPage({ onNavigate }) {
  const registrationFaqs = [
    {
      question: 'Should I register a private limited company or an LLP?',
      answer:
        'A private limited company is the right structure if you plan to raise investment, because investors expect shares. An LLP has lighter compliance and suits professional firms and family run businesses that do not intend to raise outside capital. Choosing wrongly is expensive to undo later, so we advise before you file.',
    },
    {
      question: 'How long does company registration take?',
      answer:
        'Usually seven to fifteen working days once documents are in order. Name approval is the stage that most often causes delay, which is why we check name availability properly before applying.',
    },
    {
      question: 'What is Udyam registration and do I need it?',
      answer:
        'Udyam is the government registration that formally recognises your business as a micro, small or medium enterprise. It is free, quick, and it unlocks MSME benefits including priority lending, subsidies and protection against delayed payments. Almost every small business should have it.',
    },
    {
      question: 'What is DPIIT recognition and the 80-IAC exemption?',
      answer:
        'DPIIT recognition marks your company as a recognised startup, which opens access to government schemes and tenders. Section 80-IAC is a separate approval that gives eligible startups a three year income tax exemption. They are applied for separately and the criteria are strict, so we assess eligibility first.',
    },
    {
      question: 'What compliance is required after registration?',
      answer:
        'Annual returns and financial statements, board and statutory records, GST returns if registered, and director or partner filings. Missing them attracts penalties that accumulate quietly, which is why we offer an ongoing compliance calendar rather than only handling the registration.',
    },
  ];

  return (
    <div className="pg show" id="pg-registration">
      <section className="phero">
        <div className="wrap">
          <div className="crumb">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
            >
              Home
            </a>{' '}
            &nbsp;/&nbsp; Company Registration
          </div>
          <span className="kick">COMPANY &amp; COMPLIANCE</span>
          <h1>Register once. Stay compliant after.</h1>
          <p>
            Registration is the easy part. What catches most founders out is everything that becomes due afterwards. We set the business up correctly, then keep it in good standing.
          </p>
          <div className="btns">
            <a
              href="#"
              className="btn btn-p"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
            >
              Register My Business
            </a>
            <a
              href="#compare"
              className="btn btn-o"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('compare');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Compare Structures
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="svc-grid">
            <div className="svc-l">
              <h3>Business &amp; Company Services</h3>
              <p>
                Choosing the wrong structure is expensive to undo later. We advise on which entity actually suits your plans, your funding route and your tax position, then complete the registration end to end.
              </p>
              <div className="pill-wrap">
                <span className="pill">Name check first</span>
                <span className="pill">Documents handled</span>
                <span className="pill">Compliance calendar</span>
              </div>
            </div>
            <div className="sub-grid">
              <div className="sub-box">
                <h4>Company Registration</h4>
                <ul>
                  <li>Private limited company</li>
                  <li>LLP registration</li>
                  <li>Partnership firm</li>
                  <li>Section 8 company</li>
                </ul>
              </div>
              <div className="sub-box">
                <h4>Startup Registrations</h4>
                <ul>
                  <li>Startup India registration</li>
                  <li>DPIIT registration</li>
                  <li>Tax exemption under 80-IAC</li>
                </ul>
              </div>
              <div className="sub-box" id="licensing">
                <h4>Statutory &amp; Licensing</h4>
                <ul>
                  <li>MSME / Udyam registration</li>
                  <li>GST registration</li>
                  <li>IEC code</li>
                  <li>FSSAI registration</li>
                </ul>
              </div>
              <div className="sub-box">
                <h4>Ongoing Compliance</h4>
                <ul>
                  <li>Annual filings and returns</li>
                  <li>Statutory record keeping</li>
                  <li>Business compliance services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec tint" id="compare">
        <div className="wrap">
          <div className="sec-h">
            <span className="kick">CHOOSING A STRUCTURE</span>
            <h2>Which entity is right for you?</h2>
            <p>The honest short version, before anybody sells you the most expensive option.</p>
          </div>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Private Limited</th>
                  <th>LLP</th>
                  <th>Partnership</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Best for</td>
                  <td>Startups raising investment</td>
                  <td>Professional and family firms</td>
                  <td>Small local businesses</td>
                </tr>
                <tr>
                  <td>Liability</td>
                  <td>Limited</td>
                  <td>Limited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Can raise equity</td>
                  <td>Yes</td>
                  <td>Difficult</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Compliance load</td>
                  <td>Higher</td>
                  <td>Moderate</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <td>Credibility with lenders</td>
                  <td>Strongest</td>
                  <td>Good</td>
                  <td>Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '16px' }}>
            This is a general comparison. The right answer depends on your funding plans, your partners and your tax position, which is what the consultation is for.
          </p>
        </div>
      </section>

      <FAQSection
        kick="FAQ"
        title="Registration questions, answered plainly."
        subtitle="Straight answers, including the ones other consultants avoid."
        items={registrationFaqs}
      />

      <CTABand
        title="Not sure which registration you need?"
        text="Tell us what the business does and what you plan to do next. We will tell you exactly what to register, and what you can safely skip."
        btnText="Talk to an Advisor"
        onNavigate={onNavigate}
      />
    </div>
  );
}
