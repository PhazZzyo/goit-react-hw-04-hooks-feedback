import React from 'react';

const Statistics = ({ good, neutral, bad, total }) => (
  <div className="Statistics">
    <h2>Statistics</h2>
    <span className="Statistics__value">Good: {good}</span>
    <span className="Statistics__value">Neutral: {neutral}</span>
    <span className="Statistics__value">Bad: {bad}</span>
    <span className="Statistics__value">Total: {total}</span>
  </div>
);

export default Statistics;
