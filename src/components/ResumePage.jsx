import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";     

const SIDEBAR_SECTIONS = [
  "View and Download Resume",
  "Education, Skills and Tools",
  "Work Experience",
  "Academic Projects and Programs",
  "Achievements and Awards",
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
            {activeSection === "View and Download Resume" && <SectionViewResume />}
            {activeSection === "Education, Skills and Tools" && <SectionEducationSkillsTools />}
            {activeSection === "Work Experience" && <SectionWorkExperience />}
            {activeSection === "Academic Projects and Programs" && <SectionAcademicProjects />}
            {activeSection === "Achievements and Awards" && <SectionAchievements />}
        </main>

      </div>
    </div>
  );
}


function SectionViewResume() {
  return (
    <section className="content-section">
      <h2 className="section-heading">VIEW AND DOWNLOAD RESUME</h2>

      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}

function SectionEducationSkillsTools() {
  return (
    <section className="content-section">
      <h2 className="section-heading">EDUCATION, SKILLS AND TOOLS</h2>
      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
} 


function SectionWorkExperience() {
  return (
    <section className="content-section">
      <h2 className="section-heading">WORK EXPERIENCE</h2>
      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}

function SectionAcademicProjects() {
  return (
    <section className="content-section">
      <h2 className="section-heading">ACADEMIC PROJECTS AND PROGRAMS</h2>
      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}

function SectionAchievements() {
  return (
    <section className="content-section">
      <h2 className="section-heading">ACHIEVEMENTS AND AWARDS</h2>
      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}