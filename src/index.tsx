import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./providers";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import { Routes } from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes/>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
