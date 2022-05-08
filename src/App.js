import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Publication from "./components/Publication";
import publicationData from "./components/publications.json"
import { getByTitle } from "@testing-library/react";
import SimpleSlider from "./components/publicationSlider";

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
    </div>
  );
}

export default App;
