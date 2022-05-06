import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="Statistics">
    <span className="Statistics__value">Good: {good}</span>
    <span className="Statistics__value">Neutral: {neutral}</span>
    <span className="Statistics__value">Bad: {bad}</span>
    <span className="Statistics__value">Total: {total}</span>
    <span className="Statistics__value">
      Positive feedback: {positivePercentage}%
    </span>
  </div>
);

export default Statistics;
