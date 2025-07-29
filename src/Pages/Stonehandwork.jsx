import React from 'react';
import Solar1 from '../components/assets/Solar1.jpg';
import Solar2 from '../components/assets/Solar2.jpg';
import Solar3 from '../components/assets/Solar3.jpg';
import SolarVideo from '../components/assets/Solar5.mp4';

const Stonehandwork = () => {
  return (
    // Outer container: pt-24 remains to push content down below the fixed header.
    // px-6 and py-12 remain for good overall padding.
    <div className="container mx-auto px-6 py-12 pt-24">
      <header className="text-center mb-6"> {/* <--- REDUCED: Changed from mb-10 to mb-6 */}
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Embroidery with Stones</h1>
        <p className="text-lg text-gray-700">
          Transforming costume dreams into dazzling reality with the enduring beauty of hand-crafted stone adornments
        </p>
      </header>

      {/* Section 1: Why Choose Buddys Costume */}
      {/* Reduced py to py-6 for slightly tighter vertical spacing between sections, as we're tightening the overall flow */}
      <section className="py-6"> {/* <--- SLIGHTLY REDUCED */}
        {/* Adjusted mt-6: Changed from mt-8 to mt-6 to further reduce space after the header content block */}
        <h2 className="text-3xl font-semibold text-green-600 mt-6 mb-4">Why Choose Buddys Costume : Stone Hand Work ?</h2> {/* <--- REDUCED HERE */}
        <p className="mt-0 text-gray-600 leading-relaxed">
          As the costume industry continues to evolve, we anticipate a growing demand for unique, high-impact embellishments. Our specialized stonehand work service aims to be your premier partner, providing exquisite, durable, and eye-catching stone applications that elevate any costume design.
        </p>
      </section>

      {/* Section 2: Our Stonehand Work Approach */}
      <section className="py-6"> {/* <--- SLIGHTLY REDUCED */}
        <h2 className="text-3xl font-semibold text-green-600 mt-0 mb-4">Our Stonehand Work Approach</h2>
        <ol className="list-decimal list-inside mt-0 text-gray-600">
          <li className="mb-3">Carefully analyzing the costume's theme and design to determine optimal stonework placement and style.</li>
          <li className="mb-3">Collaborating closely with the client to understand specific design aspirations and intricate stone detailing required for the costume.</li>
          <li className="mb-3">Selecting & Sourcing the perfect stones and materials that complement the costume's fabric and overall aesthetic.</li>
          <li className="mb-3">Our highly skilled artisans meticulously hand-apply and secure each stone, ensuring precision and durability according to client specifications.</li>
          <li className="mb-3">Conducting thorough quality checks and making any necessary minor adjustments to the stonework. Upon approval, we deliver a stunning, perfectly embellished costume ready to captivate.</li>
        </ol>
      </section>

      {/* Section 3: See Our Stone Artistry in Action! */}
      <section className="py-6"> {/* <--- SLIGHTLY REDUCED */}
        <h2 className="text-3xl font-semibold text-green-600 mt-0 mb-6 text-center">See Our Stone Artistry in Action!</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-0">
          <img src={Solar1} alt="Solar Installation" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-md" />
          <img src={Solar2} alt="Energy Savings" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-md" />
          <img src={Solar3} alt="Maintenance Support" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-md" />
        </div>
        <div className="mt-8">
          <video className="w-full h-auto rounded-lg shadow-lg" autoPlay muted loop controls>
            <source src={SolarVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Section 4: Elevate Your Costume Creation */}
      <section className="py-6 text-center"> {/* <--- SLIGHTLY REDUCED */}
        <h2 className="text-3xl font-semibold text-green-600 mt-0 mb-4">Elevate Your Costume Creation with Stonehand Work!</h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Experience costume design taken to the next level. Our innovative stonehand craftsmanship transforms your creations, adding unparalleled brilliance and exceptional quality.
        </p>
        <p className="mt-6 font-bold text-blue-600 leading-relaxed">
          Contact us today to discuss how our specialized stonehand work services can enhance your costume business, helping your designs stand out and make an unforgettable statement at any occasion.
        </p>
      </section>
    </div>
  );
};

export default Stonehandwork;