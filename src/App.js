import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import { getByTitle } from "@testing-library/react";
import SimpleSlider from "./components/publicationSlider";
import Experience from "./components/Experience";
import Contact from "./components/contact";
import DevToolsComponent from "./components/devtools";

function App() {
  return (
    <div className="App" >
      <meta name="Aman Tahiliani's Portfolio"></meta>
      <Header />
      <hr></hr>
      <About className ="About" id="About"/>
      <div className="publications" id="Publications">
        <h2 style={{color:"salmon", fontSize:"50px"}}><b>Publications</b></h2>
        <SimpleSlider/>
      </div>
      
      <div className="Experience" id="Experience">
        <h2 style={{color:"salmon", fontSize:"50px", marginTop:"110px"}}><b>Experience</b></h2>
        <Experience/>
      </div>
      <div className="DevTools" id="DevTools">
        <h2 style={{color:"salmon", fontSize:"50px"}}><b>Dev Tools</b></h2>
        <DevToolsComponent/>
      </div>
      {/* <div className="Contact" id="Contact">
      <h2 style={{color:"salmon", fontSize:"50px", marginTop:"60px"}}><b>Contact Me!</b></h2>
        <Contact/>
      </div> */}
      
    </div>
  );
}

export default App;
