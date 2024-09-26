import React from 'react';

const Innovative = () => {
  return (
    <div className="container mx-auto p-5">
      <header className="text-center mt-20">
        <h1 className="text-4xl font-bold text-blue-600">Innovative Electrical Solutions</h1>
        <p className="text-lg text-gray-700 mt-2">
          Harnessing Solar Energy for a Sustainable Future
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-green-600">Why Choose Solar Energy?</h2>
        <p className="mt-4 text-gray-600">
          As we look toward the future, it's essential to embrace sustainable solutions. By converting solar energy into electrical energy, we can not only enhance performance but also significantly reduce costs.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-green-600">Our Approach</h2>
        <ol className="list-decimal list-inside mt-4 text-gray-600">
          <li className="mb-2">Conduct a thorough energy assessment to determine your needs.</li>
          <li className="mb-2">Design a customized solar energy solution tailored to your requirements.</li>
          <li className="mb-2">Install high-quality solar panels and equipment for optimal performance.</li>
          <li className="mb-2">Provide ongoing maintenance and support to ensure efficiency.</li>
          <li className="mb-2">Monitor your energy savings and performance through our advanced tracking system.</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-green-600">See It in Action!</h2>
        <div className="flex flex-wrap justify-center mt-4">
          <img src="src/components/assets/Solar/Solar1.jpg" alt="Solar Installation" className="w-1/2 md:w-1/3 p-2" />
          <img src="src/components/assets/Solar/Solar2.jpg" alt="Energy Savings" className="w-1/2 md:w-1/3 p-2" />
          <img src="src/components/assets/Solar/Solar3.jpg" alt="Maintenance Support" className="w-1/2 md:w-1/3 p-2" />
        </div>
        <div className="mt-4">
          <video width="100%" 
              autoPlay
              muted 
              loop >
            <source src="src/components/assets/Solar/Solar5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-green-600">Join the Energy Revolution!</h2>
        <p className="mt-4 text-lg text-gray-700">
          Are you ready to make the switch to solar energy? With our innovative solutions, you'll experience unparalleled performance and savings while contributing to a greener planet. 
        </p>
        <p className="mt-4 font-bold text-blue-600">
          Contact us today to learn more about our services and how we can help you harness the power of the sun!
        </p>
      </section>
    </div>
  );
};

export default Innovative;
