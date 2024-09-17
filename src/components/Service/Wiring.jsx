import React, { useState } from 'react';
import './Electricalins.css';

const Wiring = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const images = [
    { src: 'src/assets/Wiring/Img1.jpeg', alt: 'not found', content: 'Hi Code is working', type: 'image' },
    { src: 'src/assets/Wiring/Img2.jpeg', alt: 'not found', content: 'Kinda Not working and what if I wrote more content what will happen on hover', type: 'image' },
    { src: 'src/assets/Wiring/Img3.jpeg', alt: 'not found', content: 'Hi Code is working', type: 'image' },
    { src: 'src/assets/Wiring/Vid1.mp4', alt: 'not found', content: 'Hi Code is working', type: 'video' },
  ];

  return (
    <div>
      <div className='text-3xl font-bold text-center py-20 mb-20 dark:bg:gray-900 dark:text-white'>
        <h1>Industrial Wiring</h1>
        <p className='text-xl font-semibold justify-center text-center dark:bg:gray-900 dark:text-white'>
          Industrial wiring involves the installation and maintenance of electrical systems in industrial settings such as factories, warehouses, and manufacturing plants.
          It includes running cables, installing conduits, connecting machinery, and ensuring that all electrical systems comply with safety standards and regulations. 
          Industrial wiring must handle higher voltages and more complex systems compared to residential wiring, often requiring specialized skills to manage heavy-duty equipment and automation systems.
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
              <img src={item.src} alt={item.alt} className="hover-image" />
            ) : (
              <video
                src={item.src}
                alt={item.alt}
                loop
                autoPlay
                muted
                className="hover-video"
              >
                Your browser does not support the video tag.
              </video>
            )}
            <div className="font-semibold hover-content">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wiring;
