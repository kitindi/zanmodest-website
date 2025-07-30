import React from "react";

const PopularTours = () => {
  return (
    <div className="w-full py-5">
      <div className="px-4 md:px-0 w-full max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-[#512731] leading-relaxed font-semibold text-center mb-4">Explore Our Popular Tours</h2>
        <p className="text-[16px] text-[#872731] leading-relaxed text-center">Discover Unforgettable Adventures with Our Top-Rated Tours</p>
        <div className="py-10">
          <div className="w-full  max-w-7xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-6 md:grid-rows-4 gap-4">
              <div className="relative md:col-start-1 md:col-end-3  md:row-start-1 md:row-end-3 overflow-hidden  h-64">
                <img src="/images/redmonkey1.jpg" alt="" className="w-full  min-h-0 h-full object-cover transition-transform duration-400 hover:scale-110 " />
                <div className="absolute left-5 bottom-10 w-full">
                  <h3 className="text-xl font-bold text-white">Jozani Forest</h3>
                </div>
              </div>
              <div className="relative md:col-start-3 md:col-end-5  md:row-start-1 md:row-end-3 overflow-hidden h-64">
                <img src="/images/prison2.jpg" alt="" className="w-full  min-h-0 h-full  object-cover transition-transform duration-400 hover:scale-110" />
                <div className="absolute left-5 bottom-10 w-full">
                  <h3 className="text-xl font-bold  text-white">Prison Island Tours</h3>
                </div>
              </div>
              <div className="relative md:col-start-5 md:col-end-7 md:row-start-1 md:row-end-3 overflow-hidden  h-64">
                <img src="/images/farm.jpg" alt="" className="w-full  min-h-0 h-full  object-cover transition-transform duration-400 hover:scale-110" />
                <div className="absolute left-5 bottom-10 w-full">
                  <h3 className="text-xl font-bold text-white">Spice Farm Tour</h3>
                </div>
              </div>
              <div className="relative md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-5 overflow-hidden  h-64">
                <img src="/images/dolphin-trips.jpg" alt="" className="w-full h-full  object-cover transition-transform duration-400 hover:scale-110" />
                <div className="absolute left-5 bottom-10 w-full">
                  <h3 className="text-xl font-bold text-white">Kizimkazi Dolphins Tour</h3>
                </div>
              </div>
              <div className="relative md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-5 overflow-hidden  h-64">
                <img src="/images/stown.jpg" alt="" className="w-full  min-h-0 h-full  object-cover transition-transform duration-400 hover:scale-110" />
                <div className="absolute left-5 bottom-10 w-full">
                  <h3 className="text-xl font-bold text-white">Stone Town Cultural Tour</h3>
                </div>
              </div>
              <div className="relative md:col-start-5 md:col-end-7 md:row-start-3 md:row-end-5 overflow-hidden  h-64">
                <img src="/images/pajebeach.jpg" alt="" className="w-full  min-h-0 h-full  object-cover transition-transform duration-400 hover:scale-110" />
                <div className="absolute left-5 bottom-10 w-full">
                  <h3 className="text-xl font-bold text-white">Page Beach</h3>
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
