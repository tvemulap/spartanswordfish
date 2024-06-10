import React from "react";
import './pages/App.css';
import NavBar from './NavBar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Parallel from "./pages/Parallel.js";
import AboutMe from "./pages/AboutMe.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parallel" element={<Parallel />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
