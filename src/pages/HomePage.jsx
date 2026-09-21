import React from 'react';
import PartnerMarquee from '../components/PartnerMarquee';
import FAQSection from '../components/FAQSection';
import CTABand from '../components/CTABand';
import {
  MOCKUP_ERP_DASHBOARD,
  MOCKUP_APP_GROCERY,
  MOCKUP_APP_DELIVERY,
  MOCKUP_APP_PAYMENT,
} from '../data/images';

export default function HomePage({ onNavigate }) {
  const homeFaqs = [
    {
      question: 'What documents do I need to apply for a business loan?',
      answer:
        'Typically, lenders require 12 months of bank statements, 2-3 years of ITR/financials, GST returns, business registration proof, and promoter KYC. We review and organize all your documents before submission to maximize approval chances.',
    },
    {
      question: 'How long does company registration usually take in India?',
      answer:
        'Pvt Ltd and LLP registrations generally take 5 to 7 working days once all promoter documents and digital signature certificates (DSC) are ready. We handle the end-to-end filing with MCA and SPICe+ forms.',
    },
    {
      question: 'Can you guarantee that my trademark will be approved?',
      answer:
        'No consultant or attorney can guarantee trademark approval because the final decision rests with the Trademark Registry. However, we conduct rigorous pre-filing search and classification to minimize objections and prepare strong responses if queries arise.',
    },
    {
      question: 'Do you only work with large companies?',
      answer:
        'Not at all. We work with early-stage startups, MSMEs, small business owners, as well as established enterprises. Our team tailors solutions according to the size and specific stage of your business.',
    },
    {
      question: 'Can you handle funding, registration and my website together?',
      answer:
        'Yes! That is the core advantage of Vedanjali Consultant. You get a single accountable advisor who coordinates across our funding, legal compliance, and IT development teams so you do not have to manage multiple vendors.',
    },
  ];

  return (
    <div className="pg show" id="pg-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="kick">Business Advisory &amp; Consulting</span>
            <h1>
              Funding, registration and the <em>systems</em> your business runs on.
            </h1>
            <p className="lead">
              From raising working capital to registering your company, protecting your brand and building
              the software behind it, Vedanjali Consultant handles the work that keeps a business moving. One team, one
              point of contact, start to finish.
            </p>
            <div className="hero-cta">
              <a
                href="#"
                className="btn btn-p"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
              >
                Get a Free Consultation
              </a>
              <a
                href="#services"
                className="btn btn-o"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Services
              </a>
            </div>
            <div className="trust">
              <div>
                <strong>7</strong>
                <span>Service verticals</span>
              </div>
              <div>
                <strong>360&deg;</strong>
                <span>Start to compliance</span>
              </div>
              <div>
                <strong>1</strong>
                <span>Point of contact</span>
              </div>
            </div>
          </div>

          <div className="hcard">
            <h3>What are you looking for?</h3>
            <div className="sub">
              Tell us the stage you are at, and we will point you to the right service.
            </div>
            <ul>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                >
                  <b>01</b>
                  <span>I need funding for my business</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('registration');
                  }}
                >
                  <b>02</b>
                  <span>I want to register a new company</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('trademark');
                  }}
                >
                  <b>03</b>
                  <span>I want to protect my brand name</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                >
                  <b>04</b>
                  <span>I need a project report or pitch deck</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('itsoftware');
                  }}
                >
                  <b>05</b>
                  <span>I need a website, app or software</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('itsoftware');
                  }}
                >
                  <b>06</b>
                  <span>I need more customers online</span>
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="btn btn-p"
              style={{ width: '100%', marginTop: '20px' }}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
            >
              Speak to an Advisor
            </a>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="sec tint" id="services">
        <div className="wrap">
          <div className="sec-h">
            <span className="kick">Our core services</span>
            <h2>Seven services. One team behind all of them.</h2>
            <p>
              Most businesses end up with a different consultant for every problem. We built Vedanjali so you do not
              have to explain your business more than once.
            </p>
          </div>
          <div className="grid g4">
            <a
              className="card"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
            >
              <div className="no">01</div>
              <h3>Business Funding &amp; Finance</h3>
              <p>Unsecured loans, working capital, term loans, machinery finance and loan against property.</p>
              <span className="more">Explore funding &rarr;</span>
            </a>
            <a
              className="card"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('registration');
              }}
            >
              <div className="no">02</div>
              <h3>Company Registration &amp; Compliance</h3>
              <p>Private limited, LLP, partnership, Section 8, GST, Udyam and ongoing compliance.</p>
              <span className="more">Explore registration &rarr;</span>
            </a>
            <a
              className="card"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
            >
              <div className="no">03</div>
              <h3>Startup &amp; Business Consultancy</h3>
              <p>Project reports, pitch decks, financial projections and Startup India advisory.</p>
              <span className="more">Explore consultancy &rarr;</span>
            </a>
            <a
              className="card"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('trademark');
              }}
            >
              <div className="no">04</div>
              <h3>Trademark, Patent &amp; IP</h3>
              <p>Trademark registration and renewal, patents, copyright, design and IP consultancy.</p>
              <span className="more">Protect your brand &rarr;</span>
            </a>
            <a
              className="card"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('itsoftware');
              }}
            >
              <div className="no">05</div>
              <h3>IT &amp; Software Solutions</h3>
              <p>Websites, mobile apps, custom ERP, intelligent CRM and ready-built industry systems.</p>
              <span className="more">See our work &rarr;</span>
            </a>
            <a
              className="card"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('itsoftware');
              }}
            >
              <div className="no">06</div>
              <h3>Digital Marketing &amp; Branding</h3>
              <p>SEO, paid advertising, social media management, logo and brand identity.</p>
              <span className="more">Grow online &rarr;</span>
            </a>
            <a
              className="card"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('registration');
              }}
            >
              <div className="no">07</div>
              <h3>Certification &amp; Licensing</h3>
              <p>FSSAI, IEC, MSME, DPIIT and the registrations your sector requires.</p>
              <span className="more">Get licensed &rarr;</span>
            </a>
            <div
              className="card card-dark-cta"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
            >
              <div className="no">
                Not sure?
              </div>
              <h3>Start with a conversation</h3>
              <p>
                Tell us the problem. We will tell you what solves it, or if you do not need us for it.
              </p>
              <a
                href="#"
                className="btn btn-p"
                style={{ marginTop: '15px', padding: '11px 20px', fontSize: '14px', alignSelf: 'flex-start' }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onNavigate('contact');
                }}
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lending Network Section */}
      <section className="sec tint" id="partners">
        <div className="wrap">
          <div className="sec-h mid">
            <span className="kick">Our lending network</span>
            <h2>Channel partners with 70+ banks and NBFCs.</h2>
            <p>
              One application, assessed against the criteria of the institutions most likely to approve it. That is the
              difference between applying and applying well.
            </p>
          </div>
        </div>

        <PartnerMarquee />

        <div className="wrap">
          <div className="mq-cta">
            <span className="mq-count">
              <b>70+</b> Banks &amp; NBFCs in our network
            </span>
          </div>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--muted)',
              textAlign: 'center',
              marginTop: '20px',
              maxWidth: '760px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Names shown are of institutions within our lending network. Sanction remains at the sole discretion of the
            respective lender.
          </p>
        </div>
      </section>

      {/* Work We Have Built Section */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-h mid">
            <span className="kick">Work we have built</span>
            <h2>We do not just advise. We build.</h2>
            <p>
              Websites, dashboards and apps delivered for real businesses across travel, manufacturing, education,
              healthcare and retail.
            </p>
          </div>

          <div className="laptop">
            <div className="lid">
              <img
                src={MOCKUP_ERP_DASHBOARD}
                alt="ERP dashboard built by Vedanjali Consultant"
                loading="lazy"
              />
            </div>
            <div className="base"></div>
            <div className="stand"></div>
          </div>
          <div className="devcap">
            Custom ERP dashboard, built around one client&rsquo;s actual plant workflow
          </div>

          <div className="phone-row" style={{ marginTop: '56px' }}>
            <div className="phone">
              <img
                src={MOCKUP_APP_GROCERY}
                alt="Grocery ordering mobile app built by Vedanjali Consultant"
                loading="lazy"
              />
            </div>
            <div className="phone">
              <img
                src={MOCKUP_APP_DELIVERY}
                alt="Rider & delivery mobile app built by Vedanjali Consultant"
                loading="lazy"
              />
            </div>
            <div className="phone">
              <img
                src={MOCKUP_APP_PAYMENT}
                alt="Laundry service mobile app built by Vedanjali Consultant"
                loading="lazy"
              />
            </div>
          </div>
          <div className="devcap">
            Customer, rider and ops apps for a 15-minute grocery startup
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a
              href="#"
              className="btn btn-o"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('itsoftware');
              }}
            >
              See all IT &amp; software work
            </a>
          </div>
        </div>
      </section>

      {/* Everything Under One Roof Section */}
      <section className="dark">
        <div className="wrap">
          <span className="kick plain">Why Vedanjali</span>
          <h2>
            Everything under one roof,<br />and one person accountable.
          </h2>
          <p className="lead">
            We do not hand off your work to junior teams or leave you tracking six different vendors. One dedicated
            advisor handles your profile from start to finish.
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
          <div style={{ marginTop: '40px' }}>
            <a
              href="#"
              className="btn btn-p"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Four Steps Section */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-h">
            <span className="kick">How we work</span>
            <h2>Four steps, no surprises.</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="n">01</div>
              <h4>Consultation</h4>
              <p>We listen, review your profile and give you a realistic path forward.</p>
            </div>
            <div className="step">
              <div className="n">02</div>
              <h4>Assessment</h4>
              <p>Deep analysis of your numbers, documentation and eligibility.</p>
            </div>
            <div className="step">
              <div className="n">03</div>
              <h4>Preparation &amp; Filing</h4>
              <p>Building the file, project report or software specs properly.</p>
            </div>
            <div className="step">
              <div className="n">04</div>
              <h4>Follow Through</h4>
              <p>We stay on it until sanction, registration or delivery is complete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        kick="FAQ"
        title="The questions clients ask us first."
        subtitle="Straight answers to help you understand how we work."
        items={homeFaqs}
      />

      {/* CTA Band */}
      <CTABand onNavigate={onNavigate} />
    </div>
  );
}
