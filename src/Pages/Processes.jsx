import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoFile from '../components/assets/buddy.mp4';

const slideInFromLeft = (delay) => ({
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

const Processes = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleVideoClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <section>
      <div>
        <h1 className="text-5xl font-bold text-center dark:text-white mt-20">Our Process</h1>
        <h2 className="text-xl italic text-center dark:text-white mt-4 mb-10">
        Our creative process unlocks your costume potential. Discover how we turn your ideas into stunning and impactful <br />costume creations.
        </h2>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <div className="text-center mb-8 dark:bg-gray-900 mt-2">
          <h4 className="text-xl font-semibold text-gray-500 dark:text-white">How it works</h4>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Our Comprehensive Costume <br />Design & Creation Process
          </h2>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto dark:text-white px-8">
          <motion.div
            className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700"
            variants={slideInFromLeft(0)} 
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">1/ Consultation & Design</h3>
            <p className="mt-2 text-gray-600 dark:text-white">
            Let's discuss your ideas! We'll work together to design a costume that perfectly captures your vision.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700"
            variants={slideInFromLeft(0.2)}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">2/ Patterning & Material Selection</h3>
            <p className="mt-2 text-gray-600 dark:text-white">
            With your design in hand, we expertly create patterns and source the ideal fabrics for your costume.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700"
            variants={slideInFromLeft(0.4)}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">3/ Creation & Fitting</h3>
            <p className="mt-2 text-gray-600 dark:text-white">
            The magic happens here! We construct your costume with attention to detail, and offer fittings for tailored comfort.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700"
            variants={slideInFromLeft(0.6)} 
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">4/ Finishing & Delivery"</h3>
            <p className="mt-2 text-gray-600 dark:text-white">
            We add the last details, ensuring your costume is picture-perfect before its safe delivery to you.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto dark:text-white mt-20">
          <div className="p-6">
            <h3 className="text-xl font-semibold">Specialization</h3>
            <h2 className="text-4xl font-bold">Comprehensive Costume Solutions, Including Exquisite Stone Work, for Every Occasion.</h2>
            <h3 className="text-2xl mt-6 font-semibold">Our values:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div>
                <h4 className="font-bold">Quality First</h4>
                <p className="mt-2 text-gray-600 dark:text-white">
                We prioritize quality and attention to detail in our costume creation, ensuring you receive a beautiful and reliable piece that enhances your experience.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold">Expertise and Reliability</h4>
                <p className="mt-2 text-gray-600 dark:text-white">
                  Our team of experts provides reliable services with a focus on expertise, ensuring that your costume needs are met with precision and accuracy.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mb-10">
            <video 
              autoPlay 
              muted 
              loop 
              className={`rounded-lg shadow-lg ${isZoomed ? 'w-full h-full' : 'w-800'}`} 
              width="800" 
              onClick={handleVideoClick}
            >
              <source src={VideoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processes;
