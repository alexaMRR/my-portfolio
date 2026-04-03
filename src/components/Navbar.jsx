import React from "react";
import { MdOutlineOpenInBrowser } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";






const TOP_NAV_LINKS = ["Home", "Resume", "My Work", "What's New"];

export default function Navbar({ navigate }) {
  return (
    <header className="top-navbar">

     <div className="navbar-logo" onClick={() => navigate("/")} role="button" tabIndex={0}>
        <span className="logo-name">ALEXA<br />RODRIGUEZ</span>
        <span className="logo-tagline">Design. Perfect.<br />Code. Ship.</span>
      </div>

      <nav className="navbar-links" aria-label="Main navigation">
        <a href="/home">Home</a>
        <a href="/resume">Resume</a>
        <a href="/my-work">My Work</a>
        <a href="/whats-new">What's New</a>
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
        
        <a href="src/assets/ALEXA-RODRIGUEZ-RESUME.pdf" target="_blank" rel="noreferrer" className="nav-icon-btn" title="Open Resume in new tab">
         <MdOutlineOpenInBrowser /> 
        </a>
        
        <a href="src/assets/ALEXA-RODRIGUEZ-RESUME.pdf" download target="_blank" rel="noreferrer" className="nav-icon-btn" title="Download Resume"
        > 
        <FaFileDownload /> 
        </a>
      </div>

    </header>
  );
}