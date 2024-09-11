import React, { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu"   ;
import img3 from "../../assets/3.jpg";
import img1 from "../../assets/1.jpg";
import JP from "../../assets/JP.jpg";
import logo from "../../assets/Log.png";
import "./ResponsiveMenu.css";
import { motion } from "framer-motion";



const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("dark theme");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("light theme");
    }
  }, [theme]);

  return (
    <>
      <header className="bg-navbar text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <nav className="container flex h-[70px] items-center justify-between py-2 px-0">
         <motion.div
           initial={{ opacity: 20, y: -50 }}
           animate={{ opacity: 30, y: 0 }}
           className="container py-10 flex justify-between items-center"
          >
          <div className="flex items-center text-2xl text-white md:text-3xl">
            <a href="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-auto transition-transform duration-300 hover:scale-110"
              />
              <span className="inline-block font-bold">KRISHNA</span>
              <span className="inline-block font-bold text-primary text-red-500 ml-0.2">
                ELECTRICALS
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a href="/" className="flex h-[72px] items-center gap-[2px]">
                  Home{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Gallery</li>
                    <li className="p-2 hover:bg-violet-200"><a href="/aboutus">About us</a></li>
                    <li className="p-2 hover:bg-violet-200"><a href="/Payment">Payment Details</a></li>
                  </ul>
                </div>
              </li>
              <li className="cursor-pointer group">
                <a href="/Service" className="flex h-[72px] items-center gap-[2px]">
                  Services{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block">
                  <div className="grid grid-cols-3 gap-5">
                    <div className="d-200 overflow-hidden">
                      <img
                        className="max-h-[5000px] w-full rounded-b-3xl object-fill"
                        src={img1}
                        alt="pics"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="pb-3 text-2xl font-bold">Our Services</h1>
                      <p className="text-l font-semibold text-slate-600">
                        Krishna Electricals provides high-quality electrical
                        solutions to a wide range of industries. We are your
                        partner for all your electrical needs.
                      </p>
                      <div className="grid grid-cols-3">
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                            Development
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                          <a href="/Electricalins">
                            Electrical Installations
                            </a>
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Industrial Wiring
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Electrical Solutions
                          </li>
                        </ul>
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                            Other Services
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Electrical Contracting
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Electrical Maintenance
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Innovative Electrical Solutions
                          </li>
                        </ul>
                        <div>
                          <img src={img3} alt="no image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li> <a href="/ContactUs">Contact us</a></li>
              <li>
                <div className="flex items-center gap-4">
                  <div>
                    <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90" />
                  </div>
                  <div>
                    <p>Call us on</p>
                    <p>
                      <a href="tel:+919970751651">+91 9970751651</a>
                    </p>
                  </div>
                </div>
              </li>
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </ul>
          </div>
          <div className="flex items-center gap-4 md:hidden ">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
          <div className="jp-image-container">
            <img src={JP} alt="Jayesh Patel" className="jp-image" />
            <div className="jp-image-name">
              <h1>Jayesh Patel</h1>
            </div>
          </div>
          </motion.div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
