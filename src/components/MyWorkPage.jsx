import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";


const TABS = ["Work Experience", "Academic Projects"];

const XP_PROJECTS = [
  "Hortus AI",
  "Bonbon! And the United Women",
  "Xolanthia's Game",
  "Freelance Work",
];

const ACADEMIC_PROJECTS = [
  "Solar Cycles Analysis",
  "Ants Vs. SomeBees",
  "Hayward Fault Report",
  "Indigenous Data Sovereignty",
];

export default function MyWorkPage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [activeXP, setActiveXP] = useState(XP_PROJECTS[0]);
  const [activeAcademic, setActiveAcademic] = useState(ACADEMIC_PROJECTS[0]);
  const navigate = useNavigate();

  return (
    <div className="home-page">
      
      <Navbar navigate={navigate} activePage="my-work" />
<section className="top-section">
      
      <div className="content-section">
        <h2 className="section-heading">Overview</h2>
          Welcome to My Work!<br /><br />
          Here you will find all information regarding professional and relevant projects I've worked on.
          I've included links to relevant files and sources, along with some picture reels for your viewing pleasure.
          Don't hesitate to reach out about any questions or feedback — I appreciate it!
      
      </div>
    </section>
      {/* ── Horizontal Tab Row ── */}
      <div className="tab-bar">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="tab-content">

        {activeTab === "Work Experience" && (
          <div className="project-layout">
            <aside className="project-sidebar">
              {XP_PROJECTS.map((p) => (
                <button
                  key={p}
                  className={`project-sidebar-btn ${activeXP === p ? "active" : ""}`}
                  onClick={() => setActiveXP(p)}
                >
                  {p}
                </button>
              ))}
            </aside>
            <main className="project-main">
              {activeXP === "Hortus AI"                    && <ProjectHortus />}
              {activeXP === "Bonbon! And the United Women" && <ProjectBonbon />}
              {activeXP === "Xolanthia's Game"             && <ProjectXolanthia />}
              {activeXP === "Freelance Work"               && <ProjectFreelance />}
            </main>
          </div>
        )}

        {activeTab === "Academic Projects" && (
          <div className="project-layout">
            <aside className="project-sidebar">
              {ACADEMIC_PROJECTS.map((p) => (
                <button
                  key={p}
                  className={`project-sidebar-btn ${activeAcademic === p ? "active" : ""}`}
                  onClick={() => setActiveAcademic(p)}
                >
                  {p}
                </button>
              ))}
            </aside>
            <main className="project-main">
              {activeAcademic === "Solar Cycles Analysis"      && <ProjectSolar />}
              {activeAcademic === "Ants Vs. SomeBees"          && <ProjectAnts />}
              {activeAcademic === "Hayward Fault Report"        && <ProjectHayward />}
              {activeAcademic === "Indigenous Data Sovereignty" && <ProjectIndigenous />}
            </main>
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   REUSABLE PROJECT CARD
   Shows: heading · subheading · description · [Process toggle] · role/toolkit/highlights · action bar · gallery
══════════════════════════════════════════════ */
function ProjectCard({ title, subtitle, description, process, role, toolkit, highlights, actions, gallery }) {
  const [showProcess, setShowProcess] = useState(false);

  return (
    <div className="content-container">
      <h4 className="content-heading">{title}</h4>
      <p className="content-subheading">{subtitle}</p>

      <div className="content-body">
        <div className="content-summary">
          <p><span className="darkblue">Description: </span>{description}</p>
        </div>

        {/* ── Process Toggle (green section from sketch) ── */}
        {process && (
          <div className="process-section">
            <button
              className={`process-toggle ${showProcess ? "open" : ""}`}
              onClick={() => setShowProcess(!showProcess)}
            >
              <span className="process-toggle-label">▶ PROCESS</span>
              <span className="process-toggle-hint">{showProcess ? "collapse" : "see my thought process"}</span>
            </button>
            {showProcess && (
              <div className="process-body">
                {process}
              </div>
            )}
          </div>
        )}

        <div className="content-detail-Container">
          <div className="content-detail">
            <h3>My Role:</h3>
            {role.map((r, i) => <li key={i}>{r}</li>)}
          </div>
          <div className="content-detail">
            <h3>Toolkit:</h3>
            {toolkit.map((t, i) => <li key={i}>{t}</li>)}
          </div>
          <div className="content-detail-highlights">
            <h3>Highlights:</h3>
            {highlights.map((h, i) => <li key={i}>{h}</li>)}
          </div>
        </div>
      </div>

      {actions && (
        <div className="action-bar-flat">
          {actions.map((a, i) => (
            <a key={i} href={a.href} target="_blank" rel="noreferrer"
               className={a.accent ? "action-btn-flat-accent" : "action-btn-flat"}
               download={a.download || undefined}>
              {a.label}
            </a>
          ))}
        </div>
      )}

      {gallery && gallery.length > 0 && (
        <div className="gallery">
          {gallery.map((g, i) => (
            <div className="gallery-item" key={i}>
              <a href={g.src} target="_blank" rel="noreferrer">
                <img src={g.src} alt={g.caption} />
              </a>
              <p className="gallery-caption">{g.caption}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


 /*  WORK EXPERIENCE — individual project pages
 */
function ProjectHortus() {
  return (
    <section className="content-section">
      <ProjectCard
        title="UX/UI Intern @ Hortus AI"
        subtitle="Hybrid | Oakland, CA | Jan. 2026 - May. 2026"
        description="This internship was a fantastic opportunity to gain hands-on experience in the UX/UI design process, and to contribute to the development of an innovative AI product. I collaborated closely with the product team to create user-centered designs that enhanced the overall user experience. My responsibilities included conducting user research, creating wireframes and prototypes, and iterating on designs based on user feedback."
        process={
          <div>
            <p>My design process at Hortus followed a double-diamond approach: <strong>Discover → Define → Develop → Deliver.</strong></p>
            <ul style={{marginTop:'0.5rem', paddingLeft:'1.2rem'}}>
              <li><strong>Discover:</strong> Stakeholder interviews, competitive analysis of existing AgriTech platforms, user research with farmers and vendors.</li>
              <li><strong>Define:</strong> Synthesized findings into personas and pain-point matrices; identified that onboarding friction was the #1 drop-off point.</li>
              <li><strong>Develop:</strong> Low-fi wireframes in Figma → iterated with 3 rounds of internal feedback. Introduced the 'leaf' motif as a cohesive visual language.</li>
              <li><strong>Deliver:</strong> Handed off annotated Figma specs to engineering; implemented dark mode directly in React/CSS.</li>
            </ul>
            <div className="gallery" style={{marginTop:'1rem'}}>
              <div className="gallery-item">
                <a href="/assets/hortus/hortus-old-landing.png" target="_blank" rel="noreferrer">
                  <img src="/assets/hortus/hortus-old-landing.png" alt="Old landing page" />
                </a>
                <p className="gallery-caption">Before: old Hortus landing page</p>
              </div>
              <div className="gallery-item">
                <a href="/assets/hortus/hortus-landing-1.0.png" target="_blank" rel="noreferrer">
                  <img src="/assets/hortus/hortus-landing-1.0.png" alt="Redesigned landing" />
                </a>
                <p className="gallery-caption">After: redesigned v1.0</p>
              </div>
              <div className="gallery-item">
                <a href="/assets/hortus/hortus-vendor-newsletter.png" target="_blank" rel="noreferrer">
                  <img src="/assets/hortus/hortus-vendor-newsletter.png" alt="Vendor newsletter" />
                </a>
                <p className="gallery-caption">Vendor newsletter design</p>
              </div>
            </div>
          </div>
        }
        role={["User Experience and User Interface", "Front-end Development", "Product Design", "User Researcher"]}
        toolkit={["Python", "React.js", "Figma", "Jira", "Github Workflows", "Scrum Method"]}
        highlights={[
          "Introduced 'leaf' formatting motif adopted across entire product",
          "Created custom 'Tree of Life' + mandala design using SVG Paths",
          "Led dark mode development",
        ]}
        actions={[
          { href: "https://trellis.hortus.ai/", label: <><b>Visit</b> Hortus Trellis AI</> },
          { href: "https://www.newamerica.org/insights/a-sustainable-path-for-ai-development/", label: <><b>NEW AMERICA:</b> A Sustainable Path for AI Development</>, accent: true },
        ]}
        gallery={[
          { src: "/assets/hortus/hortus-landing-1.0.png", caption: "Hortus AI Landing Page v1.0 | Redesigned the landing page with Tree of Life imagery." },
          { src: "/assets/comingSoon.png", caption: "Coming Soon!" },
        ]}
      />

    </section>
  );
}

function ProjectBonbon() {
  return (
    <section className="content-section">
      <ProjectCard
        title="Bonbon! And the United Women"
        subtitle="Children's Book Project for UC Berkeley's Chicano 50 | Fall 2023"
        description={`During the Fall of 2023, I had the pleasure of taking CHICANO 50 - Introduction to Chicano Studies. Our final project was an effort to combat the banning of books in K-12 education. We collaborated in small groups to produce short stories based on a specific event or female historical figure. Our project was based on the women mutualistas of the 1930s– networks of women in Mexican-American barrios that created an underlying safety net for their communities during the Great Depression.`}
        process={
          <div>
            <p>This was a <strong>72-hour sprint</strong> from concept to printed copy. Here's how I approached it:</p>
            <ul style={{marginTop:'0.5rem', paddingLeft:'1.2rem'}}>
              <li><strong>Research:</strong> Dove into primary sources on Mexican mutualistas and the Repatriation Act to make the story historically grounded.</li>
              <li><strong>Storyboarding:</strong> Pencil thumbnails for all 33 pages before touching Procreate — mapped pacing, spread layouts, and key emotional beats.</li>
              <li><strong>Character Design:</strong> Sketched Bonbon through multiple iterations until the chihuahua's proportions worked at both small (spot illo) and large (full-spread) scales.</li>
              <li><strong>Production:</strong> Illustrated in Procreate, laid out in Adobe InDesign with bilingual (EN/ES) text. Managed print bleed and color profiles for Eastwind Books.</li>
            </ul>
            <div className="gallery" style={{marginTop:'1rem'}}>
              <div className="gallery-item">
                <a href="/assets/bonbon/bonbon-Character-Sketching.png" target="_blank" rel="noreferrer">
                  <img src="/assets/bonbon/bonbon-Character-Sketching.png" alt="Character sketches" />
                </a>
                <p className="gallery-caption">Character design sketches</p>
              </div>
              <div className="gallery-item">
                <a href="/assets/bonbon/bonbon-p1-sketch.png" target="_blank" rel="noreferrer">
                  <img src="/assets/bonbon/bonbon-p1-sketch.png" alt="Page 1 sketch" />
                </a>
                <p className="gallery-caption">Opening page sketch</p>
              </div>
              <div className="gallery-item">
                <a href="/assets/bonbon/two-page-spread-sketch.jpg" target="_blank" rel="noreferrer">
                  <img src="/assets/bonbon/two-page-spread-sketch.jpg" alt="Spread sketch" />
                </a>
                <p className="gallery-caption">Full-spread sketch in production</p>
              </div>
            </div>
          </div>
        }
        role={["Lead Illustrator and Designer", "Storyboarding", "Product Branding", "Wireframing and Prototyping"]}
        toolkit={["Adobe Illustrator", "Adobe InDesign", "Procreate"]}
        highlights={[
          "33 Pages with over 20 illustrations",
          "Bilingual (Spanish/English)",
          '"Best Illustration" and "Best Overall" in cohort',
          "Locally published with Eastwind Books of Berkeley",
          "Sub-72 hour turnaround",
        ]}
        actions={[
          { href: "/assets/bonbon/bonbonBookFINAL.pdf", label: <><b>Download</b> "Bonbon! And the United Women"</>, download: true },
          { href: "/assets/bonbon/bonbonBookFINAL.pdf", label: <><b>Open</b> PDF in your browser</> },
          { href: "https://www.dailycal.org/news/campus/student-life/uc-berkeley-students-create-children-s-books-on-chicano-history-to-combat-k-12-book/article_5b997488-c3e6-11ee-9048-1f2dc643988e.html", label: <><b>THE DAILY CAL:</b> UC Berkeley students create children's books on Chicano history</>, accent: true },
          { href: "https://news.berkeley.edu/2024/01/29/uc-berkeley-students-combat-k-12-book-bans-by-creating-their-own-childrens-books/", label: <><b>UC BERKELEY NEWS:</b> UC Berkeley students combat K-12 book bans</>, accent: true },
        ]}
        gallery={[
          { src: "/assets/bonbon/book-sather-tower.jpg", caption: "Printed copy in front of Sather Tower" },
          { src: "/assets/bonbon/books-ethnic-studies-lib.jpg", caption: "Two copies in the UC Berkeley Ethnic Studies Library" },
          { src: "/assets/bonbon/luigi-pages-photograph.jpg", caption: "Book expo setup + Luigi (my muse!)" },
          { src: "/assets/bonbon/full-spread-illustration-photograph.jpg", caption: "Full-spread illustration in physical copy" },
        ]}
      />

    </section>
  );
}

function ProjectXolanthia() {
  return (
    <section className="content-section">
      <ProjectCard
        title="Xolanthia's Game"
        subtitle="BUILD Entrepreneurship Program | Oakland, CA | Aug. 2018 - May 2019"
        description="In 2018, my high school offered BUILD as an elective for 9th graders. It focused on helping us develop a 'CEO-of-your-own-life' mindset, going through the entire process of developing, manufacturing, and selling our very own products through our very own companies. My team and I developed a fantasy card game aimed at the middle-ground between UNO and Magic: The Gathering– vibrant designs, fantastical world-building, medium-length games, and lower barrier of entry."
        process={
          <div>
            <p>Xolanthia's Game was a full product lifecycle from <strong>idea → pitch → manufacturing → sales</strong>.</p>
            <ul style={{marginTop:'0.5rem', paddingLeft:'1.2rem'}}>
              <li><strong>Concept:</strong> Market research on existing card games to find the gap between casual (UNO) and complex (MTG). Defined our target: 2-5 players, 30-45 min sessions.</li>
              <li><strong>Brand Identity:</strong> Settled on a galaxy + orange crystal motif to evoke 'fantasy sci-fi'. Created the 'Ember Wolf Studios' brand and logo.</li>
              <li><strong>Card Design:</strong> 40+ card illustrations in Medibang Paint and Adobe Illustrator. Built a consistent visual system across characters, items, and event cards.</li>
              <li><strong>Manufacturing:</strong> Sourced card stock and box materials. Managed vendor communication and production timeline to hit the regional pitch deadline.</li>
              <li><strong>Sales & Pitch:</strong> Presented to judges at BUILD Regional — placed 1st. Sold 20+ units at open floor event.</li>
            </ul>
            <div className="gallery" style={{marginTop:'1rem'}}>
              <div className="gallery-item">
                <a href="/assets/xolanthias/circa-sketch.jpg" target="_blank" rel="noreferrer">
                  <img src="/assets/xolanthias/circa-sketch.jpg" alt="Sketch" />
                </a>
                <p className="gallery-caption">Early concept sketches</p>
              </div>
              <div className="gallery-item">
                <a href="/assets/xolanthias/XG-product-evolution.png" target="_blank" rel="noreferrer">
                  <img src="/assets/xolanthias/XG-product-evolution.png" alt="Product evolution" />
                </a>
                <p className="gallery-caption">Product evolution</p>
              </div>
              <div className="gallery-item">
                <a href="/assets/xolanthias/card-manufacturing.jpg" target="_blank" rel="noreferrer">
                  <img src="/assets/xolanthias/card-manufacturing.jpg" alt="Manufacturing" />
                </a>
                <p className="gallery-caption">Cards in production</p>
              </div>
            </div>
          </div>
        }
        role={["Chief Executive Officer", "Head of Design", "Head of Operations"]}
        toolkit={["Adobe Illustrator", "User Research", "Multimedia Assets (Digital, Print, Social Media)", "Medibang Paint"]}
        highlights={[
          "Placed first at BUILD regional product pitch competition",
          "Over 20 units sold",
          "Over 40 custom card illustrations and designs",
          "Box set includes dice, instructions, and playing chips",
          "Made for 2 - 5 players",
        ]}
        actions={[
          { href: "https://build.org/", label: <><b>Visit</b> BUILD.org</> },
          { href: "#", label: <><b>Get your own Xolanthia's Game set: </b>Click here to order</>, accent: true },
        ]}
        gallery={[
          { src: "/assets/xolanthias/Box-Front.png", caption: "Front of the Xolanthia's Game box - Final Version" },
          { src: "/assets/xolanthias/XG-display.jpg", caption: "Display at the BUILD Regional open floor" },
          { src: "/assets/xolanthias/cards-laid-out.jpg", caption: "Cards in production for first sales event" },
          { src: "/assets/xolanthias/XG-rules1.jpg", caption: "Rules Page 1" },
          { src: "/assets/xolanthias/XG-rules2.jpg", caption: "Rules Page 2" },
        ]}
      />

    </section>
  );
}

function ProjectFreelance() {
  return (
    <section className="content-section">
      <ProjectCard
        title="Freelance Work"
        subtitle="Independent Contractor | Bay Area, CA"
        description="Deaf Women's Basketball Jersey Design · Aspire GSP Uniform Design"
        role={["Coming Soon..."]}
        toolkit={["Coming Soon..."]}
        highlights={["Coming Soon..."]}
        actions={[
          { href: "#", label: <><b>Visit</b>...</> },
        ]}
        gallery={[
          { src: "/assets/freelance/cali-panthers-front.jpg", caption: "California Panthers jersey — front" },
          { src: "/assets/freelance/cali-panthers-back.jpg", caption: "California Panthers jersey — back" },
          { src: "/assets/freelance/gsp-shirt-portrait.jpg", caption: "Aspire GSP uniform" },
        ]}
      />
    </section>
  );
}

/* ══════════════════════════════════════════════
   ACADEMIC PROJECTS — individual project pages
══════════════════════════════════════════════ */
function ProjectSolar() {
  return (
    <section className="content-section">
      <ProjectCard
        title="Analysis of Solar Cycles and Space Weather: NOAA and GFZ Potsdam"
        subtitle="EPS 88: Data Science for Earth Sciences | Berkeley, CA | Fall 2024"
        description="Coming soon! Check back in a day or two, or reach out!"
        role={["Coming Soon..."]}
        toolkit={["Coming Soon..."]}
        highlights={["Coming Soon..."]}
        gallery={[
          { src: "/assets/eps88-solar-cycle/kp-index-over-time.png", caption: "Kp Index over time" },
          { src: "/assets/eps88-solar-cycle/num_sunspots-over-time.png", caption: "Sunspot count over time" },
        ]}
      />
    </section>
  );
}

function ProjectAnts() {
  return (
    <section className="content-section">
      <ProjectCard
        title="Ants Vs. SomeBees: Tower-Defense Simulation"
        subtitle="CS61A: Structure & Interpretation of Computer Programs | Berkeley, CA | Fall 2025"
        description="Coming soon! Check back in a day or two, or reach out!"
        role={["Coming Soon..."]}
        toolkit={["Coming Soon..."]}
        highlights={["Coming Soon..."]}
        gallery={[
          { src: "/assets/c88/ants-vs-somebees.png", caption: "Ants vs. SomeBees" },
        ]}
      />
    </section>
  );
}

function ProjectHayward() {
  return (
    <section className="content-section">
      <ProjectCard
        title="The New Bear: Hayward Fault Report"
        subtitle="EPS 20: Earthquakes in your backyard | Berkeley, CA | Fall 2025"
        description="Coming soon! Check back in a day or two, or reach out!"
        role={["Coming Soon..."]}
        toolkit={["Coming Soon..."]}
        highlights={["Coming Soon..."]}
      />
    </section>
  );
}

function ProjectIndigenous() {
  return (
    <section className="content-section">
      <ProjectCard
        title="Indigenous Native American Data Sovereignty Website"
        subtitle="NATAMST R1B: Native American Studies Methods and Research | Berkeley, CA | Spring 2024"
        description="Coming soon! Check back in a day or two, or reach out!"
        role={["Coming Soon..."]}
        toolkit={["Coming Soon..."]}
        highlights={["Coming Soon..."]}
      />
    </section>
  );
}
