import { useState } from "react";
import { motion } from "framer-motion";

const THEME = {
  cardBg: "#1a1a2e",
  border: "#2196f3",
  text: "#f1f1f1",
  textMuted: "rgba(241,241,241,0.85)",
  chipBg: "rgba(33,150,243,0.12)",
  chipText: "#b3e5fc",
  filterBg: "#0f1525",
  filterActive: "#2196f3",
};

const categories = ["All", "Frontend", "Full Stack", "AI/ML"];

const projects = [
  {
    title: "TaskHero",
    category: "AI/ML",
    image:
      "https://images.pexels.com/photos/4476376/pexels-photo-4476376.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: [
      "AI-powered task manager.",
      "Smart prioritization and real-time updates.",
      "Customizable categories with authentication.",
    ],
  },
   {
    title: "E-Commerce Application",
    category: "Full Stack",
    image:
      "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg",
    description: [
      "Full-stack E-Commerce platform with ReactJS frontend",
      "Node.js & Express backend with RESTful APIs to manage orders, products and carts",
      "Integrated PostgreSQL for relational data storage,and implemented secure user authentication and payment processing"
    ],
  },
  {
    title: "Energy Consumption Analysis",
    category: "AI/ML",
    image:
      "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg",
    description: [
      "Power BI dashboard to visualize energy usage trends using open demand data.",
      "Integrated Python forecasting model (Prophet) to predict future consumption patterns and get peak demand periods.",
      "AI-driven trend detection."
    ],
  },
  {
    title: "Skin Cancer Classification System",
    category: "AI/ML",
    image:
      "https://images.pexels.com/photos/8384513/pexels-photo-8384513.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: [
      "CNN-based skin lesion analysis and predictive reports for early detection.",
      "ReactJS-based front end for user-friendly interaction.",
      <>
        Published Research Paper:{" "}
        <a
          href="https://pubs.aip.org/aip/acp/article/3279/1/020111/3341731/A-deep-learning-approach-for-skin-cancer"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: THEME.border, fontWeight: 700 }}
        >
          Read here
        </a>
      </>,
    ],
  },
  {
    title: "Real Estate Market Place",
    category: "Frontend" ,
    image:
      "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: [
      "Web application for managing property listing and rentals using NextJs, React, Redux, and Vite.",
      "Implemented RESTful APIs with Node.js to handle user authentication, listings and payment transactions",
     
    ],
  },
    {
    title: "Online Examination System",
    category: "Full Stack",
    image:
            "https://images.pexels.com/photos/4827576/pexels-photo-4827576.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: [
      "Secure online exam platform.",
      "Auto-grading and real-time analytics.",
      "Role-based access control.",
    ],
  },
  {
    title: "Event Management System",
    category: "Full Stack",
    image:
      "https://images.pexels.com/photos/811572/pexels-photo-811572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: [
      "Schedule and manage events.",
      "Automated reminders and RSVP tracking.",
      "Built with React and Firebase.",
    ],
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <motion.div
      className="page projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Projects</h1>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          background: THEME.filterBg,
          padding: 10,
          borderRadius: 12,
          marginBottom: 18,
        }}
      >
        {categories.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                border: `1px solid ${active ? THEME.filterActive : "rgba(255,255,255,0.18)"}`,
                background: active ? "rgba(33,150,243,0.15)" : "transparent",
                color: active ? THEME.text : THEME.textMuted,
                padding: "8px 12px",
                borderRadius: 999,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18,
        }}
      >
        {filtered.map((project, i) => (
          <motion.div
            key={project.title + i}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            style={{
              background: THEME.cardBg,
              border: `1px solid ${THEME.border}`,
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
              display: "flex",
              flexDirection: "column",
              minHeight: 380,
            }}
          >
            {/* Image */}
            <div style={{ position: "relative" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                }}
              />
              {/* Category badge */}
              <span
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  background: THEME.chipBg,
                  color: THEME.chipText,
                  border: `1px solid ${THEME.border}`,
                  borderRadius: 999,
                  padding: "4px 10px",
                  fontSize: 12,
                  fontWeight: 700,
                  backdropFilter: "blur(4px)",
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Body */}
            <div style={{ padding: 16, color: THEME.text, flex: 1 }}>
              <h2
                style={{
                  margin: "0 0 10px 0",
                  fontSize: 18,
                  lineHeight: 1.3,
                  color: THEME.text,
                  textAlign: "center",
                }}
              >
                {project.title}
              </h2>

              <ul style={{ margin: 0, paddingLeft: 18, color: THEME.textMuted, lineHeight: 1.7 }}>
                {project.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ height: 8 }} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
