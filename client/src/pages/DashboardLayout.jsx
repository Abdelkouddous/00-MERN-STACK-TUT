import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, Navbar, SmallSideBar } from ".";
import { checkDefaultTheme } from "../App";
const DashboardContext = createContext();

const DashboardLayout = () => {
  //template
  const user = { name: "aymen" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    console.log("Toggle dark theme + ", newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    //save the value so it doesnt reset when refreshing
    localStorage.setItem("darkTheme", newDarkTheme);
  };
  const toggleSidebar = () => {
    console.log("Toggle sidebar" + showSidebar);
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
          <SmallSideBar></SmallSideBar>
          <BigSideBar></BigSideBar>
          <div>
            <Navbar></Navbar>
            <div className="dashboard-page">
              <Outlet></Outlet>
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
