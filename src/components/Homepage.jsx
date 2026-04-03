import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signaturePlaceholder from "../assets/signaturePlaceholder[DARK].png";

import Navbar from "./Navbar.jsx";


const SIDEBAR_SECTIONS = [
    "Hello World!",
    "Meet Alexa",
    "Timeline",
    "My Journey",
    "Contact Me",
];

// ── Top navbar links ──────────────────────────
const TOP_NAV_LINKS = ["Home", "Resume", "Projects", "What's New"];

export default function HomePage() {
    const [activeSection, setActiveSection] = useState(SIDEBAR_SECTIONS[0]);
    const [activeLink, setActiveLink] = useState("Home");
    const navigate = useNavigate();
    useEffect(() => {
  alert(" April 3rd, 2026: Welcome! I'm in the process of migrating my website's design and structure, so it might be a little unfinished. Thank you for your patience!");}, []); 
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
                    {activeSection === "Hello World!" && <SectionHelloWorld />}
                    {activeSection === "Meet Alexa" && <SectionMeetAlexa />}
                    {activeSection === "Timeline" && <SectionTimeline />}
                    {activeSection === "My Journey" && <SectionMyJourney />}
                    {activeSection === "Contact Me" && <SectionContact />}
                </main>

            </div>
        </div>
    );
}


function SectionHelloWorld() {
    return (
        <section className="content-section">
            <h2 className="content-heading">HELLO WORLD!</h2>

            <p className="intro-card">
                Welcome and thank you for visiting my website!

                <br></br>
                <br></br>

                My name is <b>Alexa Rodriguez</b>. I attend the <b>University of California, Berkeley</b>, where I'm pursuing a major in <b> Cognitive Science </b>. I'm a programmer, developer, and designer. I compose ideas and wireframes, perfect assets and designs, code the components, and ship the final product– I can do it all.
                <br></br>
                <br></br>
                I'm also a locally published book illustrator and co-author, an elementary-age coding teacher, an artist with an appreciation for beautiful things, and an avid modded Minecraft player (<i>troubleshooting independent mod installation and performance should be its own technical Java skill</i>).

                I approach my work like it's art, and I approach my problems creatively and bursting with ideas. I have a passion for breathing life into digital experiences, and hate a messy, buggy interface. I've got experience with <b>Python, React.js, HTML/CSS, SQL, Adobe Suite, Figma, and Copilot </b>. You can see the rest of my qualifications on my resume.
                <br></br>
                <br></br>
                I hope you enjoy your stay in my little piece of internet. Shoot me an email or a message on LinkedIn, I’m always happy to strengthen my network and learn from others!


                <div className="content-signoff">
                    <span>Cheers,<br /><em>ALEXA</em></span>
                    <img src={signaturePlaceholder} alt="signature" className="content-signature" />
                </div>

            </p>

            <div className="action-bar">
                <a href="src/assets/ALEXA-RODRIGUEZ-RESUME.pdf" download className="action-btn">VIEW RESUME</a>
                <a href="mailto:alexarodriguez1273@gmail.com" className="action-btn">alexarodriguez1273@gmail.com</a>
                <a href="/my-work" className="action-btn">RECENT WORK</a>
                <a href="https://www.google.com/search?q=who+illustrated+bonbon+and+the+united+women+&num=10&sca_esv=f4adb27807e92ea2&sxsrf=ANbL-n6IZPvxqxTjFZPNzZ_-tBesiK9BcQ%3A1775213433710&ei=eZvPaZqGK7fRkPIPif6uwQ8&biw=1422&bih=621&ved=0ahUKEwjapvewwdGTAxW3KEQIHQm_K_gQ4dUDCBE&uact=5&oq=who+illustrated+bonbon+and+the+united+women+&gs_lp=Egxnd3Mtd2l6LXNlcnAiLHdobyBpbGx1c3RyYXRlZCBib25ib24gYW5kIHRoZSB1bml0ZWQgd29tZW4gMgQQIxgnSNAGUNUEWNUEcAF4AJABAJgBfqABfqoBAzAuMbgBA8gBAPgBAZgCAqACjAHCAggQABjvBRiwA8ICCxAAGIkFGKIEGLADmAMAiAYBkAYEkgcDMS4xoAeCArIHAzAuMbgHgwHCBwUwLjEuMcgHCYAIAQ&sclient=gws-wiz-serp" className="action-btn ">HEY GOOGLE, WHO ILLUSTRATED "BONBON" AND THE UNITED WOMEN?</a>
            </div>

            <div className="fullGradientLink">
                <a href="https://news.berkeley.edu/2024/01/29/uc-berkeley-students-combat-k-12-book-bans-by-creating-their-own-childrens-books/" > UC BERKELEY NEWS: UC Berkeley students combat K-12 book bans by creating their own children’s books</a>
            </div>

        </section>
    );
}

function SectionMeetAlexa() {
    return (
        <section className="content-section">
            <h2 className="content-heading">MEET ALEXA</h2>
            <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
        </section>
    );
}

function SectionTimeline() {
    return (
        <section className="content-section">
            <h2 className="content-heading">TIMELINE</h2>
            <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
        </section>
    );
}

function SectionMyJourney() {
    return (
        <section className="content-section">
            <h2 className="content-heading">MY JOURNEY</h2>
            <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out!</p>
        </section>
    );
}

function SectionContact() {
    return (
        <section className="content-section">
            <h2 className="content-heading">CONTACT ME</h2>
            <p className="content-body">
        This area is under construction! Check out the icons on the top right corner for contact information. </p>
        </section>
    );
}