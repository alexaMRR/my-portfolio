import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";     

const SIDEBAR_SECTIONS = [
  "What's New",
  "Latest",
];

// ── Top navbar links ──────────────────────────
const TOP_NAV_LINKS = ["Home", "Resume", "Projects", "What's New"];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState(SIDEBAR_SECTIONS[0]);
  const [activeLink, setActiveLink] = useState("Home");
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
          {activeSection === "What's New" && <SectionWhatsNew />}
          {activeSection === "Latest"     && <SectionLatest />}
        </main>

      </div>
    </div>
  );
}


function SectionWhatsNew() {
  return (
    <section className="content-section">
      <h2 className="content-heading">WHAT'S NEW</h2>
<p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}

function SectionLatest() {
  return (
    <section className="content-section">
      <h2 className="content-heading">LATEST</h2>
      <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
    </section>
  );
}