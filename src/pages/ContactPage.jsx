import React, { useState } from 'react';

export default function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    nm: '',
    ph: '',
    em: '',
    sv: '',
    ms: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nm, ph, em, sv, ms } = formData;
    const text =
      `New enquiry from the website%0A%0A` +
      `Name: ${encodeURIComponent(nm.trim())}%0A` +
      `Phone: ${encodeURIComponent(ph.trim())}%0A` +
      (em.trim() ? `Email: ${encodeURIComponent(em.trim())}%0A` : '') +
      (sv.trim() ? `Service: ${encodeURIComponent(sv.trim())}%0A` : '') +
      (ms.trim() ? `Details: ${encodeURIComponent(ms.trim())}` : '');

    window.open(`https://wa.me/919213588029?text=${text}`, '_blank');
  };

  return (
    <div className="pg show" id="pg-contact">
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
            &nbsp;/&nbsp; Contact
          </div>
          <span className="kick">CONTACT</span>
          <h1>Let us start with one conversation.</h1>
          <p>
            Tell us what you are trying to do. We will tell you which service solves it, roughly what it involves, and
            whether you actually need us for it. We reply the same working day.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="sec">
        <div className="wrap">
          <div className="cgrid">
            <div className="cinfo">
              <div className="row">
                <div className="ic">✉</div>
                <div>
                  <div className="lbl">Email</div>
                  <div className="val">
                    <a href="mailto:info@vedanjaliconsultant.in">info@vedanjaliconsultant.in</a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="ic">☎</div>
                <div>
                  <div className="lbl">Phone &amp; WhatsApp</div>
                  <div className="val">
                    <a href="tel:+919213588029">+91 92135 88029</a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="ic">🌐</div>
                <div>
                  <div className="lbl">Website</div>
                  <div className="val">vedanjaliconsultant.in</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="f-row">
                <div>
                  <label htmlFor="nm" style={{ marginTop: 0 }}>Your name</label>
                  <input
                    type="text"
                    id="nm"
                    name="nm"
                    value={formData.nm}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="ph" style={{ marginTop: 0 }}>Phone</label>
                  <input
                    type="tel"
                    id="ph"
                    name="ph"
                    value={formData.ph}
                    onChange={handleChange}
                    required
                    placeholder="10 digit number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="em">Email</label>
                <input
                  type="email"
                  id="em"
                  name="em"
                  value={formData.em}
                  onChange={handleChange}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="sv">What do you need help with?</label>
                <select id="sv" name="sv" value={formData.sv} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option value="Business funding & loans">Business funding &amp; loans</option>
                  <option value="Company registration">Company registration</option>
                  <option value="Trademark & IP">Trademark &amp; IP</option>
                  <option value="Business insurance">Business insurance</option>
                  <option value="Website, app or software">Website, app or software</option>
                  <option value="Digital marketing & SEO">Digital marketing &amp; SEO</option>
                  <option value="Not sure / multiple services">Not sure / multiple services</option>
                </select>
              </div>

              <div>
                <label htmlFor="ms">Tell us briefly</label>
                <textarea
                  id="ms"
                  name="ms"
                  rows="4"
                  value={formData.ms}
                  onChange={handleChange}
                  placeholder="A line or two about your business and what you are trying to do"
                />
              </div>

              <button type="submit" className="btn btn-p">
                Send Enquiry on WhatsApp
              </button>

              <div className="fnote">
                Or email us at{' '}
                <a href="mailto:info@vedanjaliconsultant.in" style={{ color: 'var(--ink)', fontWeight: '600' }}>
                  info@vedanjaliconsultant.in
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="sec tint">
        <div className="wrap">
          <div className="sec-h">
            <span className="kick">WHAT HAPPENS NEXT</span>
            <h2>No sales pressure, just an answer.</h2>
          </div>

          <div className="steps">
            <div className="step">
              <div className="n">01</div>
              <h4>You send the enquiry</h4>
              <p>WhatsApp, email or phone, whichever is easiest for you.</p>
            </div>
            <div className="step">
              <div className="n">02</div>
              <h4>We reply the same day</h4>
              <p>With a first view on whether we can help and what it would involve.</p>
            </div>
            <div className="step">
              <div className="n">03</div>
              <h4>A free consultation</h4>
              <p>A proper conversation about the business, at no cost and with no obligation.</p>
            </div>
            <div className="step">
              <div className="n">04</div>
              <h4>Scope in writing</h4>
              <p>If it makes sense to work together, you get the scope and price in writing first.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
