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
    { src: Ins1, type: "image", alt: "Exquisite Embellished Costume", content: "A supremely graceful and stunning costume, adorned with elaborate full stonework that bestows extraordinary sophistication for performers." },
    { src: Ins2, type: "video", alt: "Distinctive Adorned Costumes Video", content: "A video presenting artists in individually crafted costumes, all embellished with brilliant stonework in intricate, one-of-a-kind patterns, perfect for captivating performances." },
    { src: Ins3, type: "image", alt: "Vest Coat with Ornate Detail", content: "An refined vest coat enhanced with dazzling and intricate stonework, meticulously designed to add exceptional beauty and individuality to any performer's ensemble." },
    { src: Ins4, type: "image", alt: "Costume with Coordinated Embellishment", content: "A performance costume featuring harmonious and striking stonework, precisely crafted to amplify beauty and stage presence." },
    { src: Ins5, type: "video", alt: "Diverse Intricate Stonework Video", content: "A video showcasing various color stonework designs, illustrating versatile methods to impart refinement costumes." },
    { src: Ins6, type: "image", alt: "Bikini Set with Gemstone Accents", content: "A bikini set elevated with glistening and exquisite stonework, creating a distinctive and radiant look ideal for special events." },
    { src: Ins7, type: "image", alt: "Gold Costume with Complementary Adornment", content: "A spectacular gold costume with perfectly complementary, shimmering, and exceptional stonework, designed to emanate poise and enthrall audiences." },
    { src: Ins8, type: "image", alt: "Black Costume with Matched Detailing", content: "A sophisticated black costume featuring refined and glistening stonework, ensuring a distinctive and impactful appearance for any show." },
    { src: Ins9, type: "video", alt: "Dancer Sandals with Gemstone Enhancement", content: "Dancer sandals embellished with sparkling and distinctive stonework, adding an extra layer of grace and individuality to movements during performances." },
    { src: Ins10, type: "image", alt: "Dress Boots with Stone Embellishment", content: "Dress & boots featuring exquisite and radiant stonework, creating a perfectly singular and impressive look ." },
    { src: Ins11, type: "image", alt: "Performing Costumes with Luminous Stones", content: "Dazzling performing costumes with luminous and exceptional stones, meticulously integrated to impart unparalleled sophistication and visual allure for event shows." },
    { src: Ins12, type: "image", alt: "Gown with Gemstone Detailing", content: "A graceful gown featuring glittering and distinctive stonework, specifically designed to add an extra element of allure and grandeur for performers." },
    { src: Ins13, type: "video", alt: "Bra Fully Adorned with Stones", content: "A bra completely covered with brilliant, exceptional, and graceful stones, expertly crafted to provide a dazzling and beautiful foundation for performance costumes." },
    { src: Ins14, type: "image", alt: "Dancers' Costume with Luminous Stonework", content: "A vibrant dancers' costume featuring glistening, distinctive, and graceful stonework, ensuring performers radiate with enhanced beauty and poise." }
  ];

  return (
    <div>
      <div className="text-3xl font-bold text-center py-20 mb-20 dark:text-white">
        <h1 className="mb-4">Embroidery with Stones</h1>
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
