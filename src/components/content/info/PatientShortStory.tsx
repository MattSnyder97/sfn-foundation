import React, { useEffect, useState } from 'react';

interface PatientShortStoryProps {
  author?: string;
  children: React.ReactNode;
}

const PatientShortStory: React.FC<PatientShortStoryProps> = ({ author, children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 600px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const blockquoteStyle: React.CSSProperties = {
    background: 'linear-gradient(90deg, #f3f4f8 0%, #e6e9f5 100%)',
    borderLeft: '6px solid #5159CF',
    padding: isMobile ? '1rem 1.5rem 1rem 1rem' : '1.5rem 5rem 1rem 1.5rem',
    margin: '2rem 0',
    borderRadius: '0 0.75rem 0.75rem 0',
    boxShadow: '0 2px 8px rgba(108,99,255,0.08)',
    fontStyle: 'italic',
    position: 'relative',
  };

  // Support line breaks in children if it's a string
  const renderContent = typeof children === 'string'
    ? children.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          {idx < children.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))
    : children;

  return (
    <blockquote style={{
      ...blockquoteStyle,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      textAlign: 'left',
      padding: isMobile ? '2rem 1.5rem' : '3rem 4rem', // equal top/bottom
    }}>
      <div style={{ width: '100%', minHeight: '2rem' }}>{renderContent}</div>
      <footer style={{
        marginTop: '1.5rem',
        marginBottom: '0',
        textAlign: 'left',
        color: '#555',
        fontSize: '0.875rem',
        width: '100%',
      }}>
        {author && <span className="italic font-medium text-gray">{author}</span>}
      </footer>
    </blockquote>
  );
};

export default PatientShortStory;
