import React from 'react';

interface Props {
  size?: number;
  className?: string;
}

export default function AnimatedCheck({ size = 32, className = '' }: Props) {
  // Inline SVG with small CSS keyframes so no Tailwind config changes are required.
  // The circle draws first, then the check path.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <style>{`
        .check-circle { stroke: #009e79; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; fill: none; stroke-dasharray: 165; stroke-dashoffset: 165; animation: draw-circle 0.6s ease forwards; }
        .check-mark { stroke: #009e79; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; fill: none; stroke-dasharray: 48; stroke-dashoffset: 48; animation: draw-check 0.45s ease forwards 0.55s; }
        @keyframes draw-circle { to { stroke-dashoffset: 0; } }
        @keyframes draw-check { to { stroke-dashoffset: 0; } }
      `}</style>

      <circle className="check-circle" cx="26" cy="26" r="24" />
      <path className="check-mark" d="M16 27 L22 33 L36 19" />
    </svg>
  );
}
