// App.jsx


import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Menu from "./Components/MenuBar";
import MenuItemDetail from "./Components/MenuItemDetail";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<MenuItemDetail />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/home"  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
