import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SlideFromRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
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
      duration: 1,
      ease: "easeInOut",
      delay: 0.8,
    },
  },
};

const Contactus = () => {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate('/Consultancy');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-[450px] flex flex-col items-center justify-center dark:bg-grey-900 dark:text-white overflow-hidden">
      <div className="grid grid-cols-12 gap-4 absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-gray-700"></div>
        ))}
      </div>
      <div className="relative text-center z-10">
        <motion.p 
          variants={SlideFromRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-xl"
        >
          Get in touch
        </motion.p>
        <motion.h1
          variants={SlideFromAbove}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-5xl font-bold mt-2"
        >
          Power Your Business with <br /> Krishna Electricals
        </motion.h1>
        <motion.p
          variants={SlideFromAbove}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-lg mt-4"
        >
          Let us help you power your business with our exceptional electrical contracting services.
        </motion.p>
        <motion.button
          onClick={handleConsultationClick}
          variants={SlideFromAbove}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-blue-800 text-white px-6 py-3 rounded-lg mt-6 dark:hover:bg-white hover:text-black hover:bg-gray-400"
        >
          Free consultation
        </motion.button>
      </div>
    </div>
  );
};

export default Contactus;
