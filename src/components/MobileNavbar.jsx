import React from "react";

const MobileNavbar = () => {
  return (
    <nav className="w-full shadow-sm md:hidden  px-4 flex justify-between items-center">
      <span>
        <img src={`./images/brown-logo.svg`} alt="" className="w-26 mb-3 " />
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
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
    </nav>
  );
};

export default MobileNavbar;
