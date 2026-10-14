export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Curated antique finds</p>
          <h1>Timeless Treasures. Lasting Elegance.</h1>
          <p className="lead">
            Discover unique antique accessories and vintage treasures that bring history, character, and sophistication into every space.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="primary-button">Explore Our Collection</a>
            <a href="/contact" className="secondary-button">Request a Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
