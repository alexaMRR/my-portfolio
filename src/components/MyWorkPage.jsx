import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";     

const SIDEBAR_SECTIONS = [
  "Introduction and Guide",
  "UX / UI Design",
  "Coding and Development",
  "Data Science Projects",
  "Other Projects",
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
            {activeSection === "UX / UI Design" && <SectionUXUI />}
            {activeSection === "Coding and Development" && <SectionCoding />}
            {activeSection === "Data Science Projects" && <SectionDataScience />}
            {activeSection === "Other Projects" && <SectionOther />}
        </main>

      </div>
    </div>
  );
}


function SectionIntroAndGuide() {
  return (
    <section className="content-section">
      <h2 className="content-heading">INTRODUCTION AND GUIDE</h2>
<p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}

function SectionUXUI() {
  return (
    <section className="content-section">
      <h2 className="content-heading">UX / UI DESIGN</h2>
      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}

function SectionCoding() {
  return (
    <section className="content-section">
      <h2 className="content-heading">CODING AND DEVELOPMENT</h2>
      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}

function SectionDataScience() {
  return (
    <section className="content-section">
      <h2 className="content-heading">DATA SCIENCE PROJECTS</h2>
      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}

function SectionOther() {
  return (
    <section className="content-section">
      <h2 className="content-heading">CONTACT ME</h2>
      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}