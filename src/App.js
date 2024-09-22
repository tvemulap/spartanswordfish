import React from "react";
import './pages/App.css';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Parallel from "./pages/Parallel.js";
import AboutMe from "./pages/AboutMe.js";
import Home from "./pages/Home.js";
import FantasyFootball from "./pages/fantasyfootball.js";

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
            <Route path="/fantasyfootball" element={<FantasyFootball />} />
          </Routes>
        </Router>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
