import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./modules/Login";
import Profile from "./modules/Profile";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
