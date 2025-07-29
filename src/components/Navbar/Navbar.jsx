import React, { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import img3 from "../../components/assets/3.jpg";
import img1 from "../../components/assets/1.png"; // This is the 1.png image
import JP from "../../components/assets/JP.jpeg";
import logo from "../../components/assets/Log1.jpeg";
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
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const homeSubMenuItems = [
    { name: "Gallery", link: "/Gallery" },
    { name: "About Us", link: "/aboutus" },
  ];

  return (
    <>
      <header className="bg-navbar text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <nav className="container flex h-[70px] items-center justify-between py-2 px-4 md:px-0">
          <div className="flex items-center text-2xl text-white md:text-3xl">
            <a href="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-auto transition-transform duration-300 hover:scale-110"
              />
              <span className="inline-block font-bold">Buddys</span>
              <span className="inline-block font-bold text-primary text-red-500 ml-0.2">
                Costumes
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li className="group relative cursor-pointer flex justify-center">
                <a href="/" className="flex h-[72px] items-center gap-[2px] text-lg px-2">
                  Home
                  {homeSubMenuItems.length > 0 && (
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  )}
                </a>
                {homeSubMenuItems.length > 0 && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-[72px] z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                    <ul className="space-y-3">
                      {homeSubMenuItems.map((item) => (
                        <li
                          key={item.name}
                          className="p-2 hover:bg-violet-200 transition-colors duration-300 rounded"
                        >
                          <a
                            href={item.link}
                            className="text-gray-700 hover:text-violet-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>

              {/* Services Menu Item - Adjusted for 1.png */}
              <li className="cursor-pointer group flex justify-center">
                <a
                  href="/Service"
                  className="flex h-[72px] items-center gap-[2px] px-2"
                >
                  Services
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                {/* 👇 MODIFICATION STARTS HERE: Added min-h-[350px] to the absolute positioned div 👇 */}
                <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block top-[72px] min-h-[350px]">
                  {/* Now that this parent div has a min-height, h-full on the grid will work */}
                  <div className="grid grid-cols-3 gap-5 h-full">
                    {/* The image container */}
                    <div className="overflow-hidden h-full">
                      <img
                        className="w-full h-full rounded-b-3xl object-cover"
                        src={img1} // This is your 1.png image
                        alt="pics"
                      />
                    </div>
                    <div className="col-span-2 flex flex-col h-full">
                      <h1 className="pb-3 text-2xl font-bold">Our Services</h1>
                      <p className="text-l font-semibold text-slate-600 flex-grow">
                        We craft bespoke costumes for any occasion, from
                        theatrical productions and cosplay events to themed parties and Halloween. We specialize in precision tailoring, premium materials, and authentic designs.
                        Trust us to create costumes that not only look stunning but also perform flawlessly."
                      </p>
                      <div className="grid grid-cols-3">
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                            Development
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            <a href="/customdesign">
                              Custom Design & Creation
                            </a>
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            <a href="/fabric">
                              Fabric sourcing & selection
                            </a>
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            <a href="/accessories">
                              Prop & Accessory Making
                            </a>
                          </li>
                        </ul>
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                            Other Services
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            <a href="/Innovative">
                              Alterations & Repairs
                            </a>
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            <a href="/stonework">
                              Embroidery with Stones
                            </a>
                          </li>
                          
                        </ul>
                        <div>
                          <img src={img3} alt="no image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 👆 MODIFICATION ENDS HERE 👆 */}
              </li>

              {/* Dance Studio */}
              <li className="cursor-pointer flex justify-center">
                <a href="/DanceStudio" className="flex h-[72px] items-center px-2">
                  Dance Studio
                </a>
              </li>

              {/* Contact Us */}
              <li className="cursor-pointer flex justify-center">
                <a href="/ContactUs" className="flex h-[72px] items-center px-2">Contact us</a>
              </li>

              <li>
                <div className="flex items-center gap-4">
                  <div>
                    <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90" />
                  </div>
                  <div>
                    <p>Call us on</p>
                    <p>
                      <a href="tel:+971558546883">+971558546883</a>
                    </p>
                  </div>
                </div>
              </li>
              {/* Theme Toggle Button */}
              <li>
                {theme === "dark" ? (
                  <BiSolidSun
                    onClick={() => setTheme("light")}
                    className="text-2xl cursor-pointer"
                  />
                ) : (
                  <BiSolidMoon
                    onClick={() => setTheme("dark")}
                    className="text-2xl cursor-pointer"
                  />
                )}
              </li>
            </ul>
          </div>

          {/* Mobile Menu & JP Image (keep for mobile/responsive) */}
          <div className="flex items-center gap-4 md:hidden">
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
          <div className="jp-image-container hidden md:block">
            <img src={JP} alt="Shailesh Waghela" className="jp-image" />
            <div className="jp-image-name">
              <h1>Shailesh Waghela</h1>
            </div>
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;