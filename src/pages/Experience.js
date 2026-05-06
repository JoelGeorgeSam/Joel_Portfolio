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
          <h2>Memorial University of Newfoundland, St. John's, NL</h2>
          <p className="role">Teaching Assistant</p>
          <p className="duration">Sep 2025 - Present</p>
       
       <ul style={{ lineHeight: 1.8, marginBottom: 24 }}>
  <li> TA for Object Oriented Programming (COMP 2001) and TA for Computing Systems (COMP 1003) </li>
  <li>Assist students with core programming concepts, object-oriented design, and debugging practices.</li>
  <li>Support student learning in operating systems and distributed systems by explaining concepts, reviewing coursework, and leading lab/tutorial sessions.</li>
</ul>          
        </div>

<div className="experience-item">
          <h2>Lakecrest Independent School, St. John's, NL</h2>
          <p className="role">IT Administrator</p>
          <p className="duration">Jun 2025 - Present</p>
       
         <ul style={{ lineHeight: 1.8, marginBottom: 24 }}>
  <li>Design and maintain the school’s website and mobile application.</li>
  <li>Mentor and guide students in programming and problem-solving.</li>
  <li>Provide technical support to students and staff, resolving day-to-day IT and system issues.</li>
</ul>

        </div>
        <div className="experience-item">
          <h2>Lakecrest Independent School, St. John's, NL</h2>
          <p className="role">IT Administrator</p>
          <p className="duration">Jun 2025 - Present</p>
       
         <ul style={{ lineHeight: 1.8, marginBottom: 24 }}>
  <li>Design and maintain the school’s website and mobile application.</li>
  <li>Mentor and guide students in programming and problem-solving.</li>
  <li>Provide technical support to students and staff, resolving day-to-day IT and system issues.</li>
</ul>

        </div>


        <div className="experience-item">
          <h2>Kaar Tech, Salem, TN</h2>
          <p className="role">Student Software Developer</p>
          <p className="duration">Jan 2023 - Jul 2024</p>
       
          <ul style={{ lineHeight: 1.8, marginBottom: 24 }}>
  <li> Led the development of a Sales Forecasting application that ingested and analyzed large volumes of historical sales data to support business decision-making.</li>
  <li> Designed a metadata cataloging framework to document dataset sources, field definitions, and version history ensuring traceability and reproducibility of forecasts.</li>
  <li>Developed interactive UI components using ReactJS for user friendly interaction with the system and PowerBI for visualization</li>
</ul>

        </div>
        <div className="experience-item">
          <h2>Vee Technologies, Salem, TN</h2>
          <p className="role">Robotic Process Automation Engineer</p>
          <p className="duration">Feb 2023 - May 2023
            
          </p>
         
          <ul style={{ lineHeight: 1.8, marginBottom: 24 }}>
  <li>Trained in RPA Development and Automation</li>
  <li>Built  bots to automate repetitive tasks to reduce manual operational efforts.</li>
  
</ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
