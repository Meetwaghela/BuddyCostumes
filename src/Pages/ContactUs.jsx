import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GiLetterBomb } from "react-icons/gi";
import { motion } from "framer-motion";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import './Contactus.css';

const contactData = [
  {
    id: 1,
    title: "Email Us",
    text: "51181krishnaelectricals@gmail.com",
    link: "mailto:51181krishnaelectricals@gmail.com",
    icon: <GiLetterBomb aria-label="Email Icon" />,
    delay: 0.1,
  },
  {
    id: 2,
    title: "Chat with us",
    text: "+919970751651",
    link: "https://wa.me/+919970751651",
    icon: <FaWhatsapp aria-label="Whatsapp Icon" />,
    delay: 0.2,
  },
  {
    id: 3,
    title: "Talk to us",
    text: "+919970751651",
    link: "tel:+919970751651",
    icon: <BiPhoneCall aria-label="Phone Icon" />,
    delay: 0.3,
  },
  {
    id: 4,
    title: "Message to us",
    text: "+919970751651",
    link: "sms:+919970751651",
    icon: <FaRegMessage aria-label="Message Icon" />,
    delay: 0.4,
  },
  {
    id: 5,
    title: "Email us",
    text: "rajuchoubey1978@gmail.com",
    link: "mailto:rajuchoubey1978@gmail.com",
    icon: <GiLetterBomb aria-label="Email Icon" />,
    delay: 0.1,
  },
  {
    id: 6,
    title: "Chat with us",
    text: "+919326350896",
    link: "https://wa.me/+919326350896",
    icon: <FaWhatsapp aria-label="Whatsapp Icon" />,
    delay: 0.2,
  },
  {
    id: 7,
    title: "Talk to us",
    text: "+919326350896",
    link: "tel:+919326350896",
    icon: <BiPhoneCall aria-label="Phone Icon" />,
    delay: 0.3,
  },
  {
    id: 8,
    title: "Message to us",
    text: "+919326350896",
    link: "sms:+919326350896",
    icon: <FaRegMessage aria-label="Message Icon" />,
    delay: 0.4,
  },
];

const slideInFromLeft = (delay) => ({
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef(null);

  const sendEmail = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMessage("Your message has been sent!");
      form.current.reset();
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto py-40 px-10">
        <h1 className="text-5xl font-bold text-center mb-10">Contact Us</h1>
        <h2 className="text-xl font-semibold text-center mb-28">
          We are always available to answer your queries, offer advice, and discuss your electrical requirements. Get in touch with us through any of the contact details provided below.
        </h2>
        <h1 className="text-2xl font-semibold text-center mb-2">Contact us today to schedule a consultation</h1>
        <h1 className="text-4xl font-semibold text-center mb-5">Jayesh Vagadiya</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {contactData.slice(0, 4).map((contact) => (
            <motion.a
              key={contact.id}
              href={contact.link}
              variants={slideInFromLeft(contact.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="w-full flex flex-col items-center justify-center p-6 bg-gray-300 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-600 transform transition duration-300 hover:scale-110 hover:shadow-2xl mx-auto"
              aria-label={contact.title}
            >
              <div className="text-4xl mb-4">{contact.icon}</div>
              <h2 className="text-lg font-semibold text-center mb-2">
                {contact.title}
              </h2>
              {contact.text && (
                <p className="text-center text-base">{contact.text}</p>
              )}
            </motion.a>
          ))}
        </div>

        <h1 className="text-4xl font-semibold text-center mb-5">Raju Choubey</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
          {contactData.slice(4).map((contact) => (
            <motion.a
              key={contact.id}
              href={contact.link}
              variants={slideInFromLeft(contact.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="w-full flex flex-col items-center justify-center p-6 bg-gray-300 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-600 transform transition duration-300 hover:scale-110 hover:shadow-2xl mx-auto"
              aria-label={contact.title}
            >
              <div className="text-4xl mb-4">{contact.icon}</div>
              <h2 className="text-lg font-semibold text-center mb-2">
                {contact.title}
              </h2>
              {contact.text && (
                <p className="text-center text-base">{contact.text}</p>
              )}
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 rounded-2xl p-2 dark:text-white dark:bg-gray-800">
          <div 
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="contact-form flex flex-col items-center gap-4 text-center dark:bg-gray-800 dark:text-white text-black md:w-1/2"
          >
            <h1 className=" text-3xl text-center font-semibold dark:bg-gray-800 dark:text-white">Let's discuss your electrical needs</h1>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Insert your name" className="dark:text-white dark:bg-gray-800" required />
              <input type="email" name="email" placeholder="Insert your email" className="dark:text-white dark:bg-gray-800" required />
              <textarea name="project" placeholder="Write your Query" className="dark:text-white dark:bg-gray-800" required></textarea>
              <button type="submit" className="rounded-xl dark:text-white dark:bg-blue-700" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {message && <p className="text-center text-green-500 mt-4">{message}</p>}
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center justify-top mt-10 md:w-1/2"
          >
            <h1 className="text-3xl text-center font-semibold dark:text-white mb-10">Operational work hours</h1>
            <div className="flex flex-col w-full space-y-2">
              <div className="px-10 flex text-center justify-between w-[85%] Bottom-dashed pb-2">
                <h2 className="text-xl">Mon - Sat</h2>
                <p className="text-right">: 9:00AM - 8:00PM</p>
              </div>
              <div className="px-10 flex justify-between w-[85%] pb-2">
                <h2 className="text-xl">Sunday</h2>
                <p className="text-right">: 10:00AM - 3:00PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mapouter">
        <div className="map-section" style={{ marginBottom: '20px' }}>
          <h2 className="text-4xl font-bold text-left pb-4 dark:text-white">Location to Visit</h2>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d941.5201795244598!2d73.0460645!3d19.2788557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bdac1a4100dd%3A0x62ffca687d2ae92a!2sKRISHANA%20ELECTRICALS!5e0!3m2!1sen!2sin!4v1723797929825!5m2!1sen!2sin" 
            width="100%" 
            height="400"
            style={{ borderRadius: '8px', border: 'none' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
