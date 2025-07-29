import React from "react";
import { FaTools, FaLightbulb, FaSmile, FaWrench, FaRegGem } from "react-icons/fa";
import { GiAmpleDress, GiRolledCloth, GiSewingNeedle } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";
import { TbHexagonLetterAFilled } from "react-icons/tb";

const ServicesData = [
  {
    id: 1,
    title: "Custom Costume Design ",
      href: "/CustomDesign",
      icon: <GiAmpleDress />,
      delay: 0.2,
  },
  {
    id: 2,
    title: "Fabric sourcing and selection",
      href: "/Fabric",
      icon: <GiRolledCloth />,
      delay: 0.3,
  },
  {
    id: 3,
    title: "Prop and Accessory Making",
      href: "/Accessory",
      icon: <TbHexagonLetterAFilled />,
      delay: 0.4,
  },
  {
    id: 4,
      title: "Embroidery with Stones",
      href: "/Stonework",
      icon: <FaRegGem />,
    delay: 0.5,
  },
  {
    id: 5,
      title: "Costume Maintenance",
      href: "/Innovative",
      icon: <GiSewingNeedle />,
      delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 Support",
    href: "/ContactUs",
    icon: <BiSupport />,
    delay: 0.7,
  },
];

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
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
        // delay: 0.8,
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

const Services = () => {
  return (
    <section className="bg-white dark:bg-gray-900 overflow-hidden dark:text-white">
      <div className="container pb-14 pt-16">
        <motion.h1
          variants={SlideFromAbove}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="text-2xl text-center font-bold pb-5"
        >
          Our Services
        </motion.h1>
        <motion.h2
          variants={SlideFromAbove}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="text-5xl text-center font-bold pb-10"
        >
          Comprehensive Electrical Solutions for <br />Your Business
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-gray-300 dark:bg-gray-800 rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white dark:hover:bg-gray-500 hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <a
                href={service.href}
                className="flex flex-col items-center justify-center"
              >
                <div className="text-4xl mb-2"> {service.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3">
                  {service.title}
                </h1>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
