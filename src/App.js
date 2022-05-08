import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <hr></hr>
      <About className ="About" />
      <div></div>
    </div>
  );
}

export default App;
