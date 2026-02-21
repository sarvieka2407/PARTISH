export default function Navbar() {
  return (
    <div style={navStyle}>
      
      {/* LEFT SPACER */}
      <div style={{ width: "160px" }} />

      {/* CENTER BRAND */}
      <div style={centerBrand}>
        <h2 style={titleStyle}>PARTISH</h2>
        <p style={tagline}>
          Personal Assistant for Random Trivial Inbox Supplemental Helper
        </p>
      </div>
 
    </div>
  );
}

/* ===== NAVBAR ===== */
const navStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "72px",
  background: "#EFE7DE",
  borderBottom: "1px solid rgba(56,25,50,0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 40px",
  zIndex: 10,
};

/* ===== CENTER BRAND ===== */
const centerBrand = {
  textAlign: "center",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
};

const titleStyle = {
  margin: 0,
  color: "#9A0102",
  fontWeight: 700,
  letterSpacing: "0.5px",
};

const tagline = {
  fontSize: "12px",
  color: "rgba(56,25,50,0.65)",
  marginTop: "2px",
};

/* ===== BUTTON ===== */
const buttonStyle = {
  background: "#9A0102",
  color: "#EFE7DE",
  border: "none",
  padding: "10px 16px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "all 0.15s ease",
};