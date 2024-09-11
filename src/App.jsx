import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ResponsiveMenu from './components/Navbar/ResponsiveMenu';
import Overview from './components/Overview/Overview';
import BannerDetails from './components/BannerDetails/BannerDetails';
import Contactus from './components/Contactus/Contactus';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Aboutus from './Pages/Aboutus';
import ContactUs from './Pages/ContactUs';
import Process from './components/Process/Process';
import Gallery from './components/Gallery/Gallery';
import Electricalins from './components/Service/Electricalins';
import Processes from './Pages/Processes';
import Maintenance from './components/Service/Maintenance';
import Wiring from './components/Service/Wiring';
import Service from './components/Services/Service';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/aboutus" element={<Aboutus />} /> 
        <Route path="/ContactUs" element={<ContactUs />} /> 
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Electricalins" element={<Electricalins />} />
        <Route path="/Wiring" element={<Wiring />} />
        <Route path="/Maintenance" element={<Maintenance />} />
        <Route path="/Processes" element={<Processes />} />
        <Route path="/Service" element={<Service />} />
        <Route 
          path="/" 
          element={
            <> 
              <ResponsiveMenu />
              <Home />
              <Overview />
              <BannerDetails />
              <Process />
              <Services />
              <Contactus />
              <Footer />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
