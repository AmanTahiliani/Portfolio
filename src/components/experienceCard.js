import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, TabContainer } from "react-bootstrap";
import "../css/experience.css";

class ExperienceCard extends Component {
  render() {
    return (
      <div
        className="experience-detail"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <Row>
          <Col xs={12} md={5} className="Company1">
            <img src={this.props.photo} className="Company-Image" />
            {/* <h3 className="Company">{this.props.company}</h3> */}
            <h4>({this.props.term})</h4>
          </Col>
          <Col xs={12} md={7}>
            <div className="experience-details">
              <h3 className="JobTitle">{this.props.title}</h3>
              <hr />
              <div>
                <ul>
                  {this.props.points.map((item, i) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      //   <div className="experience-detail">
      //     <h3>{this.props.title}</h3>
      //     <Row>
      //       <Col>Authors: {this.props.authors}</Col>
      //     </Row>
      //     <Row>
      //       <div>Publish Date: {this.props.publish_date}</div>
      //     </Row>
      //     <div>
      //       Link: <a href={this.props.link}>{this.props.link}</a>
      //     </div>
      //     <br />
      //     <div style={{ fontWeight: "bolder" }}>Abstract:</div>
      //     <div>{this.props.abstract}</div>
      //   </div>
    );
  }
}

export default ExperienceCard;
