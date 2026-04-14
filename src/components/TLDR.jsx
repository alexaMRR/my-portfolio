import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";     

const SIDEBAR_SECTIONS = [
  "TLDR"
];

// ── Top navbar links ──────────────────────────

export default function HomePage() {
  const [activeSection, setActiveSection] = useState(SIDEBAR_SECTIONS[0]);
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();

  return (
    <div className="home-page">
        <Navbar navigate={navigate} activePage="TLDR"/>
      <div className="home-body tldr-page">

        {/* ── Main Content ── */}
        <main className="home-content ">
          {activeSection === "TLDR" && <TLDR />}
        </main>

      </div>
    </div>
  );
}


function TLDR() {
  return (
    <section className="content-section">
      <h2 className="section-heading">TL;DR</h2>
      <p className="intro-card">
        <img src="/assets/myGallery/alexaTLDR.jpg" alt="alexa" className="intro-card-img" />
        <div className="intro-card-body">
                Hey there! I'm <b>Alexa</b>. I attend the <b>University of California, Berkeley</b>, where I'm pursuing a major in <b> Cognitive Science </b>. 
                <br></br>
                I'm a programmer, developer, and designer. I compose ideas, perfect designs, code the components, and ship the final product– I can do it all.
                <br></br>
                <br></br>
                I approach my work like it's art-- I have a passion for breathing life into digital experiences. 
                <br></br>I've got experience with <b>Python, React.js, HTML/CSS, SQL, Adobe Suite, Figma, and Copilot </b>.
                <br></br>
                <br></br>
                Hope you enjoy! :{')'} 


                <div className="content-signoff">
                    <span>Cheers,<br /><em>ALEXA</em></span>
                    <img src="/assets/signaturePlaceholder.png" alt="signature" />
                </div></div>

            </p>

            <div className = "flashcardRed"> 
<div className="flashcard-left-column"> 
  <img src= "/assets/logos/Hortus-Logo.png" alt="hortus logo" className="flashcard-logo"/>
    <div className= "flashcard-skills"> 
      <div className="flashcard-skill">UX/UI Design</div>
      <div className="flashcard-skill">Front-End Dev.</div>
      <div className="flashcard-skill">React.js</div>
      <div className="flashcard-skill">Python</div>
      <div className="flashcard-skill">Figma</div>
      <div className="flashcard-skill">Jira</div>
      <div className="flashcard-skill">Github</div>
      <div className="flashcard-skill">Adobe Suite</div>
      
    </div>

</div>
<div className="flashcard-right-column-top"> <div class="title-block">
  <div className="flashcard-title">
    UX/UI Intern @ Hortus AI
  </div>
  <div className="flashcard-subtitle"> 
    Hybrid | Oakland, CA | Spring 2026
  </div>
</div> 

 <p>
        <li>Introduced ‘leaf’ formatting motif adopted across entire product</li>
        <li>Created custom 'Tree of Life' + mandala design and implemented using SVG Paths</li>
        <li>Led dark mode development across product site</li>
        <li>Redesigned landing page, improving user flow and engagement</li>
        <li>Spearheaded AI assistant design and user functionality</li>
  </p>
<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/hortus/hortus-landing-1.0.png"  target="_blank" rel="noreferrer">
    <img src="/assets/hortus/hortus-landing-1.0.png" alt="description" /> </a>
    <p className="gallery-caption">Hortus AI Landing Page v1.0 | Redesigned the landing page, creating a tree of life image with mandala elements to tie into brand identity emphasizing the human-technology ecosystem. </p>
  </div>
  
  <div className="gallery-item">
     <a href="/assets/comingSoon.png"  target="_blank" rel="noreferrer">
    <img src="/assets/comingSoon.png" alt="description" /> </a>
    <p className="gallery-caption">Coming Soon!</p>
  </div></div>
</div>


</div>
<div className = "flashcardBlue"> 
<div className="flashcard-left-column"> 
  <img src= "/assets/bonbon/bonbonCOVER.jpg" alt="Bonbon Cover" className="flashcard-logo"/>
    <div className= "flashcard-skills"> 
      <div className="flashcard-skill">Product Design</div>
      <div className="flashcard-skill">Illustration</div>
      <div className="flashcard-skill">Adobe Illustrator</div>
      <div className="flashcard-skill">Adobe InDesign</div>
      <div className="flashcard-skill">Procreate</div>
      <div className="flashcard-skill">Photoshop</div>      
    </div>

</div>
<div className="flashcard-right-column-top"> <div class="title-block">
  <div className="flashcard-title">
    Illustrator, Co-Author of "Bonbon! And the United Women"
  </div>
  <div className="flashcard-subtitle"> 
    Children's Book Project for UC Berkeley’s Chicano 50: Intro to Chicano Studies | Fall 2023
  </div>
 
</div> 
 <p>
        <li>33 Pages with over 20 illustrations</li>
        <li>Bilingual (Spanish/English)</li>
        <li>“Best Illustration” and “Best Overall” in cohort</li>
        <li>Locally published with Eastwind Books of Berkeley</li>
        <li>Sub-72 hour turnaround</li>
  </p>
  <div className="gallery">
  <div className="gallery-item">
     <a href="/assets/bonbon/book-sather-tower.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/book-sather-tower.jpg" alt="description" /> </a>
    <p className="gallery-caption">Printed copy in front of Sather Tower</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/books-ethnic-studies-lib.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/books-ethnic-studies-lib.jpg" ttarget="_blank" rel="noreferrer"alt="description" /> </a>
    <p className="gallery-caption">Two physical copies in the UC Berkeley Ethnic Studies Library</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/luigi-pages-photograph.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/luigi-pages-photograph.jpg" target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Book expo setup along with a picture of Luigi (my muse!)</p> 
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/bonbon-Character-Sketching.png"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/bonbon-Character-Sketching.png" target="_blank" rel="noreferrer" alt="description" /> </a>
    <p className="gallery-caption">Brainstorming character design and artstyle</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/bonbon-p1-sketch.png"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/bonbon-p1-sketch.png" target="_blank" rel="noreferrer" alt="description" /> </a>
    <p className="gallery-caption">Opening page sketch </p>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/full-spread-illustration-photograph.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/full-spread-illustration-photograph.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Full-spread illustration across two pages in physical copy</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/two-page-spread-sketch.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/two-page-spread-sketch.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Full-spread illustration sketch in production</p>
  </div>
</div>
</div>


</div>
<div className = "flashcardRed"> 
<div className="flashcard-left-column"> 
  <img src= "/assets/eps88-solar-cycle/num_sunspots-over-time.png" alt="Graph: Number of Sunspots Over Time" className="flashcard-logo"/>
    <div className= "flashcard-skills"> 
      <div className="flashcard-skill">Data Analysis</div>
      <div className="flashcard-skill">Back-end Dev.</div>
      <div className="flashcard-skill">Python</div>
      <div className="flashcard-skill">sklearn</div>
      <div className="flashcard-skill">JupyterNotebook</div>
      <div className="flashcard-skill">Pandas + Numpy</div>
      <div className="flashcard-skill">Matplotlib</div>
      <div className="flashcard-skill">Feature Lagging</div>
      <div className="flashcard-skill">Pearson Method</div>
      
    </div>

</div>
<div className="flashcard-right-column-top"> <div class="title-block">
  <div className="flashcard-title">
    Data Correlation Model: Solar Cycles, Space Weather, and Communication Systems
  </div>
  <div className="flashcard-subtitle"> 
    EPS 88: Data Science for Earth Sciences | Berkeley, CA | Fall 2024
  </div>
</div> 

 <p>
        <li>Github link coming on 4/16</li>
        <li>Highlight coming soon...</li>
        <li>Highlight coming soon...</li>
        <li>Highlight coming soon...</li>
        <li>Highlight coming soon...</li>
  </p>
<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/comingSoon.png"  target="_blank" rel="noreferrer">
    <img src="/assets/comingSoon.png" alt="description" /> </a>
    <p className="gallery-caption">Coming Soon!</p>
  </div></div>
</div>


</div>
<div className = "flashcardBlue"> 
<div className="flashcard-left-column"> 
  <img src= "/assets/xolanthias/Box-Front.png" alt="Xolanthias Game" className="flashcard-logo"/>
    <div className= "flashcard-skills"> 
      <div className="flashcard-skill">Illustrator</div>
      <div className="flashcard-skill">Medibang Paint</div>
      <div className="flashcard-skill">Project Management</div>
      <div className="flashcard-skill">Game Design</div>
      <div className="flashcard-skill">Multimedia Marketing</div>
      <div className="flashcard-skill">Product Manufacturing</div>
      
    </div>

</div>
<div className="flashcard-right-column-top"> <div class="title-block">
  <div className="flashcard-title">
    Chief Executive Officer, Head of Design @ Xolanthia's Game
  </div>
  <div className="flashcard-subtitle"> 
    BUILD Entrepreneurship Program | Oakland, CA | 2018 - 2019
  </div>
</div> 

 <p>
        <li>Placed first at BUILD regional product pitch competition</li>
        <li>Over 20 units sold</li>
        <li>Over 40 custom card illustrations and designs </li>
        <li>Box set includes a dice, instructions, and playing chips</li>
        <li>Made for 2 - 5 players</li>
  </p>
<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/xolanthias/Box-Front.png"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/Box-Front.png" alt="description" /> </a>
    <p className="gallery-caption">Front of the Xolanthia's Game box - Final Version</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/XG-display.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/XG-display.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Xolanthia's Game display at the BUILD Regional open floor.</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/XG-product-evolution.png"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/XG-product-evolution.png"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Xolanthia's Game product evolution.</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/XG-rules1.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/XG-rules1.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Xolanthia's Game rules (Page 1)</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/XG-rules2.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/XG-rules2.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Xolanthia's Game rules (Page 2)</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/cards-laid-out.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/cards-laid-out.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Xolanthia's Game cards in production for first sales event.</p>
  </div>
</div>

</div></div>
<div className = "flashcardRed"> 
<div className="flashcard-left-column"> 
  <img src= "/assets/c88/ants-vs-somebees.png" alt="Ants Vs. Somebees Splash" className="flashcard-logo"/>
    <div className= "flashcard-skills"> 
      <div className="flashcard-skill">Python</div>
      <div className="flashcard-skill">Back-end Dev.</div>
      <div className="flashcard-skill">Game Design</div>
      <div className="flashcard-skill">Object-oriented Programming</div>
      <div className="flashcard-skill">Data Structures</div>
    </div>

</div>
<div className="flashcard-right-column-top"> <div class="title-block">
  <div className="flashcard-title">
    Ants Vs. SomeBees: Tower-Defense Simulation Engine
  </div>
  <div className="flashcard-subtitle"> 
     CS61A: Structure & Interpretation of Computer Programs | Berkeley, CA | Fall 2025
  </div>
</div> 

 <p>
        <li>Github link coming on 4/16</li>
        <li>Highlight coming soon...</li>
        <li>Highlight coming soon...</li>
        <li>Highlight coming soon...</li>
        <li>Highlight coming soon...</li>
  </p>
<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/c88/ants-vs-somebees-demo.gif"  target="_blank" rel="noreferrer">
    <img src="/assets/c88/ants-vs-somebees-demo.gif" alt="description" /> </a>
    <p className="gallery-caption">Ants Vs. Somebees demo, courtesy of UC Berkeley</p>
  </div></div>
</div> </div>
<div className = "flashcardBlue"> 
<div className="flashcard-left-column"> 
  <img src= "/assets/comingSoon.png" alt="Xolanthias Game" className="flashcard-logo"/>
    <div className= "flashcard-skills"> 
      <div className="flashcard-skill">Graphic Design</div>
      <div className="flashcard-skill">Product Design</div>
      <div className="flashcard-skill">Adobe Suite</div>
      <div className="flashcard-skill">User Research</div>
      <div className="flashcard-skill">Multimedia Design</div>
      <div className="flashcard-skill">Product Manufacturing</div>
      
    </div>

</div>
<div className="flashcard-right-column-top"> <div class="title-block">
  <div className="flashcard-title">
    Freelance Design Work
  </div>
  <div className="flashcard-subtitle"> 
    San Francisco Bay Area | Since 2018
  </div>
</div> 

 <p>
        <li>Aspire GSP highschool uniforms...</li>
        <li>Deaf Women's sports jersey design...</li>
        <li>More coming on 4/16...</li>
  </p>
<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/comingSoon.png"  target="_blank" rel="noreferrer">
    <img src="/assets/comingSoon.png" alt="description" /> </a>
    <p className="gallery-caption">Coming Soon!</p>
  </div></div>
</div></div>
    </section>
  );
}
