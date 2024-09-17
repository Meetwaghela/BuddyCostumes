import React, { useState } from 'react';
import './Electricalins.css';

const Electricalins = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    setClickedIndex(index === clickedIndex ? null : index); // Handle click to hide "Click to know more"
  };

  const images = [
    { src: 'src/assets/Installation/2pole1.png', alt: '', content: '2 Pole Structure' },
    { src: 'src/assets/Installation/2pole2.png', alt: '', content: 'Mounted TR Two pole Structure' },
    { src: 'src/assets/Installation/Outdoor.jpg', alt: '', content: 'Hi Code is working' },
    { src: 'src/assets/Installation/Out2.jpg', alt: '', content: 'Installation of Outdoor Type Substation' },
    { src: 'src/assets/Installation/out3.png', alt: '', content: 'Installation of Outdoor Type Substation' },
    { src: 'src/assets/Installation/out4.jpg', alt: '', content: 'Installation of Outdoor Type Substation' },
    { src: 'src/assets/Installation/Ind.jpg', alt: '', content: 'Installation of Indoor type Substation' },
    { src: 'src/assets/Installation/ind2.jpg', alt: '', content: 'This is how indoor substation look like from inside' },
    { src: 'src/assets/Installation/ind3.jpg', alt: '', content: 'Installation of Indoor type Substation' },
    { src: 'src/assets/Installation/FSP.jpg', alt: '', content: 'Installation of 2 Way Feeder Pillar' },
    { src: 'src/assets/Installation/FSP2.png', alt: '', content: 'Installation of 8 Way Feeder Pillar' },
    { src: 'src/assets/Installation/Panel.jpg', alt: '', content: 'Installation of Panel' },
    { src: 'src/assets/Installation/Cable Lay.jpg', alt: '', content: 'Cable Laying' },
    { src: 'src/assets/Installation/Cable Termi.jpg', alt: '', content: 'Cable Termination' },
  ];

  return (
    <div>
      <div className='text-3xl font-bold text-center py-20 mb-20'>
        <h1>ELECTRICAL INSTALLATIONS</h1>
        <p className='text-xl italic font-semibold justify-center text-center'>
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
