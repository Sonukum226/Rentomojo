import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Navbar from "./components/navbar";
// import { createTheme } from "@mui/material/styles";
// import AppBar from "material-ui/AppBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);
