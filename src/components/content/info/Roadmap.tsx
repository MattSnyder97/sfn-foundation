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
    alignItems: "center", // center marker vertically with content
    gap: 12,
  },
  markerCol: {
    width: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // ensure marker is centered within the row height
    position: "relative",
  },
  marker: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#5159CF",
    zIndex: 2,
  },
  line: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 2,
    background: "#e6e9f2",
    left: "50%", // center line horizontally in the marker column
    transform: "translateX(-50%)",
    zIndex: 1,
  },
  content: {
    flex: 1,
    padding: "8px 12px",
  },
  date: {
    fontSize: 16,
    fontFamily: "inherit",
    fontWeight: 600,
    color: "#5159CF",
    marginBottom: 6,
  },
  desc: {
    fontSize: 16,
    color: "#54566E",
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
