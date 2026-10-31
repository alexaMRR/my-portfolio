import React from "react";
import { MdOutlineOpenInBrowser } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
const SITE_LOCKED = true;
export default function Navbar({ navigate, activePage }) {
  return (
    <header className="top-navbar">

     <div className="navbar-logo" onClick={() => navigate("/")} role="button" tabIndex={0}>
        
        <span className="logo-tagline">Design. <br></br>Code. <br></br> Ship.</span>
      <span className="logo-name">ALEXA<br />RODRIGUEZ</span>
      </div>

    <nav className="navbar-links" aria-label="Main navigation">
  <a href="/tldr" className={`navbar-link ${activePage === "tldr" ? "active" : ""}`}>TL;DR</a>
  <span className="navbar-link locked">Home</span>
  <span className="navbar-link locked">Programs and Organizations</span>
  <span className="navbar-link locked">My Work</span>
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
        <a href="https://github.com/alexaMRR" target="_blank" rel="noreferrer" className="nav-icon-btn" title="Github"> 
        <FaGithub /> 
        </a>
        <a href="/assets/ALEXA-RODRIGUEZ-RESUME.pdf" download target="_blank" rel="noreferrer" className="nav-icon-btn-accent" title="Download Resume">
        <FaFileDownload /> 
         <span>Download Resume</span>
        </a>
        <a href="/assets/ALEXA-RODRIGUEZ-RESUME.pdf" target="_blank" rel="noreferrer" title="View Resume">
        <MdOpenInNew /> 
        </a>

        
        
      </div>

    </header>
  );
}