import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components that are always loaded (e.g., header, footer, responsive menu)
// These are typically small and needed on every page, so no lazy loading.
import Navbar from './components/Navbar/Navbar';
import ResponsiveMenu from './components/Navbar/ResponsiveMenu';
import Footer from './components/Footer/Footer';

// Define your "page" components using React.lazy()
// Their JavaScript bundles will be loaded only when their respective routes are accessed.
// IMPORTANT: Double-check these paths and ensure each component uses 'export default ComponentName;'
const Home = lazy(() => import('./components/Home/Home'));
const Overview = lazy(() => import('./components/Overview/Overview'));
const BannerDetails = lazy(() => import('./components/BannerDetails/BannerDetails'));
const Contactus = lazy(() => import('./components/Contactus/Contactus'));
const Services = lazy(() => import('./components/Services/Services'));
const Process = lazy(() => import('./components/Process/Process'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const Customdesign = lazy(() => import('./components/Service/Customdesign')); // Potential source of red line
const Accessories = lazy(() => import('./components/Service/Accessories'));
const Service = lazy(() => import('./components/Services/Service'));
const Aboutus = lazy(() => import('./Pages/Aboutus'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const Processes = lazy(() => import('./Pages/Processes'));
const Privacypolicy = lazy(() => import('./Pages/Privacypolicy'));
const DanceStudio = lazy(() => import('./Pages/DanceStudio'));
const Innovative = lazy(() => import('./components/Service/Innovative'));
const Payment = lazy(() => import('./Pages/Payment'));
const Fabric = lazy(() => import('./components/Service/Fabric')); // Potential source of red line
const Stonework = lazy(() => import('./components/Service/Stonework'));

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is loaded immediately as it's likely on all pages */}
      {/* Wrap your Routes with <Suspense> to show a fallback while lazy components load */}
      <Suspense fallback={
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          fontSize: '24px',
          color: '#333', // Adjust this color to match your site's theme
          backgroundColor: '#f0f0f0' // Adjust background color
        }}>
          Loading site content...
        </div>
      }>
        <Routes>
          {/* Routes for individual lazy-loaded pages */}
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Customdesign" element={<Customdesign />} />
          <Route path="/Accessories" element={<Accessories />} />
          <Route path="/Processes" element={<Processes />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Privacy" element={<Privacypolicy />} />
          <Route path="/Stonework" element={<Stonework />} />
          <Route path="/DanceStudio" element={<DanceStudio />} />
          <Route path="/Innovative" element={<Innovative />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Fabric" element={<Fabric />} />

          {/* Root path: This will load all components defined within its 'element' prop.
              Since Home, Overview, BannerDetails, Contactus, Services, Process are lazy-loaded,
              their chunks will be fetched when the user lands on the root path. */}
          <Route
            path="/"
            element={
              <>
                <ResponsiveMenu /> {/* Loaded immediately */}
                <Home />
                <Overview />
                <BannerDetails />
                <Contactus />
                <Services />
                <Process />
                {/* Footer is typically outside <Routes> if it's on every page, but if it's
                    part of the root page's content, it can be here. */}
                <Footer />
              </>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
