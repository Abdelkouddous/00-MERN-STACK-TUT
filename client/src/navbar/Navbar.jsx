import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaHome } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogoutContainer from "../pages/components/LogoutContainer";
import ThemeToggle from "../pages/components/ThemeToggle";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <button type="button" className="toggle-btn " onClick={toggleSidebar}>
        <FaAlignLeft className="text-2xl ml-3 hover:text-gray-900" />
      </button>
      <Link to="/" className=" flex flex-row justify-center items-center">
        <button className=" toggle-btn ">
          <FaHome className="text-2xl ml-3 hover:text-gray-900 mx-2"></FaHome>
        </button>
        <img
          src={logo}
          // height={"50px"}
          // width={"50px"}
          alt="logo"
          className="hover:cursor-pointer h-4 w-full "
        />
      </Link>

      <Link to="/dashboard">
        <button className="btn">
          <span className="inline-flex items-center rounded-md  hover:text-blue-50  px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-500/10">
            Go to Dashboard
          </span>
        </button>
      </Link>
      <LogoutContainer></LogoutContainer>
      <ThemeToggle />
    </Wrapper>
  );
};

export default Navbar;
