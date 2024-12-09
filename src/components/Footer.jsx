import React from "react";
// Importing specific icons from the react-icons library
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// Importing the CSS file for styling the footer
import "./Footer.css";

// Footer component definition
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
      <a href="https://github.com/Thida612" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      <a href="https://www.linkedin.com/in/thida-johnson-448bb5340" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

// Exporting the Footer component as the default export
export default Footer;
