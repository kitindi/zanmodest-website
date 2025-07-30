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
            <Link to="/" className="cursor-pointer text-[#512731] uppercase">
              HOME
            </Link>
            <Link to="/tour-packages" className="cursor-pointer text-[#512731] uppercase">
              Excursions & EXPERIENCES
            </Link>
            <Link to="/about-us" className="cursor-pointer text-[#512731]">
              ABOUT US
            </Link>
            {/* <Link to="/travel-guide" className="cursor-pointer text-[#512731]">
                        TRAVEL GUIDE
                      </Link> */}
            <Link to="/contact-us" className="text-[#522731] cursor-pointer">
              CONTACTS
            </Link>
            <Link to="/" className=" cursor-pointer bg-[#522731] text-white font-medium px-4 py-2 mt-2 flex justify-center items-center gap-3">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 256 256">
                  <path d="M186.68,146.63l-32-16a6,6,0,0,0-6,.38L133,141.46A42.49,42.49,0,0,1,114.54,123L125,107.33a6,6,0,0,0,.38-6l-16-32A6,6,0,0,0,104,66a38,38,0,0,0-38,38,86.1,86.1,0,0,0,86,86,38,38,0,0,0,38-38A6,6,0,0,0,186.68,146.63ZM152,178a74.09,74.09,0,0,1-74-74,26,26,0,0,1,22.42-25.75l12.66,25.32-10.39,15.58a6,6,0,0,0-.54,5.63,54.43,54.43,0,0,0,29.07,29.07,6,6,0,0,0,5.63-.54l15.58-10.39,25.32,12.66A26,26,0,0,1,152,178ZM128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"></path>
                </svg>
              </span>
              CHAT ON WHATSAPP
            </Link>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default MobileNavbar;
