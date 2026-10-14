import { useMemo } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import RefundPolicy from './pages/RefundPolicy';
import Contact from './pages/Contact';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = useMemo(() => location.pathname, [location.pathname]);

  const handleOpenServiceForm = (serviceTitle) => {
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

  const handleQuickEnquire = (productName) => {
    navigate(`/contact?product=${encodeURIComponent(productName)}`);
  };

  const handleViewProduct = (product) => {
    navigate(`/contact?product=${encodeURIComponent(product.name)}`);
  };

  return (
    <div className="app-shell">
      <Navbar currentPath={currentPath} onRequestClick={() => navigate('/contact')} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services onOpenForm={handleOpenServiceForm} />} />
        <Route path="/about" element={<About />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </BrowserRouter>
  );
}
