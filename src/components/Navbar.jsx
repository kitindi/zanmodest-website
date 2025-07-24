import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full shadow-xs">
      <div className="w-full flex items-center justify-between max-w-6xl mx-auto  ">
        <Link to="/">
          {/* <img src={`./images/logo5.png`} alt="" className="w-36" /> */}
          <img src={`./images/brown-logo.svg`} alt="" className="w-32" />
        </Link>
        <div>
          <ul className="flex items-center gap-12 text-md font-bold">
            {" "}
            <Link to="packages" className="cursor-pointer text-[#512731]">
              PACKAGES & EXPERIENCES
            </Link>
            <Link to="/about-us" className="cursor-pointer text-[#512731]">
              ABOUT US
            </Link>
            <Link to="/travel-guide" className="cursor-pointer text-[#512731]">
              TRAVEL GUIDE
            </Link>
            <Link to="/contact-us" className="text-[#522731] cursor-pointer border border-[#522731] hover:bg-[#522731] hover:text-white font-bold px-8 py-2">
              ENQUIRE NOW
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
