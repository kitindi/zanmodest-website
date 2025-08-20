import React from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import PopularTours from "../components/PopularTours";
import Packages from "../components/Packages";
import Invite from "../components/Invite";
import Divider from "../components/Divider";
import DestinationGallery from "../components/DestinationGallery";

const Home = () => {
  return (
    <div className=" w-full ">
      <Hero />
      <Divider />
      <Features />
      <PopularTours />
      <Packages />

      <Invite />
      <DestinationGallery />
      <Divider />
    </div>
  );
};

export default Home;
