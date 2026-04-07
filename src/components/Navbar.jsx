import React from "react";
import { MdOutlineOpenInBrowser } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";

export default function Navbar({ navigate }) {
  return (
    <header className="top-navbar">

     <div className="navbar-logo" onClick={() => navigate("/")} role="button" tabIndex={0}>
        <span className="logo-name">ALEXA<br />RODRIGUEZ</span>
        <span className="logo-tagline">Design. <br></br>Perfect<br />Code <br></br> Ship</span>
      </div>

      <nav className="navbar-links" aria-label="Main navigation">
        <a href="/home" className="navbar-link">Home</a>
        <a href="/orgs" className="navbar-link">Programs and Organizations</a>
        <a href="/my-work" className="navbar-link">My Work</a>
        <a href="/whats-new" className="navbar-link">What's New</a>
      </nav>

      <div className="navbar-actions">
        
        <a 
        href="https://mail.google.com/mail/?view=cm&to=alexarodriguez1273@gmail.com" 
        target="_blank" rel="noreferrer"
        className="nav-icon-btn" title="Email Me"> 
            <MdEmail />

         </a>
        
        <a href="https://linkedin.com/in/alexa-m-rodriguez" target="_blank" rel="noreferrer" className="nav-icon-btn" title="LinkedIn"> 
        <FaLinkedin /> 
        </a>
        
        <a href="/assets/ALEXA-RODRIGUEZ-RESUME.pdf" download target="_blank" rel="noreferrer" className="nav-icon-btn-accent" title="Download Resume">
        <FaFileDownload /> 
         <span>Download Resume</span>
        </a>
      </div>

    </header>
  );
}