import { Link } from 'react-router-dom';
import { ArrowRight, Gem, Handshake, Search, BadgeCheck, Sparkles, Archive, Palette, PenTool, Truck, MessageSquareText } from 'lucide-react';
import { services } from '../data/catalog';

const iconMap = {
  Gem,
  Handshake,
  Search,
  BadgeCheck,
  Sparkles,
  Archive,
  Palette,
  PenTool,
  Truck,
  MessageSquareText,
};

export default function Services({ onOpenForm }) {
  return (
    <main className="page-shell">
      <section className="page-hero small-hero">
        <div className="container">
          <p className="eyebrow">Our services</p>
          <h1>Support for collecting, styling, and sourcing</h1>
        </div>
      </section>

      <section className="section">
        <div className="container service-grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Gem;
            return (
              <article className="service-card large-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button type="button" className="primary-button small" onClick={() => onOpenForm(service.title)}>
                  Request This Service
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section alt-section">
        <div className="container policy-box">
          <div>
            <p className="eyebrow">Important notice</p>
            <h2>Services may be delivered directly or arranged through trusted third-party specialists.</h2>
          </div>
          <p>
            Where restoration, valuation, or delivery coordination is required, we arrange support through appropriately qualified third-party providers. We do not claim formal appraisal or restoration qualifications unless they are explicitly verified and disclosed.
          </p>
          <Link to="/contact" className="text-link">Speak with our team <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
