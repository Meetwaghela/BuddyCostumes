import React, { useState } from 'react';
import './Electricalins.css';

const Wiring = () => {
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
      <h1>Industrial Wiring</h1>
      <p className='text-xl font-semibold justify-center text-center dark:bg:gray-900 dark:text-white'>Industrial wiring involves the installation and maintenance of electrical systems in industrial settings such as factories, warehouses, and manufacturing plants. 
        It includes running cables, installing conduits, connecting machinery, and ensuring that all electrical systems comply with safety standards and regulations. Industrial wiring must handle higher voltages and more complex systems compared to residential wiring, often requiring specialized skills to manage heavy-duty equipment and automation systems.</p>
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

export default Wiring;
