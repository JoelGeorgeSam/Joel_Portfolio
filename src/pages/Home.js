import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="page home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Joel George Sam</h1>
      <p>Frontend Developer | Full Stack Enthusiast</p>
      <p>Welcome to my portfolio! Here, you can explore my projects, experience, and skills.</p>
    </motion.div>
  );
}

export default Home;

