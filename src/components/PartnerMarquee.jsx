import React from 'react';
import { BANK_PARTNERS, NBFC_PARTNERS } from '../data/images';

export default function PartnerMarquee() {
  return (
    <div className="mq-wrapper">
      <div className="mq">
        <div className="mq-track">
          {BANK_PARTNERS.concat(BANK_PARTNERS).map((item, idx) => (
            <div className="plogo" key={`bank-${idx}`}>
              <img 
                src={item.logo} 
                alt={`${item.name} logo`} 
                className="partner-logo-img"
                loading="lazy"
              />
              <span className="nm">
                {item.name}
                <small>{item.type}</small>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mq" style={{ marginTop: '16px' }}>
        <div className="mq-track rev">
          {NBFC_PARTNERS.concat(NBFC_PARTNERS).map((item, idx) => (
            <div className="plogo" key={`nbfc-${idx}`}>
              <img 
                src={item.logo} 
                alt={`${item.name} logo`} 
                className="partner-logo-img"
                loading="lazy"
              />
              <span className="nm">
                {item.name}
                <small>{item.type}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
