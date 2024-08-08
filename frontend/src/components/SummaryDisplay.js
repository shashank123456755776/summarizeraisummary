import React from 'react';
import './SummaryDisplay.css'; // Import component-specific CSS if needed

const SummaryDisplay = ({ summary }) => {
  return (
    <div className="summary-display">
      <h3>Summary:</h3>
      <p>{summary}</p>
    </div>
  );
};

export default SummaryDisplay;

