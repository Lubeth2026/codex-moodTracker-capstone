
import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <nav>
      <h2>Mood Tracker</h2>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/moods">Dashboard</Link>
      {" | "}
      <Link to="/manage">Add Mood</Link>
    </nav>
  );
}

export default NavBar