import React from "react";
import { motion } from "framer-motion";

import torrentPowerLogo from "../components/assets/Clients Logo/torrent power.png";
import khemisatiLogo from "../components/assets/Clients Logo/Shri Khemisati.jpg";
import afconsLogo from "../components/assets/Clients Logo/Afcon.png";
import ronakDyeingLogo from "../components/assets/Clients Logo/demo.jpg";
import antarikshLogo from "../components/assets/Clients Logo/Antariksh.jpg";
import maruLogo from "../components/assets/Clients Logo/Maru.jpg";
import churLogo from "../components/assets/Clients Logo/Chur.png";
import jakhariaLogo from "../components/assets/Clients Logo/jakharia.png";
import haritLogo from "../components/assets/Clients Logo/Harit.jpg";
import balajiLogo from "../components/assets/Clients Logo/Balaji.png";
import globalRealityLogo from "../components/assets/Clients Logo/Global.png";
import dhlLogo from "../components/assets/Clients Logo/DHL.avif";
import skLogo from "../components/assets/Clients Logo/SK.jfif";
import hemantLogo from "../components/assets/Clients Logo/Hemant.jpg";
import chachaLogo from "../components/assets/Clients Logo/Chacha.png";
import empireLogo from "../components/assets/Clients Logo/Empire.jpg";


const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const SlideFromAbove = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const clients = [
  { name: "Torrent Power Limited", logo: torrentPowerLogo, review: "Exceptional service and professionalism. They have consistently delivered high-quality solutions for our projects." },
  { name: "Shri Khemisati Processors", logo: khemisatiLogo, review: "Great experience, highly recommended! Their team goes above and beyond to meet our expectations." },
  { name: "AFCONS Infrastructure Limited", logo: afconsLogo, review: "They deliver on time and with precision. Their electrical solutions have been vital for our infrastructure projects." },
  { name: "Ronak Dyeing Limited", logo: ronakDyeingLogo, review: "Reliable and efficient services that we trust for all our manufacturing needs." },
  { name: "Antariksh Infrabuild LLP.", logo: antarikshLogo, review: "Excellent quality and customer service. Their team truly understands our needs and delivers accordingly." },
  { name: "Maru Enterprises pvt. ltd.", logo: maruLogo, review: "Professional and timely solutions with a deep focus on customer satisfaction." },
  { name: "Chur Textiles Limited", logo: churLogo, review: "Top-notch electrical solutions with a focus on safety and reliability." },
  { name: "Jakharia Synthetics pvt ltd", logo: jakhariaLogo, review: "Highly satisfied with the service. Their solutions have streamlined our operations significantly." },
  { name: "Harit Industries pvt ltd", logo: haritLogo, review: "A trustworthy partner for our projects, providing quality services time and again." },
  { name: "Balaji Polyester pvt. ltd", logo: balajiLogo, review: "High standards and great support in all their electrical installations." },
  { name: "Global Reality Infra", logo: globalRealityLogo, review: "Innovative and reliable services that have helped our business grow." },
  { name: "DHL Supply Chain ind. pvt. ltd.", logo: dhlLogo, review: "Outstanding customer experience with a focus on quality and timeliness." },
  { name: "S K Logistics", logo: skLogo, review: "Great attention to detail and professionalism, ensuring our operations run smoothly." },
  { name: "Hemant Surgicals Industries Ltd.", logo: hemantLogo, review: "Exceptional quality and service. Their attention to detail is remarkable." },
  { name: "Chacha Lifestyle pvt. ltd.", logo: chachaLogo, review: "Reliable and efficient solutions that have always exceeded our expectations." },
  { name: "New Empire Textiles processors Pvt. Ltd", logo: empireLogo, review: "First-class service from a team that really cares about customer satisfaction." },
];

const Clients = () => {
  return (
    <div className="p-10 bg-gray-100 mt-20 dark:bg-gray-900 dark:text-white">
      <motion.h2
        variants={SlideFromAbove}
        initial="initial"
        animate="animate"
        className="text-4xl font-bold text-center mb-10"
      >
        Our Satisfied Clients
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 dark:bg-gray-900">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            variants={SlideLeft(index * 0.3)}
            initial="initial"
            animate="animate"
            className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center dark:bg-gray-700"
          >
            <div className="w-24 h-24 mb-4 p-2 bg-white rounded-full flex items-center justify-center dark:bg-gray-800">
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center dark:text-white">{client.name}</h3>
            <p className="text-center italic text-gray-600 mt-4 dark:text-white">"{client.review}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
