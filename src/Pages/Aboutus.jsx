import React from "react";
import { FaFileContract, FaHandshake, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import "./Aboutus.css";
import JP from "../components/assets/JP.jpeg";
import meet from "../components/assets/meet.jpg";
import Chandu from "../components/assets/demo.png";
import Haresh from "../components/assets/demo.png";

const Aboutus = () => {
    return (
        <div className="overflow-hidden about-us-container dark:bg-gray-900 dark:text-white mb-20">
            <div className="hero-section animate-fadeIn">
                <h1><b>Welcome to Buddys Costumes</b></h1>
                <p><b><i>Your Dependable Source for Costume Creations.</i></b></p>
            </div>

            <div className="content-section animate-slideUp">
                <h2><b>Who We Are</b></h2>
                <p className="dark:bg-gray-900 dark:text-white">
                Since [2019], <b>Buddys Costume</b> has been at the forefront of providing imaginative and high-quality costume solutions. 
                Our team is composed of skilled designers and makers committed to bringing your vision to life for both individual and group needs. We take pride in consistently exceeding client expectations.
                </p>

                <div className="vision-mission-section grid mt-10 md:grid-cols-2 gap-8">
                    <div className="vision-section animate-slideInLeft">
                        <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
                        <p>Our vision is to be the leading force in costume artistry, empowering clients to bring their visions to life with exceptional quality and creativity.</p>
                    </div>

                    <div className="mission-section animate-slideInRight">
                        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="mission-item">
                                <div className="icon bg-white p-4 rounded-lg mb-2">
                                    <FaFileContract size={32} className="text-blue-500" />
                                </div>
                                <p><b>Building lasting client relationships</b></p>
                            </div>
                            <div className="mission-item">
                                <div className="icon bg-white p-4 rounded-lg mb-2">
                                    <FaHandshake size={32} className="text-blue-500" />
                                </div>
                                <p><b>Personalized costume design solutions</b></p>
                            </div>
                            <div className="mission-item">
                                <div className="icon bg-white p-4 rounded-lg mb-2">
                                    <FaLightbulb size={32} className="text-blue-500" />
                                </div>
                                <p><b>Ensuring quality and attention to detail</b></p>
                            </div>
                            <div className="mission-item">
                                <div className="icon bg-white p-4 rounded-lg mb-2">
                                    <FaShieldAlt size={32} className="text-blue-500" />
                                </div>
                                <p><b>Expertly Crafted, Reliably Safe</b></p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="mt-10"><b>Our Journey</b></h2>
                <p>
                Beginning with modest steps, <b>Buddys Costume</b>has evolved into a trusted source for high-quality and uniquely embellished costumes. Our in-house expertise in stonework and fabric services has 
                allowed us to offer unparalleled customization and build long-term partnerships, leading to substantial growth throughout the years.
                </p>
            </div>

            <div className="team-section animate-fadeIn">
                <h2 className="text-3xl text-center mt-10"><b>Meet Our Team</b></h2>
                <div className="team-container grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="team-member hover:shadow-lg transition-all duration-500">
                        <img src={JP} alt="Jayesh Vagadiya" className="team-image rounded-full" />
                        <div className="team-info">
                            <h3>Shailesh Waghela</h3>
                            <p>Owner & Consultant</p>
                            <p>
                            Led by Shailesh, who brings over 15 years of meticulous craftsmanship to the table, our team provides top-quality costume creations for all your needs. His expertise ensures every
                            detail, from concept to completion, is handled with precision and delivered on time.
                            </p>
                        </div>
                    </div>
                    <div className="team-member hover:shadow-lg transition-all duration-500">
                        <img src={meet} alt="Meet Waghela" className="team-image rounded-full" />
                        <div className="team-info">
                            <h3>Meet Waghela</h3>
                            <p>Billing & Account Manager</p>
                            <p>
                            Meet excels in managing client accounts and billing, ensuring a smooth and transparent process for your custom costume order. He's dedicated to providing clear communication
                             and helping you understand all costs involved in bringing your vision to life.
                            </p>
                        </div>
                    </div>
                    <div className="team-member hover:shadow-lg transition-all duration-500">
                        <img src={Chandu} alt="Chandrakant Golait" className="team-image rounded-full" />
                        <div className="team-info">
                            <h3>Preeti Waghela</h3>
                            <p>Office Administrator</p>
                            <p>
                             Preeti backbone of our operation, the office administration team expertly handles logistics, scheduling, and coordination, 
                            ensuring your costume is created and delivered on time and to your specifications.
                            </p>
                        </div>
                    </div>
                    <div className="team-member hover:shadow-lg transition-all duration-500">
                        <img src={Haresh} alt="Haresh Raut" className="team-image rounded-full" />
                        <div className="team-info">
                            <h3>Hardi Waghela</h3>
                            <p>Dance Studio Manager</p>
                            <p>
                            Hardi ensures the smooth operation of our dance studio bookings, efficiently managing availability calendars, coordinating rehearsal schedules, 
                            processing payments accurately, and maintaining clear communication with all clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map-section">
                <h2 className="text-4xl font-bold text-left pb-4">Location to Visit</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.206339218616!2d55.27294743753715!3d25.229974275736545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42f99c99f91d%3A0x771c634afd98b57f!2sQasser%20Al%20Anaqa%20Tailoring!5e0!3m2!1sen!2sae!4v1752386050300!5m2!1sen!2sae"
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
