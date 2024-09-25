import React from 'react';
import { FaFileContract, FaHandshake, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import "./Aboutus.css";

const Aboutus = () => {
    return (
        <div className="overflow-hidden about-us-container dark:bg-gray-900 dark:text-white mb-20">
            <div className="hero-section dark:bg-gray-700 dark:text-white">
                <h1><b>Welcome to Krishna Electricals</b></h1>
                <p><b><i>Your Trusted Partner in Electrical Solutions</i></b></p>
            </div>

            <div className="content-section dark:bg-gray-900 dark:text-white">
                <h2><b>Who We Are</b></h2>
                <p className='dark:bg-gray-900 dark:text-white'>
                    Founded in 2016, <b>Krishna Electricals</b> has been a leader in providing top-quality electrical services and products.
                    With a team of highly skilled professionals, we offer a wide range of electrical solutions, from residential installations to 
                    large-scale commercial projects. Our commitment to excellence and customer satisfaction is what sets us apart.
                </p>

                <div className="vision-mission-section grid md:grid-cols-2 gap-8">

                    <div className="vision-section">
                        <h2 className="text-4xl font-bold mb-4">Our vision</h2>
                        <p className='dark:bg-gray-900 dark:text-white'>
                            Our vision is to be the leading electrical contracting provider, delivering top-quality services 
                            that power businesses and drive success.
                        </p>
                    </div>


                    <div className="mission-section ">
                        <h2 className="text-4xl font-bold mb-4">Our mission</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="mission-item ">
                                <div className="icon bg-white p-4 rounded-lg mb-2 dark:bg-gray-900">
                                    <FaFileContract size={32} className="text-blue-500" />
                                </div>
                                <p className='dark:bg-gray-900 dark:text-white'><b>Provide top-quality electrical contracting services</b></p>
                            </div>
                            <div className="mission-item">
                                <div className="icon bg-white p-4 rounded-lg mb-2 dark:bg-gray-900">
                                    <FaHandshake size={32} className="text-blue-500" />
                                </div>
                                <p className='dark:bg-gray-900 dark:text-white'><b>Build lasting relationships with our clients</b></p>
                            </div>
                            <div className="mission-item">
                                <div className="icon bg-white p-4 rounded-lg mb-2 dark:bg-gray-900">
                                    <FaLightbulb size={32} className="text-blue-500" />
                                </div>
                                <p className='dark:bg-gray-900 dark:text-white'><b>Provide personalized solutions</b></p>
                            </div>
                            <div className="mission-item">
                                <div className="icon bg-white p-4 rounded-lg mb-2 dark:bg-gray-900">
                                    <FaShieldAlt size={32} className="text-blue-500" />
                                </div>
                                <p className='dark:bg-gray-900 dark:text-white'><b>Ensure the safety and reliability of your electrical systems</b></p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2><b>Our History</b></h2>
                <p className='dark:bg-gray-900 dark:text-white'>
                    Krishna Electricals started as a small family-owned business, and over the years, we have grown into a trusted name in the industry.
                    Our dedication to quality and customer satisfaction has helped us build long-lasting relationships with clients and partners.
                </p>
            </div>


            <div className="team-section dark:bg-gray-700 dark:text-white">
                <h2 className='text-3xl text-center '><b>Meet Our Team</b></h2>
                <div className="dark:bg-gray-700 dark:text-white team-container">
                    <div className="dark:bg-gray-600 dark:text-white team-member">
                        <img src="src/components/assets/demo.jpg" alt="JP" className="team-image" />
                        <div className="dark:bg-gray-600 dark:text-white team-info">
                            <h3>Jayesh Patel</h3>
                            <p className='dark:text-white'>Project Manager</p>
                            <p className='dark:text-white'>Jayesh has over 15 years of experience in designing and executing electrical installations for various industries.</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="map-section" style={{ marginBottom: '20px' }}>
                <h2 className="text-4xl font-bold text-left pb-4 dark:text-white">Location to Visit</h2>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d941.5201795244598!2d73.0460645!3d19.2788557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bdac1a4100dd%3A0x62ffca687d2ae92a!2sKRISHANA%20ELECTRICALS!5e0!3m2!1sen!2sin!4v1723797929825!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{ borderRadius: '8px', border: 'none' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default Aboutus;
