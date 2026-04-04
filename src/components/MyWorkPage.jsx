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
      <h2 className="content-heading">Introduction and Guide</h2>
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
      <h2 className="content-heading">Introduction and Guide</h2>
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
      <h2 className="content-heading">ACADEMIC PROJECTS</h2>
      
      <div className="content-body">
        <p> This section is still under construction-- please excuse the rough edges! </p>
        </div>
        </div>
        <div className = "content-container">
      <h4 className="content-heading">Bonbon! And the United Women</h4>
      
      <div className="content-body">
        <div className="content-summary"><p> During the Fall of 2025, I had the pleasure of taking CHICANO 50 - Introduction to Chicano Studies. Our final project was an effort to combat the banning of books in K-12 education, a practice that was targeted largely at ethnic studies topics. We collaborated in small groups to produce short stories based on a specific event or female historical figure we had learned about that semester. Our project was based on the women mutualistas of the 1930s– networks of women in Mexican-American barrios that created an underlying safety net for their communities during the Great Depression. 
</p></div>
<div className= "Content-Detail-Container">
    <div className= "content-detail">
        Highlights:
        - 30+ Pages
        - 20+ illustrations
        - Bilingual (Spanish/English)
        - “Best Illustration” out of 10+ projects
        - “Best Overall” out of 10+ projects
        - Locally published with Eastwind Books of Berkeley 
        - Sub-72 hour turnaround
    </div>
    <div className= "content-detail">
        My Role:
            - Lead Illustrator and Designer
            - Storyboarding
            - Product Branding
            - Wireframing and Prototyping

    </div>
    <div className= "content-detail">
        Tools Used: 
            - Adobe Illustrator
            - Adobe InDesign
            - Procreate

    </div>
</div>
<div className="content-summary"><p> Synopsis: 
”Bonbon! And the United Women” follows a chihuahua dog named Bonbon as he witnesses the effects of the 1930s Great Depression in his neighborhood. At this time, the Mexican-American community was being targeted through the Mexican Repatriation Act of the 1930s. This act would call for the deportation of Mexican and Mexican-Americans to Mexico. It tore apart families, expulsed American-born Mexicans, and drastically changed the lives of over a million people. Bonbon walks through his barrio, and witnesses Mexican women build support systems, aid each other’s families, work for an income, and fight for the survival of the Mexican-American community. 
</p></div>
        </div>
        </div>
    </section>
  );
}
