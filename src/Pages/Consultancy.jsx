import React from 'react';
import { GiLetterBomb } from 'react-icons/gi';
import { FaWhatsapp, FaRegMessage } from 'react-icons/fa';
import { BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    id: 1,
    title: 'Email us',
    text: 'rajuchoubey1978@gmail.com',
    link: 'mailto:rajuchoubey1978@gmail.com',
    icon: <GiLetterBomb aria-label="Email Icon" />,
    delay: 0.1,
  },
  {
    id: 2,
    title: 'Chat with us',
    text: '+919326350896',
    link: 'https://wa.me/+919326350896',
    icon: <FaWhatsapp aria-label="Whatsapp Icon" />,
    delay: 0.2,
  },
  {
    id: 3,
    title: 'Talk to us',
    text: '+919326350896',
    link: 'tel:+919326350896',
    icon: <BiPhoneCall aria-label="Phone Icon" />,
    delay: 0.3,
  },
  {
    id: 4,
    title: 'Message to us',
    text: '+919326350896',
    link: 'sms:+919326350896',
    icon: <FaRegMessage aria-label="Message Icon" />,
    delay: 0.4,
  },
];

const Consultancy = () => {
  return (
    <div className="container mx-auto p-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Consultancy by Raju Choubey
      </motion.h1>
      <motion.p
        className="text-lg text-center mb-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Offering consultancy for all electrical solutions, installation,
        maintenance, and specializing in securing State & Central Textile Subsidy.
      </motion.p>

      <motion.div
        className="bg-blue-100 p-6 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          State & Central Textile Subsidy
        </h2>
        <p className="text-md text-blue-700">
          We assist businesses in navigating and securing textile subsidies from
          both state and central governments. These subsidies are essential for
          the growth and development of textile industries, offering financial
          support for new projects, modernization, and expansion. Let us help
          you maximize your benefits and streamline the application process.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {contactInfo.map((info) => (
          <motion.div
            key={info.id}
            className="p-4 border rounded-md shadow-lg flex items-center transition-transform transform hover:scale-105 bg-white hover:bg-blue-50"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: info.delay }}
          >
            <span className="text-3xl text-blue-600 mr-4">{info.icon}</span>
            <div>
              <h2 className="text-xl font-semibold">{info.title}</h2>
              <a href={info.link} className="text-blue-600 underline hover:text-blue-800">
                {info.text}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Consultancy;
