import React, { useState } from 'react';
import './Electricalins.css';
import Wirimg1 from '../../components/assets/Wirimg.jpeg';
import Wirimg2 from '../../components/assets/Wirimg (2).jpeg';
import Wirimg3 from '../../components/assets/Wirimg (3).jpeg';
import WirimgVideo from '../../components/assets/Wirimg (1).mp4';

const Wiring = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setClickedIndex(index === clickedIndex ? null : index);  
  };

  const images = [
    { src: Wirimg1, alt: 'Industrial Wiring Image 1', content: 'A close-up view of high-quality industrial wiring installation demonstrating proper cable management and safety practices.', type: 'image' },
    { src: Wirimg2, alt: 'Industrial Wiring Image 2', content: 'An example of complex wiring configurations in an industrial setting, showcasing the integration of various systems for efficient operation.', type: 'image' },
    { src: Wirimg3, alt: 'Industrial Wiring Image 3', content: 'Illustration of wiring connections to heavy machinery, highlighting the importance of secure and efficient electrical systems.', type: 'image' },
    { src: WirimgVideo, alt: 'Industrial Wiring Video', content: 'A video showcasing the process of installing and testing industrial wiring systems, providing insights into safety and efficiency practices.', type: 'video' },
  ];

  return (
    <div>
      <div className='text-3xl font-bold text-center py-20 mb-20 dark:bg-gray-900 dark:text-white'>
        <h1>Industrial Wiring</h1>
        <p className='text-xl italic font-semibold justify-center text-center dark:bg-gray-900 dark:text-white'>
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
            ) : item.type === 'video' ? (
              <div className="video-wrapper">
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
              </div>
            ) : null}
            <div className="font-semibold hover-content">
              {item.content}
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

export default Wiring;
