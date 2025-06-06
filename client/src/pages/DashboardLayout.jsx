// export const useDashboardContext = () => useContext(DashboardContext);
// export default DashboardLayout;
import React, { createContext, useContext, useState } from "react";
import { Outlet, redirect } from "react-router";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, SmallSideBar } from ".";
import { checkDefaultTheme } from "../App";
import {
  FaUserCircle,
  FaCaretDown,
  FaAlignLeft,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const DashboardContext = createContext();

// Navbar component specifically for the dashboard
const DashboardNavbar = () => {
  const navigate = useNavigate();
  const { user, toggleSidebar, toggleDarkTheme, isDarkTheme, logoutUser } =
    useDashboardContext();
  const [showLogout, setShowLogout] = useState(false);
  // Redirect to login if user is not authenticated
  if (!user) {
    toast.error("You must be logged in to access the dashboard");
    return redirect("/login");
  }
  //...
  // Handle logout
  const handleLogout = () => {
    logoutUser();
    navigate("/");
    toast.success("Logged out successfully");
  };
  //...

  return (
    <nav className="bg-primary-500 sticky">
      <div className="px-4 h-12 flex items-center justify-between">
        <button
          type="button"
          className="bg-transparent border-transparent text-primary-500 flex items-center"
          onClick={toggleSidebar}
        >
          <FaAlignLeft className="h-6 w-6" />
        </button>

        <div className="flex-1 mx-4">
          <h2 className="text-xl font-semibold hidden md:block">Dashboard</h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme toggle button */}
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center  transition-colors"
            onClick={toggleDarkTheme}
            aria-label={
              isDarkTheme ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkTheme ? <FaSun /> : <FaMoon />}
          </button>

          {/* User dropdown */}
          <div className="relative flex">
            <button
              className=" btn w-32"
              onClick={() => setShowLogout(!showLogout)}
            >
              <div className="flex justify-between items-center">
                <FaUserCircle className="text-primary-500" />
                {user?.name && (
                  <span className="capitalize text-sm font-medium">
                    {user.name}
                  </span>
                )}
                <FaCaretDown className="text-xs" />
              </div>
            </button>

            {showLogout && (
              <div className="absolute right-0 top-full mt-2  shadow-lg rounded-md border hover:scale-x-105  w-32 z-10">
                <button
                  className="w-full text-center px-4 py-2 text-sm  items-center transition-colors"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const DashboardLayout = () => {
  //template
  const user = { name: "aymen" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    //save the value so it doesnt reset when refreshing
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    //logout logic
    console.log("logout");
    //set user to null
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />
          <div className="dashboard-content">
            <DashboardNavbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
