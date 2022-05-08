import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Publication from "./components/Publication";
import publicationData from "./components/publications.json"
import { getByTitle } from "@testing-library/react";

function App() {
  return (
    <div className="App">
      <Header />
      <hr></hr>
      <About className ="About" />
      <div className="publications">
        <h2 style={{color:"salmon", fontSize:"50px"}}><b>Publications</b></h2>
        {publicationData.map(({title,authors, publish_date, abstract,link}) =>(
          <Publication title={title} authors={authors} publish_date={publish_date} abstract={abstract} link={link}/>
        ))}
      </div>
    </div>
  );
}

export default App;
