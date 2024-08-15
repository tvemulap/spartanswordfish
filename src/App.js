import React from "react";
import './pages/App.css';
import NavBar from './NavBar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Parallel from "./pages/Parallel.js";
import AboutMe from "./pages/AboutMe.js";
import Home from "./pages/Home.js";
import BeanzLeague from "./pages/thebeanzleague.js";

function App() {
  return (
    <div>
      <div className="App">
        <NavBar></NavBar>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parallel" element={<Parallel />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/beanzleague" element={<BeanzLeague />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
