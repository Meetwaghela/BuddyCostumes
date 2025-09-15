import React, { useState } from 'react';
import './Fab.css'; // Assuming this CSS file contains the necessary styling for layout
import Ins1 from '../../components/assets/Ins1.jpeg';
import Ins2 from '../../components/assets/Ins2.mp4';
import Ins3 from '../../components/assets/Ins3.jpeg';
import Ins4 from '../../components/assets/Ins4.jpeg';
import Ins5 from '../../components/assets/Ins5.mp4';
import Ins6 from '../../components/assets/Ins6.jpeg';
import Ins7 from '../../components/assets/Ins7.jpeg';
import Ins8 from '../../components/assets/Ins8.jpeg';
import Ins9 from '../../components/assets/Ins9.mp4';
import Ins10 from '../../components/assets/Ins10.jpeg';
import Ins11 from '../../components/assets/Ins11.jpeg';
import Ins12 from '../../components/assets/Ins12.jpeg';
import Ins13 from '../../components/assets/Ins13.mp4';
import Ins14 from '../../components/assets/Ins14.jpeg';

const Stonework = () => {
  // activeIndex will now handle the active state for styling
  const [activeIndex, setActiveIndex] = useState(null); // Initialize as null so no item is active by default

  const handleClick = (index) => {
    // Toggle active state: if clicking the same item, deactivate it. Otherwise, activate the new item.
    setActiveIndex(index === activeIndex ? null : index);
  };

  const images = [
    { src: Ins1, type: "image", alt: "Exquisite Embellished Costume" },
    { src: Ins2, type: "video", alt: "Distinctive Adorned Costumes Video"},
    { src: Ins3, type: "image", alt: "Vest Coat with Ornate Detail"  },
    { src: Ins4, type: "image", alt: "Costume with Coordinated Embellishment"},
    { src: Ins5, type: "video", alt: "Diverse Intricate Stonework Video" },
    { src: Ins6, type: "image", alt: "Bikini Set with Gemstone Accents" },
    { src: Ins7, type: "image", alt: "Gold Costume with Complementary Adornment" },
    { src: Ins8, type: "image", alt: "Black Costume with Matched Detailing" },
    { src: Ins9, type: "video", alt: "Dancer Sandals with Gemstone Enhancement" },
    { src: Ins10, type: "image", alt: "Dress Boots with Stone Embellishment" },
    { src: Ins11, type: "image", alt: "Performing Costumes with Luminous Stones" },
    { src: Ins12, type: "image", alt: "Gown with Gemstone Detailing" },
    { src: Ins13, type: "video", alt: "Bra Fully Adorned with Stones" },
    { src: Ins14, type: "image", alt: "Dancers' Costume with Luminous Stonework" },
  ];

  return (
    <div>
      <div className="text-3xl font-bold text-center py-20 mb-20 dark:text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-500 dark:text-gray-400 drop-shadow-2xl text-center">
          EMBROIDERY WITH STONES
        </h1>
        <p className="text-xl italic font-semibold justify-center text-center dark:text-white">
          Buddys Costume: Crafting Your Vision with Expert Stonework
          Though Buddys Costume is a new name, our team Transforming costume dreams into dazzling reality, our hand-crafted stone adornments involve carefully analyzing costume themes, collaborating closely with clients on design aspirations, and meticulously sourcing perfect materials. Our skilled artisans then hand-apply and secure each stone, ensuring precision and durability, followed by thorough quality checks, delivering stunning, captivating, and perfectly embellished costumes.
        </p>
      </div>
      <div className="image-container">
        {images.map((item, index) => (
          <div
            key={index}
            className={`image-wrapper ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="hover-image"
                loading="lazy" // Added native lazy loading for images
              />
            ) : (
              <video
                src={item.src}
                alt={item.alt}
                className="hover-image"
                loop
                muted
                autoPlay
                playsInline
                preload="none" // Changed to preload="none" for lazy loading videos
              >
                Your browser does not support the video tag.
              </video>
            )}
            <div className="hover-content font-semibold">
              {item.content}
            </div>
            {/* Removed the "Click to know more!" message as per previous requests */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stonework;
