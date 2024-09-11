import React, { useState } from 'react';
import './Electricalins.css';

const Maintenance = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const images = [
    { src: 'src/assets/demo.jpg', alt: 'JP', content: 'Hi Code is working' },
    { src: 'src/assets/demo.jpg', alt: 'JP', content: 'Kinda Not working and what if i wrote more content what will be happen to hover' },
    { src: 'src/assets/demo.jpg', alt: 'JP', content: 'Hi Code is working' },
    { src: 'src/assets/demo.jpg', alt: 'JP', content: 'Hi Code is working' },
  ];

  return (
    <div>
    <div className='text-3xl font-bold text-center py-20 mb-20 dark:bg:gray-900 dark:text-white'>
      <h1>ELECTRICAL MAINTENANCE</h1>
      <p className='text-xl font-semibold justify-center text-center dark:bg:gray-900 dark:text-white'>Electrical maintenance involves the routine inspection, testing, and repair of electrical systems to ensure their safe and efficient operation. 
        It includes tasks such as checking wiring, replacing faulty components, and preventing potential hazards, all aimed at minimizing downtime and extending the lifespan of electrical equipment.</p>
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
        </div>
      ))}
    </div>
    </div>
  );
};

export default Maintenance;
