import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaSms, FaPhoneAlt } from 'react-icons/fa';

const Consultancy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope />,
      title: 'Email',
      text: 'rajuchoubey1978@gmail.com',
      link: 'mailto:rajuchoubey1978@gmail.com',
      delay: 0.3,
    },
    {
      id: 2,
      icon: <FaWhatsapp />,
      title: 'Chat with us on WhatsApp',
      contacts: [
        { text: '+919326350896', link: 'https://wa.me/919326350896' },
        { text: '+918668925184', link: 'https://wa.me/918668925184' },
      ],
      delay: 0.4,
    },
    {
      id: 3,
      icon: <FaPhoneAlt />,
      title: 'Phone',
      contacts: [
        { text: '+919326350896', link: 'tel:+919326350896' },
        { text: '+918668925184', link: 'tel:+918668925184' },
      ],
      delay: 0.5,
    },
    {
      id: 4,
      icon: <FaSms />,
      title: 'Send us a message',
      contacts: [
        { text: '+919326350896', link: 'sms:+919326350896' },
        { text: '+918668925184', link: 'sms:+918668925184' },
      ],
      delay: 0.6,
    },
  ];

  const handleImageClick = (src) => {
    setImageSrc(src);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleTouchEnd = (e) => {
    handleClose();
  };

  return (
    <div className="container mx-auto p-6 ">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="src/assets/JP.jpg" 
          alt="Consultant Raju Choubey"
          className="w-32 h-32 rounded-full mb-6 md:mb-0 md:mr-6 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => handleImageClick("src/assets/JP.jpg")} 
        />
        <motion.h1
          className="text-4xl font-bold text-center dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Consultant Raju Choubey
        </motion.h1>
      </motion.div>

      <motion.p
        className="text-lg text-center mb-6 dark:text-white"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Offering consultancy for all electrical solutions, installation,
        maintenance, and specializing in securing State & Central Textile Subsidy.
      </motion.p>

      <motion.div
        className="bg-blue-100 p-6 rounded-lg shadow-lg mb-8 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-4 ">
          State & Central Textile Subsidy
        </h2>
        <p className="text-md text-blue-700 ">
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
            className="p-4 border rounded-md shadow-lg flex items-center transition-transform transform hover:scale-105 bg-white hover:bg-blue-50 dark:bg-gray-700 dark:text-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: info.delay }}
          >
            <span className="text-3xl text-blue-600 mr-4">{info.icon}</span>
            <div>
              <h2 className="text-xl font-semibold">{info.title}</h2>
              {info.contacts ? (
                info.contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="block text-blue-600 underline hover:text-blue-800"
                  >
                    {contact.text}
                  </a>
                ))
              ) : (
                <a
                  href={info.link}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {info.text}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleBackgroundClick} 
          onTouchEnd={handleTouchEnd}
        >
          <motion.img
            src={imageSrc}
            alt="Enlarged view"
            className="max-w-full max-h-full cursor-pointer"
            onClick={handleClose}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </div>
  );
};

export default Consultancy;
