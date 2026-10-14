import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import RequestForm from '../components/RequestForm';

export default function Contact() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const serviceName = params.get('service');
  const productName = params.get('product');

  const initialValues = {};
  if (serviceName) {
    initialValues.requestType = 'Service Request';
    initialValues.productServiceName = serviceName;
  }
  if (productName) {
    initialValues.requestType = 'Product Enquiry';
    initialValues.productServiceName = productName;
  }

  return (
    <main className="page-shell">
      <section className="page-hero small-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Get in touch about antiques, valuations, or styling</h1>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container contact-layout">
          <div className="contact-card">
            <h3>Business details</h3>
            <ul className="contact-list">
              <li><Mail size={18} /> hello@antiqueaccessories.example</li>
              <li><Phone size={18} /> (213) 461-9850</li>
              <li><MessageCircle size={18} /> WhatsApp enquiries available</li>
              <li><MapPin size={18} /> 10800 SaintJames Ave, South Gate, CA 90280</li>
              <li><Clock3 size={18} /> Tuesday–Saturday, 10:00–18:00</li>
            </ul>
            <a href="https://wa.me/12134619850" className="primary-button small" target="_blank" rel="noreferrer">
              WhatsApp enquiry
            </a>
          </div>

          <div className="contact-form-panel">
            <RequestForm initialValues={initialValues} />
          </div>
        </div>
      </section>
    </main>
  );
}
