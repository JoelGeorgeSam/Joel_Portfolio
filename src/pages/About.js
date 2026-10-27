import { motion } from "framer-motion";

// 🎨 Theme tokens
// ---- PageShell: gradient background + glass card (per page) ----

const COLORS = {
  bgCard: "#1a1a2e",        // deep navy card
  border: "#2196f3",        // blue accent
  text: "#f1f1f1",          // light text
  textMuted: "rgba(241,241,241,0.9)",
  chipBg: "rgba(255,255,255,0.06)",
  chipBorder: "rgba(255,255,255,0.18)",
};

const cardStyle = {
  background: COLORS.bgCard,
  border: `1px solid ${COLORS.border}`,
  borderRadius: 12,
  padding: 16,
  color: COLORS.text,
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
};

function Pill({ children }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 12px",
        borderRadius: 9999,
        background: COLORS.chipBg,
        border: `1px solid ${COLORS.chipBorder}`,
        fontSize: 14,
        marginRight: 8,
        marginBottom: 8,
        whiteSpace: "nowrap",
        color: COLORS.text,
      }}
    >
      {children}
    </span>
  );
}

export default function About() {
  return (
    <motion.div
      className="page about"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.6 }}
    >
      <h1>About Me</h1>

      <p style={{ lineHeight: 1.75, fontSize: 18, marginBottom: 24, color: COLORS.text }}>
        I’m a Graduate Computer Science co-op student and full-stack developer focused on
        building practical, elegant products. I enjoy turning ideas into robust, secure web apps
        and also bring experience in <strong>data science</strong> and <strong>data analysis</strong>.
        My interests span fintech, applied AI, and leveraging data-driven insights to solve
        real-world problems.
      </p>

      {/* Education */}
      <section style={{ marginTop: 16 }}>
        <h2 style={{ marginBottom: 12, display: "flex", alignItems: "center", color: COLORS.text }}>
          <span style={{ marginRight: 8 }}>🎓</span> Education
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ margin: 0, color: COLORS.border }}>
              Memorial University of Newfoundland
            </h3>
            <p style={{ margin: "6px 0 0 0", color: COLORS.textMuted }}>
              M.Sc. in Computer Science • GPA 4.0/4.0 • Expected Dec 2026
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ margin: 0, color: COLORS.border }}>
              Sona College of Technology
            </h3>
            <p style={{ margin: "6px 0 0 0", color: COLORS.textMuted }}>
              B.E. in Computer Engineering • GPA 8.81/10 • First Class with Distinction • 2020 - 2024
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ marginTop: 28 }}>
        <h2 style={{ marginBottom: 12, color: COLORS.text }}>🧰 Tech Stack</h2>
        <div style={{ ...cardStyle, borderStyle: "dashed" }}>
          <div style={{ marginBottom: 6 }}>
            <Pill>JavaScript</Pill>
            <Pill>TypeScript</Pill>
            <Pill>Python</Pill>
            <Pill>Java</Pill>
            <Pill>Pandas</Pill>
            <Pill>NumPy</Pill>
          </div>
          <div style={{ marginBottom: 6 }}>
            <Pill>React</Pill>
            <Pill>Next.js</Pill>
            <Pill>Redux</Pill>
            <Pill>Tailwind CSS</Pill>
          </div>
          <div style={{ marginBottom: 6 }}>
            <Pill>Node.js</Pill>
            <Pill>Express.js</Pill>
            <Pill>REST APIs</Pill>
            <Pill>Authentication</Pill>
          </div>
          <div style={{ marginBottom: 6 }}>
            <Pill>PostgreSQL</Pill>
            <Pill>MongoDB</Pill>
            <Pill>Drizzle ORM</Pill>
            <Pill>Scikit-learn</Pill>
            <Pill>TensorFlow</Pill>
          </div>
          <div>
            <Pill>WebSockets</Pill>
            <Pill>Supabase</Pill>
            <Pill>Figma</Pill>
            <Pill>Git</Pill>
            <Pill>MS Office Suite</Pill>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ marginTop: 28 }}>
        <h2 style={{ marginBottom: 12, color: COLORS.text }}>⭐ Highlights</h2>
        <div style={cardStyle}>
          <ul style={{ lineHeight: 1.9, margin: 0, paddingLeft: 18 }}>
            <li>
              Built full-stack apps (e-commerce, real-estate marketplace, realtime chat) with
              React/Next.js, Node/Express, and SQL/NoSQL backends.
            </li>
            <li>
              Implemented secure auth, API integrations, and payment flows; optimized data models
              with PostgreSQL/MongoDB and Drizzle ORM.
            </li>
            <li>
              Research & ML exposure: skin-cancer classification with YOLOv5/TensorFlow and a
              React + Flask integration for deployment.
            </li>
            <li>
              Strong foundation in UI engineering and DX: reusable components, responsive layouts,
              and clean CI-friendly project structure.
            </li>
          </ul>
        </div>
      </section>

      {/* Download CV Button */}
      
    </motion.div>
  );
}
