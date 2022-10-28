import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
import store from "./store";
import { ThemeProvider } from "./contexts/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
