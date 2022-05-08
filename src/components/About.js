import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Grid, Row, Col } from "react-bootstrap";
import "./about.css";
import AmanTahilianiPortfolio from "../media/AmanTahilianiPortfolio.png";
import { Button } from "bootstrap";
import resume from "../media/AmanTahilianiResumeMay22.pdf"
// const img = '../media/AmanTahilianiPortfolio.png'

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
                  I am a final Year BTech CSE student at Jaypee Institute of
                  Information Technology in Noida, India.{" "}
                </li>{" "}
                <li>
                  Currently working as an SDE Intern(Backend) at{" "}
                  <a href="https://innovaccer.com/"> Innovaccer </a> as part of
                  the DAP(Data Activation Platform).{" "}
                </li>{" "}
                <li>
                  I enjoy designing and creating the backend logic for projects
                  and am also proficient in frontend development.{" "}
                </li>{" "}
              </ul>{" "}
            </Row>{" "}
              <button style={{borderRadius:"0.8em", width:"auto",height:"40px", fontSize:"larger", backgroundColor:"rgb(5, 255, 180)"}}><a href={resume} style= {{color: "black", textDecoration: "none"}} download="AmanTahilianiResume.pdf">My Resume</a></button>
          </Col>{" "}
        </Row>{" "}
      </div>
    );
  }
}

export default About;
