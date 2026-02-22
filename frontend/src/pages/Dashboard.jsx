import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import EmailCard from "../EmailCard";
import API from "../services/api";

export default function Dashboard() {
  const [emails, setEmails] = useState([]);
  const [processing, setProcessing] = useState(false);

  // 🔥 Fetch emails from backend
  useEffect(() => {
    fetchEmails();
  }, []);

  async function fetchEmails() {
    try {
      const res = await API.get("/api/gmail/messages");
      setEmails(res.data);
    } catch (err) {
      console.error("Failed to fetch emails:", err);
    }
  }

  // 🤖 Trigger AI inbox processing
  async function processInbox() {
    try {
      setProcessing(true);

      // run AI classification
      await API.post("/api/gmail/process_inbox");

      // reload updated emails
      await fetchEmails();
    } catch (err) {
      console.error("Processing failed:", err);
    } finally {
      setProcessing(false);
    }
  }

  // 🔥 Auto-sort emails into columns
  const columns = {
    critical: emails.filter((e) => e.status === "critical"),
    review: emails.filter((e) => e.status === "review"),
    noise: emails.filter((e) => e.status === "noise"),
  };

  return (
    <>
      <Navbar />

      {/* AI PROCESS BUTTON */}
      <div style={processWrapper}>
        <button
          style={processBtn}
          onClick={processInbox}
          disabled={processing}
        >
          {processing
            ? "🤖 AI analyzing inbox..."
            : "🤖 Analyze Inbox with AI"}
        </button>
      </div>

      <div style={pageWrapper}>
        <div style={board}>
          <Column title="Critical" emails={columns.critical} />
          <Column title="Needs Review" emails={columns.review} />
          <Column title="Noise" emails={columns.noise} />
        </div>
      </div>
    </>
  );
}

/* ===== COLUMN COMPONENT ===== */

function Column({ title, emails }) {
  return (
    <div style={column}>
      <h3 style={{ marginBottom: "16px" }}>{title}</h3>

      {emails.length === 0 && (
        <p style={emptyText}>No emails here</p>
      )}

      {emails.map((email, i) => (
        <EmailCard key={i} {...email} />
      ))}
    </div>
  );
}

/* ===== STYLES ===== */

const processWrapper = {
  textAlign: "center",
  marginTop: "90px",
};

const processBtn = {
  padding: "12px 22px",
  borderRadius: "12px",
  border: "none",
  background: "#381932",
  color: "#FFF3E6",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 10px 20px rgba(56,25,50,0.2)",
};

const pageWrapper = {
  paddingTop: "40px",
  display: "flex",
  justifyContent: "center",
};

const board = {
  width: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  background: "rgba(255, 243, 230, 0.75)",
  padding: "28px",
  borderRadius: "22px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 25px 50px rgba(56,25,50,0.15)",
  border: "1px solid rgba(56,25,50,0.15)",
};

const column = {
  background: "#fff8f1",
  padding: "18px",
  borderRadius: "16px",
  border: "1px solid rgba(56,25,50,0.12)",
  minHeight: "450px",
};

const emptyText = {
  opacity: 0.5,
  fontSize: "13px",
};