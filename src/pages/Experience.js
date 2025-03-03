import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.div
      className="page experience"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Experience</h1>
      <div className="experience-container">
        <div className="experience-item">
          <h2>Kaar Tech</h2>
          <p className="role">Student Software Developer</p>
          <p className="duration">Jan 2023 - Jul 2023</p>
       
          <p>
            Developed a sales forecasting application utilizing machine learning algorithms, leading to enhanced business insights and optimized inventory management.
          </p>
        </div>
        <div className="experience-item">
          <h2>Vee Technologies</h2>
          <p className="role">Robotic Process Automation Engineer</p>
          <p className="duration">Feb 2023 - May 2023
            
          </p>
         
          <p>
            Engineered RPA bots to automate repetitive tasks, significantly improving workflow efficiency and reducing manual operational efforts.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
