import React from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import PopularTours from "../components/PopularTours";
import Packages from "../components/Packages";
import Invite from "../components/Invite";
import Divider from "../components/Divider";

const Home = () => {
  return (
    <div className=" w-full bg-[#f9f6f2]">
      <Hero />
      <Features />
      <PopularTours />
      <Packages />
      <Divider />
      <Invite />
    </div>
  );
};

export default Home;
