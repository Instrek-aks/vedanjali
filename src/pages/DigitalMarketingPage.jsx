import React from 'react';
import FAQSection from '../components/FAQSection';
import CTABand from '../components/CTABand';

export default function DigitalMarketingPage({ onNavigate }) {
  const marketingFaqs = [
    {
      question: 'What is SEO in simple words?',
      answer:
        'The work that makes your business appear when somebody searches for what you sell. Some of it is technical on the website itself, and some of it is content and local listings built up over time.',
    },
    {
      question: 'How long before I see results from SEO?',
      answer:
        'Initial improvements usually show in 60 to 90 days as search engines index new content. Meaningful traffic and regular inbound enquiries typically build between 4 to 6 months of steady work.',
    },
    {
      question: 'Should I do ads or SEO?',
      answer:
        'Ads give you enquiries starting from day one, while SEO builds compounding free organic traffic over time. Most healthy businesses run targeted ads for immediate pipeline while building SEO for long-term independence.',
    },
    {
      question: 'How much should I spend on ads?',
      answer:
        'We start with a test budget to establish your customer acquisition cost (CAC). Once the unit economics are proven profitable, you scale the ad budget with confidence.',
    },
    {
      question: 'How will I know the marketing is working?',
      answer:
        'Through lead count and revenue generated, not vanity likes or impressions. We connect campaign tracking to your CRM or WhatsApp so every lead is accounted for.',
    },
    {
      question: 'Do I need to be on every social platform?',
      answer:
        'No. B2B businesses usually need LinkedIn and Google Search. B2C, retail and food brands need Instagram and Meta. Being dominant on the 1 or 2 platforms where your actual buyers spend time is far more profitable than spreading thin everywhere.',
    },
  ];

  return (
    <div className="pg show" id="pg-marketing">
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
            &nbsp;/&nbsp; Digital Marketing
          </div>
          <span className="kick">DIGITAL MARKETING &amp; BRANDING</span>
          <h1>Marketing that is measured, not just posted.</h1>
          <p>
            A website without traffic is like an expensive sign in a dark alley. Because we understand the whole funnel
            (from ad to CRM), we can follow a rupee of spend all the way through to a closed order rather than stopping
            at clicks.
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
              Ask for a Free Audit
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid (4 Cards in 2x2) */}
      <section className="sec">
        <div className="wrap">
          <div className="grid g2">
            <div className="card">
              <div className="no">01</div>
              <h3>Search &amp; SEO</h3>
              <p>
                Technical SEO, content structure, local business Google Business Profile, and content that people
                actually search for. We study what your market is looking for and build content that ranks for years
                rather than days.
              </p>
            </div>

            <div className="card">
              <div className="no">02</div>
              <h3>Paid advertising</h3>
              <p>
                Google Search ads, Meta (Instagram &amp; Facebook) ads, and remarketing campaigns planned around ROI
                rather than impressions. We study CAC and track conversion all the way to closed revenue.
              </p>
            </div>

            <div className="card">
              <div className="no">03</div>
              <h3>Social media management</h3>
              <p>
                Channel setup, a consistent monthly editorial calendar, creatives that look like they belong to the same
                brand, and active comment &amp; message handling so customer leads are captured.
              </p>
            </div>

            <div className="card">
              <div className="no">04</div>
              <h3>Logo &amp; brand identity</h3>
              <p>
                Logos, brand books, visiting cards, brochures, company presentation decks, and social media kits from
                one unified brand design system, so everything a customer touches feels authoritative and unified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Every Month / Table Section */}
      <section className="sec tint">
        <div className="wrap">
          <div className="sec-h">
            <span className="kick">WHAT YOU GET EVERY MONTH</span>
            <h2>No mystery, no vanity metrics.</h2>
          </div>

          <div className="tbl-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>WHAT WE REPORT</th>
                  <th>WHY IT MATTERS TO YOU</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enquiries received</td>
                  <td>The only number that turns into revenue.</td>
                </tr>
                <tr>
                  <td>Cost per enquiry</td>
                  <td>Tells you whether the math of scaling ads works for your ticket size.</td>
                </tr>
                <tr>
                  <td>Search visibility</td>
                  <td>Whether you are moving up organic rankings on Google search over time.</td>
                </tr>
                <tr>
                  <td>Content published</td>
                  <td>What went out, approved by you in advance.</td>
                </tr>
                <tr>
                  <td>What we are changing next</td>
                  <td>The next action plan, based on real data.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        kick="FAQ"
        title="Marketing questions, answered honestly."
        subtitle="Straight answers, including the ones other consultants avoid."
        items={marketingFaqs}
      />

      {/* CTA Band */}
      <CTABand
        title="Want to know which channels will actually work?"
        text="Send us your website or profile. We will run a preliminary audit and tell you honestly where the real gaps and opportunities are."
        btnText="Get a Free Audit"
        onNavigate={onNavigate}
      />
    </div>
  );
}
