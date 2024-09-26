import React, { useState } from 'react';
import './Electricalins.css'; 
import M1 from '../../components/assets/M1.png';
import M2 from '../../components/assets/M2.jpg';
import M3 from '../../components/assets/M3.jpg';
import demo from '../../components/assets/demo.jpg';

const Maintenance = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null); 

  const handleClick = (index) => {
    setActiveIndex(index);
    setClickedIndex(index === clickedIndex ? null : index); 
  };

  const images = [
    { 
      src: M1, 
      alt: 'Transformer Installation', 
      content: 'Expert installation of a transformer, ensuring optimal placement and connection for efficient power distribution and reliability.'
    },
    { 
      src: M2, 
      alt: 'Component Replacement', 
      content: 'Replacing a faulty component of the transformer to enhance its performance, followed by thorough safety checks to prevent future issues.'
    },
    { 
      src: M3, 
      alt: 'Preventive Maintenance', 
      content: 'Conducting routine preventive maintenance on transformers to identify wear and tear, ensuring longevity and operational efficiency.'
    },
    { 
      src: demo, 
      alt: 'Overview of Maintenance Tasks', 
      content: 'A comprehensive overview of various maintenance tasks performed on electrical systems, highlighting the importance of regular upkeep and inspections.'
    },
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
