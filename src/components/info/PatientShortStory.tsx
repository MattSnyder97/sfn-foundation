import React from 'react';

interface PatientShortStoryProps {
  author?: string;
  date?: string;
  children: React.ReactNode;
}

/**
 * PatientShortStory displays a patient story in a styled quote block.
 * Usage:
 * <PatientShortStory author="Jane Doe" date="2025-09-07">Story text...</PatientShortStory>
 */
const PatientShortStory: React.FC<PatientShortStoryProps> = ({ author, date, children }) => (
  <blockquote
    style={{
      background: 'linear-gradient(90deg, #f3f4f8 0%, #e6e9f5 100%)',
      borderLeft: '6px solid #6c63ff',
      padding: '1.5rem',
      margin: '2rem 0',
      borderRadius: '0.75rem',
      boxShadow: '0 2px 8px rgba(108,99,255,0.08)',
      fontStyle: 'italic',
      position: 'relative',
    }}
  >
    <span style={{ fontSize: '2rem', color: '#6c63ff', position: 'absolute', left: '1rem', top: '1rem' }}>
      “
    </span>
    <div style={{ marginLeft: '2.5rem', minHeight: '2rem' }}>{children}</div>
    <footer style={{ marginTop: '1rem', textAlign: 'right', color: '#555', fontSize: '1rem' }}>
      {author && <span><strong>{author}</strong></span>}
      {author && date && <span> &middot; </span>}
      {date && <span>{date}</span>}
    </footer>
  </blockquote>
);

export default PatientShortStory;
