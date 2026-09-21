import React from 'react';

export default function FAQSection({ title, kick, subtitle, items }) {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="sec-h">
          {kick && <span className="kick">{kick}</span>}
          <h2>{title || 'Frequently Asked Questions'}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="faq">
          {items.map((item, index) => (
            <details key={index} open={index === 0}>
              <summary>{item.question}</summary>
              <div className="ans">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
