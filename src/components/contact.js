import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../css/contact.css";

function Contact() {
  return (
    <div className="social-links">
      <a 
        href="https://github.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
        aria-label="GitHub Profile"
      >
        <FaGithub className="social-icon" />
        <span className="social-text">GitHub</span>
      </a>
      
      <a 
        href="https://linkedin.com/in/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin className="social-icon" />
        <span className="social-text">LinkedIn</span>
      </a>

      <a 
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer" 
        className="social-link"
        aria-label="Instagram Profile"
      >
        <FaInstagram className="social-icon" />
        <span className="social-text">Instagram</span>
      </a>

      <a 
        href="mailto:your.email@example.com"
        className="social-link"
        aria-label="Email Contact"
      >
        <FaEnvelope className="social-icon" />
        <span className="social-text">Email</span>
      </a>
    </div>
  );
}

export default Contact;
