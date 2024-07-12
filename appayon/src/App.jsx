
/*import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
=======
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
  const [showLogin, setShowLogin] = useState(false)
  return (
    { showLogin?<LoginPopup/>:<></>}
<div className="App">
  <Router setShowLogin={setShowLogin} />
  <Routes>
    <Route path="/home" element={<Home />} />


  </Routes>
</Router>
      
    </div >
  );
}

export default App;*/

/*import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup /> : null}
      <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
*/



/*
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { default as Home, default as Navbar } from "./Components/Home";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>      
      <div className="App">
      {showLogin ? <LoginPopup /> : null}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/home" element={<Home />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;*/



//Latest
import React, { useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import Menu from "./Components/MenuBar";
import MenuItemDetail from "./Components/MenuItemDetail";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <div className="App">
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<MenuItemDetail />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

