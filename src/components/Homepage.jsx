// src/components/HomePage.jsx
// ─────────────────────────────────────────────
// HOME PAGE — main portfolio layout
// Matches the design: sticky top navbar,
// left sidebar nav, right content area
// ─────────────────────────────────────────────
import { useState } from "react";

// ── Sidebar nav sections ──────────────────────
// TODO: Add or remove sections as needed
const SIDEBAR_SECTIONS = [
  "Hello World!",
  "Meet Alexa",
  "Timeline",
  "My Journey",
  "Contact Me",
];

// ── Top navbar links ──────────────────────────
const TOP_NAV_LINKS = ["Home", "Resume", "Projects", "What's New"];

export default function HomePage({ navigate }) {
  const [activeSection, setActiveSection] = useState("Hello World!");

  return (
    <div className="home-page">

      {/* ════════════════════════════════════════
          TOP NAVBAR
      ════════════════════════════════════════ */}
      <header className="top-navbar">

        {/* Logo / name lockup */}
        <div className="navbar-logo" onClick={() => navigate("hero")} role="button" tabIndex={0}>
          {/* TODO: Update with your name */}
          <span className="logo-name">ALEXA<br />RODRIGUEZ</span>
          <span className="logo-tagline">Design. Perfect.<br />Code. Ship.</span>
        </div>

        {/* Main nav links */}
        <nav className="navbar-links" aria-label="Main navigation">
          {TOP_NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s/g, "-")}`} className="navbar-link">
              {link}
            </a>
          ))}
        </nav>

        {/* Action icons: download resume, LinkedIn, share */}
        <div className="navbar-actions">
          {/* TODO: Replace href with your actual resume PDF path */}
          <a href="/assets/resume.pdf" download className="nav-icon-btn" title="Download Resume">⬇</a>
          {/* TODO: Replace with your actual LinkedIn URL */}
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="nav-icon-btn" title="LinkedIn">in</a>
          <button className="nav-icon-btn" title="Share">⇧</button>
        </div>

      </header>

      {/* ════════════════════════════════════════
          BODY: sidebar + content
      ════════════════════════════════════════ */}
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
          {activeSection === "Hello World!" && <SectionHelloWorld />}
          {activeSection === "Meet Alexa"   && <SectionMeetAlexa />}
          {activeSection === "Timeline"     && <SectionTimeline />}
          {activeSection === "My Journey"   && <SectionMyJourney />}
          {activeSection === "Contact Me"   && <SectionContact />}
        </main>

      </div>
    </div>
  );
}

// ══════════════════════════════════════════════
// CONTENT SECTIONS — fill these in!
// ══════════════════════════════════════════════

function SectionHelloWorld() {
  return (
    <section className="content-section">
      <h2 className="content-heading">HELLO WORLD!</h2>

      {/* TODO: Replace with your actual intro paragraph.
               Wrap any highlighted words in <strong> or <a> tags. */}
      <p className="content-body">
        Welcome and thank you for visiting my website! My name is{" "}
        <strong>Alexa Rodriguez</strong>. I'm a designer and developer that
        works on UX/UI and front-end programming. I attend the{" "}
        <strong>University of California, Berkeley</strong>, where I'm pursuing
        a major in <strong>Cognitive Science</strong>. I'm a multifaceted
        developer with a passion for human-centric design and a frictionless
        digital experience, whether I'm sketching design foundations with paper
        and pencil, or implementing front-end components. I've got experience
        with Python, React.js, HTML/CSS, SQL, Adobe Suite, Figma, and Copilot.
        You can see the rest of my qualifications on my resume within this
        portfolio I've built for you. Feel free to contact me — I'm always open
        to chatting and collaborating.
      </p>

      {/* TODO: Replace with your actual signature image:
               <img src="/assets/signature.png" alt="Alexa's signature" className="content-signature" /> */}
      <p className="content-signoff">Cheers,<br /><em>ALEXA</em></p>

      {/* CTA buttons */}
      <div className="content-cta">
        {/* TODO: Update hrefs to point to your resume, email, and projects */}
        <a href="/assets/resume.pdf" download className="cta-btn cta-outline">VIEW RESUME</a>
        <a href="mailto:you@email.com" className="cta-btn cta-outline">SEND EMAIL</a>
        <a href="#projects" className="cta-btn cta-outline">RECENT WORK</a>
        {/* TODO: Update this last button text/link */}
        <a href="#" className="cta-btn cta-accent">HEY GOOGLE, WHO ILLUSTRATED "BONBON" &amp; THE UNITED WOMEN?</a>
      </div>
    </section>
  );
}

function SectionMeetAlexa() {
  return (
    <section className="content-section">
      <h2 className="content-heading">MEET ALEXA</h2>
      {/* TODO: Add your bio, photo, fun facts, etc. */}
      <p className="content-body content-placeholder">
        ✏️ Add your bio here — who you are, what drives you, what you love outside of work.
      </p>
    </section>
  );
}

function SectionTimeline() {
  return (
    <section className="content-section">
      <h2 className="content-heading">TIMELINE</h2>
      {/* TODO: Add a timeline of your education and experience */}
      <p className="content-body content-placeholder">
        ✏️ Add your timeline here — education, internships, jobs, key milestones.
      </p>
    </section>
  );
}

function SectionMyJourney() {
  return (
    <section className="content-section">
      <h2 className="content-heading">MY JOURNEY</h2>
      {/* TODO: Add subsections: Before College, Undergrad at Berkeley, What's Next? */}
      <ul className="journey-list">
        <li><strong>Before College</strong> — ✏️ Add your story here</li>
        <li><strong>Undergrad at Berkeley</strong> — ✏️ Add your story here</li>
        <li><strong>What's Next?</strong> — ✏️ Add your story here</li>
      </ul>
    </section>
  );
}

function SectionContact() {
  return (
    <section className="content-section">
      <h2 className="content-heading">CONTACT ME</h2>
      {/* TODO: Add contact form or links */}
      <p className="content-body content-placeholder">
        ✏️ Add contact info, a form, or links to email / LinkedIn / GitHub.
      </p>
    </section>
  );
}