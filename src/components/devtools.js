import React, { Component } from "react";
import PythonLogo from "../media/logos/languages/python-logo.png";
import JavaLogo from "../media/logos/languages/java-logo.png";
import CplusLogo from "../media/logos/languages/c++.png";
import JavaScriptLogo from "../media/logos/languages/JavaScript.webp";
import "../css/devtools.css";
import Languages from "../data/programmingLaguages.json";

const logos = {
  Python: PythonLogo,
  Java: JavaLogo,
  "C++": CplusLogo,
  JavaScript: JavaScriptLogo,
};

class DevToolsComponent extends Component {
  render() {
    return (
      <div>
        {/* <h2>Programming Languages</h2> */}
        <div className="dev-tools-container">
          {Languages.map(({ name }) => (
            <div className="dev-tool">
              <img src={logos[name]} alt={name} className="dev-tool-logo" />
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DevToolsComponent;
