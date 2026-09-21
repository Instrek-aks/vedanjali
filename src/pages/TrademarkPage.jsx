import React from 'react';
import FAQSection from '../components/FAQSection';
import CTABand from '../components/CTABand';

export default function TrademarkPage({ onNavigate }) {
  const trademarkFaqs = [
    {
      question: 'How long does trademark registration take?',
      answer:
        'You can use the TM symbol as soon as the application is filed, usually within a few days. Full registration and the R symbol take considerably longer because of examination and publication stages, and objections are common. We handle objections and hearings as part of the service.',
    },
    {
      question: 'What is the difference between TM and R?',
      answer:
        'TM can be used immediately after filing and signals that you claim the mark. R can only be used once the trademark is formally registered, and it carries far stronger legal protection.',
    },
    {
      question: 'What happens if my trademark gets an objection?',
      answer:
        'Objections are routine, not a failure. The registry raises a concern and we file a written reply, attend a hearing if required, and argue the case. Handling the objection properly is where most of the value of a trademark service actually sits.',
    },
    {
      question: 'Can I trademark my logo and my name separately?',
      answer:
        'Yes, and often you should. A word mark protects the name in any styling, while a device mark protects the logo as designed. If the name is the asset, the word mark is usually the priority.',
    },
    {
      question: 'What is the difference between a trademark, a patent and a copyright?',
      answer:
        'A trademark protects a brand name or logo. A patent protects an invention or a technical process. A copyright protects original creative work such as writing, design, music or code. Many businesses need more than one.',
    },
  ];

  return (
    <div className="pg show" id="pg-trademark">
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
            &nbsp;/&nbsp; Trademark &amp; IP
          </div>
          <span className="kick">TRADEMARK, PATENT &amp; IP</span>
          <h1>Protect the name before somebody else does.</h1>
          <p>
            Most businesses think about trademarks only after a problem arrives. By then the options are fewer and the cost is higher. Registering early is the cheapest insurance a brand can buy.
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
              Start a Trademark Search
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="svc-grid">
            <div className="svc-l">
              <h3>Intellectual Property &amp; Legal Registrations</h3>
              <p>
                From a first trademark search through to objections, hearings and renewals, we handle the full lifecycle, so your brand, your product and your design stay yours.
              </p>
              <div className="pill-wrap">
                <span className="pill">Preliminary search</span>
                <span className="pill">Objection handling</span>
                <span className="pill">Renewal reminders</span>
              </div>
            </div>
            <div className="sub-grid">
              <div className="sub-box">
                <h4>Trademark</h4>
                <ul>
                  <li>Trademark registration</li>
                  <li>Trademark renewal</li>
                  <li>Trademark objection reply</li>
                  <li>Hearing representation</li>
                </ul>
              </div>
              <div className="sub-box">
                <h4>Other Intellectual Property</h4>
                <ul>
                  <li>Patent registration</li>
                  <li>Copyright registration</li>
                  <li>Design registration</li>
                  <li>IP protection and consultancy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec tint">
        <div className="wrap">
          <div className="sec-h">
            <span className="kick">THE PROCESS</span>
            <h2>How a trademark actually gets registered.</h2>
            <p>Knowing the stages upfront prevents the anxiety that comes when an objection lands.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="n">01</div>
              <h4>Search</h4>
              <p>We check whether the mark is available and flag conflicts before you spend on filing.</p>
            </div>
            <div className="step">
              <div className="n">02</div>
              <h4>Filing</h4>
              <p>Application filed in the correct class. You can use the TM symbol from this point.</p>
            </div>
            <div className="step">
              <div className="n">03</div>
              <h4>Examination</h4>
              <p>The registry reviews it. If an objection is raised, we draft the reply and attend the hearing.</p>
            </div>
            <div className="step">
              <div className="n">04</div>
              <h4>Registration</h4>
              <p>Once published without opposition, the mark is registered and the R symbol can be used.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        kick="FAQ"
        title="Trademark and IP questions."
        subtitle="Straight answers, including the ones other consultants avoid."
        items={trademarkFaqs}
      />

      <CTABand
        title="Is your brand name still available?"
        text="Send us the name and we will run a preliminary search and tell you honestly whether it is worth filing."
        btnText="Check My Brand Name"
        onNavigate={onNavigate}
      />
    </div>
  );
}
