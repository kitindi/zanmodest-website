import React from "react";

const PopularTours = () => {
  return (
    <div className="w-full py-5">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl text-[#512731] leading-relaxed font-medium text-center mb-4">Explore Our Popular Tours</h2>
        <p className="text-lg text-[#872731] leading-relaxed text-center">Discover Unforgettable Adventures with Our Top-Rated Tours</p>
        <div className="py-10">
          <div className="w-full  max-w-7xl mx-auto">
            <div className="grid grid-cols-6 grid-rows-4 gap-4">
              <div className="relative col-start-1 col-end-3  row-start-1 row-end-3 overflow-hidden  h-64">
                <img src="/images/redmonkey1.jpg" alt="" className="w-full  min-h-0 h-full object-cover transition-transform duration-400 hover:scale-110 " />
                <div className="absolute left-5 bottom-10 w-full">
                  <h3 className="text-2xl font-bold text-white">Jozani Forest</h3>
                </div>
              </div>
              <div className="relative col-start-3 col-end-5  row-start-1 row-end-3 overflow-hidden h-64">
                <img src="/images/prison2.jpg" alt="" className="w-full  min-h-0 h-full  object-cover transition-transform duration-400 hover:scale-110" />
                <div className="absolute left-5 bottom-10 w-full">
                  <h3 className="text-2xl font-bold  text-white">Prison Island Tours</h3>
                </div>
              </div>
              <div className="relative col-start-5 col-end-7 row-start-1 row-end-3 overflow-hidden  h-64">
                <img src="/images/farm.jpg" alt="" className="w-full  min-h-0 h-full  object-cover transition-transform duration-400 hover:scale-110" />
                <div className="absolute left-5 bottom-10 w-full">
                  <h3 className="text-2xl font-bold text-white">Spice Farm Tour</h3>
                </div>
              </div>
              <div className="relative col-start-1 col-end-3 row-start-3 row-end-5 overflow-hidden  h-64">
                <img src="/images/dolphin-trips.jpg" alt="" className="w-full h-full  object-cover transition-transform duration-400 hover:scale-110" />
                <div className="absolute left-5 bottom-10 w-full">
                  <h3 className="text-2xl font-bold text-white">Kizimkazi Dolphins Tour</h3>
                </div>
              </div>
              <div className="relative col-start-3 col-end-5 row-start-3 row-end-5 overflow-hidden  h-64">
                <img src="/images/stown.jpg" alt="" className="w-full  min-h-0 h-full  object-cover transition-transform duration-400 hover:scale-110" />
                <div className="absolute left-5 bottom-10 w-full">
                  <h3 className="text-2xl font-bold text-white">Stone Town Cultural Tour</h3>
                </div>
              </div>
              <div className="relative col-start-5 col-end-7 row-start-3 row-end-5 overflow-hidden  h-64">
                <img src="/images/pajebeach.jpg" alt="" className="w-full  min-h-0 h-full  object-cover transition-transform duration-400 hover:scale-110" />
                <div className="absolute left-5 bottom-10 w-full">
                  <h3 className="text-2xl font-bold text-white">Page Beach</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
