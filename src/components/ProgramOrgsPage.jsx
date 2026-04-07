import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";     

const SIDEBAR_SECTIONS = [
  "Timeline",
  "Organizations",
  "Programs",
];

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
            {activeSection === "Timeline" && <SectionTimeline />}
            {activeSection === "Organizations" && <SectionOrganizations />}
            {activeSection === "Programs" && <SectionPrograms />}
        </main>

      </div>
    </div>
  );
}


function SectionTimeline() {
  return (
    <section className="content-section">
      <h2 className="section-heading">TIMELINE</h2>

      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}

function SectionOrganizations() {
  return (
    <section className="content-section">
      <h2 className="section-heading">ORGANIZATIONS</h2>
      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
} 


function SectionPrograms() {
  return (
    <section className="content-section">
      <h2 className="section-heading">PROGRAMS</h2>
      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}

