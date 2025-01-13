import React, { Component } from "react";
import "../css/devtools.css";
import Languages from "../data/programmingLaguages.json";

const logos = {
  Python: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  Java: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  "C++": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  JavaScript: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
};

class DevToolsComponent extends Component {
  render() {
    return (
      <div>
        <div className="dev-tools-container">
          {Languages.map(({ name }) => (
            <div className="dev-tool" key={name}>
              <img src={logos[name]} alt={name} className="dev-tool-logo" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DevToolsComponent;