import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";
import profilePic from "./assets/profile-pic.png";
import { education, experience, projects, skillGroups } from "./data/portfolio";
import "./styles.css";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
];

const legacyRoutes = {
  "/projects": "work",
  "/experience": "experience",
  "/about": "about",
  "/contact": "contact",
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.65, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ index, eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <span>{index}</span>
        <p>{eyebrow}</p>
      </div>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === "coast") {
    return (
      <div className="project-visual visual-coast" aria-hidden="true">
        <span className="coast-grid" />
        <span className="coast-line coast-line-one" />
        <span className="coast-line coast-line-two" />
        <span className="map-pin pin-one" />
        <span className="map-pin pin-two" />
        <span className="visual-label">S2 / BOUNDARY_04</span>
      </div>
    );
  }

  if (type === "planner") {
    return (
      <div className="project-visual visual-planner" aria-hidden="true">
        <div className="planner-window">
          <span className="planner-topline" />
          <span className="planner-row wide" />
          <span className="planner-row" />
          <span className="planner-row short" />
          <span className="planner-command">/ shift deep work to Friday</span>
        </div>
      </div>
    );
  }

  if (type === "vision") {
    return (
      <div className="project-visual visual-vision" aria-hidden="true">
        <span className="scan-ring ring-one" />
        <span className="scan-ring ring-two" />
        <span className="scan-focus" />
        <span className="scan-copy">MULTIMODAL / 94</span>
      </div>
    );
  }

  return (
    <div className="project-visual visual-network" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5].map((node) => (
        <span key={node} className={`network-node node-${node}`} />
      ))}
      <span className="network-line line-a" />
      <span className="network-line line-b" />
      <span className="network-line line-c" />
      <span className="network-copy">PCAP / SIGNAL TRACE</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("joel-portfolio-theme");
    return saved === "light" ? "light" : "dark";
  });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("joel-portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sectionId = legacyRoutes[window.location.pathname];
    if (!sectionId) return;

    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "auto" });
      window.history.replaceState(null, "", `/#${sectionId}`);
    });
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Joel George Sam, home" onClick={closeMenu}>
          <span className="brand-mark">JG</span>
          <span className="brand-copy">
            <strong>Joel George Sam</strong>
            <small>ML + Software Engineer</small>
          </span>
        </a>

        <nav
          id="primary-navigation"
          className={`primary-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let’s talk <FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-background" aria-hidden="true">
            <span className="hero-orb orb-one" />
            <span className="hero-orb orb-two" />
            <span className="hero-grid" />
          </div>

          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="availability-pill">
              <span />
              AI/ML Research Intern at C-CORE
            </div>
            <p className="hero-kicker">MACHINE LEARNING · COMPUTER VISION · SOFTWARE ENGINEERING</p>
            <h1 id="hero-title">
              Machine learning systems,
              <span>built for the real world.</span>
            </h1>
            <p className="hero-intro">
              I’m Joel, an ML and software engineer building dependable AI pipelines and
              useful products—from satellite-image analysis to LLM-powered applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <FiArrowDown aria-hidden="true" />
              </a>
              <a
                className="button button-secondary"
                href="/Joel-George-Sam-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume <FiDownload aria-hidden="true" />
              </a>
            </div>
            <div className="hero-socials" aria-label="Professional profiles">
              <a href="https://github.com/joelgeorgesam" target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/joel-george-sam"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin aria-hidden="true" /> LinkedIn
              </a>
              <a href="mailto:joelgsam29@gmail.com">
                <FiMail aria-hidden="true" /> Email
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-portrait-wrap"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="portrait-frame">
              <span className="portrait-ring portrait-ring-one" aria-hidden="true" />
              <span className="portrait-ring portrait-ring-two" aria-hidden="true" />
              <img src={profilePic} alt="Joel George Sam" />
              <div className="portrait-caption">
                <span>Based in</span>
                <strong>St. John’s, NL</strong>
              </div>
              <div className="portrait-signal" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </motion.div>

          <div className="proof-strip" aria-label="Selected career facts">
            <div>
              <strong>14%</strong>
              <span>Detection accuracy improvement</span>
            </div>
            <div>
              <strong>4.0</strong>
              <span>Graduate GPA at Memorial</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Domains: ML, data, software</span>
            </div>
          </div>
        </section>

        <section className="section-shell section-block" id="work" aria-labelledby="work-title">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="Selected work"
              title="Technical depth, translated into useful outcomes."
              copy="A focused selection of production ML, applied research, and product engineering work."
            />
          </Reveal>

          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                className={`project-card ${project.featured ? "project-card-featured" : ""}`}
                delay={index * 0.05}
              >
                <ProjectVisual type={project.visual} />
                <div className="project-body">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.impact && <p className="project-impact">{project.impact}</p>}
                  <div className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.href && (
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                      {project.linkLabel} <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="section-shell section-block experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="Experience"
              title="Engineering at the intersection of research and delivery."
              copy="Hands-on work across maritime AI, geospatial computer vision, full-stack systems, and technical leadership."
            />
          </Reveal>

          <div className="timeline">
            {experience.map((item, index) => (
              <Reveal className="timeline-item" key={`${item.company}-${item.role}`} delay={index * 0.04}>
                <div className="timeline-rail" aria-hidden="true">
                  <span className={item.current ? "is-current" : ""} />
                </div>
                <div className="timeline-meta">
                  <p>{item.period}</p>
                  <span>{item.location}</span>
                </div>
                <article className="timeline-card">
                  <div className="timeline-title">
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                    </div>
                    {item.current && <span className="current-badge">Current</span>}
                  </div>
                  <p className="timeline-summary">{item.summary}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-shell section-block" id="capabilities" aria-labelledby="capabilities-title">
          <Reveal>
            <SectionHeading
              index="03"
              eyebrow="Capabilities"
              title="A complete path from data to deployed software."
              copy="The stack is secondary to the outcome. These are the tools I use to build, evaluate, and ship."
            />
          </Reveal>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <Reveal className="skill-card" key={group.title} delay={index * 0.06}>
                <div className="skill-card-top">
                  <span>{group.index}</span>
                  <h3>{group.title}</h3>
                </div>
                <p>{group.copy}</p>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-shell section-block about-section" id="about" aria-labelledby="about-title">
          <Reveal className="about-copy">
            <p className="section-index">04 / About</p>
            <h2 id="about-title">I like hard problems with a visible real-world edge.</h2>
            <p>
              My work sits where machine learning, software engineering, and practical
              problem-solving meet. I’m especially drawn to systems that must handle messy data,
              explain failure, and remain useful outside a demo environment.
            </p>
            <p>
              I’m completing an MSc in Computer Science at Memorial University of Newfoundland
              while contributing to applied AI research and production-minded ML workflows.
            </p>
            <a className="text-link" href="/Joel-George-Sam-Resume.pdf" target="_blank" rel="noreferrer">
              Read the full resume <FiArrowUpRight aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal className="education-panel" delay={0.08}>
            <div className="education-panel-label">
              <span>Education</span>
              <small>Formal foundation</small>
            </div>
            {education.map((item) => (
              <article key={item.school}>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <span>{item.detail}</span>
              </article>
            ))}
            <div className="education-note">
              <span>Research interests</span>
              <p>Applied AI · Computer vision · Production ML · Intelligent software</p>
            </div>
          </Reveal>
        </section>

        <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
          <Reveal className="contact-card">
            <div className="contact-signal" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="section-index">05 / Contact</p>
            <h2 id="contact-title">Let’s build something that matters.</h2>
            <p>
              I’m interested in Machine Learning Engineer, AI Engineer, and Software Engineer
              opportunities where strong engineering turns ambitious ideas into dependable systems.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:joelgsam29@gmail.com">
                Start a conversation <FiMail aria-hidden="true" />
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/joel-george-sam"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <a className="contact-email" href="mailto:joelgsam29@gmail.com">
              joelgsam29@gmail.com
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div>
          <span className="brand-mark">JG</span>
          <p>Joel George Sam © {new Date().getFullYear()}</p>
        </div>
        <p>ML systems. Thoughtful software. Measurable outcomes.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
