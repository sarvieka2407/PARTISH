import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // Temporary normal login
  function handleLogin() {
    navigate("/dashboard");
  }

  // Google OAuth login (REAL BACKEND CALL)
  function handleGoogleLogin() {
    window.location.href =
      "http://localhost:8000/auth/login/google";
  }

  return (
    <div style={page}>
      <div style={card}>
        {/* BRAND */}
        <h1 style={logo}>P.A.R.T.I.S.H.</h1>
        <p style={tagline}>
          Personal Assistant for Random Trivial Inbox Supplemental Helper
        </p>

        {/* FORM */}
        <input style={input} type="email" placeholder="Email address" />
        <input style={input} type="password" placeholder="Password" />

        {/* NORMAL LOGIN (temporary) */}
        <button style={button} onClick={handleLogin}>
          Sign In
        </button>

        {/* GOOGLE LOGIN */}
        <button style={button} onClick={handleGoogleLogin}>
          Sign In with Google
        </button>

        {/* SIGNUP LINK */}
        <p style={footer}>
          Don’t have an account?{" "}
          <span style={link} onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

/* ===== PAGE ===== */

const page = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

/* ===== CARD ===== */

const card = {
  width: "420px",
  padding: "42px",
  borderRadius: "20px",
  background: "rgba(255,243,230,0.75)",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(56,25,50,0.15)",
  boxShadow: "0 30px 60px rgba(56,25,50,0.18)",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

/* ===== BRAND ===== */

const logo = {
  margin: 0,
  textAlign: "center",
  color: "#381932",
  letterSpacing: "2px",
};

const tagline = {
  textAlign: "center",
  fontSize: "12px",
  color: "rgba(56,25,50,0.7)",
  marginBottom: "12px",
};

/* ===== INPUT ===== */

const input = {
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid rgba(56,25,50,0.2)",
  outline: "none",
  fontSize: "14px",
  background: "white",
};

/* ===== BUTTON ===== */

const button = {
  marginTop: "8px",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "#381932",
  color: "#FFF3E6",
  fontWeight: "600",
  cursor: "pointer",
};

/* ===== FOOTER ===== */

const footer = {
  textAlign: "center",
  fontSize: "13px",
  marginTop: "10px",
  color: "rgba(56,25,50,0.7)",
};

const link = {
  color: "#381932",
  fontWeight: "600",
  cursor: "pointer",
  textDecoration: "underline",
};