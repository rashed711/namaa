
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import CementDetail from './pages/CementDetail';
import Agencies from './pages/Agencies';
import Distribution from './pages/Distribution';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div 
      key={pathname} 
      className="animate-reveal-up"
      style={{ animationDuration: '0.6s' }}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main className="flex-grow">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products/:category" element={<Products />} />
              <Route path="/products/cement/:id" element={<CementDetail />} />
              <Route path="/agencies" element={<Agencies />} />
              <Route path="/distribution" element={<Distribution />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
