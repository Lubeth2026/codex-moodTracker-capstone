
import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <nav className="navbar">
      <h2>Mood Tracker</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/moods">Dashboard</Link>
        {" | "}
        <Link to="/manage">Add Mood</Link>
      </div>
    </nav>
  );
}

export default NavBar