import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Grid, Row, Col } from "react-bootstrap";
import "../css/about.css";
import AmanTahilianiPortfolio from "../media/AmanTahilianiPortfolio.png";
import { Button } from "bootstrap";
import resume from "../media/Aman_Tahiliani_Resume_June24.pdf";
// const img = '../media/AmanTahilianiPortfolio.png'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faFileDownload);

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
                  Currently working at <a href="https://rimidi.com/">Rimidi</a>,
                  a Software as a Service (SaaS) startup, full-time as a Software
                  Engineer with a special emphasis on data interoperabiltiy and
                  building a robust set of tools to enable secure flow of
                  sensitive patient health information across health systems.
                </li>
                <li>
                  Graduated from Georgia Tech in 2024 with a Master's Of Science
                  degree in Computer Science (MSCS), with emphasis on Computing
                  Systems and Machine Learning. (#GoJackets{" \uD83D\uDC1D"})
                </li>{" "}
                <li>
                  Interned as an SDE (Backend) at{" "}
                  <a href="https://innovaccer.com/">Innovaccer</a> twice as part
                  of the Data Activation Platform and Licence
                  Management/Platform Configuration Teams.{" "}
                </li>{" "}
              </ul>{" "}
            </Row>{" "}
            <button
              style={{
                borderRadius: "0.8em",
                width: "auto",
                height: "40px",
                fontSize: "larger",
                backgroundColor: "rgb(5, 255, 180)",
              }}
            >
              <FontAwesomeIcon icon="file-download" />{" "}
              <a
                href={resume}
                style={{ color: "black", textDecoration: "none" }}
                download="Aman_Tahiliani_Resume.pdf"
                >
                Resume
              </a>
            </button>
          </Col>{" "}
        </Row>{" "}
      </div>
    );
  }
}

export default About;
