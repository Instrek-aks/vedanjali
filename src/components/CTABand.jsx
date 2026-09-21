import React from 'react';

export default function CTABand({ title, text, btnText, onNavigate }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  return (
    <section className="ctaband">
      <div className="wrap">
        <h2>{title || 'Want to know what you actually qualify for?'}</h2>
        <p>
          {text ||
            'A short conversation is usually enough for us to tell you which funding route fits, and which will waste your time.'}
        </p>
        <a href="#" className="btn btn-w" onClick={handleClick}>
          {btnText || 'Check My Eligibility'}
        </a>
      </div>
    </section>
  );
}
