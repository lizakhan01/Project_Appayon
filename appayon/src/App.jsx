/*import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";


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
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import Navbar from "./Components/Navbar";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
  
      <Router>
      <div className="App">
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
