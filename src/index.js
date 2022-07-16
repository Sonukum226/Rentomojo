import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import DrawerAppBar from "./components/navbar";
// import ComboBox from "./components/autocomp";
// import { createTheme } from "@mui/material/styles";
// import AppBar from "material-ui/AppBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DrawerAppBar />
    {/* <ComboBox /> */}
    <App />
  </React.StrictMode>
);
