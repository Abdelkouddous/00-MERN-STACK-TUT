import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const HomeLayout = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default HomeLayout;
