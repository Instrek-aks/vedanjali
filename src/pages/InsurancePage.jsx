import React from 'react';
import FAQSection from '../components/FAQSection';
import CTABand from '../components/CTABand';

export default function InsurancePage({ onNavigate }) {
  const insuranceFaqs = [
    {
      question: 'What insurance does a small business actually need?',
      answer:
        'At minimum, cover for the premises and stock, liability cover in case a third party is harmed, and health cover for employees. Beyond that it depends on what you own, who you employ and what you are contractually required to hold.',
    },
    {
      question: 'Is group health insurance compulsory for my business?',
      answer:
        'Employee health cover is expected under several regulations and is often required by larger clients before they award contracts. Even where it is not mandatory, it is one of the cheapest ways to retain staff.',
    },
    {
      question: 'What is key man insurance?',
      answer:
        'Cover on the life of a person the business genuinely depends on, usually a founder or a key director. If that person is lost, the payout gives the business time to recover rather than collapsing with them. Lenders and investors often ask about it.',
    },
    {
      question: 'Do you sell the policy or advise on it?',
      answer:
        'We assess what cover the business actually needs, compare options across insurers and help you place and maintain the policy. The objective is appropriate cover, not the largest premium.',
    },
    {
      question: 'What happens at claim time?',
      answer:
        'This is where most policies disappoint people, usually because of an exclusion nobody explained at the time of sale. We go through exclusions with you upfront and assist with documentation when a claim arises.',
    },
  ];

  return (
    <div className="pg show" id="pg-insurance">
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
            &nbsp;/&nbsp; Insurance
          </div>
          <span className="kick">INSURANCE ADVISORY</span>
          <h1>Cover that actually pays when you need it.</h1>
          <p>
            Most businesses are either underinsured or paying for cover they will never claim. We assess what your business genuinely needs, explain the exclusions before you sign, and stay with you at claim time.
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
              Get an Insurance Review
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="svc">
            <div className="svc-grid">
              <div className="svc-l">
                <h3>Business &amp; Commercial Insurance</h3>
                <p>
                  Cover for the assets, the premises and the liabilities that come with running a business. Often a contractual requirement before larger clients will work with you.
                </p>
                <div className="pill-wrap">
                  <span className="pill">Needs assessed first</span>
                  <span className="pill">Exclusions explained</span>
                  <span className="pill">Claim support</span>
                </div>
              </div>
              <div className="sub-grid">
                <div className="sub-box">
                  <h4>Property &amp; Assets</h4>
                  <ul>
                    <li>Fire and property insurance</li>
                    <li>Stock and inventory cover</li>
                    <li>Machinery breakdown</li>
                    <li>Burglary and theft</li>
                  </ul>
                </div>
                <div className="sub-box">
                  <h4>Liability</h4>
                  <ul>
                    <li>Public liability</li>
                    <li>Product liability</li>
                    <li>Professional indemnity</li>
                    <li>Directors and officers cover</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="svc">
            <div className="svc-grid">
              <div className="svc-l">
                <h3>People &amp; Continuity</h3>
                <p>
                  Cover for the people the business depends on, and for the disruption caused if something happens to them. This is the category most businesses postpone and most regret postponing.
                </p>
              </div>
              <div className="sub-grid">
                <div className="sub-box">
                  <h4>Employee Cover</h4>
                  <ul>
                    <li>Group health insurance</li>
                    <li>Group personal accident</li>
                    <li>Workmen compensation policy</li>
                    <li>Group term life</li>
                  </ul>
                </div>
                <div className="sub-box">
                  <h4>Business Continuity</h4>
                  <ul>
                    <li>Key man insurance</li>
                    <li>Business interruption cover</li>
                    <li>Credit insurance</li>
                    <li>Cyber liability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="svc">
            <div className="svc-grid">
              <div className="svc-l">
                <h3>Trade, Transit &amp; Motor</h3>
                <p>
                  For businesses that move goods or run vehicles, where a single uninsured incident can wipe out a quarter of profit.
                </p>
              </div>
              <div className="sub-grid">
                <div className="sub-box">
                  <h4>Trade &amp; Transit</h4>
                  <ul>
                    <li>Marine and transit insurance</li>
                    <li>Import and export cover</li>
                    <li>Warehouse and storage cover</li>
                  </ul>
                </div>
                <div className="sub-box">
                  <h4>Motor &amp; Fleet</h4>
                  <ul>
                    <li>Commercial vehicle insurance</li>
                    <li>Fleet policies</li>
                    <li>Renewal and claims management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap">
          <span className="kick plain">WHY IT SITS WITH US</span>
          <h2>
            Insurance is a funding<br />
            conversation too.
          </h2>
          <p className="lead">
            Lenders ask what is insured before they lend against it. Buyers ask for liability cover before they award a contract. Because we already handle your funding, registration and compliance, we see where cover is missing before somebody else makes it a problem.
          </p>
          <div className="dstat">
            <div>
              <strong>Assessed, not sold</strong>
              <span>We start from what the business risks, not from what pays the highest commission.</span>
            </div>
            <div>
              <strong>Exclusions upfront</strong>
              <span>You are told what is not covered before you sign, not at claim time.</span>
            </div>
            <div>
              <strong>Renewals tracked</strong>
              <span>We tell you before a policy lapses rather than after.</span>
            </div>
            <div>
              <strong>Claim assistance</strong>
              <span>Documentation and follow up handled when you actually need it.</span>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        kick="FAQ"
        title="Insurance questions, answered plainly."
        subtitle="Straight answers, including the ones other consultants avoid."
        items={insuranceFaqs}
      />

      <CTABand
        title="Not sure what you are actually covered for?"
        text="Send us your existing policies. We will tell you what is covered, what is not, and where the real gaps are."
        btnText="Get an Insurance Review"
        onNavigate={onNavigate}
      />
    </div>
  );
}
