import React from "react";

export default function HeroPage({ navigate }) {
  return (
    <div className="hero-page">

    <div class = "hero-signature">
        <img src= "src\assets\signaturePlaceholder.png"/>
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
          
          <span className="lightPurple">SOFTWARE ENGINEERING
                <span className="darkTan"> <b> + </b> </span> UX / UI <span className="darkTan"> <b> + </b> </span> DESIGN</span>
          </div>
   

        <button
          className="hero-button"
          onClick={() => navigate("home")}
        >
          Welcome In <span className="who-arrow">↓</span>
        </button>
      </div>
      </div>
       </div>
  );
}