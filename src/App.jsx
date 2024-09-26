// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import ResponsiveMenu from './components/Navbar/ResponsiveMenu';
// import Overview from './components/Overview/Overview';
// import BannerDetails from './components/BannerDetails/BannerDetails';
// import Contactus from './components/Contactus/Contactus';
// import Footer from './components/Footer/Footer';
// import Services from './components/Services/Services';
// import Aboutus from './Pages/Aboutus';
// import ContactUs from './Pages/ContactUs';
// import Process from './components/Process/Process';
// import Gallery from './components/Gallery/Gallery';
// import Electricalins from './components/Service/Electricalins';
// import Processes from './Pages/Processes';
// import Maintenance from './components/Service/Maintenance';
// import Wiring from './components/Service/Wiring';
// import Service from './components/Services/Service';
// import Privacypolicy from './Pages/Privacypolicy';
// import Clients from './Pages/Clients';
// import Consultancy from './Pages/Consultancy';
// import Innovative from './components/Service/Innovative';
// import Payment from './Pages/Payment';
// import Solutions from './components/Service/Solutions';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/aboutus" element={<Aboutus />} />
//         <Route path="/ContactUs" element={<ContactUs />} />
//         <Route path="/Gallery" element={<Gallery />} />
//         <Route path="/Electricalins" element={<Electricalins />} />
//         <Route path="/Wiring" element={<Wiring />} />
//         <Route path="/Maintenance" element={<Maintenance />} />
//         <Route path="/Processes" element={<Processes />} />
//         <Route path="/Service" element={<Service />} />
//         <Route path="/Privacy" element={<Privacypolicy />} />
//         <Route path="/Clients" element={<Clients />} />
//         <Route path="/Consultancy" element={<Consultancy />} />
//         <Route path="/Innovative" element={<Innovative />} />
//         <Route path="/Payment" element={<Payment />} />
//         <Route path="/Solutions" element={<Solutions />} />
//         <Route
//           path="/"
//           element={
//             <>
//               <ResponsiveMenu />
//               <Home />
//               <Overview />
//               <BannerDetails />
//               <Contactus />
//               <Services />
//               <Process />
//               <Footer />
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ResponsiveMenu from './components/Navbar/ResponsiveMenu';
import Footer from './components/Footer/Footer';
const Home = lazy(() => import('./components/Home/Home'));
const Overview = lazy(() => import('./components/Overview/Overview'));
const BannerDetails = lazy(() => import('./components/BannerDetails/BannerDetails'));
const Contactus = lazy(() => import('./components/Contactus/Contactus'));
const Services = lazy(() => import('./components/Services/Services'));
const Process = lazy(() => import('./components/Process/Process'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const Electricalins = lazy(() => import('./components/Service/Electricalins'));
const Maintenance = lazy(() => import('./components/Service/Maintenance'));
const Wiring = lazy(() => import('./components/Service/Wiring'));
const Service = lazy(() => import('./components/Services/Service'));
const Aboutus = lazy(() => import('./Pages/Aboutus'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const Processes = lazy(() => import('./Pages/Processes'));
const Privacypolicy = lazy(() => import('./Pages/Privacypolicy'));
const Clients = lazy(() => import('./Pages/Clients'));
const Consultancy = lazy(() => import('./Pages/Consultancy'));
const Innovative = lazy(() => import('./components/Service/Innovative'));
const Payment = lazy(() => import('./Pages/Payment'));
const Solutions = lazy(() => import('./components/Service/Solutions'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Electricalins" element={<Electricalins />} />
          <Route path="/Wiring" element={<Wiring />} />
          <Route path="/Maintenance" element={<Maintenance />} />
          <Route path="/Processes" element={<Processes />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Privacy" element={<Privacypolicy />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Consultancy" element={<Consultancy />} />
          <Route path="/Innovative" element={<Innovative />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Solutions" element={<Solutions />} />
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
