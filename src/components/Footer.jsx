import { Facebook, Instagram, Mail, MapPin, Phone, Clock3 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">A</span>
            <span>
              Antique<br />
              Accessories
            </span>
          </div>
          <p className="muted-text">
            Curated antique accessories, trusted sourcing advice, and carefully selected vintage décor for homes and collectors.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li><Mail size={16} /> info@nikkyglobalsolutions.com</li>
            <li><Phone size={16} /> (213) 461-9850</li>
            <li><MapPin size={16} /> 10800 SaintJames Ave, South Gate, CA 90280</li>
            <li><Clock3 size={16} /> Tue–Sat: 10:00–18:00</li>
          </ul>
        </div>

        <div>
          <h4>Follow</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="mailto:info@nikkyglobalsolutions.com" aria-label="Email us"><Mail size={18} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© 2026 Antique Accessories</span>
          <span>Demo website content for local preview</span>
        </div>
      </div>
    </footer>
  );
}
