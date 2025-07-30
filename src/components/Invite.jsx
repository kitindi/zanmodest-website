import React from "react";
import { Link } from "react-router";

const Invite = () => {
  return (
    <div className="w-full flex items-center bg-[#d2bbb8]">
      <div className="px-4 md:px-0 w-full max-w-6xl mx-auto py-20 md:py-32">
        <h3 className="text-4xl text-center mb-8 font-semibold text-[#512731]">Let us help you plan your journey.</h3>
        <p className="text-lg italic text-center text-[#512731] leading-relaxed">
          A visit to Zanzibar promises a captivating adventure with its pristine beaches, vibrant coral reefs, and rich cultural heritage. Whether you're
          exploring the historic Stone Town, snorkeling in crystal waters, or savoring local spices, Zanzibar offers unforgettable experiences for all. Plan
          your trip today to discover the magic of this iconic island paradise.
        </p>
        <div className="flex justify-center items-center py-5">
          {" "}
          <Link to="contact-us" className="bg-[#522731] cursor-pointer text-white font-bold px-12 py-3 rounded-sm">
            ENQUIRE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Invite;
