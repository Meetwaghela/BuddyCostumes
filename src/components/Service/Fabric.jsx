import React, { useState } from 'react';
import './Fab.css'; // Assuming this CSS file contains the necessary styling for layout
import fab1 from '../../components/assets/fab1.jpeg';
import fab2 from '../../components/assets/fab2.jpeg';
import fab3 from '../../components/assets/fab3.jpeg';
import fab4 from '../../components/assets/fab4.jpeg';
import fab5 from '../../components/assets/fab5.jpeg';
import fab6 from '../../components/assets/fab6.jpeg';
import fab7 from '../../components/assets/fab7.jpeg';
import fab8 from '../../components/assets/fab8.jpeg';
import fab9 from '../../components/assets/fab9.jpeg';
import fab10 from '../../components/assets/fab10.jpeg';
import fab11 from '../../components/assets/fab11.jpeg';
import fab12 from '../../components/assets/fab12.jpeg';

const Fabric = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Initialize as null so no item is active by default

  const handleClick = (index) => {
    // Toggle active state: if clicking the same item, deactivate it. Otherwise, activate the new item.
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Corrected structure: 'images' is now a direct array of objects
  const images = [
    { src: fab1, alt: 'Custom Printed Fabric with Unique Design', type: 'image' },
    { src: fab2, alt: 'Sustainable Hemp Fabric Texture', type: 'image' },
    { src: fab3, alt: 'Intricately Woven Brocade Fabric', type: 'image' },
    { src: fab4, alt: 'Selection of Colorful Silk Fabrics', type: 'image' },
    { src: fab5, alt: 'Digital Fabric Printing Process', 'type': 'image' },
    { src: fab6, alt: 'Embroidered Velvet Fabric Sample', type: 'image' },
    { src: fab7, alt: 'Patterned Cotton Fabric Rolls', type: 'image' },
    { src: fab8, alt: 'Heavy Duty Canvas Fabric for Costumes', type: 'image' },
    { src: fab9, alt: 'Sparkling Sequin Fabric on Display', type: 'image' },
    { src: fab10, alt: 'Sustainable Hemp Fabric (alternative)', type: 'image' },
    { src: fab11, alt: 'Luxury Lace Fabric Detail', type: 'image' },
    { src: fab12, alt: ' Fabric Detail', type: 'image' },
  ];

  return (
    <div>
      <div className='text-3xl font-bold text-center py-16 mb-20 dark:bg-gray-900 dark:text-white'>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-7 mb-6 leading-tight text-blue-700 dark:text-blue-400 drop-shadow-lg text-center">
          Fabric Sourcing & Selection
        </h1>
        <p className='text-xl italic font-semibold justify-center text-center dark:bg-gray-900 dark:text-white px-4 md:px-8 lg:px-16'>
          We're all about bringing your unique costume vision to life at Buddy's Costume! Feel free to bring your own special fabric, or simply share your design ideas with us. We'll then hit the market to find the ideal fabric and meticulously stitch your custom costume.
        </p>
      </div>
      <div className="gap-8 image-container">
        {images.map((item, index) => (
          <div
            key={index}
            className={`image-wrapper ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="hover-image"
                loading="lazy" // Native lazy loading for images - COMMENT MOVED HERE
                // Consider adding width and height attributes for layout stability!
                // For example: width="300" height="300"
              />
            ) : item.type === 'video' ? (
              <div className="video-wrapper">
                <video
                  src={item.src}
                  alt={item.alt} // Alt text for video is for accessibility if video fails to load
                  loop
                  autoPlay
                  muted
                  className="hover-video"
                  controls
                  preload="none" // Prevents video pre-loading
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null}
            {/* The content div should always be present, but its visibility can be controlled by CSS based on activeIndex */}
            <div className="font-semibold hover-content">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fabric;