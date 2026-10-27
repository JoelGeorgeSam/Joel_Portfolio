import { motion } from "framer-motion";

const experiences = [
  {
    company: "C-CORE",
    location: "St. John's, NL",
    role: "AI/ML Research Intern",
    duration: "Aug 2026 – Present",
    summary:
      "Contributing to applied AI research for maritime intelligence by helping develop reliable machine-learning workflows across satellite, AIS, and RF data.",
  },
  {
    company: "DeepSense",
    location: "Halifax, NS",
    role: "Machine Learning Engineer",
    duration: "Jan 2026 – Present",
    summary:
      "Worked on computer-vision and geospatial machine-learning systems that support automated coastal monitoring and shoreline analysis.",
  },
  {
    company: "Memorial University of Newfoundland",
    location: "St. John's, NL",
    role: "Teaching Assistant",
    duration: "Sep 2025 – Present",
    summary:
      "Help students build confidence in programming, object-oriented design, computing systems, and practical debugging.",
  },
  {
    company: "Lakecrest Independent School",
    location: "St. John's, NL",
    role: "IT Administrator",
    duration: "Jun 2025 – Aug 2026",
    summary:
      "Supported the school's digital operations through web and app work, day-to-day technology support, and student mentoring.",
  },
  {
    company: "Kaar Tech",
    location: "Salem, TN",
    role: "Student Software Developer",
    duration: "Jan 2023 – Jul 2024",
    summary:
      "Built data-driven software experiences that combined forecasting, structured data workflows, and approachable user interfaces.",
  },
  {
    company: "Vee Technologies",
    location: "Salem, TN",
    role: "Robotic Process Automation Engineer",
    duration: "Feb 2023 – May 2023",
    summary:
      "Explored robotic process automation by building bots that simplified repetitive operational tasks.",
  },
];

function Experience() {
  return (
    <motion.main
      className="page experience"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.6 }}
    >
      <header className="experience-header">
        <p className="experience-eyebrow">Career journey</p>
        <h1>Experience</h1>
        <p className="experience-intro">
          A quick look at the teams and environments where I have built,
          learned, and contributed.
        </p>
      </header>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <motion.article
            className="experience-card"
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <div className="experience-card-topline">
              <p className="duration">{experience.duration}</p>
              <span className="experience-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h2>{experience.company}</h2>
            <p className="experience-location">{experience.location}</p>
            <p className="role">{experience.role}</p>
            <p className="experience-summary">{experience.summary}</p>
          </motion.article>
        ))}
      </div>
    </motion.main>
  );
}

export default Experience;
