import React from 'react';

const ECOSYSTEM_LOGOS = [
  { id: '1', src: '/IMG_8554.jpeg', alt: 'Ecosystem Partner' },
  { id: '2', src: '/laxminarayan consultancy.png', alt: 'Laxminarayan Consultancy' },
  { id: '3', src: '/Procomac.jpeg', alt: 'Procomac' },
  { id: '4', src: '/sarthium.png', alt: 'Sarthium' },
  { id: '5', src: '/VITTASAHAY CONSULTANCY SERVICE PRIVATE LIMITED1.jpeg', alt: 'Vittasahay Consultancy Service' },
  { id: '6', src: '/WhatsApp Image 2026-09-24 at 2.08.44 PM (1).jpeg', alt: 'Ecosystem Partner' },
  { id: '7', src: '/WhatsApp Image 2026-09-24 at 2.08.44 PM.jpeg', alt: 'Ecosystem Partner' },
  { id: '8', src: '/WhatsApp Image 2026-09-30 at 12.02.52 PM.jpeg', alt: 'Ecosystem Partner' },
];

export default function EcosystemPartners() {
  // Duplicate array 3 times for a completely seamless marquee across all screen sizes
  const displayLogos = [...ECOSYSTEM_LOGOS, ...ECOSYSTEM_LOGOS, ...ECOSYSTEM_LOGOS];

  return (
    <section className="sec tint ecosystem-partners-sec" id="ecosystem-partners">
      <div className="wrap">
        <div className="sec-h mid" style={{ marginBottom: '28px' }}>
          <span className="kick">OUR NETWORK</span>
          <h2>Ecosystem Partners</h2>
        </div>
      </div>

      <div className="ecosystem-mq">
        <div className="ecosystem-track">
          {displayLogos.map((partner, index) => (
            <div className="ecosystem-logo-card" key={`partner-${index}`}>
              <img
                src={partner.src}
                alt={partner.alt}
                className="ecosystem-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
