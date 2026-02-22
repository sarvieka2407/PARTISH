import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={page}>
      {/* NAVBAR */}
      <div style={navbar}>
        <h2 style={logo}>P.A.R.T.I.S.H.</h2>

        <div>
          <button style={loginBtn} onClick={() => navigate("/login")}>
            Login
          </button>

          <button style={signupBtn} onClick={() => navigate("/signup")}>
            Get Started
          </button>
        </div>
      </div>

      {/* HERO */}
      <section style={hero}>
        <h1 style={headline}>
          Your Inbox.
          <br />
          Finally Under Control.
        </h1>

        <p style={subtext}>
          PARTISH automatically detects urgent emails, schedules meetings,
          and organizes your inbox into actionable workflows — so you never
          miss what matters.
        </p>

        <button
          style={cta}
          onClick={() => navigate("/signup")}
        >
          Start Free →
        </button>
      </section>

      {/* FEATURES */}
      <section style={features}>
        <Feature
          title="🚨 Smart Urgency Detection"
          text="AI identifies critical emails instantly and alerts you via Telegram."
        />

        <Feature
          title="📅 Automatic Scheduling"
          text="Deadlines and meetings are added directly to your calendar."
        />

        <Feature
          title="🧠 Inbox as a Workflow"
          text="Transform emails into tasks using a Kanban-style dashboard."
        />
      </section>
    </div>
  );
}

/* ---------- FEATURE CARD ---------- */

function Feature({ title, text }) {
  return (
    <div style={featureCard}>
      <h3>{title}</h3>
      <p style={{ opacity: 0.7 }}>{text}</p>
    </div>
  );
}

/* ---------- STYLES ---------- */

const page = {
  minHeight: "100vh",
};

/* NAVBAR */

const navbar = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "70px",
  background: "rgba(255,243,230,0.85)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(56,25,50,0.15)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 40px",
  zIndex: 10,
};

const logo = {
  color: "#381932",
  letterSpacing: "2px",
};

const loginBtn = {
  marginRight: "12px",
  background: "transparent",
  border: "1px solid #381932",
  padding: "8px 14px",
  borderRadius: "8px",
  cursor: "pointer",
};

const signupBtn = {
  background: "#381932",
  color: "#FFF3E6",
  border: "none",
  padding: "9px 16px",
  borderRadius: "8px",
  cursor: "pointer",
};

/* HERO */

const hero = {
  paddingTop: "160px",
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto",
};

const headline = {
  fontSize: "52px",
  color: "#381932",
  marginBottom: "20px",
};

const subtext = {
  fontSize: "18px",
  opacity: 0.75,
  marginBottom: "28px",
};

const cta = {
  background: "#381932",
  color: "#FFF3E6",
  border: "none",
  padding: "14px 28px",
  borderRadius: "12px",
  fontSize: "16px",
  cursor: "pointer",
};

/* FEATURES */

const features = {
  marginTop: "120px",
  display: "flex",
  justifyContent: "center",
  gap: "28px",
  paddingBottom: "120px",
};

const featureCard = {
  width: "280px",
  background: "rgba(255,243,230,0.75)",
  padding: "24px",
  borderRadius: "18px",
  boxShadow: "0 20px 40px rgba(56,25,50,0.15)",
  border: "1px solid rgba(56,25,50,0.15)",
};