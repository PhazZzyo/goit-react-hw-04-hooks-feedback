import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="Feedback__controls">
    {options.map(option => (
      <button
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
