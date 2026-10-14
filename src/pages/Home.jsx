import { ArrowRight, Award, BadgeCheck, Gem, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, services, testimonials } from '../data/catalog';

const featuredProducts = products.filter((product) => product.featured).slice(0, 3);

export default function Home() {
  return (
    <main>
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
              <Link to="/contact" className="primary-button">Explore Our Collection</Link>
              <Link to="/contact" className="secondary-button">Request a Service</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split-layout">
          <div className="content-block">
            <p className="eyebrow">About the collection</p>
            <h2>Elegant possessions with stories to tell.</h2>
            <p>
              We specialise in antique accessories and vintage décor selected for their craftsmanship, authenticity, and enduring elegance. From statement mirrors to delicate ornaments, each piece is chosen to enrich interiors with heritage charm.
            </p>
            <p>
              Our aim is to help clients build spaces that feel personal, layered, and timeless while preserving the character of historical design.
            </p>
            <Link to="/about" className="text-link">Learn more about our approach <ArrowRight size={16} /></Link>
          </div>
          <div className="image-stack">
            <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80" alt="Antique interior styled with vintage décor" />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Featured pieces</p>
            <h2>Pieces chosen for character and craftsmanship</h2>
          </div>

          <div className="product-grid featured-grid">
            {featuredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="pill">{product.availability}</span>
                </div>
                <div className="product-details">
                  <div className="product-meta-row">
                    <p>{product.category}</p>
                    <span className="price-tag">{product.priceLabel}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="muted-text product-description">{product.description}</p>
                  <div className="product-footer">
                    <strong>£{product.price.toLocaleString()}</strong>
                    <Link to="/contact" className="text-button">View details</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Categories</p>
            <h2>Explore timeless interiors</h2>
          </div>

          <div className="category-grid">
            {[
              'Antique ornaments',
              'Vintage home décor',
              'Collectible accessories',
              'Decorative clocks',
              'Antique mirrors',
              'Vintage tableware',
            ].map((category) => (
              <div className="info-card category-card" key={category}>
                <Gem size={28} />
                <h3>{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Our services</p>
            <h2>Expert guidance from sourcing to styling</h2>
          </div>

          <div className="service-grid compact-grid">
            {services.slice(0, 6).map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-icon">
                  <Award size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Why choose us</p>
            <h2>Trusted sourcing and genuine vintage value</h2>
          </div>

          <div className="feature-grid">
            <div className="info-card">
              <BadgeCheck size={24} />
              <h3>Authenticity-focused</h3>
              <p>We approach each piece with care and a strong appreciation for historical integrity and provenance context.</p>
            </div>
            <div className="info-card">
              <ShieldCheck size={24} />
              <h3>Curated quality</h3>
              <p>Our inventory balances beauty, age, craftsmanship, and condition so each recommendation aligns with your taste.</p>
            </div>
            <div className="info-card">
              <Sparkles size={24} />
              <h3>Design-led service</h3>
              <p>From consultation to interior styling, we guide customers toward pieces that work beautifully in real homes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section alt-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Client notes</p>
            <h2>Sample customer feedback</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote className="testimonial-card" key={item.name}>
                <p>“{item.quote}”</p>
                <footer>{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container cta-box">
          <div>
            <p className="eyebrow">Request a consultation</p>
            <h2>Looking for a special antique or styling advice?</h2>
          </div>
          <Link to="/contact" className="primary-button">Submit an enquiry</Link>
        </div>
      </section>
    </main>
  );
}
