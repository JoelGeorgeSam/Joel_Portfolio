import { motion } from "framer-motion";
import { useState } from "react";

// 🎨 Theme
const COLORS = {
  bgCard: "#1a1a2e",
  border: "#2196f3",
  text: "#f1f1f1",
  textMuted: "rgba(241,241,241,0.85)",
  inputBg: "#0f1525",
  inputBorder: "rgba(255,255,255,0.15)",
  success: "#2ecc71",
  danger: "#ff6b6b",
  btnText: "#0b0f1a",
};

const cardStyle = {
  background: COLORS.bgCard,
  border: `1px solid ${COLORS.border}`,
  borderRadius: 14,
  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
};

const labelStyle = {
  display: "block",
  marginBottom: 6,
  fontSize: 14,
  color: COLORS.textMuted,
};

const inputBase = {
  width: "100%",
  padding: "12px 14px",
  background: COLORS.inputBg,
  color: COLORS.text,
  border: `1px solid ${COLORS.inputBorder}`,
  borderRadius: 10,
  outline: "none",
  transition: "border-color .2s, box-shadow .2s",
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!emailOk) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "info", text: "Submitting…" });

    setTimeout(() => {
      setSubmitting(false);
      setStatus({ type: "success", text: "Message sent successfully! I’ll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <motion.div
      className="page contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Contact Me</h1>
      <p style={{ color: COLORS.textMuted, marginTop: -6, marginBottom: 18 }}>
        Feel free to reach out for opportunities, collaborations, or just a friendly chat!
      </p>

      {/* 📐 New responsive grid: 1/3 + 2/3 on desktop, stacked on mobile */}
      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 18,
          alignItems: "start",
        }}
      >
        {/* Contact details (compact) */}
        <motion.div
          style={{ ...cardStyle, padding: 18 }}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <h2 style={{ marginTop: 0, color: COLORS.text }}>Contact Details</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9, color: COLORS.textMuted }}>
            <li>
              📧 Email:{" "}
              <a href="mailto:joelgsam29@gmail.com" style={{ color: COLORS.border, fontWeight: 600 }}>
                joelgsam29@gmail.com
              </a>
            </li>
            <li>📱 Phone: (709) 769-0081</li>
            <li>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/joel-george-sam-607a45204"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: COLORS.border, fontWeight: 600 }}
              >
                linkedin.com/in/joelgeorgesam
              </a>
            </li>
          </ul>

          {/* Quick actions */}
          <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
            <a
              href="mailto:joelgsam29@gmail.com?subject=Hello%20Joel&body=Hi%20Joel%2C"
              style={{
                border: `1px solid ${COLORS.border}`,
                background: COLORS.border,
                color: COLORS.btnText,
                padding: "10px 14px",
                borderRadius: 10,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/joel-george-sam-607a45204"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: `1px solid ${COLORS.border}`,
                background: "transparent",
                color: COLORS.text,
                padding: "10px 14px",
                borderRadius: 10,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              View LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Form (wider) */}
        <motion.div
          style={{ ...cardStyle, padding: 18 }}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <h2 style={{ marginTop: 0, color: COLORS.text }}>Send a Message</h2>

          {status.text && (
            <div
              style={{
                marginBottom: 12,
                padding: "10px 12px",
                borderRadius: 10,
                border: `1px solid ${
                  status.type === "success"
                    ? COLORS.success
                    : status.type === "error"
                    ? COLORS.danger
                    : COLORS.border
                }`,
                color:
                  status.type === "success"
                    ? COLORS.success
                    : status.type === "error"
                    ? COLORS.danger
                    : COLORS.text,
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {status.text}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={inputBase}
                onFocus={(e) => (e.target.style.borderColor = COLORS.border)}
                onBlur={(e) => (e.target.style.borderColor = COLORS.inputBorder)}
                required
              />
            </div>

            <div style={{ marginBottom: 12 }}>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                style={inputBase}
                onFocus={(e) => (e.target.style.borderColor = COLORS.border)}
                onBlur={(e) => (e.target.style.borderColor = COLORS.inputBorder)}
                required
              />
            </div>

            <div style={{ marginBottom: 14 }}>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I help?"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                style={{ ...inputBase, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = COLORS.border)}
                onBlur={(e) => (e.target.style.borderColor = COLORS.inputBorder)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 12,
                border: `1px solid ${COLORS.border}`,
                background: submitting ? "rgba(33,150,243,0.5)" : COLORS.border,
                color: COLORS.btnText,
                fontWeight: 800,
                cursor: submitting ? "not-allowed" : "pointer",
                transition: "transform .08s ease",
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.99)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
