import { Link } from "react-router";
import React, { useState, useEffect } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Effect to handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to reset body scroll on component unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full ">
      <div className="w-full shadow-sm md:hidden  px-4 flex justify-between items-center">
        <Link to="/">
          <img src={`./images/mobile-logo.png`} alt="" className="w-32 " />
        </Link>
        <span
          className={`  z-40 transition-opacity duration-300 ease-in-out "
          }`}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#512731"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-align-right-icon lucide-align-right"
          >
            <path d="M21 12H9" />
            <path d="M21 18H7" />
            <path d="M21 6H3" />
          </svg>
        </span>
      </div>
      {/* menu links */}
      <div
        className={`fixed top-0 right-0 h-full w-70 bg-[#f6f5ef] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none p-2" aria-label="Close menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#512731"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x-icon lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <nav className="flex flex-col p-4 space-y-2">
          <ul className="flex flex-col gap-8 text-[16px] font-bold">
            {" "}
            <Link to="/" className="cursor-pointer text-[#512731] uppercase" onClick={toggleMenu}>
              HOME
            </Link>
            <Link to="/tour-packages" className="cursor-pointer text-[#512731] uppercase" onClick={toggleMenu}>
              Excursions & EXPERIENCES
            </Link>
            <Link to="/about-us" className="cursor-pointer text-[#512731]" onClick={toggleMenu}>
              ABOUT US
            </Link>
            {/* <Link to="/travel-guide" className="cursor-pointer text-[#512731]">
                        TRAVEL GUIDE
                      </Link> */}
            <Link to="/contact-us" className="text-[#522731] cursor-pointer" onClick={toggleMenu}>
              CONTACTS
            </Link>
            <Link to="contact-us" className="bg-[#522731] cursor-pointer text-white font-bold px-12 py-3 rounded-sm" onClick={toggleMenu}>
              ENQUIRE NOW
            </Link>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default MobileNavbar;
