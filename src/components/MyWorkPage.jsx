import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";     

const SIDEBAR_SECTIONS = [
  "Introduction and Guide",
  "Experience Samples",
  "Academic Projects",
];

const TOP_NAV_LINKS = ["Home", "Resume", "Projects", "What's New"];

export default function MyWorkPage() {
  const [activeSection, setActiveSection] = useState(SIDEBAR_SECTIONS[0]);
  const [activeLink, setActiveLink] = useState("MyWork");
  const navigate = useNavigate();
  
  return (
    <div className="home-page">
        <Navbar navigate={navigate} />
      <div className="home-body">

        {/* ── Left Sidebar ── */}
        <aside className="sidebar">
          {SIDEBAR_SECTIONS.map((section) => (
            <button
              key={section}
              className={`sidebar-link ${activeSection === section ? "active" : ""}`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </aside>

        {/* ── Main Content ── */}
        <main className="home-content">
            {activeSection === "Introduction and Guide" && <SectionIntroAndGuide />}
            {activeSection === "Experience Samples" && <SectionXPSamples />}
            {activeSection === "Academic Projects" && <SectionAcademicProjects />}
        </main>

      </div>
    </div>
  );
}


function SectionIntroAndGuide() {
  return (
    <section className="content-section">
      <h2 className="section-heading">Introduction and Guide</h2>
      <div className = "content-container">
      <div className="content-body">
        <p> This section is still under construction-- please excuse the rough edges! </p>
        </div>
        </div>
    </section>
  );
}

function SectionXPSamples() {
  return (
    <section className="content-section">
      <h2 className="section-heading">Introduction and Guide</h2>
      <div className = "content-container">
      <div className="content-body">
        <p> This section is still under construction-- please excuse the rough edges! </p>
        </div>
        </div>
    </section>
  );
}


function SectionAcademicProjects() {
  return (
    <section className="content-section">
        <div className = "content-container">
      <h2 className="section-heading">ACADEMIC PROJECTS</h2>
      
      <div className="content-body">
        <p> This section is still under construction-- please excuse the rough edges! </p>
        </div>
        </div>
        <div className = "content-container">
      <h4 className="content-heading">Bonbon! And the United Women</h4>
      <p className= "content-subheading"> Children's Book Project for UC Berkeley’s Chicano 50: Intro to Chicano Studies </p>
      
      <div className="content-body">
        <div className="content-summary"><p> <div className="darkblue">Description:</div> During the Fall of 2025, I had the pleasure of taking CHICANO 50 - Introduction to Chicano Studies. Our final project was an effort to combat the banning of books in K-12 education, a practice that was targeted largely at ethnic studies topics. We collaborated in small groups to produce short stories based on a specific event or female historical figure we had learned about that semester. Our project was based on the women mutualistas of the 1930s– networks of women in Mexican-American barrios that created an underlying safety net for their communities during the Great Depression. 
</p></div>
<div className= "Content-Detail-Container">
    <div className= "content-detail">
        <h3>My Role:</h3>
            <li> Lead Illustrator and Designer</li>
            <li> Storyboarding</li>
            <li> Product Branding</li>
            <li> Wireframing and Prototyping</li>

    </div>
    
    <div className= "content-detail">
        <h3>Tools Used:</h3>
            <li> Adobe Illustrator</li>
            <li> Adobe InDesign</li>
            <li> Procreate</li>

    </div>
    <div className= "content-detail-highlights">
        <h3>Highlights:</h3>
        <li>33 Pages with over 20 illustrations</li>
        <li>Bilingual (Spanish/English)</li>
        <li>“Best Illustration” and “Best Overall” in cohort</li>
        <li>Locally published with Eastwind Books of Berkeley</li>
        <li>Sub-72 hour turnaround</li>
    </div>
</div>

<div className="action-bar">
                <a href="src/assets/bonbonBookFinal.pdf" download target="_blank" rel="noreferrer" className="action-btn" title="Digital Download"> <b>Download</b> "Bonbon! And the United Women" </a>
                <a href="src/assets/bonbonBookFinal.pdf" target="_blank" className="action-btn"> <b>Open</b> PDF in your browser</a>
                <a href="https://www.dailycal.org/news/campus/student-life/uc-berkeley-students-create-children-s-books-on-chicano-history-to-combat-k-12-book/article_5b997488-c3e6-11ee-9048-1f2dc643988e.html" target="_blank" className="action-btn-accent"> <b> THE DAILY CALIFORNIAN: </b> UC Berkeley students create children’s books on Chicano history to combat K-12 book bans</a>
                <a href="https://news.berkeley.edu/2024/01/29/uc-berkeley-students-combat-k-12-book-bans-by-creating-their-own-childrens-books/" target="_blank"className="action-btn-accent "> <b>UC BERKELEY NEWS:</b> UC Berkeley students combat K-12 book bans by creating their own children’s books</a>
            </div>
<div className="content-summary">
    <p> <div className="darkblue">Synopsis:</div> 
<i>”Bonbon! And the United Women”</i> follows a chihuahua dog named Bonbon as he witnesses the effects of the 1930s Great Depression in his neighborhood. At this time, the Mexican-American community was being targeted through the Mexican Repatriation Act (1929 - 1936). This act would call for the deportation of Mexican and Mexican-Americans to Mexico. It tore apart families, expulsed American-born Mexicans, and drastically changed the lives of over a million people. Bonbon walks through his barrio, and witnesses Mexican women build support systems, aid each other’s families, work for an income, and fight for the survival of the Mexican-American community. 
</p></div>

<div className="gallery">
  <div className="gallery-item">
     <a href="src/assets/bonbon/book-sather-tower.jpg"  target="_blank" rel="noreferrer">
    <img src="src/assets/bonbon/book-sather-tower.jpg" alt="description" /> </a>
    <p className="gallery-caption">Printed copy in front of Sather Tower</p>
  </div>
  <div className="gallery-item">
    <a href="src/assets/bonbon/books-ethnic-studies-lib.jpg"  target="_blank" rel="noreferrer">
    <img src="src/assets/bonbon/books-ethnic-studies-lib.jpg" ttarget="_blank" rel="noreferrer"alt="description" /> </a>
    <p className="gallery-caption">Two physical copies in the UC Berkeley Ethnic Studies Library</p>
  </div>
  <div className="gallery-item">
    <a href="src/assets/bonbon/luigi-pages-photograph.jpg"  target="_blank" rel="noreferrer">
    <img src="src/assets/bonbon/luigi-pages-photograph.jpg" target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Book expo setup along with a picture of Luigi (my muse!)</p> 
  </div>
  <div className="gallery-item">
    <a href="src/assets/bonbon/bonbon-Character-Sketching.png"  target="_blank" rel="noreferrer">
    <img src="src/assets/bonbon/bonbon-Character-Sketching.png" target="_blank" rel="noreferrer" alt="description" /> </a>
    <p className="gallery-caption">Brainstorming character design and artstyle</p>
  </div>
  <div className="gallery-item">
    <a href="src/assets/bonbon/bonbon-p1-sketch.png"  target="_blank" rel="noreferrer">
    <img src="src/assets/bonbon/bonbon-p1-sketch.png" target="_blank" rel="noreferrer" alt="description" /> </a>
    <p className="gallery-caption">Opening page sketch </p>
  </div>
  <div className="gallery-item">
    <a href="src/assets/bonbon/full-spread-illustration-photograph.jpg"  target="_blank" rel="noreferrer">
    <img src="src/assets/bonbon/full-spread-illustration-photograph.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Full-spread illustration across two pages in physical copy</p>
  </div>
</div>
        </div>
        </div>
    </section>
  );
}
