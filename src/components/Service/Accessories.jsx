import React, { useState, useEffect } from 'react';
import './Accessories.css';
import acc1 from '../../components/assets/acc1.jpeg';
import acc2 from '../../components/assets/acc2.jpeg';
import acc3 from '../../components/assets/acc3.jpeg';
import acc4 from '../../components/assets/acc4.jpeg';
import acc5 from '../../components/assets/acc5.jpeg';
import acc6 from '../../components/assets/acc6.mp4';
import acc7 from '../../components/assets/acc7.jpeg';
import acc8 from '../../components/assets/acc8.jpeg';

const Accessories = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const images = [
    { src: acc1, alt: 'Vibrant Feathered Headpiece and Stilt Walker Costume', content: 'Experience our vibrant and elaborate costume headpieces, perfect for eye-catching performances and events. This stilt walker showcases a stunning feathered design.', type: 'image' },
    { src: acc2, alt: 'Futuristic Silver Headpieces and Costumes', content: 'Our bespoke futuristic silver headpieces are designed to complement unique costume themes, creating a cohesive and striking look for any event.', type: 'image' },
    { src: acc3, alt: 'Golden Ornate Headpiece for Special Events', content: 'Elevate your look with our designer headpieces, crafted with intricate details and dazzling embellishments, ideal for galas and exclusive parties.', type: 'image' },
    { src: acc4, alt: 'Black and Gold Beaded Hat and Bodysuit', content: 'From intricate hats to exquisitely detailed bodysuits, we create custom accessories that perfectly match your costume vision. This piece features stunning beadwork.', type: 'image' },
    { src: acc5, alt: 'Collection of Crystal-Embellished Headpieces', content: 'A closer look at our dazzling collection of crystal-embellished headpieces, showcasing the meticulous craftsmanship and sparkling details.', type: 'image' },
    { src: acc6, alt: 'Costume Performers with Props in a Mall', content: 'See our costumes and props in action! This video features performers in a variety of elaborate fruit-themed outfits and stilt costumes, bringing joy to a public space.', type: 'video' },
    { src: acc7, alt: 'Fantasy-Themed Costume with Moon and Eye Props', content: 'We craft unique and thematic props to complete your costume. This striking ensemble features custom moon and eye accessories, perfect for a fantasy or mystical theme.', type: 'image' },
    { src: acc8, alt: 'Group of Performers in Patterned Costumes and Wide-Brimmed Hats', content: 'Our costume sets include coordinated hats and full ensembles, ensuring every performer looks the part. Ideal for themed events and brand activations.', type: 'image' },
  ];

  return (
    <div>
      <div className="pt-16 text-3xl font-bold text-center dark:bg-gray-900 dark:text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-7 mb-3 leading-tight text-red-600 dark:text-blue-400 drop-shadow-lg text-center">
          PROPS & ACCESSORIES MAKING
        </h1>
        <p className="text-xl italic font-semibold justify-center mb-4 px-4 md:px-8 lg:px-16 dark:text-white">
          At Buddy's Costume, we craft a variety of items for your event right here. This includes all sorts of headpieces, hats, and even backpacks that perfectly fit your costume theme and our clients' needs.
        </p>
      </div>

      <div className="gap-6 image-container">
        {images.map((item, index) => (
          <div
            key={index}
            className={`image-wrapper ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="hover-image"
                loading="lazy"
              />
            ) : item.type === 'video' ? (
              <div className="video-wrapper">
                <video
                  src={item.src}
                  aria-label={item.alt}
                  className="hover-video"
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null}
            <div className="font-semibold hover-content">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
