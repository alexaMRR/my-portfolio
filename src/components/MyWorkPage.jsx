import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";     

const SIDEBAR_SECTIONS = [
  "Overview",
  "Work Experience",
  "Academic Projects",
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
            {activeSection === "Overview" && <SectionOverview />}
            {activeSection === "Work Experience" && <SectionXP />}
            {activeSection === "Academic Projects" && <SectionAcademicProjects />}
        </main>

      </div>
    </div>
  );
}


function SectionOverview() {
  return (
    <section className="content-section">
      <h2 className="section-heading">Overview</h2>
      <div className = "content-container">
      <p className="intro-card">
          <p> Welcome to My Work!
            <br></br>
            Here you will find all information regarding professional and relevant projects I've worked on in the past.
            <br></br> I’ve included links to relevant files and sources, along with some picture reels for your viewing pleasure. Don’t hesitate to reach out about any questions or feedback, I appreciate it!
 </p>
        </p>
        </div>
    </section>
  );
}

function SectionXP() {
  return (
    <section className="content-section">

<div className = "content-container">
        <h2 className="section-heading">Work Experience</h2>
      </div>
        <hr></hr>
      <div className = "content-container">
        <h4 className="content-heading"> UX/UI Intern @ Hortus AI </h4>
        <p className= "content-subheading"> Hybrid | Oakland, CA | Jan. 2026 - May. 2026</p>
        <div className="content-body">
          <div className="content-summary">
          <p> 
          <div className="darkblue"> Description: </div> 
          This internship was a fantastic opportunity to gain hands-on experience in the UX/UI design process, and to contribute to the development of an innovative AI product. I collaborated closely with the product team to create user-centered designs that enhanced the overall user experience. My responsibilities included conducting user research, creating wireframes and prototypes, and iterating on designs based on user feedback. This role allowed me to apply my design skills in a real-world setting, while also learning about the unique challenges and opportunities that arise when designing for AI-driven products.
          </p>
          </div>

        <div className= "content-detail-Container">
          <div className= "content-detail">
            <h3>My Role:</h3>
            <li> User Experience and User Interface</li>
            <li> Front-end Development</li>
            <li> Product Design</li>
            <li> User Researcher</li>
          </div>
    
    <div className= "content-detail">
        <h3>Toolkit:</h3>
            <li> Python</li>
            <li> React.js</li>
            <li> Figma </li>
            <li> Jira </li>
            <li> Github Workflows </li>
            <li> Scrum Method </li>
    </div>
    
    <div className= "content-detail-highlights">
        <h3>Highlights:</h3>
        <li>Introduced ‘leaf’ formatting motif adopted across entire product</li>
        <li>Created custom 'Tree of Life' + mandala design and implemented using SVG Paths</li>
        <li>Led dark mode development</li>
    </div>
</div>

<div className="action-bar-flat">
                <a href="https://trellis.hortus.ai/" download target="_blank" rel="noreferrer" className="action-btn-flat" title="Visit Hortus Trellis AI "> <b>Visit</b> Hortus Trellis AI </a>
                <a href="https://www.newamerica.org/insights/a-sustainable-path-for-ai-development/" target="_blank"className="action-btn-flat-accent "> <b>NEW AMERICA:</b> A Sustainable Path for AI Development to Empower Communities and Serve Public Interests</a>
            </div>

<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/hortus/hortus-landing-1.0.png"  target="_blank" rel="noreferrer">
    <img src="/assets/hortus/hortus-landing-1.0.png" alt="description" /> </a>
    <p className="gallery-caption">Hortus AI Landing Page v1.0 | Redesigned the landing page, creating a tree of life image with mandala elements to tie into brand identity emphasizing the human-technology ecosystem. </p>
  </div>
  
  <div className="gallery-item">
     <a href="/assets/comingSoon.png"  target="_blank" rel="noreferrer">
    <img src="/assets/comingSoon.png" alt="description" /> </a>
    <p className="gallery-caption">Coming Soon!</p>
  </div>
</div>
        </div>
        </div>
        
      <div className = "content-container">
        <h4 className="content-heading">Bonbon! And the United Women</h4>
        <p className= "content-subheading"> Children's Book Project for UC Berkeley’s Chicano 50: Intro to Chicano Studies | Fall 2023</p>
        <div className="content-body">
          <div className="content-summary">
          <p> 
          <div className="darkblue"> Description: </div> 
          During the Fall of 2025, I had the pleasure of taking CHICANO 50 - Introduction to Chicano Studies. Our final project was an effort to combat the banning of books in K-12 education, a practice that was targeted largely at ethnic studies topics. We collaborated in small groups to produce short stories based on a specific event or female historical figure we had learned about that semester. Our project was based on the women mutualistas of the 1930s– networks of women in Mexican-American barrios that created an underlying safety net for their communities during the Great Depression.
          </p>
          </div>

        <div className= "content-detail-Container">
          <div className= "content-detail">
            <h3>My Role:</h3>
            <li> Lead Illustrator and Designer</li>
            <li> Storyboarding</li>
            <li> Product Branding</li>
            <li> Wireframing and Prototyping</li>
          </div>
    
    <div className= "content-detail">
        <h3>Toolkit:</h3>
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

<div className="action-bar-flat">
                <a href="/assets/bonbonBookFinal.pdf" download target="_blank" rel="noreferrer" className="action-btn-flat" title="Digital Download"> <b>Download</b> "Bonbon! And the United Women" </a>
                <a href="/assets/bonbonBookFinal.pdf" target="_blank" className="action-btn-flat"> <b>Open</b> PDF in your browser</a>
                <a href="https://www.dailycal.org/news/campus/student-life/uc-berkeley-students-create-children-s-books-on-chicano-history-to-combat-k-12-book/article_5b997488-c3e6-11ee-9048-1f2dc643988e.html" target="_blank" className="action-btn-flat-accent"> <b> THE DAILY CALIFORNIAN: </b> UC Berkeley students create children’s books on Chicano history to combat K-12 book bans</a>
                <a href="https://news.berkeley.edu/2024/01/29/uc-berkeley-students-combat-k-12-book-bans-by-creating-their-own-childrens-books/" target="_blank"className="action-btn-flat-accent "> <b>UC BERKELEY NEWS:</b> UC Berkeley students combat K-12 book bans by creating their own children’s books</a>
            </div>
<div className="content-summary">
    <p> <div className="darkblue">Synopsis:</div> 
<i>”Bonbon! And the United Women”</i> follows a chihuahua dog named Bonbon as he witnesses the effects of the 1930s Great Depression in his neighborhood. At this time, the Mexican-American community was being targeted through the Mexican Repatriation Act (1929 - 1936). This act would call for the deportation of Mexican and Mexican-Americans to Mexico. It tore apart families, expulsed American-born Mexicans, and drastically changed the lives of over a million people. Bonbon walks through his barrio, and witnesses Mexican women build support systems, aid each other’s families, work for an income, and fight for the survival of the Mexican-American community. 
</p></div>

<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/bonbon/book-sather-tower.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/book-sather-tower.jpg" alt="description" /> </a>
    <p className="gallery-caption">Printed copy in front of Sather Tower</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/books-ethnic-studies-lib.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/books-ethnic-studies-lib.jpg" ttarget="_blank" rel="noreferrer"alt="description" /> </a>
    <p className="gallery-caption">Two physical copies in the UC Berkeley Ethnic Studies Library</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/luigi-pages-photograph.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/luigi-pages-photograph.jpg" target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Book expo setup along with a picture of Luigi (my muse!)</p> 
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/bonbon-Character-Sketching.png"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/bonbon-Character-Sketching.png" target="_blank" rel="noreferrer" alt="description" /> </a>
    <p className="gallery-caption">Brainstorming character design and artstyle</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/bonbon-p1-sketch.png"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/bonbon-p1-sketch.png" target="_blank" rel="noreferrer" alt="description" /> </a>
    <p className="gallery-caption">Opening page sketch </p>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/full-spread-illustration-photograph.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/full-spread-illustration-photograph.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Full-spread illustration across two pages in physical copy</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/bonbon/two-page-spread-sketch.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/bonbon/two-page-spread-sketch.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Full-spread illustration sketch in production</p>
  </div>
</div>
</div>
</div>
        <div className = "content-container">
        <h4 className="content-heading"> Xolanthia's Game</h4>
        <p className= "content-subheading"> BUILD Entrepreneurship Program | Oakland, CA | Aug. 2018 - May 2019</p>
        <div className="content-body">
          <div className="content-summary">
          <p> 
          <div className="darkblue"> Description: </div> 
          In 2018, my high school offered BUILD as an elective for 9th graders. It focused on helping us develop a ‘CEO-of-your-own-life’ mindset, going through the entire process of developing, manufacturing, and selling our very own products through our very own companies. <br>
          </br>My team and I developed a fantasy card game aimed at the middle-ground between UNO and Magic! The Gathering– vibrant designs, fantastical world-building, medium-length games, and lower barrier of entry. My passion to lead and create led me to taking this opportunity to the max, and to this day it’s one of my favorite projects ever. I loved developing our brand, using galaxy backgrounds and orange crystal motifs to tie into the fantasy sci-fi world we created. I facilitated the box material manufacturing, and was in charge of developing not only our product, but our brand image ‘Ember Wolf Studios’. I sincerely hope I can revisit the project soon, as my passion didn’t end when our time with the program did.
          </p>
          </div>

        <div className= "content-detail-Container">
          <div className= "content-detail">
            <h3>My Role:</h3>
            <li>Chief Executive Officer</li>
            <li>Head of Design</li>
            <li>Head of Operations</li>
          </div>
    
    <div className= "content-detail">
        <h3>Toolkit:</h3>
            <li>Adobe Illustrator</li>
            <li>User Research </li>
            <li>Multimedia Assets (Digital, Print, Social Media)</li>
            <li> Medibang Paint </li>

    </div>
    
    <div className= "content-detail-highlights">
        <h3>Highlights:</h3>
        <li>Placed first at BUILD regional product pitch competition</li>
        <li>Over 20 units sold</li>
        <li>Over 40 custom card illustrations and designs </li>
        <li>Box set includes a dice, instructions, and playing chips</li>
        <li>Made for 2 - 5 players</li>
    </div>
</div>

<div className="action-bar-flat">
                <a href="https://build.org/" download target="_blank" rel="noreferrer" className="action-btn-flat" title="Visit BUILD.org"> <b>Visit</b> BUILD.org</a>
                <a href="link" target="_blank"className="action-btn-flat-accent "> <b>Get your own Xolanthia's Game set: </b>Click here to order</a>
            </div>

<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/xolanthias/Box-Front.png"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/Box-Front.png" alt="description" /> </a>
    <p className="gallery-caption">Front of the Xolanthia's Game box - Final Version</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/XG-display.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/XG-display.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Xolanthia's Game display at the BUILD Regional open floor.</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/XG-product-evolution.png"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/XG-product-evolution.png"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Xolanthia's Game product evolution.</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/XG-rules1.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/XG-rules1.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Xolanthia's Game rules (Page 1)</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/XG-rules2.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/XG-rules2.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Xolanthia's Game rules (Page 2)</p>
  </div>
  <div className="gallery-item">
    <a href="/assets/xolanthias/cards-laid-out.jpg"  target="_blank" rel="noreferrer">
    <img src="/assets/xolanthias/cards-laid-out.jpg"target="_blank" rel="noreferrer" alt="description" /></a>
    <p className="gallery-caption">Xolanthia's Game cards in production for first sales event.</p>
  </div>
</div>
        </div>
        </div>
        <div className = "content-container">
        <h4 className="content-heading"> Freelance Work</h4>
        <p className= "content-subheading">  Independent Contractor | Bay Area, CA </p>
        <div className="content-body">
          <div className="content-summary">
          <p> 
          <div className="darkblue"> Description: </div> 
          - Deaf Women's Basketball Jersey Design 
          - Aspire GSP Uniform Design
          </p>
          </div>

        <div className= "content-detail-Container">
          <div className= "content-detail">
            <h3>My Role:</h3>
            <li>Coming Soon...</li>
          </div>
    
    <div className= "content-detail">
        <h3>Toolkit:</h3>
            <li> Coming Soon...</li>
    </div>
    
    <div className= "content-detail-highlights">
        <h3>Highlights:</h3>
        <li>Coming Soon...</li>
    </div>
</div>

<div className="action-bar-flat">
                <a href="link" download target="_blank" rel="noreferrer" className="action-btn-flat" title="Visit..."> <b>Visit</b>... </a>
                <a href="link" target="_blank"className="action-btn-flat-accent "> <b>In the news</b>...</a>
            </div>

<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/comingSoon.png"  target="_blank" rel="noreferrer">
    <img src="/assets/comingSoon.png" alt="description" /> </a>
    <p className="gallery-caption">Coming Soon!</p>
  </div>
</div>
        </div>
        </div>
    </section>
  );
}


function SectionAcademicProjects() {
  return (
    <section className="content-section">
      <div className = "content-container">
        <h2 className="section-heading">Academic Projects</h2>
        <div className="content-body">
          <p> This section is still under construction-- please excuse the rough edges! </p>
        </div>
      </div>

        <div className = "content-container">
        <h4 className="content-heading"> Analysis of Solar Cycles and Space Weather: NOAA and GFZ Potsdam </h4>
        <p className= "content-subheading">  EPS 88: Data Science for Earth Sciences | Berkeley, CA | Fall 2024</p>
        <div className="content-body">
          <div className="content-summary">
          <p> 
          <div className="darkblue"> Description: </div> 
          Coming soon! Check back in a day or two, or reach out!
          </p>
          </div>

        <div className= "content-detail-Container">
          <div className= "content-detail">
            <h3>My Role:</h3>
            <li>Coming Soon...</li>
          </div>
    
    <div className= "content-detail">
        <h3>Toolkit:</h3>
            <li> Coming Soon...</li>
    </div>
    
    <div className= "content-detail-highlights">
        <h3>Highlights:</h3>
        <li>Coming Soon...</li>
    </div>
</div>

<div className="action-bar">
                <a href="link" download target="_blank" rel="noreferrer" className="action-btn" title="Visit..."> <b>Visit</b>... </a>
                <a href="link" target="_blank"className="action-btn-accent "> <b>In the news</b>...</a>
            </div>

<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/comingSoon.png"  target="_blank" rel="noreferrer">
    <img src="/assets/comingSoon.png" alt="description" /> </a>
    <p className="gallery-caption">Coming Soon!</p>
  </div>
</div>
        </div>
        </div>
        <div className = "content-container">
        <h4 className="content-heading"> Ants Vs. SomeBees: Tower-Defense Simulation</h4>
        <p className= "content-subheading">  CS61A: Structure & Interpretation of Computer Programs | Berkeley, CA | Fall 2025</p>
        <div className="content-body">
          <div className="content-summary">
          <p> 
          <div className="darkblue"> Description: </div> 
          Coming soon! Check back in a day or two, or reach out!
          </p>
          </div>

        <div className= "content-detail-Container">
          <div className= "content-detail">
            <h3>My Role:</h3>
            <li>Coming Soon...</li>
          </div>
    
    <div className= "content-detail">
        <h3>Toolkit:</h3>
            <li> Coming Soon...</li>
    </div>
    
    <div className= "content-detail-highlights">
        <h3>Highlights:</h3>
        <li>Coming Soon...</li>
    </div>
</div>

<div className="action-bar">
                <a href="link" download target="_blank" rel="noreferrer" className="action-btn" title="Visit..."> <b>Visit</b>... </a>
                <a href="link" target="_blank"className="action-btn-accent "> <b>In the news</b>...</a>
            </div>

<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/comingSoon.png"  target="_blank" rel="noreferrer">
    <img src="/assets/comingSoon.png" alt="description" /> </a>
    <p className="gallery-caption">Coming Soon!</p>
  </div>
</div>
        </div>
        </div>

        <div className = "content-container">
        <h4 className="content-heading"> The New Bear: Hayward Fault Report</h4>
        <p className= "content-subheading">  EPS 20: Earthquakes in your backyard | Berkeley, CA | Fall 2025</p>
        <div className="content-body">
          <div className="content-summary">
          <p> 
          <div className="darkblue"> Description: </div> 
          Coming soon! Check back in a day or two, or reach out!
          </p>
          </div>

        <div className= "content-detail-Container">
          <div className= "content-detail">
            <h3>My Role:</h3>
            <li>Coming Soon...</li>
          </div>
    
    <div className= "content-detail">
        <h3>Toolkit:</h3>
            <li> Coming Soon...</li>
    </div>
    
    <div className= "content-detail-highlights">
        <h3>Highlights:</h3>
        <li>Coming Soon...</li>
    </div>
</div>

<div className="action-bar">
                <a href="link" download target="_blank" rel="noreferrer" className="action-btn" title="Visit..."> <b>Visit</b>... </a>
                <a href="link" target="_blank"className="action-btn-accent "> <b>In the news</b>...</a>
            </div>

<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/comingSoon.png"  target="_blank" rel="noreferrer">
    <img src="/assets/comingSoon.png" alt="description" /> </a>
    <p className="gallery-caption">Coming Soon!</p>
  </div>
</div>
        </div>
        </div>

        <div className = "content-container">
        <h4 className="content-heading"> Indigenous Native American Data Sovereignty Website</h4>
        <p className= "content-subheading">  NATAMST R1B: Native American Studies Methods and Research | Berkeley, CA | Spring 2024</p>
        <div className="content-body">
          <div className="content-summary">
          <p> 
          <div className="darkblue"> Description: </div> 
          Coming soon! Check back in a day or two, or reach out!
          </p>
          </div>

        <div className= "content-detail-Container">
          <div className= "content-detail">
            <h3>My Role:</h3>
            <li>Coming Soon...</li>
          </div>
    
    <div className= "content-detail">
        <h3>Toolkit:</h3>
            <li> Coming Soon...</li>
    </div>
    
    <div className= "content-detail-highlights">
        <h3>Highlights:</h3>
        <li>Coming Soon...</li>
    </div>
</div>

<div className="action-bar">
                <a href="link" download target="_blank" rel="noreferrer" className="action-btn" title="Visit..."> <b>Visit</b>... </a>
                <a href="link" target="_blank"className="action-btn-accent "> <b>In the news</b>...</a>
            </div>

<div className="gallery">
  <div className="gallery-item">
     <a href="/assets/comingSoon.png"  target="_blank" rel="noreferrer">
    <img src="/assets/comingSoon.png" alt="description" /> </a>
    <p className="gallery-caption">Coming Soon!</p>
  </div>
</div>
        </div>
        </div>
    </section>
  );
}
