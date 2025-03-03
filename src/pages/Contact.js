import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="page contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Contact Me</h1>
      <p>Feel free to reach out for opportunities, collaborations, or just a friendly chat!</p>
      <ul>
        <li>📧 Email: <a href="mailto:joelgeorgesam.123.jgs@gmail.com">joelgeorgesam.123.jgs@gmail.com</a></li>
        <li>📱 Phone: (709)-769-0081</li>
        <li>💼 LinkedIn: <a href="https://www.linkedin.com/in/joel-george-sam-607a45204" target="_blank" rel="noopener noreferrer">linkedin.com/in/joelgeorgesam</a></li>
      </ul>
    </motion.div>
  );
}

export default Contact;
