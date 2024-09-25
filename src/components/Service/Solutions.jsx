import React from 'react';
import './Solutions.css'; 

const Solutions = () => {
  return (
    <div className="services-container mt-20">
      <header className="hero-section">
        <h1 className="hero-title">Comprehensive Electrical Solutions</h1>
        <p className="hero-subtitle">
          Powering the future with innovative solutions that transform businesses. From seamless installations to cutting-edge energy efficiency, we deliver tailored electrical services that drive success.
        </p>
      </header>

      <section className="service-section">
        <h2 className="section-title">We Provide Solutions On</h2>
        <div className="service-cards">
          <div className="service-card ">
            <h3 className="service-title ">Electrical Installations</h3>
            <p className="service-description ">
              Whether you're upgrading your facility or building from the ground up, our skilled team ensures every installation meets the highest standards of safety and performance.
            </p>
          </div>

          <div className="service-card ">
            <h3 className="service-title">Maintenance & Repair</h3>
            <p className="service-description ">
              Keep your business running at full capacity with our reliable maintenance services. Our fast and efficient repair solutions minimize downtime.
            </p>
          </div>

          <div className="service-card ">
            <h3 className="service-title ">Energy Audits & Optimization</h3>
            <p className="service-description ">
              Unlock hidden savings and boost sustainability with our energy audits. Our experts analyze your systems to identify inefficiencies.
            </p>
          </div>
        </div>
      </section>

      <section className="installation-section ">
        <h2 className="section-title ">Professional Installations</h2>
        <p className="section-description ">
          From design to implementation, we offer end-to-end installation services, ensuring your systems are built to last.
        </p>
        <ul className="installation-list">
          <li>Commercial and Residential Installations</li>
          <li>Power Distribution & Control Panels</li>
          <li>Lighting Systems & Smart Automation</li>
          <li>Renewable Energy Solutions (Solar)</li>
        </ul>
      </section>

      <footer className="footer ">

        <p className="footer-text">
           Ready to elevate your electrical infrastructure? 
            <a href="/ContactUs" className="contact-link">
                <strong>Contact us today</strong>
            </a> 
            and let’s bring your vision to life with innovative, high-performance solutions. We’re here to power your next success story!
        </p>
      </footer>
    </div>
  );
};

export default Solutions;
