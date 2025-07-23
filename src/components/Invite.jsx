import React from "react";

const Invite = () => {
  return (
    <div className="w-full h-[80vh] flex items-center bg-[#d2bbb8]">
      <div className="w-full max-w-6xl mx-auto">
        <h3 className="text-5xl text-center mb-8 font-semibold text-[#512731]">Let us help you plan your journey.</h3>
        <p className="text-xl italic text-center text-[#512731] leading-relaxed">
          A visit to Zanzibar promises a captivating adventure with its pristine beaches, vibrant coral reefs, and rich cultural heritage. Whether you're
          exploring the historic Stone Town, snorkeling in crystal waters, or savoring local spices, Zanzibar offers unforgettable experiences for all. Plan
          your trip today to discover the magic of this iconic island paradise.
        </p>
        <div className="flex justify-center items-center py-10">
          {" "}
          <button className="bg-[#522731] cursor-pointer text-white font-bold px-12 py-3 rounded-sm">ENQUIRE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Invite;
