import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, TabContainer } from "react-bootstrap";
import "../css/publication.css";

class Publication extends Component {
  render() {
    return (
      <div className="publication-detail">
        <h3>{this.props.title}</h3>
        <Row>
          <Col>Authors: {this.props.authors}</Col>
        </Row>
        <Row>
          <div>Publish Date: {this.props.publish_date}</div>
        </Row>
        <div>
          Link: <a href={this.props.link}>{this.props.link}</a>
        </div>
        <br />
        <div style={{ fontWeight: "bolder" }}>Abstract:</div>
        <div>{this.props.abstract}</div>
      </div>
    );
  }
}

export default Publication;
