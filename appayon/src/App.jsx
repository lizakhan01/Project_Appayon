import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/home" element={<Home />} />
        

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
