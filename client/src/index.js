import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from "react-dom"
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux"; // Import createStore from "redux"
import rootReducer from "./Reducers"; // Import your reducers specifically

import { thunk } from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {" "}
    {/* Pass the store variable */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
