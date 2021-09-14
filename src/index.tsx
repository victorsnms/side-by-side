import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./providers";
import { BrowserRouter } from "react-router-dom";
import {App} from "./App";
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ParallaxProvider>
          <App />
        </ParallaxProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
