import React from 'react';
import VideoFile from '../assets/Vone.mp4';

const Processes = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-4  gap-4 max-w-7xl mx-auto dark:text-white px-8">
          <div className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700 ">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">1/ Consultation</h3>
            <p className="mt-2 text-gray-600 dark:text-white">
              We begin by understanding your business, needs, and requirements to offer you the best electrical solutions.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">2/ Planning</h3>
            <p className="mt-2 text-gray-600 dark:text-white">
              Our team develops a customized electrical plan tailored to your needs and budget.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">3/ Execution</h3>
            <p className="mt-2 text-gray-600 dark:text-white">
              Our experienced technicians execute the plan with precision and efficiency, ensuring optimal electrical performance and safety.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">4/ Maintenance</h3>
            <p className="mt-2 text-gray-600 dark:text-white">
              We provide regular maintenance and support to ensure your electrical systems continue to perform at their best.
            </p>
          </div>
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
            <video controls className="rounded-lg shadow-lg" width="800">
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
