import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Frontend", "Full Stack", "AI/ML"];

const projects = [
  {
    title: "Love Your Food",
    category: "Frontend",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: [
      "A fully responsive restaurant website.",
      "Interactive menu, online reservations, and billing.",
      "SEO-optimized blog to improve visibility and customer engagement."
    ]
  },
  {
    title: "TaskHero",
    category: "AI/ML",
    image: "https://images.pexels.com/photos/4476376/pexels-photo-4476376.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: [
      "AI-powered task manager.",
      "Smart prioritization and real-time updates.",
      "Customizable categories with authentication."
    ]
  },
  {
    title: "Commerce Product Recommendation Platform",
    category: "Full Stack",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: [
      "Personalized e-commerce site.",
      "AI product recommendations and Stripe payments.",
      "Cart and wishlist managed with Redux."
    ]
  },
  {
    title: "Skin Cancer Classification System",
    category: "AI/ML",
    image: "https://images.pexels.com/photos/8384513/pexels-photo-8384513.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: [
      "ML-based skin lesion analysis.",
      "Predictive reports for early detection.",
      "Built with Flask, React, TensorFlow."
    ]
  },
  {
    title: "Online Examination System",
    category: "Full Stack",
    image: "https://images.pexels.com/photos/4827576/pexels-photo-4827576.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: [
      "Secure online exam platform.",
      "Auto-grading and real-time analytics.",
      "Role-based access control."
    ]
  },
  {
    title: "Weather Dashboard",
    category: "Frontend",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: [
      "Live weather updates.",
      "Interactive forecasts with alerts.",
      "Built with React.js and APIs."
    ]
  },
  {
    title: "Portfolio Builder Tool",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww",
    description: [
      "Customizable portfolio generator.",
      "Drag-and-drop editor and live preview.",
      "Exportable, production-ready websites."
    ]
  },
  {
    title: "Event Management System",
    category: "Full Stack",
    image: "https://images.pexels.com/photos/811572/pexels-photo-811572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: [
      "Schedule and manage events.",
      "Automated reminders and RSVP tracking.",
      "Built with React and Firebase."
    ]
  }
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      className="page projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Projects</h1>
      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <ul>
              {project.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
