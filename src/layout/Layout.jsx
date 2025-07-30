import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import MobileNavbar from "../components/MobileNavbar";

const Layout = () => {
  return (
    <div className="w-full bg-[#f6f5ef]">
      <Navbar />
      <MobileNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
