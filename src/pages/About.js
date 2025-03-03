import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="page about"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.6 }}
    >
      <h1>About Me</h1>
      <p>
        I am a dedicated web developer specializing in frontend and full stack technologies. My key skills include:
      </p>
      <ul>
        <li>💻 JavaScript, React.js, and Node.js expertise</li>
        <li>🎨 Experience in UI/UX design with Figma and Adobe XD</li>
        <li>📱 Building responsive, mobile-friendly applications</li>
        <li>🔐 Secure authentication and REST API integration</li>
      </ul>
      <p>
        I love turning innovative ideas into practical and elegant web solutions.
      </p>

      {/* Download CV Button */}
      <a href="/Resume.pdf" download className="download-cv">
        Download CV 📄
      </a>
    </motion.div>
  );
}

export default About;
