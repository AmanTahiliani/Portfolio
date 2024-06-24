import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { Row, Col, TabContainer } from "react-bootstrap";
import "../css/contact.css";


function Contact () {
    const [name, setName] = useState("");
    const [organization, setOrganization] = useState("");
    const [message, setMessage] = useState("");
    const [popup, setPopup] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://localhost:8000/sendMail", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            organization: organization,
            message: message,
          }),
        });
        // let resJson = await res.json();
        console.log(res.status)
        if (res.status === 200) {
          setName("");
          setOrganization("");
          setMessage("");
          setPopup("Message sent successfully");
        } else {
          setPopup("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required = "true"
            />
            <br/>
            <input
              type="text"
              value={organization}
              placeholder="Organization"
              onChange={(e) => setOrganization(e.target.value)}
            />
            <br/>
            <textarea
            className="MessageBox"
              type="textarea"
              value={message}
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              required = "true"
            />
            <br/>
            <button type="submit">Send!</button>
    
            <div className="popup">{popup ? <p>{popup}</p> : null}</div>
          </form>
        </div>
      );
  }


export default Contact;