import React from "react";
import { FaTools, FaLightbulb, FaSmile, FaWrench, FaFileContract, FaSolarPanel } from "react-icons/fa";
import { GiWireCoil } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";


const ServiceData = {
  development: [
    {
      id: 1,
      title: "Electrical Installations",
      href: "/Electricalins",
      icon: <FaTools />,
      delay: 0.2,
    },
    {
      id: 2,
      title: "Industrial Wiring",
      href: "/Wiring",
      icon: <GiWireCoil />,
      delay: 0.3,
    },
    {
      id: 3,
      title: "Electrical Solutions",
      href: "/Solutions",
      icon: <FaLightbulb />,
      delay: 0.4,
    },
  ],
  other: [
    {
      id: 4,
      title: "Electrical Maintenance",
      href: "/Maintenance",
      icon: <FaWrench />,
      delay: 0.6,
    },
    {
      id: 5,
      title: "Electrical Contracting",
      href: "/",
      icon: <FaFileContract />,
      delay: 0.7,
    },
    {
      id: 6,
      title: "Innovative Electrical Solutions",
      href: "/",
      icon: <FaSolarPanel />,
      delay: 0.7,
    },
  ],
  support: [
    {
      id: 7,
      title: "Satisfied Clients",
      href: "/Clients",
      icon: <FaSmile />,
      delay: 0.5,
    },
    {
      id: 8,
      title: "24/7 Support",
      href: "/ContactUs",
      icon: <BiSupport />,
      delay: 0.7,
    },
  ],
};

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

const Service = () => {
  const renderServiceSection = (heading, services) => (
    <>
      <h2 className="text-3xl text-center font-bold mb-4">{heading}</h2>
      <div className="grid grid-cols-2 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 mb-12">
        {services.map((service) => (
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
              aria-label={service.title}
            >
              <div className="text-4xl mb-2"> {service.icon}</div>
              <h2 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h2>
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );

  return (
    <section className="bg-white dark:bg-gray-900 overflow-hidden dark:text-white">
      <div className="container pb-14 pt-16">
        <motion.h1
          variants={SlideFromAbove}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="text-4xl text-center font-bold mt-10 pb-5"
        >
          Our Services
        </motion.h1>
        <p className="text-xl font-semibold text-slate-600 dark:text-slate-300 text-center mb-6">
          Krishna Electricals provides top-tier electrical installations, maintenance, and industrial wiring solutions. We cater to diverse industries, ensuring safe, reliable, and efficient electrical services for businesses of all sizes.
        </p>

        {renderServiceSection("Development", ServiceData.development)}

        {renderServiceSection("Other", ServiceData.other)}

        {renderServiceSection("Support and Satisfied Clients", ServiceData.support)}
      </div>
    </section>
  );
};

export default Service;
