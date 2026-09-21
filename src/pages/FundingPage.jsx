import React from 'react';
import PartnerMarquee from '../components/PartnerMarquee';
import FAQSection from '../components/FAQSection';
import CTABand from '../components/CTABand';

export default function FundingPage({ onNavigate }) {
  const fundingFaqs = [
    {
      question: 'What is the difference between a secured and an unsecured business loan?',
      answer:
        'An unsecured business loan requires no collateral and is approved based on your cash flows, turnover, and credit score. A secured loan (such as a loan against property or machinery finance) uses an asset as collateral, allowing for larger sanction amounts, lower interest rates, and longer repayment tenures.',
    },
    {
      question: 'What is CGTMSE and can my business get a loan without collateral?',
      answer:
        'CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) is a government-backed guarantee scheme that enables eligible MSMEs to secure collateral-free business loans from partner banks and NBFCs up to Rs 5 crore.',
    },
    {
      question: 'How long does business loan approval take?',
      answer:
        'Unsecured business loans can be approved in 3 to 7 working days once all documents are verified. Secured loans like Loan Against Property or machinery finance take 10 to 20 working days due to legal title checks and technical property valuations.',
    },
    {
      question: 'Can a new business or startup get funding?',
      answer:
        'New startups can access seed grants, angel investment, government-backed schemes like Startup India Seed Fund, Mudra loans, or CGTMSE loans if eligibility conditions are met. We help prepare the project report and financial model required.',
    },
    {
      question: 'Do you charge a fee even if the loan is not approved?',
      answer:
        'No. We evaluate your profile and documents upfront and give you an honest appraisal of your chances before submission. Our terms are transparent and agreed upon before proceeding.',
    },
  ];

  return (
    <div className="pg show" id="pg-funding">
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
            &nbsp;/&nbsp; Business Funding
          </div>
          <span className="kick">FUNDING &amp; FINANCE</span>
          <h1>Business funding, arranged properly.</h1>
          <p>
            Most businesses miss loan sanctions not because they lack capacity, but because their applications are
            poorly prepared or sent to the wrong institution. We arrange and structure debt, capital and credit for
            every stage of your business.
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
              Check Your Eligibility
            </a>
            <a
              href="#funding-services"
              className="btn btn-o"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('funding-services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Funding Options
            </a>
          </div>
        </div>
      </section>

      {/* Core Funding Services */}
      <section className="sec" id="funding-services">
        <div className="wrap">
          {/* Service Block 1: Business Loan & Business Finance */}
          <div className="svc">
            <div className="svc-grid">
              <div className="svc-l">
                <h3>Business Loan &amp; Business Finance</h3>
                <p>
                  Working capital to cover orders, equipment funding to expand capacity, or long term finance to buy
                  premises. We structure the application so lenders see the strength in your business.
                </p>
                <div className="pill-wrap">
                  <span className="pill">Eligibility assessed first</span>
                  <span className="pill">70+ lender network</span>
                  <span className="pill">One accountable advisor</span>
                </div>
              </div>
              <div className="sub-grid">
                <div className="sub-box">
                  <h4>Business Loan</h4>
                  <ul>
                    <li>Unsecured business loan</li>
                    <li>Working capital loan</li>
                    <li>Term loan</li>
                    <li>Equipment &amp; machinery funding</li>
                  </ul>
                </div>
                <div className="sub-box">
                  <h4>MSME &amp; SME Funding</h4>
                  <ul>
                    <li>CGTMSE loan</li>
                    <li>Mudra loan</li>
                    <li>Working capital facility</li>
                    <li>Supply chain / vendor funding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Service Block 2: Startup Funding & Advisory */}
          <div className="svc">
            <div className="svc-grid">
              <div className="svc-l">
                <h3>Startup Funding &amp; Advisory</h3>
                <p>
                  Before you pitch to lenders or investors, your numbers need to hold up. We build the financial
                  projections, project reports and pitch decks that answer the questions lenders and investors actually
                  ask.
                </p>
              </div>
              <div className="sub-grid">
                <div className="sub-box">
                  <h4>Seed and Equity</h4>
                  <ul>
                    <li>Seed funding guidance</li>
                    <li>Pitch deck preparation</li>
                    <li>Financial model &amp; CMA</li>
                    <li>Term sheet review</li>
                    <li>Valuation report advisory</li>
                  </ul>
                </div>
                <div className="sub-box">
                  <h4>Machinery &amp; Equipment Finance</h4>
                  <ul>
                    <li>Machinery purchase finance</li>
                    <li>Plant &amp; machinery loan</li>
                    <li>Technology upgrade finance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Service Block 3: Property & Government Backed Funding */}
          <div className="svc">
            <div className="svc-grid">
              <div className="svc-l">
                <h3>Property &amp; Government Backed Funding</h3>
                <p>
                  Leverage property or government schemes to secure lower interest rates and longer tenures for
                  substantial capital requirements.
                </p>
              </div>
              <div className="sub-grid">
                <div className="sub-box">
                  <h4>Loan Against Property</h4>
                  <ul>
                    <li>Commercial property mortgage</li>
                    <li>Residential property mortgage</li>
                    <li>Balance transfer &amp; top-up</li>
                  </ul>
                </div>
                <div className="sub-box">
                  <h4>Government &amp; Credit Schemes</h4>
                  <ul>
                    <li>CGTMSE</li>
                    <li>PMEGP</li>
                    <li>Stand Up India / Mudra Scheme</li>
                    <li>National Scheduled Caste / Tribe Finance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lending Network Section */}
      <section className="sec tint" id="partners">
        <div className="wrap">
          <div className="sec-h mid">
            <span className="kick">OUR LENDING NETWORK</span>
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

      {/* Document Checklist Section */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-h">
            <span className="kick">DOCUMENT CHECKLIST</span>
            <h2>What lenders will ask for.</h2>
            <p>
              Every application needs a strong paper trail. Here is what we organize before submitting anything to a
              lender:
            </p>
          </div>

          <div className="tbl-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>DOCUMENT</th>
                  <th>WHY THE LENDER ASKS FOR IT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GST Returns</td>
                  <td>Confirms actual declared business turnover and sales velocity.</td>
                </tr>
                <tr>
                  <td>Bank account statements</td>
                  <td>Confirms daily liquidity, cash flow consistency and existing debt service.</td>
                </tr>
                <tr>
                  <td>ITR &amp; Audited Financials (2-3 yrs)</td>
                  <td>Demonstrates profitability, balance sheet strength and taxable track record.</td>
                </tr>
                <tr>
                  <td>KYC &amp; identity proofs</td>
                  <td>Establishes identity and citizenship of all promoters &amp; directors.</td>
                </tr>
                <tr>
                  <td>Project Report &amp; CMA Data</td>
                  <td>Mandatory for term loans, large working capital and equipment funding.</td>
                </tr>
                <tr>
                  <td>Collateral documents (if secured)</td>
                  <td>Required for property mortgage, machinery hypothecation or title verification.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Steps Section: From Enquiry to Disbursement */}
      <section className="sec tint">
        <div className="wrap">
          <div className="sec-h">
            <span className="kick">HOW IT WORKS</span>
            <h2>From enquiry to disbursement.</h2>
          </div>

          <div className="steps">
            <div className="step">
              <div className="n">01</div>
              <h4>Eligibility check</h4>
              <p>We review your documents and financials to identify the lenders most likely to approve your requirement.</p>
            </div>
            <div className="step">
              <div className="n">02</div>
              <h4>File preparation</h4>
              <p>We compile the CMA data, project report and supporting documents into a clean submission file.</p>
            </div>
            <div className="step">
              <div className="n">03</div>
              <h4>Lender matching</h4>
              <p>We submit the file to the lender best matched to your ticket size, industry and profile.</p>
            </div>
            <div className="step">
              <div className="n">04</div>
              <h4>Follow-through</h4>
              <p>We track the file through credit appraisal, queries and sanction until disbursement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        kick="FAQ"
        title="Funding questions, answered honestly."
        subtitle="Straight answers to questions about our lending and finance service."
        items={fundingFaqs}
      />

      {/* CTA Band */}
      <CTABand
        title="Want to know what you actually qualify for?"
        text="Send your numbers for a quick, no-obligation assessment. We will tell you what is feasible and what is not."
        btnText="Check My Eligibility"
        onNavigate={onNavigate}
      />
    </div>
  );
}
