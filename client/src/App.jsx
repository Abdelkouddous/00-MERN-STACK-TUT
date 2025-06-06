// app.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  DeleteJob,
  EditJob,
  Admin,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";

//create a function that that adds the dark model
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();
//================================================================
//VARIABLES & functions
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <HomeLayout></HomeLayout>,
    // {/* <a href="/about">About</a> */}
    children: [
      // they are relative to the parent path "/"
      {
        index: true,
        element: <Landing></Landing>,
      },
      {
        path: "register",
        element: <Register></Register>,
        action: registerAction,
      },
      //add more routes as needed
      {
        path: "login",
        element: (
          <div>
            <Login></Login>
          </div>
        ),
        action: loginAction,
      },
      {
        path: "landing",
        element: (
          <div>
            <Landing></Landing>
          </div>
        ),
      },
      // {
      //   path: "error",
      //   element: <Error></Error>,
      // },
    ],
  },

  //add more routes as needed
  {
    path: "dashboard",
    element: (
      <>
        <DashboardLayout></DashboardLayout>
      </>
    ),
    children: [
      {
        index: true,
        element: <AddJob></AddJob>,
      },
      {
        index: true,
        path: "edit-job/:id",
        element: <EditJob></EditJob>,
      },
      {
        index: true,
        path: "delete-job/:id",
        element: <DeleteJob></DeleteJob>,
      },
      {
        index: true,
        path: "stats",
        element: <Stats></Stats>,
      },
      {
        //do not use /all-jobs  because it is not working properly
        index: true,
        path: "all-jobs",
        element: <AllJobs />,
      },
      {
        index: true,
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "admin",
    element: <Admin></Admin>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
//================================================================
//starting point of the react project
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
