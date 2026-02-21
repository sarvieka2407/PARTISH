export default function EmailCard({
  subject,
  sender,
  calendarEvent,
}) {
  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-2px)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(0)")
      }
    >
      {/* EMAIL INFO */}
      <h4 style={title}>{subject}</h4>
      <p style={senderText}>From: {sender}</p>

      {/* AUTO CALENDAR SECTION */}
      {calendarEvent?.scheduled && (
        <div style={calendarBox}>
          <p style={aiLabel}>✅ Scheduled in Calendar</p>

          <div style={meetingInfo}>
            <span>{calendarEvent.time}</span>
            <span> • {calendarEvent.duration}</span>
          </div>

          <span style={autoNote}>
            Added automatically by PARTISH
          </span>
        </div>
      )}
    </div>
  );
}

/* ===== CARD STYLE ===== */

const cardStyle = {
  background: "#ffffff",
  padding: "16px",
  marginBottom: "14px",
  borderRadius: "12px",
  border: "1px solid rgba(56,25,50,0.12)",
  boxShadow: "0 6px 14px rgba(56,25,50,0.08)",
  transition: "all 0.18s ease",
  cursor: "grab",
};

const title = {
  marginBottom: "6px",
  color: "#381932",
};

const senderText = {
  color: "rgba(56,25,50,0.65)",
  marginBottom: "10px",
};

/* ===== CALENDAR UI ===== */

const calendarBox = {
  background: "#FFF3E6",
  border: "1px solid rgba(56,25,50,0.2)",
  padding: "10px",
  borderRadius: "10px",
  marginTop: "12px",
};

const aiLabel = {
  fontWeight: "600",
  color: "#381932",
  marginBottom: "6px",
};

const meetingInfo = {
  fontSize: "13px",
  color: "#381932",
  marginBottom: "6px",
};

const autoNote = {
  fontSize: "11px",
  color: "rgba(56,25,50,0.6)",
};