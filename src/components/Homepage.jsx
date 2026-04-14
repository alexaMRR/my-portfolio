import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const bonbonQ = "https://www.google.com/search?q=who+illustrated+bonbon+and+the+united+women+uc+berkeley&num=10&sca_esv=f4adb27807e92ea2&biw=1422&bih=621&sxsrf=ANbL-n7QWx2YLVddggc2vNe0nKOk_-P3Bw%3A1775989054354&ei=PnHbaYWmFare0PEP4qym4A4&ved=0ahUKEwiFvdbliuiTAxUqLzQIHWKWCewQ4dUDCBE&uact=5&oq=who+illustrated+bonbon+and+the+united+women+uc+berkeley&gs_lp=Egxnd3Mtd2l6LXNlcnAiN3dobyBpbGx1c3RyYXRlZCBib25ib24gYW5kIHRoZSB1bml0ZWQgd29tZW4gdWMgYmVya2VsZXkyBBAjGCdI4iRQjARYhCNwBHgAkAEAmAF6oAGlCqoBBDEzLjK4AQPIAQD4AQGYAg6gAuYIwgIHECMYsAMYJ8ICCBAAGO8FGLADmAMAiAYBkAYFkgcEMTEuM6AHnhqyBwM5LjO4B9oIwgcGMC4xMC40yAcngAgB&sclient=gws-wiz-serp";


const SIDEBAR_SECTIONS = [
    "Hello World!",
    "Meet Alexa",
    "Education + Certificates",
    "Skills + Tools",
    "Achievements + Awards",
    "Contact Me",
];

// ── Top navbar links ──────────────────────────

export default function HomePage() {
    const [activeSection, setActiveSection] = useState(SIDEBAR_SECTIONS[0]);
    const [activeLink, setActiveLink] = useState("Home");
    const navigate = useNavigate();
    useEffect(() => {
  alert(" April 14th, 2026: Welcome! I'm in the process of migrating my website's design and structure, so it might be a little unfinished. Thank you for your patience!");}, []); 
    return (
        <div className="home-page">
            <Navbar navigate={navigate} activePage="home" />
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
                    {activeSection === "Education + Certificates" && <SectionEducation />}
                    {activeSection === "Skills + Tools" && <SectionSkills />}
                    {activeSection === "Achievements + Awards" && <SectionAchievements />}
                    {activeSection === "Contact Me" && <SectionContact />}
                </main>

            </div>
        </div>
    );
}


function SectionHelloWorld() {
    return (
        <section className="content-section">
            <h2 className="section-heading">HELLO WORLD!</h2>

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
                I hope you enjoy your stay in my little piece of internet. Shoot me an email or a message on LinkedIn, I’m always happy to chat and learn from others!


                <div className="content-signoff">
                    <span>Cheers,<br /><em>ALEXA</em></span>
                    <img src="/assets/signaturePlaceholderDARK.png" alt="signature" />
                </div>

            </p>
            <br></br>
            <hr></hr>
            <div className="action-bar-flat">
                <a href="mailto:alexarodriguez1273@gmail.com"  className="action-btn-flat" title="Digital Download"> <b>ALEXARODRIGUEZ1273</b>@gmail.com </a>
                <a href="mailto:alexamrr@berkeley.edu"  className="action-btn-flat"> <b>ALEXAMRR</b>@berkeley.edu</a>
                <a href={bonbonQ} className="action-btn-flat"> <b> HEY GOOGLE, </b>WHO ILLUSTRATED "BONBON" AND THE UNITED WOMEN AT UC BERKELEY?</a>
            </div>

             <div className="pdfViewport" style={{ pointerEvents: 'none' }}>
        <Document file="/assets/ALEXA-RODRIGUEZ-RESUME.pdf">
          <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
      </div>
        </section>
    );
}

function SectionMeetAlexa() {
    return (
        <section className="content-section">
            <h2 className="section-heading">MEET ALEXA</h2>
            <p className="intro-card">
        Hi! My name is <b>Alexa</b> (Yes, like Amazon). 
<br></br> <br></br>
I’ll keep it brief for now– <b>I like to be creative however I can, I like beautiful digital experiences, and I like creatively coding those experiences.</b> 
<br></br>I’ve always been into art as a hobby, and I’ve been exploring the tech industry since late middle school. 
<br></br><br></br>
I love long Figma sessions, getting pencil on paper (or stylus on screen), and the satisfaction of pushing my code to live. I’d say my <b>best trait</b> is always going all out on everything I do, appreciating opportunities to the max. My <b>worst trait</b> is working on work stuff outside work hours (especially if it’s Figma). 

My other hobbies include <b>drawing, piano, billiards, playing with my dogs, and Minecraft</b>. I’d throw Figma in there too.
</p>

<div className = "section-subheading">A peek into my life :{')'}</div>
<div className="gallery-wall">
  <div className="gallery-wall-item">
     <a href="/assets/bonbon/book-sather-tower.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/book-sather-tower.jpg" alt="description" /> </a>
    <p className="gallery-wall-caption">Printed copy of "Bonbon!"</p>
  </div> 
  <div className="gallery-wall-item">
     <a href="/assets/myGallery/pearl-BMO.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/myGallery/pearl-BMO.jpg" alt="description" /> </a>
    <p className="gallery-wall-caption">Pearl + BMO.</p>
  </div>
  <div className="gallery-wall-item">
     <a href="/assets/myGallery/servicenow-group.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/myGallery/servicenow-group.jpg" alt="description" /> </a>
    <p className="gallery-wall-caption">Group photo at ServiceNow's Discover Summit 2024.</p>
  </div> 
  <div className="gallery-wall-item">
     <a href="/assets/myGallery/sather-tower-astronomy.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/myGallery/sather-tower-astronomy.jpg" alt="description" /> </a>
    <p className="gallery-wall-caption">Studying Comet Tsuchinshan-ATLAS (C/2023 A3) at Campbell Hall</p>
  </div>
  <div className="gallery-wall-item">
     <a href="/assets/myGallery/moon-upclose.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/myGallery/moon-upclose.jpg" alt="description" /> </a>
    <p className="gallery-wall-caption">The moon, taken through the Richard Treffers Telescope</p>
  </div> 
  <div className="gallery-wall-item">
     <a href="/assets/myGallery/oakland-tribune-window.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/myGallery/oakland-tribune-window.jpg" alt="description" /> </a>
    <p className="gallery-wall-caption">View of the Oakland Tribune from the Hortus AI office.</p>
  </div> 
   <div className="gallery-wall-item">
     <a href="/assets/myGallery/animal-ark-wings.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/myGallery/animal-ark-wings.jpg" alt="description" /> </a>
    <p className="gallery-wall-caption">Visiting the critters at Animal Ark wildlife sanctuary in Reno, Nevada.</p>
  </div> 
  <div className="gallery-wall-item">
     <a href="/assets/myGallery/guitar-paint.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/myGallery/guitar-paint.jpg" alt="description" /> </a>
    <p className="gallery-wall-caption">Painting a guitar for a gift.</p>
  </div> 
  
  <div className="gallery-wall-item">
     <a href="/assets/myGallery/another-world-aquarium.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/myGallery/another-world-aquarium.jpg" alt="description" /> </a>
    <p className="gallery-wall-caption">The sea is as close as we come to another world @ the Monterrey Bay Aquarium.</p>
  </div> 
  <div className="gallery-wall-item">
     <a href="/assets/myGallery/super-mario-gazebo.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/myGallery/super-mario-gazebo.jpg" alt="description" /> </a>
    <p className="gallery-wall-caption">Celebrating my little brother's birthday at Super Nintendo World.</p>
  </div> 
    
  
  </div>
        </section>
    );
}

function SectionEducation() {
    return (
        <section className="content-section">
            <h2 className="section-heading">EDUCATION & CERTIFICATES</h2>
            <p className="content-body">
        This area is under construction! Check back in a day or two, or reach out! </p>
        </section>
    );
}

function SectionSkills() {
    return (
        <section className="content-section">
            <h2 className="section-heading">SKILLS & TOOLS</h2>
            <hr></hr>

            <div className = "content-container">
            <p className="intro-card"> Here you will find a list of my <b>skills and tools</b> with which I'm experienced. This includes <b>programming languages, design tools, and other software</b> that I use regularly in my work. Browse around to see what I can do!</p>
        
        <div className = "cardGrid">
            <div className = "singleCard"> <img src="/assets/logos/python-logo.png" alt="Python" /> <h4>Python</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/react-logo.png" alt="React" /> <h4>React.js</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/html-logo.png" alt="HTML" /> <h4>HTML/CSS</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/javascript-logo.png" alt="Javascript" /> <h4>Javascript</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/sql-logo.jpg" alt="SQL" /> <h4>SQL</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/figma-logo.png" alt="Figma" /> <h4>Figma</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/github-logo.png" alt="Github" /> <h4>Github</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/jupyter-logo.png" alt="Jupyter" /> <h4>Jupyter</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/indesign-logo.png" alt="Adobe InDesign" /> <h4>Adobe InDesign</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/illustrator-logo.png" alt="Adobe Illustrator" /> <h4>Adobe Illustrator</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/jira-logo.png" alt="Atlassian Jira" /> <h4>Atlassian Jira</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/miro-logo.png" alt="Miro" /> <h4>Miro</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/blender3D-logo.png" alt="Blender 3D" /> <h4>Blender 3D</h4> </div>
            <div className = "singleCard"> <img src="/assets/logos/medibang-logo.jpg" alt="Medibang" /> <h4>Medibang</h4> </div>
            
        </div> </div>
        </section>
    );
}

function SectionAchievements() {
    return (
        <section className="content-section">
            <h2 className="section-heading">ACHIEVEMENTS & AWARDS</h2>
            <p className="intro-card">
        Under construction! </p>
            <div className = "awards">
            <div className = "singleCard"> <h4>Kapor & Kapor Scholarship</h4> </div>
            <div className = "singleCard"> <h4>Ray Miles Scholarship</h4> </div>
            <div className = "singleCard"> <h4>Northern California Laborers Scholarship</h4> </div>
            <div className = "singleCard"> <h4>Highschool Salutatorian (2/70)</h4> </div>
            <div className = "singleCard"> <h4>BACSAC Girl’s Volleyball Division B 2019-2020 Champions</h4> </div>
            <div className = "singleCard"> <h4>SEED Scholar</h4> </div>
            <div className = "singleCard"> <h4>boost@BerkeleyHaas Alumna</h4> </div>
            <div className = "singleCard"> <h4>SMASH Academy Alumna</h4> </div>
            <div className = "singleCard"> <h4>Code Nation Alumna</h4> </div>
            
        </div>
        </section>
    );
}

function SectionContact() {
    return (
        <section className="content-section">
            <h2 className="section-heading">CONTACT ME</h2>
            <p className="content-body">
        This area is under construction! Check out the icons on the top right corner for contact information or send me an email to alexarodriguez1273@gmail.com. </p>
        </section>
    );
}