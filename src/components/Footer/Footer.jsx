import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";
import JP from "../../components/assets/JP.jpg";

const Footer = () => {
  return (
    <div className="rounded-b-3xl rounded-t-3xl bg-gradient-to-r from-blue-700 via-violet-700 via-20% via-purple-700 to-red-700 pt-20 dark:bg-gray-800">
      <section className="mx-auto max-w-[1200px] text-white ">
        <div className="grid py-4 md:grid-cols-3">
          <div className="px-5 py-1">
            <h1 className="mb-1 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/" className="">
                <span className="inline-block font-bold">KRISHNA</span>
                <span className="inline-block font-bold text-primary text-red-500 ml-2">
                  ELECTRICALS
                </span>
              </a>
            </h1>
            <br />
            <div className="flex items-center gap-3">
              <a
                href="https://www.google.com/maps/place/KRISHANA+ELECTRICALS/@19.2788557,73.0460645,19z/data=!4m6!3m5!1s0x3be7bdac1a4100dd:0x62ffca687d2ae92a!8m2!3d19.2785461!4d73.0459055!16s%2Fg%2F11c72qll10?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                aria-label="View location on Google Maps"
              >
                <FaLocationArrow />
                <p>Bhiwandi, Maharashtra</p>
              </a>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>
                <a href="tel:+919970751651">+91 9970751651</a>
              </p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>
                <a href="tel:+919225136326">+91 9225136326</a>
              </p>
            </div>
            <div className="jp-img1-container">
              <img
                src={JP}
                alt="Jayesh Patel"
                className="rounded-full h-10 w-10 object-cover jp-img1"
              />
              <div className="jp-img1-name mt-3">
                <h1>Jayesh Vagadiya</h1>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <a href="/">Home</a>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <a href="/aboutus">About us</a>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <a href="/Gallery">Gallery</a>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <a href="/Payment">Payment Details</a>
                </li>
              </ul>
            </div>
            <div className="px-4 py-8">
              <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                Company
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <a href="/Service">Our Services</a>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <a href="/ContactUs">Contact us</a>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <a href="/Privacy">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="px-4 py-8">
              <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                Social Links
              </h1>
              <div className="flex flex-col gap-3">
                <h1>Get In Touch</h1>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const email = e.target.elements.email.value;
                    window.location.href = `mailto:51181krishnaelectricals@gmail.com?from=${email}`;
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="px-4 py-2 rounded-l-xl border-none outline-none"
                    aria-label="Enter your email"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-r-xl transition duration-300"
                    aria-label="Submit your email"
                  >
                    Go
                  </button>
                </form>
                <div className="flex items-center gap-3 mt-4"> {/* Increased margin-top for spacing */}
                  <a
                    href="https://wa.me/+919970751651"
                    aria-label="WhatsApp"
                    className="duration-200 hover:scale-105 text-3xl"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="#"
                    className="duration-200 hover:scale-105 text-3xl"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="duration-200 hover:scale-105 text-3xl"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  {/* <a
                    href="#"
                    className="duration-200 hover:scale-105 text-3xl"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            © 2016 Krishna Electricals all rights reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
