import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
// import App from './final/App';

ReactDOM.render(
  <React.StrictMode>
      <AppProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
