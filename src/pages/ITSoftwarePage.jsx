import React from 'react';
import FAQSection from '../components/FAQSection';
import CTABand from '../components/CTABand';

export default function ITSoftwarePage({ onNavigate }) {
  const itFaqs = [
    {
      question: 'Do we own the code and the IP?',
      answer:
        'Yes, completely. Once the project is paid for, all custom code, designs, database schemas and intellectual property belong to you. We do not retain vendor lock-in.',
    },
    {
      question: 'How long does a website or custom app typically take?',
      answer:
        'A standard corporate website takes 2 to 3 weeks. A full custom ERP or mobile app typically takes 6 to 12 weeks, depending on complexity, third-party APIs and custom workflows.',
    },
    {
      question: 'What happens after launch?',
      answer:
        'We provide post-launch support and bug fixing, and can manage hosting, security patches and ongoing feature development on a flexible monthly retainer.',
    },
    {
      question: 'Can you integrate with our existing software?',
      answer:
        'Yes. We integrate with Tally, payment gateways, WhatsApp Business API, SMS providers, biometric attendance machines and any modern system with an open API.',
    },
    {
      question: 'Why work with you instead of an agency or freelance dev?',
      answer:
        'You get a dedicated engineering team (UI designer, frontend, backend, DevOps) managed by one accountable lead who also understands your business funding, legal entity, and operational structure.',
    },
    {
      question: 'How is pricing structured?',
      answer:
        'Fixed scope, fixed price. We agree on every screen, role, and feature before work starts, so there are no surprise invoices midway through.',
    },
  ];

  return (
    <div className="pg show" id="pg-itsoftware">
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
            &nbsp;/&nbsp; IT &amp; Software
          </div>
          <span className="kick">SOFTWARE &amp; DIGITAL</span>
          <h1>We do not just advise. We build.</h1>
          <p>
            Websites, mobile apps, ERP and CRM systems delivered for real businesses across travel, manufacturing,
            education, healthcare, retail and hospitality. Everything on this page is work we have shipped.
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
              Discuss a Project
            </a>
            <a
              href="#work"
              className="btn btn-o"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('work');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Live sites, not mockups */}
      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-h mid">
            <span className="kick">WEBSITES WE HAVE BUILT</span>
            <h2>Live sites, not mockups.</h2>
            <p>Design, development, content and hosting handled end to end.</p>
          </div>
          <div className="show-grid">
            <div className="show-item">
              <div className="browser">
                <div className="bar">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="url">narulabakery.com</span>
                </div>
                <img src="/page_07_image_01.png" alt="Narula Bakery e-commerce website" loading="lazy" />
              </div>
              <div className="name">Narula Bakery</div>
              <div className="cat">Bakery &amp; Gourmet E-Commerce</div>
            </div>

            <div className="show-item">
              <div className="browser">
                <div className="bar">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="url">bombaychowpati.in</span>
                </div>
                <img src="/page_09_image_01.png" alt="Bombay Chowpati restaurant website" loading="lazy" />
              </div>
              <div className="name">Bombay Chowpati</div>
              <div className="cat">Food &amp; Hospitality Brand</div>
            </div>

            <div className="show-item">
              <div className="browser">
                <div className="bar">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="url">zackvelle.com</span>
                </div>
                <img src="/page_10_image_01.png" alt="Zackvelle luxury fashion storefront" loading="lazy" />
              </div>
              <div className="name">Zackvelle Fashion</div>
              <div className="cat">Luxury Apparel &amp; Footwear</div>
            </div>

            <div className="show-item">
              <div className="browser">
                <div className="bar">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="url">elitegym.fit</span>
                </div>
                <img src="/page_12_image_01.png" alt="Elite Gym fitness web platform" loading="lazy" />
              </div>
              <div className="name">Elite Gym</div>
              <div className="cat">Fitness Community &amp; Portal</div>
            </div>

            <div className="show-item">
              <div className="browser">
                <div className="bar">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="url">physioguru.health</span>
                </div>
                <img src="/page_13_image_01.png" alt="PhysioGuru health platform" loading="lazy" />
              </div>
              <div className="name">PhysioGuru</div>
              <div className="cat">Healthcare &amp; Consultation</div>
            </div>

            <div className="show-item">
              <div className="browser">
                <div className="bar">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="url">svmportal.edu.in</span>
                </div>
                <img src="/page_03_image_02.png" alt="KGDS SVM academic portal" loading="lazy" />
              </div>
              <div className="name">KGDS SVM Portal</div>
              <div className="cat">Education &amp; Examination ERP</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mobile Apps */}
      <section className="sec tint">
        <div className="wrap">
          <div className="sec-h mid">
            <span className="kick">MOBILE APPS</span>
            <h2>Apps for customers, and for your own team.</h2>
            <p>
              Native and cross-platform apps built for iOS and Android. From consumer storefronts to rider and delivery
              tools and internal staff apps.
            </p>
          </div>

          <div className="phone-row" style={{ marginTop: '40px' }}>
            <div className="phone">
              <img
                src="/gros.png"
                alt="Hyperlocal grocery ordering app built by Vedanjali Consultant"
                loading="lazy"
              />
            </div>
            <div className="phone">
              <img
                src="/page_04_image_04.png"
                alt="Rider delivery acceptance app built by Vedanjali Consultant"
                loading="lazy"
              />
            </div>
            <div className="phone">
              <img
                src="/len.jpeg"
                alt="Laundry customer subscription app built by Vedanjali Consultant"
                loading="lazy"
              />
            </div>
            <div className="phone">
              <img
                src="/l2.jpeg"
                alt="Rider authentication and fleet app built by Vedanjali Consultant"
                loading="lazy"
              />
            </div>
          </div>
          <div className="devcap">
            Customer, rider and ops apps for a 15-minute grocery and laundry startup
          </div>
        </div>
      </section>

      {/* Section 3: Software that runs the business */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-h mid">
            <span className="kick">INTERNAL SYSTEMS</span>
            <h2>Software that runs the business.</h2>
            <p>ERP, CRM and custom workflows built around your actual plant, sales and dispatch processes.</p>
          </div>

          <div className="laptop">
            <div className="lid">
              <img
                src="/erp.png"
                alt="Command Dashboard ERP built by Vedanjali Consultant"
                loading="lazy"
              />
            </div>
            <div className="base"></div>
            <div className="stand"></div>
          </div>
          <div className="devcap">
            Custom ERP dashboard, built around one client&rsquo;s actual operations workflow
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px', marginTop: '48px' }}>
            <div className="browser">
              <div className="bar">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="url">admin.notelia.internal</span>
              </div>
              <img src="/page_01_image_01.png" alt="Notelia Super Admin Dashboard" loading="lazy" />
            </div>

            <div className="browser">
              <div className="bar">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="url">hrm.notelia.internal</span>
              </div>
              <img src="/page_15_image_01.png" alt="Notelia HRM Analytics Dashboard" loading="lazy" />
            </div>
          </div>
          <div className="devcap">
            Role-based access, attendance automation and department analytics
          </div>
        </div>
      </section>

      {/* Section 4: Dark Section - Proven systems, tailored to you */}
      <section className="dark">
        <div className="wrap">
          <span className="kick plain">READY-BUILT ARCHITECTURES</span>
          <h2>Proven systems, tailored to you.</h2>
          <p className="lead">
            We do not build from scratch every time. We start from proven, tested architectures for specific
            industries, then customize them to your exact operation.
          </p>
          <div className="dstat">
            <div>
              <strong>Online Ordering</strong>
              <span>QR and web ordering for restaurants and multi-outlet food brands.</span>
            </div>
            <div>
              <strong>Kitchen Display (KDS)</strong>
              <span>Real-time station displays, prep timers and order tracking.</span>
            </div>
            <div>
              <strong>Fashion Store</strong>
              <span>High-converting e-commerce for apparel and lifestyle brands.</span>
            </div>
            <div>
              <strong>Grocery &amp; Quick-Commerce</strong>
              <span>Rider tracking, slot booking and dark store inventory.</span>
            </div>
            <div>
              <strong>Clinic &amp; EHR</strong>
              <span>Patient records, prescriptions and doctor appointment scheduling.</span>
            </div>
            <div>
              <strong>Gym &amp; Fitness OS</strong>
              <span>Membership billing, trainer allocation and access control.</span>
            </div>
            <div>
              <strong>School &amp; Academy ERP</strong>
              <span>Attendance, fee collection, exams and parent portals.</span>
            </div>
            <div>
              <strong>Manufacturing ERP</strong>
              <span>Raw materials, BOM, machine output and batch tracking.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: What they look like */}
      <section className="sec tint">
        <div className="wrap">
          <div className="sec-h mid">
            <span className="kick">WHAT THEY LOOK LIKE</span>
            <h2>What they look like.</h2>
            <p>Real interfaces designed for speed, clarity and high operator efficiency.</p>
          </div>
          <div className="show-grid">
            <div className="show-item">
              <div className="browser">
                <div className="bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="url">order.bombaychowpati.in</span></div>
                <img src="/page_09_image_01.png" alt="Restaurant Online Ordering system" loading="lazy" />
              </div>
              <div className="name">Restaurant Online Ordering</div>
              <div className="cat">Direct QR &amp; web ordering system</div>
            </div>

            <div className="show-item">
              <div className="browser">
                <div className="bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="url">orders.laundry.overview</span></div>
                <img src="/page_06_image_01.png" alt="Order Distribution and analytics display" loading="lazy" />
              </div>
              <div className="name">Order Analytics &amp; KDS</div>
              <div className="cat">Real-time processing &amp; station status</div>
            </div>

            <div className="show-item">
              <div className="browser">
                <div className="bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="url">store.zackvelle.com</span></div>
                <img src="/page_10_image_01.png" alt="Luxury Fashion storefront" loading="lazy" />
              </div>
              <div className="name">Luxury Fashion E-Commerce</div>
              <div className="cat">High-conversion storefront &amp; checkout</div>
            </div>

            <div className="show-item">
              <div className="browser">
                <div className="bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="url">bakery.catalog.store</span></div>
                <img src="/page_07_image_01.png" alt="Gourmet bakery e-commerce" loading="lazy" />
              </div>
              <div className="name">Food &amp; Bakery Storefront</div>
              <div className="cat">Catalog, online delivery &amp; custom orders</div>
            </div>

            <div className="show-item">
              <div className="browser">
                <div className="bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="url">ehr.physioguru.health</span></div>
                <img src="/page_13_image_01.png" alt="Clinic EHR and appointment system" loading="lazy" />
              </div>
              <div className="name">Care Clinic EHR &amp; Appointments</div>
              <div className="cat">Patient records, Rx &amp; tele-consulting</div>
            </div>

            <div className="show-item">
              <div className="browser">
                <div className="bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="url">portal.elitegym.fit</span></div>
                <img src="/page_12_image_01.png" alt="Gym and fitness centre management OS" loading="lazy" />
              </div>
              <div className="name">Gym &amp; Fitness Center OS</div>
              <div className="cat">Biometric access, member subs &amp; trainers</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        kick="FAQ"
        title="Software questions, in plain words."
        subtitle="Straight answers on ownership, timeline, cost and how we work."
        items={itFaqs}
      />

      {/* CTA Band */}
      <CTABand
        title="Tell us the process that costs you the most time."
        text="We will tell you whether software can fix it, what it would take to build, and what it would cost."
        btnText="Talk to an Engineer"
        onNavigate={onNavigate}
      />
    </div>
  );
}
