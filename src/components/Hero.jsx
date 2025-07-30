import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full  bg-[url(/images/hero-1.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="relative w-full max-w-6xl mx-auto flex items-center  h-full">
        <div className="absolute left-0 top-10 md:top-32 z-20 mt-28 px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl w-full max-w-3xl text-white font-semibold mt-5 leading-tight">
            Explore Zanzibar’s beauty through halal-friendly, immersive adventures customized for you
          </h1>
          <div className="flex items-center gap-4 mt-8">
            <button className="text-lg  bg-[#512731] hover:bg-[#783a49] text-white px-6 py-3 font-semibold transition duration-300 uppercase cursor-pointer">
              explore our packages
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 z-10"></div>
    </div>
  );
};

export default Hero;
