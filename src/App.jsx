import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo">Thida Phongsavath</div>
          <nav className="navbar">
            <ul>
              <li>
                <NavLink to="/" className="navlink" activeclassname="active">
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="navlink" activeclassname="active">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="navlink" activeclassname="active">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume" className="navlink" activeclassname="active">
                  Resume
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
