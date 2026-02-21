import Navbar from "../Navbar";
import EmailCard from "../EmailCard";

export default function Dashboard() {
  const emails = [
    {
      subject: "Laptop crashed before interview",
      sender: "rahul@gmail.com",
      status: "critical",
    },

    {
      subject: "Quick call this week?",
      sender: "arjun@elevate.com",
      status: "review",
      calendarEvent: {
        scheduled: true,
        time: "Wed 3:00 PM IST",
        duration: "30 mins",
      },
    },

    {
      subject: "Newsletter subscription",
      sender: "news@company.com",
      status: "noise",
    },
  ];

  const columns = {
    critical: emails.filter((e) => e.status === "critical"),
    review: emails.filter((e) => e.status === "review"),
    noise: emails.filter((e) => e.status === "noise"),
  };

  return (
    <>
      <Navbar />

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

const pageWrapper = {
  paddingTop: "110px",
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