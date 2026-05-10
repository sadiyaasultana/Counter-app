import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.header}>
          <div style={styles.avatar}>S</div>
          <div>
            <h1 style={styles.heading}>Sultana's Counter</h1>
            <p style={styles.subheading}>Simple React useState Demo</p>
          </div>
        </div>

        <div style={styles.counterBox}>
          <p style={styles.label}>Current Count</p>
          <h1 style={{
            ...styles.count,
            color: count > 0 ? "#10B981" : count < 0 ? "#EF4444" : "#0EA5E9"
          }}>
            {count}
          </h1>
          <p style={styles.status}>
            {count > 0 ? "Positive ✅" : count < 0 ? "Negative ❌" : "Zero ⚪"}
          </p>
        </div>

        <div style={styles.btnRow}>
          <button
            style={{ ...styles.btn, background: "#10B981" }}
            onClick={() => setCount(count + 1)}
          >
            + Increase
          </button>
          <button
            style={{ ...styles.btn, background: "#475569" }}
            onClick={() => setCount(0)}
          >
            ↺ Reset
          </button>
          <button
            style={{ ...styles.btn, background: "#EF4444" }}
            onClick={() => setCount(count - 1)}
          >
            − Decrease
          </button>
        </div>

        <div style={styles.infoBox}>
          <p style={styles.infoText}>
            This counter uses <span style={styles.highlight}>useState</span> Hook -
            the count value is stored in state and React automatically
            updates the screen whenever it changes.
          </p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20%",
    boxSizing: "border-box",
  },
  container: {
    width: "100%",
    background: "#0A0F1E",
    borderRadius: "20px",
    padding: "36px 28px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
    border: "1px solid #1E293B",
    textAlign: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "32px",
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #0EA5E9, #6366F1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fff",
    flexShrink: 0,
  },
  heading: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "800",
    color: "#F1F5F9",
    fontFamily: "Segoe UI, sans-serif",
    textAlign: "left",
  },
  subheading: {
    margin: "2px 0 0",
    fontSize: "12px",
    color: "#64748B",
    fontFamily: "Segoe UI, sans-serif",
    textAlign: "left",
  },
  counterBox: {
    background: "#1E293B",
    borderRadius: "16px",
    padding: "36px 20px",
    marginBottom: "24px",
    border: "1px solid #334155",
  },
  label: {
    fontSize: "13px",
    color: "#64748B",
    marginBottom: "8px",
    fontFamily: "Segoe UI, sans-serif",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  count: {
    fontSize: "96px",
    fontWeight: "900",
    margin: "0",
    fontFamily: "Segoe UI, sans-serif",
  },
  status: {
    fontSize: "14px",
    color: "#94A3B8",
    marginTop: "8px",
    fontFamily: "Segoe UI, sans-serif",
  },
  btnRow: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    marginBottom: "24px",
  },
  btn: {
    padding: "14px 28px",
    border: "none",
    borderRadius: "12px",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    fontFamily: "Segoe UI, sans-serif",
  },
  infoBox: {
    background: "rgba(14,165,233,0.08)",
    border: "1px solid rgba(14,165,233,0.2)",
    borderRadius: "12px",
    padding: "16px 20px",
  },
  infoText: {
    fontSize: "13px",
    color: "#94A3B8",
    lineHeight: "1.7",
    margin: 0,
    fontFamily: "Segoe UI, sans-serif",
  },
  highlight: {
    color: "#0EA5E9",
    fontWeight: "700",
    fontFamily: "Consolas, monospace",
  },
};

export default Counter;