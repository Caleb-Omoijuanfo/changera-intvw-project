import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./modules/Login";
import Profile from "./modules/Profile";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
