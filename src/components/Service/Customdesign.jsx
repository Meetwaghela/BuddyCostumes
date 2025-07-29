import React, { useState } from 'react';
// No need to import { Link } from 'react-router-dom'; if you're using <a> tag directly

// Import your local image and video assets
import cc2 from '../../components/assets/cc2.mp4';
import c1 from '../../components/assets/c1.jpeg';
import cc3 from '../../components/assets/cc3.mp4';
import c4 from '../../components/assets/c4.jpeg';
import c5 from '../../components/assets/c5.mp4';
import c6 from '../../components/assets/c6.jpeg';
import c7 from '../../components/assets/c7.jpeg';
import c8 from '../../components/assets/c8.mp4';
import c9 from '../../components/assets/c9.jpeg';
import c10 from '../../components/assets/c10.jpeg';
import c11 from '../../components/assets/c11.mp4';
import c12 from '../../components/assets/c12.jpeg';
import c13 from '../../components/assets/c13.jpeg';

import './Customdesign.css'; // For the image gallery specific styles

const Customdesign = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null); // New state for expanded media

  const handleClick = (index) => {
    setActiveIndex(index);
    // Toggle clicked state: if clicking the active image, unclick it; otherwise, set it as clicked.
    setClickedIndex(index === clickedIndex ? null : index);
  };

  const handleMediaClick = (mediaItem) => {
    setSelectedMedia(mediaItem); // Set the clicked media item for expansion
  };

  const closeModal = () => {
    setSelectedMedia(null); // Close the modal
  };

  const mediaItems = [
    { type: 'video', src: cc2 },
    { type: 'image', src: c1 },
    { type: 'video', src: cc3 }, // Make sure this is 'video'
    { type: 'image', src: c4 },
    { type: 'video', src: c5 },
    { type: 'image', src: c6 },
    { type: 'image', src: c7 },
    { type: 'video', src: c8 },
    { type: 'image', src: c9 },
    { type: 'image', src: c10 },
    { type: 'video', src: c11 },
    { type: 'image', src: c12 },
    { type: 'image', src: c13 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      <div className="container mx-auto px-6 py-12 pt-24">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Custom Costume Design</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Bringing your unique visions to life with custom-tailored costumes for every occasion, character, and stage.
          </p>
        </header>

        {/* Section: Why Choose Buddys Costume for Custom Design */}
        <section className="py-6">
          <h2 className="text-3xl font-semibold text-green-600 mt-6 mb-4">Why Choose Buddys Costume for Your Custom Creation?</h2>
          <p className="mt-0 text-gray-600 dark:text-gray-400 leading-relaxed">
            In the world of performance, events, and personal expression, a costume isn't just clothing – it's a statement. **Buddys Costume** specializes in crafting unique, high-quality, and perfectly fitted costumes that capture your imagination and bring your characters to life. We work with individuals, production companies, schools, and event organizers to deliver unparalleled sartorial artistry.
          </p>
        </section>

        {/* Section: Our Custom Costume Design Process */}
        <section className="py-6">
          <h2 className="text-3xl font-semibold text-green-600 mt-0 mb-4">Our Custom Costume Design Process</h2>
          {/* Ensured strong bottom margin for the list */}
          <ol className="list-decimal list-inside mt-0 text-gray-600 dark:text-gray-400 mb-12">
            <li className="mb-3">
              Concept & Idea Sharing: We begin with an in-depth discussion about your vision, character, event, and budget. Share your ideas and references, and we'll collaboratively refine the concept.
            </li>
            <li className="mb-3">
              Material Sourcing: We meticulously select and source the highest quality fabrics, embellishments, and findings to ensure authenticity, comfort, and durability, based on the agreed-upon design.
            </li>
            <li className="mb-3">
              Precision Crafting: Our skilled artisans and tailors meticulously cut, sew, and construct your costume with unwavering attention to detail and fit.
            </li>
            <li className="mb-3">
              Fittings & Final Delivery: We conduct fittings to ensure a perfect fit and make any necessary adjustments. Upon your final approval, your stunning custom costume is ready!
            </li>
          </ol>
        </section>

        {/* --- CORRECTED PLACEMENT OF HEADING AND GALLERY --- */}
        <section className="py-6">
          <h2 className="text-3xl font-semibold text-green-600 mt-0 mb-6 text-center">Some of Our Custom Costume Creations!</h2>
          <div className="image-container">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className={`image-wrapper ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleMediaClick(item)}
              >
                {item.type === 'image' && (
                  <img src={item.src} alt={item.alt || ''} className="hover-image" />
                )}
                {item.type === 'video' && (
                  <video
                    src={item.src}
                    controls
                    muted // KEEP MUTED for autoplay to work reliably
                    loop
                    autoPlay // ADD autoPlay attribute here
                    className="hover-image"
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section: Elevate Your Costume Creation (Call to Action) */}
        <section className="py-6 text-center">
          <h2 className="text-3xl font-semibold text-green-600 mt-0 mb-4">Elevate Your Story with a Custom Costume!</h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Experience the magic of a costume designed exclusively for you. Our innovative craftsmanship transforms your ideas into unparalleled wearable art, ensuring you stand out.
          </p>
          <p className="mt-6 font-bold text-blue-600 leading-relaxed">
            {/* --- MODIFIED CODE FOR THE BUTTON AND TEXT --- */}
            <a href="/ContactUs" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Contact us today
            </a>
            {' '}to discuss your next custom costume project and let us help you make an unforgettable statement!
            {/* --- END MODIFIED CODE --- */}
          </p>
        </section>
      </div>

      {/* Modal for expanded image/video */}
      {selectedMedia && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            {selectedMedia.type === 'image' && (
              <img src={selectedMedia.src} alt="Expanded costume view" className="modal-media" />
            )}
            {selectedMedia.type === 'video' && (
              <video src={selectedMedia.src} controls autoPlay loop className="modal-media" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Customdesign;