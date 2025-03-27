// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {
//   HomeLayout,
//   Landing,
//   Register,
//   Login,
//   DashboardLayout,
//   Error,
//   AddJob,
//   Stats,
//   AllJobs,
//   Profile,
//   DeleteJob,
//   EditJob,
//   Admin,
// } from "./pages";

// //create a function that that adds the dark model
// export const checkDefaultTheme = () => {
//   const isDarkTheme = localStorage.getItem("darkTheme") === "true";
//   document.body.classList.toggle("dark-theme", isDarkTheme);
//   return isDarkTheme;
// };

// const isDarkThemeEnabled = checkDefaultTheme();
// //================================================================
// //VARIABLES & functions
// const router = createBrowserRouter([
//   {
//     path: "/",
//     errorElement: <Error></Error>,
//     element: <HomeLayout></HomeLayout>,
//     // {/* <a href="/about">About</a> */}
//     children: [
//       {
//         index: true,
//         element: <Landing></Landing>,
//       },
//       {
//         path: "/register",
//         element: (
//           <div>
//             <Register></Register>
//             {/* <a href="/">backhome</a> */}
//           </div>
//         ),
//       },
//       //add more routes as needed
//       {
//         path: "/login",
//         element: (
//           <div>
//             <Login></Login>
//           </div>
//         ),
//       },
//       {
//         path: "/landing",
//         element: (
//           <div>
//             <Landing></Landing>
//           </div>
//         ),
//       },
//       {
//         path: "dashboard",
//         element: (
//           <>
//             <DashboardLayout></DashboardLayout>
//           </>
//         ),
//         children: [
//           {
//             index: true,
//             element: <AddJob></AddJob>,
//           },
//           {
//             index: true,
//             path: "stats",
//             element: <Stats></Stats>,
//           },
//           {
//             //do not use /all-jobs  because it is not working properly
//             index: true,
//             path: "all-jobs",
//             element: <AllJobs />,
//           },
//           {
//             index: true,
//             path: "profile",
//             element: <Profile></Profile>,
//           },
//           {
//             index: true,
//             path: "admin",
//             element: <Admin></Admin>,
//           },
//         ],
//       },
//     ],
//   },

//   //add more routes as needed
// ]);
// //================================================================
// //starting point of the react project
// const App = () => {
//   return <RouterProvider router={router}></RouterProvider>;
// };

// export default App;
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
      {
        index: true,
        element: <Landing></Landing>,
      },
      {
        path: "/register",
        element: (
          <div>
            <Register></Register>
            {/* <a href="/">backhome</a> */}
          </div>
        ),
      },
      //add more routes as needed
      {
        path: "/login",
        element: (
          <div>
            <Login></Login>
          </div>
        ),
      },
      {
        path: "/landing",
        element: (
          <div>
            <Landing></Landing>
          </div>
        ),
      },
      {
        path: "/dashboard",
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
          {
            index: true,
            path: "admin",
            element: <Admin></Admin>,
          },
        ],
      },
    ],
  },

  //add more routes as needed
]);
//================================================================
//starting point of the react project
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
