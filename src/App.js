import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import "./css/home.css";
import Header from "./components/Header";
import About from "./components/About";
import SimpleSlider from "./components/publicationSlider";
import Experience from "./components/Experience";
import Contact from "./components/contact";
import DevToolsComponent from "./components/devtools";
import SocialMedia from "./components/SocialMedia";

function Portfolio() {
  return (
    <div className="App">
      <meta name="Aman Tahiliani's Portfolio"></meta>
      <Header />
      <hr></hr>
      <About className="About" id="About" />
      <div className="publications" id="Publications">
        <h2 style={{ color: "salmon", fontSize: "50px" }}>
          <b>Publications</b>
        </h2>
        <SimpleSlider />
      </div>

      <div className="Experience" id="Experience">
        <h2 style={{ color: "salmon", fontSize: "50px", marginTop: "110px" }}>
          <b>Experience</b>
        </h2>
        <Experience />
      </div>
      <div className="DevTools" id="DevTools" style={{ marginBottom: "100px" }}>
        <h2 style={{ color: "salmon", fontSize: "50px" }}>
          <b>Dev Tools</b>
        </h2>
        <DevToolsComponent />
      </div>
      <hr />
      <div className="Contact" id="Contact" style={{ marginTop: "100px" }}>
        <h2 style={{ color: "cyan", fontSize: "50px" }}>
          <b>Contact Me!</b>
        </h2>
        <SocialMedia
          style={{ color: "white" }}
          useColorIcons={false}
          whiteIcons={true}
        />
      </div>
      {/* <div className="Contact" id="Contact">
      <h2 style={{color:"salmon", fontSize:"50px", marginTop:"60px"}}><b>Contact Me!</b></h2>
        <Contact/>
      </div> */}
    </div>
  );
}

function Books() {
  return (
    <div>
      <h2>Books Page</h2>
      {/* Add your books content here */}
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="intro">
          <h1>Welcome to Aman Tahiliani's Space</h1>
          <p>Software Developer | Tech Enthusiast</p>
          <nav>
            <ul>
              <li>
                <a href="/portfolio">Developer Portfolio</a>
              </li>
              <li>
                <a href="/reviews">Book, TV and Movie Reviews</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer">
        <SocialMedia />
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Portfolio />} />
          <Route path="/books" element={<Books />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
