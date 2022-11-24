import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Grid, Row, Col } from "react-bootstrap";
import "./about.css";
import AmanTahilianiPortfolio from "../media/AmanTahilianiPortfolio.png";
import { Button } from "bootstrap";
import resume from "../media/AmanTahilianiResume.pdf"
// const img = '../media/AmanTahilianiPortfolio.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faFileDownload)

class About extends Component {
  render() {
    return (
      <div className="AboutComponent">
        <Row>
          <Col>
            <img src={AmanTahilianiPortfolio} className="NameImage" />
          </Col>{" "}
          <Col className="InfoColumn">
            <Row>
              <h2 style={{ marginTop: "10px" }}> Hi There! </h2>{" "}
            </Row>{" "}
            <Row>
              <h3> Let me tell you a little about myself </h3>{" "}
            </Row>{" "}
            <Row className="Info">
              <ul>
                <li>
                 Currently pursuing a Master's degree from Georgia Institute of Technology majoring in Computer Science with a specialization in Computing Systems. (#GoJackets) {" "}
                </li>{" "}
                <li>
                  Worked as an SDE Intern(Backend) at{" "}
                  <a href="https://innovaccer.com/"> Innovaccer </a> as part of
                  the DAP(Data Activation Platform) alongside my undergraduate BTech. in Computer Science program at Jaypee Institute of Information Technology.{" "}
                </li>{" "}
                <li>
                  I enjoy designing and creating the backend logic for projects
                  and am also proficient in frontend development.{" "}
                </li>{" "}
              </ul>{" "}
            </Row>{" "}
              <button style={{borderRadius:"0.8em", width:"auto",height:"40px", fontSize:"larger", backgroundColor:"rgb(5, 255, 180)"}}><FontAwesomeIcon icon="file-download"/> <a href={resume} style= {{color: "black", textDecoration:"none"}} download="AmanTahilianiPublicationsResume.pdf">Resume</a></button>
          </Col>{" "}
        </Row>{" "}
      </div>
    );
  }
}

export default About;
