import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import PopularTours from "../components/PopularTours";
import Packages from "../components/Packages";
import Invite from "../components/Invite";
import Divider from "../components/Divider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" w-full h-screen bg-[#f9f6f2]">
      <Navbar />
      <Hero />
      <Features />
      <PopularTours />
      <Packages />
      <Divider />
      <Invite />
      <Footer />
      <Divider />
    </div>
  );
};

export default Home;
