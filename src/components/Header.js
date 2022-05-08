import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="menu-header">
            <Row style={{ height: "100%" }}>
              <Col xs={12} md={5}>
                <Row className="navRow nonNameCol">
                  <Col>
                    <a href="./">Home</a>
                  </Col>
                  <Col>
                    <a>About</a>
                  </Col>
                  <Col>
                    <a>Publications</a>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={2} className="navRow NameCol">
                Aman Tahiliani
              </Col>
              <Col xs={12} md={5}>
                <Row className="navRow nonNameCol">
                  <Col>
                    <a>Experience</a>
                  </Col>
                  <Col>
                    <a>Devtools</a>
                  </Col>
                  <Col>
                    <a>Contact Me!</a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
