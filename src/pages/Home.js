import { motion } from "framer-motion";
import profilePic from '../assets/profile-pic.png'; // Ensure the path is correct

function Home() {
  return (
    <motion.div
      className="page home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="intro" style={styles.intro}>
        <img
          src={profilePic}
          alt="My Portrait"
          style={styles.profilePic}
        />
        <h1 style={styles.name}>Joel George Sam</h1>
        <p style={styles.description}>
          Welcome! I'm a passionate <strong>Frontend Developer</strong> and{" "}
          <strong>Full Stack Enthusiast</strong> with a focus on building modern, responsive web applications.
        </p>
        <a href="/projects" className="cta-button" style={styles.ctaButton}>
          View My Projects
        </a>
      </div>
    </motion.div>
  );
}

const styles = {
  intro: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  profilePic: {
    width: '200px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  name: {
    fontSize: '2em',
    margin: '10px 0',
  },
  description: {
    fontSize: '1.2em',
    margin: '10px 0',
    maxWidth: '600px',
  },
  ctaButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1em',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007BFF',
    borderRadius: '5px',
  },
};

export default Home;
