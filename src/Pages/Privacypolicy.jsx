import React from "react";

const Privacypolicy = () => {
  return (
    <div className="privacy-policy-container bg-gray-100 min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-indigo-600">
          Privacy Policy
        </h1>
        <p className="text-lg mb-6 text-center leading-relaxed text-gray-700">
          Welcome to Krishna Electricals. We respect your privacy and are committed to protecting it through our <br/>compliance with this policy.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Information We Collect</h2>
        <p className="text-gray-700 mb-6">
          We collect several types of information from and about users of our website, including:
        </p>
        <ul className="list-disc ml-8 mb-6 text-gray-700">
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Usage data about how you use our website</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-6">
          We use the information we collect in the following ways:
        </p>
        <ul className="list-disc ml-8 mb-6 text-gray-700">
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To allow you to participate in interactive features of our website</li>
          <li>To gather analysis to improve our website and services</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Data Protection</h2>
        <p className="text-gray-700 mb-6">
          We take appropriate security measures to protect your information from unauthorized access and disclosure. However, please note that no method of transmission over the Internet is 100% secure.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Sharing Your Information</h2>
        <p className="text-gray-700 mb-6">
          We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners, trusted affiliates, and advertisers.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Third-Party Websites</h2>
        <p className="text-gray-700 mb-6">
          Our website may contain links to other websites. We do not control, and are not responsible for the content or practices of these other websites. This privacy policy applies only to information collected by Krishna Electricals.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Changes to This Privacy Policy</h2>
        <p className="text-gray-700 mb-6">
          We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Contact Us</h2>
        <p className="text-gray-700 mb-6">
          If you have any questions about this privacy policy, please contact us:
        </p>
        <ul className="list-disc ml-8 mb-6 text-gray-700">
          <li>Email: <a href="mailto:51181krishnaelectricals@gmail.com" className="text-indigo-600 hover:text-indigo-800">51181krishnaelectricals@gmail.com</a></li>
          <li>Phone: <a href="tel:+919970751651" className="text-indigo-600 hover:text-indigo-800">+919970751651</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Privacypolicy;
