
import React from 'react'
import { Link } from 'react-router-dom';

function Welcome() {

  return (
    <div className="welcome">
      <h1>Welcome to Mood Tracker</h1>
      <p>
        Track your moods, reflect on your days, and understand your emotions.
      </p>
      <div className="welcome-buttons">
        <Link to="/moods" className="button">
          View Moods
        </Link>
        <Link to="/manage" className="button secondary">
          Add Mood
        </Link>
      </div>
    </div>
  );
}

export default Welcome