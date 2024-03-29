import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { Row, Col} from "react-bootstrap";
import "./experience.css";
import ExperienceCard from "./experienceCard";
import experienceData from "./experience.json"
import InnovaccerLogo from "../media/innovaccerLogo.png";
import Medsupervision from "../media/logo.png"
import GeorgiaTech from "../media/GeorgiaTech.png"
import Rimidi from "../media/rimidi.png"

const logos = {Innovaccer:InnovaccerLogo,Medsupervision:Medsupervision,"Georgia Tech":GeorgiaTech,Rimidi:Rimidi}

class Experience extends Component {
    render() {
      return (
        <div className="ExperienceComponent">
          {experienceData.map(({company,title, points, term}) =>(
          <div>
          <ExperienceCard company={company} title={title} points={points} photo={logos[company]} term={term}/>
          <hr/>
          </div>
        ))}
        </div>
      );
    }
  }
  
  export default Experience;