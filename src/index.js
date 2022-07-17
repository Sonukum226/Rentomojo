import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import DrawerAppBar from "./components/navbar";
import Details from "./components/details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DrawerAppBar />
    <center>
      <Details />
    </center>
    <App />
  </React.StrictMode>
);
