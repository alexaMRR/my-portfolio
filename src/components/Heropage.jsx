import React from "react";
import { useNavigate } from "react-router-dom";



export default function HeroPage() {
  const navigate = useNavigate();

  return (
    <div className="hero-page">

    <div className="hero-signature">
        <img src="/assets/signaturePlaceholder.png" alt="signature" />
      </div>

    <div className="hero-top">
        <h1> ALEXA</h1>
        <h1>RODRIGUEZ</h1>
    </div>

    <div className = "hero-bottom">
        
        <div className = "hero-tagline">
            <h1>DESIGN.PERFECT.BUILD.SHIP.</h1>
        </div>

    <div className="hero-caption">
        <div className="hero-left-container">
            <span className="lightblue"> COGNITIVE SCIENCE
                <span className="darkTan"><b> @ </b> </span>
                    <span className="darkblue"> UNIVERSITY OF CALIFORNIA, BERKELEY </span> 
                </span> 
          
          <span className="lightPurple"> FRONT-END DEVELOPMENT
                <span className="darkTan"> <b> + </b> </span> UX ENGINEERING <span className="darkTan"> <b> + </b> </span> UI DESIGN</span>
          </div>
   

        <button
          className="hero-button"
          onClick={() => navigate("/tldr")}
        >
          Welcome In <span className="who-arrow">↓</span>
        </button>
      </div>
      </div>
       </div>
  );
}