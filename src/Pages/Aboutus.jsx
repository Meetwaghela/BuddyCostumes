import React from 'react';
import "./Aboutus.css";

const Aboutus = () => {
    return (
        <div className="overflow-hidden about-us-container dark:bg-gray-900 dark:text-white">
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

                <h2><b>Our Mission</b></h2>
                <p className='dark:bg-gray-900 dark:text-white'>
                    Our mission is to deliver reliable and innovative electrical solutions that exceed our clients' expectations.
                    We strive to maintain the highest standards of safety, quality, and integrity in every project we undertake.
                </p>

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
            <img src="src/assets/demo.jpg" alt="JP" className="team-image"/>
            <div className="dark:bg-gray-600 dark:text-white team-info">
                <h3>Jayesh Patel</h3>
                <p className='dark:text-white'>Project Manager</p>
                <p className='dark:text-white'>Jayesh has over 15 years of experience in designing and executing electrical installations for various industries.</p>
            </div>
        </div>
        <div className=" dark:bg-gray-600 dark:text-white team-member">
            <img src="src/assets/demo.jpg" alt="RC" className="team-image"/>
            <div className="dark:bg-gray-600 dark:text-white team-info">
                <h3>Raju Choubey</h3>
                <p className='dark:bg-gray-600 dark:text-white'>Electrical Engineer</p>
                <p className='dark:bg-gray-600 dark:text-white'>Raju specializes in large-scale commercial electrical installations and has a passion for sustainable solutions.</p>
            </div>
        </div>
        <div className="dark:bg-gray-600 dark:text-white team-member">
            <img src="src/assets/demo.jpg" alt="CG" className="team-image"/>
            <div className="dark:bg-gray-600 dark:text-white team-info">
                <h3>Chandrakant Golait</h3>
                <p className='dark:bg-gray-600 dark:text-white'>Technician</p>
                <p className='dark:bg-gray-600 dark:text-white'>Chandrakant ensures all projects are executed with precision and safety, meeting industry standards.</p>
            </div>
        </div>
        <div className="dark:bg-gray-600 dark:text-white team-member">
            <img src="src/assets/demo.jpg" alt="HR" className="team-image"/>
            <div className="dark:bg-gray-600 dark:text-white team-info">
                <h3>Haresh Raut</h3>
                <p className='dark:bg-gray-600 dark:text-white'>Electrician</p>
                <p className='dark:bg-gray-600 dark:text-white'>Haresh specializes in residential installations, ensuring customer satisfaction and safety.</p>
            </div>
            
        </div>
        <div className=" dark:bg-gray-600 dark:text-white team-member">
            <img src="src/assets/demo.jpg" alt="RC" className="team-image"/>
            <div className="dark:bg-gray-600 dark:text-white team-info">
                <h3>Raju Choubey</h3>
                <p className='dark:bg-gray-600 dark:text-white'>Electrical Engineer</p>
                <p className='dark:bg-gray-600 dark:text-white'>Raju specializes in large-scale commercial electrical installations and has a passion for sustainable solutions.</p>
            </div>
        </div>
        <div className=" dark:bg-gray-600 dark:text-white team-member">
            <img src="src/assets/demo.jpg" alt="RC" className="team-image"/>
            <div className="dark:bg-gray-600 dark:text-white team-info">
                <h3>Raju Choubey</h3>
                <p className='dark:bg-gray-600 dark:text-white'>Electrical Engineer</p>
                <p className='dark:bg-gray-600 dark:text-white'>Raju specializes in large-scale commercial electrical installations and has a passion for sustainable solutions.</p>
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
