import React from 'react';
import { BANK_PARTNERS, NBFC_PARTNERS } from '../data/images';

export default function PartnerMarquee() {
  return (
    <section className="sec" id="partners">
      <div className="wrap">
        <div className="sec-h mid">
          <span className="kick">Our lending network</span>
          <h2>Channel partners with 70+ banks and NBFCs.</h2>
          <p>
            One application, assessed against the criteria of the institutions most likely to approve it. That is the difference between applying and applying well.
          </p>
        </div>
      </div>

      <div className="mq">
        <div className="mq-track">
          {BANK_PARTNERS.concat(BANK_PARTNERS).map((item, idx) => (
            <div className="plogo" key={`bank-${idx}`}>
              <span className="mono" style={{ background: item.bg }}>
                {item.mono}
              </span>
              <span className="nm">
                {item.name}
                <small>{item.type}</small>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mq" style={{ marginTop: '18px' }}>
        <div className="mq-track rev">
          {NBFC_PARTNERS.concat(NBFC_PARTNERS).map((item, idx) => (
            <div className="plogo" key={`nbfc-${idx}`}>
              <span className="mono" style={{ background: item.bg }}>
                {item.mono}
              </span>
              <span className="nm">
                {item.name}
                <small>{item.type}</small>
              </span>
            </div>
          ))}
        </div>
      </div>

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
          Names shown are of institutions within our lending network. Sanction remains at the sole discretion of the respective lender.
        </p>
      </div>
    </section>
  );
}
