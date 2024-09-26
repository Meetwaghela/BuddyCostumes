import React, { useState } from "react";
import "./Electricalins.css";
import Ins1 from "../../components/assets/Ins1.jpg";
import Ins2 from "../../components/assets/Ins2.jpg";
import Ins3 from "../../components/assets/Ins3.jpg";
import Ins4 from "../../components/assets/Ins4.png";
import Ins5 from "../../components/assets/Ins5.png";
import Ins6 from "../../components/assets/Ins6.jpg";
import Ins7 from "../../components/assets/Ins7.jpg";
import Ins8 from "../../components/assets/Ins8.jpg";
import Ins9 from "../../components/assets/Ins9.jpg";
import Ins10 from "../../components/assets/Ins10.jpg";
import Ins11 from "../../components/assets/Ins11.png";
import Ins12 from "../../components/assets/Ins12.jpg";
import Ins13 from "../../components/assets/Ins13.jpg";
import Ins14 from "../../components/assets/Ins14.jpg";

const Electricalins = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    setClickedIndex(index === clickedIndex ? null : index); 
  };

  const images = [
    { src: Ins1, alt: "Outdoor Substation", content: "Installation and operation of an Outdoor Substation - managing electrical distribution for large-scale facilities." },
    { src: Ins2, alt: "Outdoor Substation Maintenance", content: "Technicians working on maintaining a high-voltage Outdoor Substation to ensure continuous electrical supply." },
    { src: Ins3, alt: "Outdoor Substation Setup", content: "Setting up critical components in an Outdoor Substation for efficient power distribution." },
    { src: Ins4, alt: "Two Pole Structure", content: "Erection of a Two Pole Structure for supporting transformers and electrical conductors in outdoor settings." },
    { src: Ins5, alt: "Mounted Transformer on Two Pole Structure", content: "Installation of a mounted transformer on a two-pole structure, crucial for voltage regulation." },
    { src: Ins6, alt: "Outdoor Type Substation", content: "Assembling key components in an Outdoor Type Substation for industrial electrical distribution." },
    { src: Ins7, alt: "Panel Installation", content: "Installation of an electrical panel that regulates and distributes electricity within a building." },
    { src: Ins8, alt: "Indoor Substation Installation", content: "Complete installation of an Indoor Type Substation for localized power management." },
    { src: Ins9, alt: "Indoor Substation Maintenance", content: "Ongoing maintenance of indoor substation equipment to ensure optimal performance." },
    { src: Ins10, alt: "Indoor Substation Interior", content: "An inside view of a fully functional indoor substation, highlighting critical electrical equipment." },
    { src: Ins11, alt: "8 Way Feeder Pillar", content: "Installation of an 8 Way Feeder Pillar, enabling distribution of electricity to multiple circuits." },
    { src: Ins12, alt: "2 Way Feeder Pillar", content: "Setting up a 2 Way Feeder Pillar to manage smaller-scale electrical distribution." },
    { src: Ins13, alt: "Cable Laying", content: "Laying high-voltage underground cables for power transmission in industrial and urban areas." },
    { src: Ins14, alt: "Cable Termination", content: "Performing precise cable terminations to ensure secure electrical connections and reduce energy losses." },
  ];

  return (
    <div>
      <div className="text-3xl font-bold text-center py-20 mb-20 dark:text-white">
        <h1>ELECTRICAL INSTALLATIONS</h1>
        <p className="text-xl italic font-semibold justify-center text-center dark:text-white">
          Electrical installations should always be performed by qualified electricians who understand the complexities of electrical systems and the importance of adhering to safety standards. Poorly installed electrical systems can lead to inefficiencies, frequent outages, and serious hazards such as electrical fires or shocks.
          Regular inspections and maintenance are also important to ensure that the electrical installation remains safe and functional over time.
        </p>
      </div>
      <div className="image-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-wrapper ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <img src={image.src} alt={image.alt} className="hover-image" />
            <div className="hover-content font-semibold">
              {image.content}
            </div>
            {clickedIndex !== index && (
              <div className={`click-to-know-more text-white ${activeIndex === index ? "visible" : ""}`}>
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
