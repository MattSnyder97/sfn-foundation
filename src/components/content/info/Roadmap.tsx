import React from "react";

export interface RoadmapProps {
  items: string[]; // each item like "August 2025: Launch foundation..."
}

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: "12px 0",
  },
  row: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  },
  markerCol: {
    width: 80,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  marker: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#0b5fff",
    boxShadow: "0 0 0 4px rgba(11,95,255,0.08)",
    zIndex: 2,
  },
  line: {
    position: "absolute",
    top: 18,
    bottom: -6,
    width: 2,
    background: "#e6e9f2",
    left: 39,
    zIndex: 1,
  },
  content: {
    flex: 1,
    padding: "6px 10px",
    borderRadius: 8,
    background: "#fafbff",
    border: "1px solid #eef1fb",
  },
  date: {
    fontSize: 13,
    fontWeight: 600,
    color: "#1f2937",
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    color: "#374151",
    margin: 0,
    whiteSpace: "pre-wrap",
  },
};

export default function Roadmap({ items }: RoadmapProps) {
  if (!items || items.length === 0) return null;

  return (
    <div style={styles.container} aria-label="Roadmap timeline">
      {items.map((raw, idx) => {
        // Try to split into date and description by first colon
        const splitIndex = raw.indexOf(":");
        const date = splitIndex !== -1 ? raw.slice(0, splitIndex).trim() : "";
        const desc = splitIndex !== -1 ? raw.slice(splitIndex + 1).trim() : raw;

        return (
          <div key={idx} style={styles.row}>
            <div style={styles.markerCol} aria-hidden>
              <div style={styles.marker} />
              {idx < items.length - 1 && <div style={styles.line} />}
            </div>

            <div style={styles.content}>
              {date ? <div style={styles.date}>{date}</div> : null}
              <p style={styles.desc}>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
