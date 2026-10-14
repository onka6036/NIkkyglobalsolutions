import { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ currentPath = '/', onRequestClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="announcement-bar">
        <div className="container announcement-content">
          <span>Antique Offers This Week • Curated pieces available for private collectors and interior styling.</span>
          <a href="tel:+12134619850">Call for private appointments</a>
        </div>
      </div>

      <nav className="navbar container" aria-label="Main navigation">
        <a href="/" className="brand" aria-label="Antique Accessories home">
          <span className="brand-mark">A</span>
          <span>
            Antique<br />
            Accessories
          </span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-panel ${isOpen ? 'open' : ''}`}>
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={currentPath === item.href ? 'nav-link active' : 'nav-link'}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button type="button" className="outline-button small" onClick={onRequestClick}>Request Quote</button>
            <a href="tel:+12134619850" className="icon-button" aria-label="Call us">
              <PhoneCall size={16} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
