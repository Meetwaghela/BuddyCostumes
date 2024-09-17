import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoFile from '../assets/Vone.mp4';

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
        <h1 className="text-5xl font-bold text-center dark:text-white mt-40">Our Process</h1>
        <h2 className="text-xl italic text-center dark:text-white mt-4 mb-10">
          Our data-driven process unlocks your electrical potential. Discover how we turn insights into impactful <br />Electrical solutions.
        </h2>
      </div>
      <div className="bg-white py-12 dark:bg-gray-900">
        <div className="text-center mb-8 dark:bg-gray-900 mt-2">
          <h4 className="text-xl font-semibold text-gray-500 dark:text-white">How it works</h4>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Our Comprehensive Electrical <br />Solutions Process
          </h2>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto dark:text-white px-8">
          <motion.div
            className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700"
            variants={slideInFromLeft(0)} 
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">1/ Consultation</h3>
            <p className="mt-2 text-gray-600 dark:text-white">
              We begin by understanding your business, needs, and requirements to offer you the best electrical solutions.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700"
            variants={slideInFromLeft(0.2)}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">2/ Planning</h3>
            <p className="mt-2 text-gray-600 dark:text-white">
              Our team develops a customized electrical plan tailored to your needs and budget.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700"
            variants={slideInFromLeft(0.4)}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">3/ Execution</h3>
            <p className="mt-2 text-gray-600 dark:text-white">
              Our experienced technicians execute the plan with precision and efficiency, ensuring optimal electrical performance and safety.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700"
            variants={slideInFromLeft(0.6)} 
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">4/ Maintenance</h3>
            <p className="mt-2 text-gray-600 dark:text-white">
              We provide regular maintenance and support to ensure your electrical systems continue to perform at their best.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto dark:text-white mt-20">
          <div className="p-6">
            <h3 className="text-xl font-semibold">Specialization</h3>
            <h2 className="text-4xl font-bold">Comprehensive Electrical Solutions for Your Business</h2>
            <h3 className="text-2xl mt-6 font-semibold">Our values:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div>
                <h4 className="font-bold">Quality and Safety First</h4>
                <p className="mt-2 text-gray-600 dark:text-white">
                  We prioritize quality and safety in all our services, ensuring the safety and reliability of your electrical systems.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold">Expertise and Reliability</h4>
                <p className="mt-2 text-gray-600 dark:text-white">
                  Our team of experts provides reliable services with a focus on expertise, ensuring that your electrical needs are met with precision and accuracy.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <video 
              autoPlay 
              muted 
              loop 
              // controls = {onClick}
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
