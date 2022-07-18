import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import { getByTitle } from "@testing-library/react";
import SimpleSlider from "./components/publicationSlider";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
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
      
    </div>
  );
}

export default App;
