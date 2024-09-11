import React from 'react';

const Processes = () => {
  return (
    <section>
    <div>
        <h1 className="text-5xl font-bold text-center dark:text-white mt-40">Our Process</h1>
        <h2 className="text-xl italic text-center dark:text-white mt-4 mb-10">
        Our data-driven process unlocks your electrical potential. Discover how we turn insights into impactful <br/>Electrical solutions.
        </h2>
    </div>
    <div className="bg-white py-12 dark:bg-gray-900">
      <div className="text-center mb-8 dark:bg-gray-900 mt-2">
        <h4 className="text-xl font-semibold text-gray-500 dark:text-white">How it works</h4>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Our Comprehensive Electrical <br />Solutions Process
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto dark:text-white">
        <div className="bg-gray-100 p-6 rounded-lg bg-gray-300 dark:bg-gray-700">
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
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white" >4/ Maintenance</h3>
          <p className="mt-2 text-gray-600 dark:text-white">
            We provide regular maintenance and support to ensure your electrical systems continue to perform at their best.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Processes;
