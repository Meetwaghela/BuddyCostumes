import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Always-loaded components
import Navbar from './components/Navbar/Navbar';
import ResponsiveMenu from './components/Navbar/ResponsiveMenu';
import Footer from './components/Footer/Footer';

// Lazy-loaded pages
const Home = lazy(() => import('./components/Home/Home'));
const Overview = lazy(() => import('./components/Overview/Overview'));
const BannerDetails = lazy(() => import('./components/BannerDetails/BannerDetails'));
const Contactus = lazy(() => import('./components/Contactus/Contactus'));
const Services = lazy(() => import('./components/Services/Services'));
const Process = lazy(() => import('./components/Process/Process'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const Customdesign = lazy(() => import('./components/Service/Customdesign'));
const Accessories = lazy(() => import('./components/Service/Accessories'));
const Service = lazy(() => import('./components/Services/Service'));
const Aboutus = lazy(() => import('./Pages/Aboutus'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const Processes = lazy(() => import('./Pages/Processes'));
const Privacypolicy = lazy(() => import('./Pages/Privacypolicy'));
const Innovative = lazy(() => import('./components/Service/Innovative'));
const Payment = lazy(() => import('./Pages/Payment'));
const Fabric = lazy(() => import('./components/Service/Fabric'));
const Stonework = lazy(() => import('./components/Service/Stonework'));

// Simple 404
const NotFound = () => (
  <div style={{ padding: 40, textAlign: 'center' }}>
    <h1>404 — Page not found</h1>
    <p>We couldn't find what you were looking for.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />

      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
              fontSize: 22,
              color: '#333',
              backgroundColor: '#f8f8f8',
            }}
          >
            Loading site content...
          </div>
        }
      >
        <Routes>
          {/* Root page (home sections) */}
          <Route
            path="/"
            element={
              <>
                <ResponsiveMenu />
                <Home />
                <Overview />
                <BannerDetails />
                <Contactus />
                <Services />
                <Process />
              </>
            }
          />

          {/* canonical lowercase routes */}
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/customdesign" element={<Customdesign />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/processes" element={<Processes />} />
          <Route path="/service" element={<Service />} />
          <Route path="/privacy" element={<Privacypolicy />} />
          <Route path="/stonework" element={<Stonework />} />
          <Route path="/innovative" element={<Innovative />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/fabric" element={<Fabric />} />

          {/* Redirects for common mistakes / casing issues */}
          <Route path="/Accessories" element={<Navigate to="/accessories" replace />} />
          <Route path="/accessory" element={<Navigate to="/accessories" replace />} />
          {/* sometimes a leading space (encoded) can appear in links — handle that too */}
          <Route path="/%20accessories" element={<Navigate to="/accessories" replace />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
