import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profile-pic.png";

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="glass-card">
        <img src={profilePic} alt="My Portrait" className="profile-pic" />
        <h1 className="name">Joel George Sam</h1>
        <h2 className="typing-text">
           <Typewriter words={[ "Full Stack Developer", "AI Enthusiast"]} loop={true} cursor />
        </h2>
        <p className="description">
          Passionate about building modern, scalable, and elegant web applications with cutting-edge technologies.
        </p>
        <div className="social-links">
          <a href="https://github.com/joelgeorgesam" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/joel-george-sam-607a45204" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="mailto:joelgeorgesam.123.jgs@gmail.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
        <a href="/projects" className="cta-button">View My Projects</a>
      </div>
    </motion.div>
  );
}

export default Home;