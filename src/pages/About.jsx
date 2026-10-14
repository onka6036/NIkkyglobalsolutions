export default function About() {
  return (
    <main className="page-shell">
      <section className="page-hero small-hero">
        <div className="container">
          <p className="eyebrow">About us</p>
          <h1>Celebrating craftsmanship, authenticity, and timeless design</h1>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div className="content-block">
            <h2>Our story</h2>
            <p>
              Antique Accessories is a boutique and design-led retailer specialising in antique accessories, vintage décor, and carefully sourced interior treasures. We believe the best interiors balance character, history, and a sense of individuality.
            </p>
            <p>
              Our business is rooted in appreciation for antique craftsmanship and the enduring value of well-made objects. We source pieces with care, selecting items that bring depth, warmth, and sophistication to modern homes and collections.
            </p>
          </div>

          <div className="image-stack">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80" alt="Luxury antique room styling" />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container feature-grid">
          <div className="info-card">
            <h3>Our mission</h3>
            <p>To curate heritage-inspired pieces that elevate interiors while respecting the history and character of each object.</p>
          </div>
          <div className="info-card">
            <h3>Our vision</h3>
            <p>To become a trusted destination for thoughtful buyers seeking elegant, authentic, and enduring antique accessories.</p>
          </div>
          <div className="info-card">
            <h3>Our commitment</h3>
            <p>To offer a transparent, helpful experience rooted in quality, respect for craftsmanship, and genuine customer satisfaction.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout reverse-layout">
          <div className="image-stack">
            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80" alt="Collection of antique glass and vintage accessories" />
          </div>
          <div className="content-block">
            <h2>Responsible sourcing and valued authenticity</h2>
            <p>
              We approach sourcing with a commitment to authenticity and a thoughtful understanding of how antique pieces age, wear, and retain their personality over time. Our aim is to present pieces honestly, with clear communication about condition and style.
            </p>
            <p>
              We value responsible selling practices, historical integrity, and the stewardship of objects that deserve to be admired and preserved for future generations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
