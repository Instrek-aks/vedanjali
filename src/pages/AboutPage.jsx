import React from 'react';
import CTABand from '../components/CTABand';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="pg show" id="pg-about">
      {/* Page Hero */}
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
            &nbsp;/&nbsp; About
          </div>
          <span className="kick">ABOUT US</span>
          <h1>One firm, instead of four vendors.</h1>
          <p>
            Vedanjali Consultant exists because growing a business in India means dealing with funding, registration,
            compliance, intellectual property and technology at the same time, usually through people who have never
            spoken to each other.
          </p>
        </div>
      </section>

      {/* What We Do & Pillars Section */}
      <section className="sec">
        <div className="wrap">
          <div className="svc-grid">
            <div className="svc-l">
              <h3>What we do</h3>
              <p>
                We handle the work that sits between an idea and a working business. Raising the money, forming the
                entity, keeping it compliant, protecting the brand, building the systems it runs on, and bringing
                customers to it.
              </p>
              <p style={{ marginTop: '16px' }}>
                Every one of those is a service somebody else will happily sell you in isolation. The difference here is
                that they are coordinated, by people who already understand your business because you explained it once.
              </p>
            </div>

            <div className="sub-grid">
              <div className="sub-box">
                <h4>Who we work with</h4>
                <ul>
                  <li>Proprietorships and small businesses</li>
                  <li>Early stage startups</li>
                  <li>MSME manufacturers and traders</li>
                  <li>Clinics, restaurants and retail</li>
                  <li>Professional and service firms</li>
                </ul>
              </div>

              <div className="sub-box">
                <h4>What we believe</h4>
                <ul>
                  <li>Say no when a service will not help</li>
                  <li>Put scope in writing before starting</li>
                  <li>Explain in plain words, never jargon</li>
                  <li>The client owns everything we build</li>
                  <li>A delayed answer beats a wrong one</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Band - How We Are Different */}
      <section className="dark">
        <div className="wrap">
          <span className="kick plain">HOW WE ARE DIFFERENT</span>
          <h2>
            Advice you can act on,<br />
            not a proposal you cannot read.
          </h2>
          <p className="lead">
            Consulting has a reputation for producing documents nobody uses. We would rather be judged on whether the
            loan came through, the company got registered, the trademark held, and the software actually went live.
          </p>

          <div className="dstat">
            <div>
              <strong>Told straight</strong>
              <span>If you do not need a service, we say so, even when it costs us the engagement.</span>
            </div>
            <div>
              <strong>One accountable owner</strong>
              <span>The same advisor stays with you across every service.</span>
            </div>
            <div>
              <strong>Fixed scope</strong>
              <span>Agreed in writing before work starts, so invoices never surprise anyone.</span>
            </div>
            <div>
              <strong>You own it</strong>
              <span>Domain, data, code and registrations are all in your name.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Start with one conversation."
        text="Tell us where the business is and what is blocking it. The first conversation costs nothing."
        btnText="Get a Free Consultation"
        onNavigate={onNavigate}
      />
    </div>
  );
}
