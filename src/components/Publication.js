import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, TabContainer } from "react-bootstrap";
import "./publication.css";

class Publication extends Component {
  render() {
    return (
      <div className="publication-detail">
          <h3>{this.props.title}</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Authors</td>
                        <td>{this.props.authors}</td>
                    </tr>
                    <tr>
                        <td>Publish Date</td>
                        <td>{this.props.publish_date}</td>
                    </tr>
                    <tr>
                        <td>Abstract</td>
                        <td>{this.props.abstract}</td>
                    </tr>
                    <tr>
                        <td>Link</td>
                        <td><a href={this.props.link}>{this.props.link}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
}

export default Publication;
