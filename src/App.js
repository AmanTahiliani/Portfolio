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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay) || 0;
          setTimeout(() => {
            requestAnimationFrame(() => {
              entry.target.classList.add('visible');
            });
          }, delay);
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '50px 0px -100px 0px'
    });

    document.querySelectorAll('section').forEach((section, index) => {
      // Add staggered delay to each section
      section.dataset.delay = index * 100;
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <meta name="Aman Tahiliani's Portfolio"></meta>
      <nav>
      <Header />
      </nav>
      <hr></hr>
      <main>
      <section>
      <About className="About" id="About" />
      </section>
      <section className="Experience" id="Experience">
        <h2 className="section-title" style={{ color: "salmon", fontSize: "50px" }}>
          <b>Experience</b>
        </h2>
        <Experience />
      </section>
      <section className="DevTools" id="DevTools">
        <h2 className="section-title" style={{ color: "salmon", fontSize: "50px" }}>
          <b>Dev Tools</b>
        </h2>
        <DevToolsComponent />
      </section>
      <section className="publications" id="Publications">
        <h2 className="section-title" style={{ color: "salmon", fontSize: "50px" }}>
          <b>Publications</b>
        </h2>
        <SimpleSlider />
      </section>
      <section className="Contact" id="Contact">
        <h2 className="section-title" style={{ color: "cyan", fontSize: "50px" }}>
          <b>Social Links</b>
        </h2>
        <SocialMedia
          style={{ color: "white" }}
          useColorIcons={false}
          whiteIcons={true}
        />
      </section>
      </main>
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
              {/* <li>
                <a href="/reviews">Book, TV and Movie Reviews</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer">
        <SocialMedia />
      </div>
      {/* <div className="Contact" id="Contact">
      <h2 style={{color:"salmon", fontSize:"50px", marginTop:"60px"}}><b>Contact Me!</b></h2>
        <Contact/>
      </div> */}
    </div>

        
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/reviews" element={<Books />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
