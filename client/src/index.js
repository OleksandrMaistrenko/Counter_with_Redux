import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./container/store";
import { Provider } from "react-redux";

const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
