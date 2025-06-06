import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// add toasting library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// fetch("/api/v1/test")
//   .then((response) => response.json())
//   .then((data) => console.log("Test route response:", data));
// render frontend
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer position="top-left" />
    <App />
  </StrictMode>
);
