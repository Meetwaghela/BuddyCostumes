import React, { useState } from 'react';
import './Electricalins.css'; 

const Maintenance = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null); 
  const handleClick = (index) => {
    setActiveIndex(index);
    setClickedIndex(index === clickedIndex ? null : index); 
  };

  const images = [
    { src: 'src/assets/Maintenance/M1.png', alt: 'JP', content: 'Hi Code is working' },
    { src: 'src/assets/Maintenance/M2.jpg', alt: 'JP', content: 'Kinda Not working and what if I wrote more content what will happen to hover' },
    { src: 'src/assets/Maintenance/M3.jpg', alt: 'JP', content: 'Hi Code is working' },
    { src: 'src/assets/demo.jpg', alt: 'JP', content: 'Hi Code is working' },
  ];

  return (
    <div>
      <div className='text-3xl font-bold text-center py-20 mb-20 dark:bg-gray-900 dark:text-white'>
        <h1>ELECTRICAL MAINTENANCE</h1>
        <p className='text-xl italic font-semibold justify-center text-center'>
          Electrical maintenance involves the routine inspection, testing, and repair of electrical systems to ensure their safe and efficient operation. 
          It includes tasks such as checking wiring, replacing faulty components, and preventing potential hazards, all aimed at minimizing downtime and extending the lifespan of electrical equipment.
        </p>
      </div>
      <div className="gap-8 image-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-wrapper ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={image.src} alt={image.alt} className="hover-image" />
            <div className="font-semibold hover-content">
              {image.content}
            </div>
            {clickedIndex !== index && (
              <div className={`click-to-know-more ${activeIndex === index ? 'visible' : ''}`}>
                Click to know more about image
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maintenance;
