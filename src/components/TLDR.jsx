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
<div className = "flashcardGradient"> 
<div className="flashcard-left-column"> 
  <img src="/assets/myGallery/alexaTLDR.jpg" alt="alexa" className="flashcard-logo" />

</div>
<div className="flashcard-right-column-top"> <div class="title-block">
  <div className="flashcard-title">
    Hey, I'm Alexa  =-)
  </div>
  <div className="flashcard-subtitle"> 
    San Francisco Bay Area | Cognitive Science @ UC Berkeley 
  </div>
</div> 
<p> I'm a programmer, developer, and designer. I compose ideas, perfect designs, code the components, and ship the final product– I can do it all. 
                <br></br>
                <br></br>
                I approach my work like it's art-- I have a passion for breathing life into digital experiences. 
                <br></br>I've got experience with <b>Python, React.js, HTML/CSS, SQL, Adobe Suite, Figma, and Copilot </b>.
                <br></br>
                <br></br>
                Hope you enjoy! :{')'} 

</p>
                <div className="content-signoff">
                    <span>Cheers,<br /><em>ALEXA</em></span>
                    <img src="/assets/signaturePlaceholder.png" alt="signature" />
                </div></div>
</div>

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
      <div className="flashcard-skill">Canva</div>
      
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
        <li>Designed vendor and customer newsletter templates</li>
  </p>
  <div className="action-bar-flat">
                <a href="https://trellis.hortus.ai/" download target="_blank" rel="noreferrer" className="action-btn-flat" title="Visit Hortus Trellis AI "> <b>Visit</b> Hortus Trellis AI </a>
                <a href="https://www.newamerica.org/insights/a-sustainable-path-for-ai-development/" target="_blank"className="action-btn-flat-accent "> <b>NEW AMERICA:</b> A Sustainable Path for AI Development to Empower Communities and Serve Public Interests</a>
            </div>
<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/hortus/hortus-landing-1.0.png"  target="_blank" rel="noreferrer">
    <img src="/assets/hortus/hortus-landing-1.0.png" alt="description" /> </a>
  </div>
  <div className="gallery-item">
     <a href="/assets/hortus/hortus-vendor-newsletter.png"  target="_blank" rel="noreferrer">
    <img src="/assets/hortus/hortus-vendor-newsletter.png" alt="description" /> </a>
  </div>
  <div className="gallery-item">
     <a href="/assets/comingSoon.png"  target="_blank" rel="noreferrer">
    <img src="/assets/comingSoon.png" alt="description" /> </a>
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
      <div className="flashcard-skill">Canva</div>
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
  <div className="action-bar-flat">
                <a href="/assets/bonbonBookFinal.pdf" download target="_blank" rel="noreferrer" className="action-btn-flat" title="Digital Download"> <b>Download</b> Digital PDF </a>
                <a href="/assets/bonbonBookFinal.pdf" target="_blank" className="action-btn-flat"> <b>Open</b> PDF in your browser</a>
                <a href="https://www.dailycal.org/news/campus/student-life/uc-berkeley-students-create-children-s-books-on-chicano-history-to-combat-k-12-book/article_5b997488-c3e6-11ee-9048-1f2dc643988e.html" target="_blank" className="action-btn-flat-accent"> <b> THE DAILY CALIFORNIAN: </b> UC Berkeley students create children’s books...</a>
                <a href="https://news.berkeley.edu/2024/01/29/uc-berkeley-students-combat-k-12-book-bans-by-creating-their-own-childrens-books/" target="_blank"className="action-btn-flat-accent "> <b>UC BERKELEY NEWS:</b> UC Berkeley students combat K-12 book bans...</a>
            </div>
  <div className="gallery">
  <div className="gallery-item">
     <a href="/assets/bonbon/book-sather-tower.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/book-sather-tower.jpg" alt="description" /> </a>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/books-ethnic-studies-lib.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/books-ethnic-studies-lib.jpg" ttarget="_blank" rel="noreferrer"alt="description" /> </a>  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/luigi-pages-photograph.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/luigi-pages-photograph.jpg" target="_blank" rel="noreferrer" alt="description" /></a>

  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/bonbon-Character-Sketching.png"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/bonbon-Character-Sketching.png" target="_blank" rel="noreferrer" alt="description" /> </a>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/bonbon-p1-sketch.png"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/bonbon-p1-sketch.png" target="_blank" rel="noreferrer" alt="description" /> </a>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/full-spread-illustration-photograph.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/full-spread-illustration-photograph.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/two-page-spread-sketch.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/two-page-spread-sketch.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
  </div>
</div>
</div>
</div>


<div className = "flashcardRed"> 
<div className="flashcard-left-column"> 
  <img src= "/assets/eps88-solar-cycle/num_sunspots-over-time.png" alt="Graph: Number of Sunspots Over Time" className="flashcard-logo"/>
    <div className= "flashcard-skills"> 
      <div className="flashcard-skill">Data Analysis</div>
      <div className="flashcard-skill">Back-end Development</div>
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
        <li>Data analysis project investigating correlations between solar activity affecting satellites, GPS, and power grids</li>
        <li>Built data pipelines in Python to clean geomagnetic and solar cycle datasets from NOAA and GFZ Potsdam</li>
        <li>Applied Pearson correlation + feature lagging to quantify sunspot frequency and geomagnetic activity </li>
        <li>Built visualizations using Matplotlib to illustrate solar cycles and cross-dataset trends spanning several decades</li>
  </p>
  <div className="action-bar-flat">
    <a href="https://github.com/alexaMRR/eps88-final" className="action-btn-flat" title="Github">Open in <b>Github</b></a>
    <a href="https://github.com/AI4EPS/EPS88_2024"  className="action-btn-flat" title="Course Github"> Visit the <b>EPS 88 Repo</b> </a>
  </div>
<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/eps88-solar-cycle/kp-index-over-time.png"  target="_blank" rel="noreferrer">
    <img src="/assets/eps88-solar-cycle/kp-index-over-time.png" alt="description" /> </a>
  </div>
  <div className="gallery-item">
     <a href="/assets/eps88-solar-cycle/num_sunspots-over-time.png"  target="_blank" rel="noreferrer">
    <img src="/assets/eps88-solar-cycle/num_sunspots-over-time.png" alt="description" /> </a>
  </div>
  </div>
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
    CEO & Head of Design @ Xolanthia's Game
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
  <div className="action-bar-flat">
                <a href="https://build.org/" download target="_blank" rel="noreferrer" className="action-btn-flat" title="Visit BUILD.org"> <b>Visit</b> BUILD.org</a>
                <a href="mailto:alexarodriguez1273@gmail.com" className="action-btn-flat-accent "> <b>Get your own Xolanthia's Game set: </b>Click here to order</a>
            </div>
<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/xolanthias/Box-Front.png"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/Box-Front.png" alt="description" /> </a>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/XG-display.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/XG-display.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/XG-product-evolution.png"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/XG-product-evolution.png"target="_blank" rel="noreferrer" alt="description" /></a>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/XG-rules1.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/XG-rules1.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/XG-rules2.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/XG-rules2.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/cards-laid-out.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/cards-laid-out.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
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
        <li>Engineered turn-based game logic using recursion to manage multiple dynamic states using Python</li>
        <li>Implemented 10+ object entity subclasses using OOP principles like abstraction, inheritance, and polymorphism</li>
        <li>Navigated complex starter code, adapting to pre-existing style and structure</li>
  </p>
  
   <div className="action-bar-flat">
    <a href="link" className="action-btn-flat" title="Github">Github link coming soon...</a>
    <a href="https://cs61a.org/proj/ants/"  className="action-btn-flat" title="Course Github"> Learn about <b>CS61a's</b> Ants Vs. SomeBees</a>
  </div>
<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/c88/ants-vs-somebees-demo.gif"  target="_blank" rel="noreferrer">
    <img src="/assets/c88/ants-vs-somebees-demo.gif" alt="description" /> </a>
  </div></div>
</div> </div>
<div className = "flashcardBlue"> 
<div className="flashcard-left-column"> 
  <img src= "/assets/myGallery/berkeley-espresso.jpg" alt="Working at Berkeley Espresso" className="flashcard-logo"/>
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
        <li>Aspire Golden State Prep highschool uniforms</li>
        <li>Cali Panthers Uniform -- Deaf Women's Flag Football Association </li>
  </p>
<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/freelance/gsp-shirt-logo.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/freelance/gsp-shirt-logo.jpg" alt="description" /> </a>  </div>
    <div className="gallery-item">
     <a href="/assets/freelance/gsp-shirt-portrait.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/freelance/gsp-shirt-portrait.jpg" alt="description" /> </a>  </div>
    <div className="gallery-item">
     <a href="/assets/freelance/cali-panthers-front.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/freelance/cali-panthers-front.jpg" alt="description" /> </a>  </div>
    <div className="gallery-item">
     <a href="/assets/freelance/cali-panthers-back.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/freelance/cali-panthers-back.jpg" alt="description" /> </a>  </div>
    <div className="gallery-item">
     <a href="/assets/comingSoon.png"  target="_blank" rel="noreferrer">
    <img src="/assets/comingSoon.png" alt="description" /> </a>  </div>
    
    </div>
</div></div>
    </section>
  );
}
