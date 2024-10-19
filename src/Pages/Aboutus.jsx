import React from "react";
import { FaFileContract, FaHandshake, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import "./Aboutus.css";
import JP from "../components/assets/JP.png";
import RC from "../components/assets/RC.png";
import Chandu from "../components/assets/demo.jpg";
import Haresh from "../components/assets/demo.jpg";

const Aboutus = () => {
    return (
        <div className="overflow-hidden about-us-container dark:bg-gray-900 dark:text-white mb-20">
            <div className="hero-section animate-fadeIn">
                <h1><b>Welcome to Krishna Electricals</b></h1>
                <p><b><i>Your Trusted Partner in Electrical Solutions</i></b></p>
            </div>

            <div className="content-section animate-slideUp">
                <h2><b>Who We Are</b></h2>
                <p className="dark:bg-gray-900 dark:text-white">
                    Since 2016, <b>Krishna Electricals</b> has been at the forefront of providing reliable and cutting-edge electrical services. 
                    Our team is composed of seasoned professionals committed to delivering exceptional solutions for both residential and 
                    commercial projects. We take pride in consistently exceeding client expectations.
                </p>

                <div className="vision-mission-section grid mt-10 md:grid-cols-2 gap-8">
                    <div className="vision-section animate-slideInLeft">
                        <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
                        <p>Our vision is to set the benchmark in electrical contracting, empowering businesses through dependable and innovative services.</p>
                    </div>

                    <div className="mission-section animate-slideInRight">
                        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="mission-item">
                                <div className="icon bg-white p-4 rounded-lg mb-2">
                                    <FaFileContract size={32} className="text-blue-500" />
                                </div>
                                <p><b>Top-tier electrical contracting services</b></p>
                            </div>
                            <div className="mission-item">
                                <div className="icon bg-white p-4 rounded-lg mb-2">
                                    <FaHandshake size={32} className="text-blue-500" />
                                </div>
                                <p><b>Building enduring client relationships</b></p>
                            </div>
                            <div className="mission-item">
                                <div className="icon bg-white p-4 rounded-lg mb-2">
                                    <FaLightbulb size={32} className="text-blue-500" />
                                </div>
                                <p><b>Personalized electrical solutions</b></p>
                            </div>
                            <div className="mission-item">
                                <div className="icon bg-white p-4 rounded-lg mb-2">
                                    <FaShieldAlt size={32} className="text-blue-500" />
                                </div>
                                <p><b>Ensuring safety and reliability</b></p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="mt-10"><b>Our Journey</b></h2>
                <p>
                    Starting from humble beginnings, Krishna Electricals has evolved into a trusted industry leader. 
                    Our dedication to excellence and building lasting partnerships has allowed us to grow exponentially over the years.
                </p>
            </div>

            <div className="team-section animate-fadeIn">
                <h2 className="text-3xl text-center mt-10"><b>Meet Our Team</b></h2>
                <div className="team-container grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="team-member hover:shadow-lg transition-all duration-500">
                        <img src={JP} alt="Jayesh Vagadiya" className="team-image rounded-full" />
                        <div className="team-info">
                            <h3>Jayesh Vagadiya</h3>
                            <p>Owner & Project Manager</p>
                            <p>
                                With over 15 years of experience, Jayesh leads our team in providing top-notch electrical services across industries.
                                His expertise in project management ensures every job is executed with precision and efficiency.
                            </p>
                        </div>
                    </div>
                    <div className="team-member hover:shadow-lg transition-all duration-500">
                        <img src={RC} alt="Raju Choubey" className="team-image rounded-full" />
                        <div className="team-info">
                            <h3>Raju Choubey</h3>
                            <p>Consultant</p>
                            <p>
                                Raju excels in providing electrical consultancy, covering installations, maintenance, and ensuring clients take full advantage
                                of State and Central Textile Subsidies.
                            </p>
                        </div>
                    </div>
                    <div className="team-member hover:shadow-lg transition-all duration-500">
                        <img src={Chandu} alt="Chandrakant Golait" className="team-image rounded-full" />
                        <div className="team-info">
                            <h3>Chandrakant Golait</h3>
                            <p>Office Administrator</p>
                            <p>
                                Chandrakant handles all office operations with efficiency. His expertise in new meter installations and load extensions ensures
                                seamless administrative and fieldwork.
                            </p>
                        </div>
                    </div>
                    <div className="team-member hover:shadow-lg transition-all duration-500">
                        <img src={Haresh} alt="Haresh Raut" className="team-image rounded-full" />
                        <div className="team-info">
                            <h3>Haresh Raut</h3>
                            <p>Lead ITI Electrician</p>
                            <p>
                                Haresh oversees site inspections and ensures that our high standards of safety and work quality are upheld at all times.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map-section">
                <h2 className="text-4xl font-bold text-left pb-4">Location to Visit</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d941.5201795244598!2d73.0460645!3d19.2788557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bdac1a4100dd%3A0x62ffca687d2ae92a!2sKRISHANA%20ELECTRICALS!5e0!3m2!1sen!2sin!4v1723797929825!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ borderRadius: "8px", border: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default Aboutus;
