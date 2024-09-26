import React, { useState } from 'react';
import './Electricalins.css';

const Electricalins = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    setClickedIndex(index === clickedIndex ? null : index); 
  };

  const images = [
    { src: '/assets/Ins1.jpg', alt: '', content: '2 Pole Structure' },
    { src: '/assets/Ins2.jpg', alt: '', content: 'Mounted TR Two pole Structure' },
    { src: '/assets/Ins3.jpg', alt: '', content: 'Hi Code is working' },
    { src: '/assets/Ins4.png', alt: '', content: 'Installation of Outdoor Type Substation' },
    { src: '/assets/Ins5.png', alt: '', content: 'Installation of Outdoor Type Substation' },
    { src: '/assets/Ins6.jpg', alt: '', content: 'Installation of Outdoor Type Substation' },
    { src: '/assets/Ins7.jpg', alt: '', content: 'Installation of Indoor type Substation' },
    { src: '/assets/Ins8.jpg', alt: '', content: 'This is how indoor substation look like from inside' },
    { src: '/assets/Ins9.jpg', alt: '', content: 'Installation of Indoor type Substation' },
    { src: '/assets/Ins10.jpg', alt: '', content: 'Installation of 2 Way Feeder Pillar' },
    { src: '/assets/Ins11.png', alt: '', content: 'Installation of 8 Way Feeder Pillar' },
    { src: '/assets/Ins12.jpg', alt: '', content: 'Installation of Panel' },
    { src: '/assets/Ins13.jpg', alt: '', content: 'Cable Laying' },
    { src: '/assets/Ins14.jpg', alt: '', content: 'Cable Termination' },
  ];

  return (
    <div>
      <div className='text-3xl font-bold text-center py-20 mb-20 dark:text-white'>
        <h1>ELECTRICAL INSTALLATIONS</h1>
        <p className='text-xl italic font-semibold justify-center text-center dark:text-white'>
          Electrical installations should always be performed by qualified electricians who understand the complexities of electrical systems and the importance of adhering to safety standards. Poorly installed electrical systems can lead to inefficiencies, frequent outages, and serious hazards such as electrical fires or shocks.
          Regular inspections and maintenance are also important to ensure that the electrical installation remains safe and functional over time.
        </p>
      </div>
      <div className="image-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-wrapper ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={image.src} alt={image.alt} className="hover-image" />
            <div className="hover-content font-semibold">
              {image.content}
            </div>
            {clickedIndex !== index && (
              <div className={`click-to-know-more text-white ${activeIndex === index ? 'visible' : ''}`}>
                Click to know more about image or video
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electricalins;
