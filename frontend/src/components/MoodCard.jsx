
import React from 'react'

function MoodCard({mood, onDelete, onEdit}) {

  return (
    <div className="mood-card">
      <h2>{mood.mood}</h2>
      <p>Scale: {mood.mood_scale}</p>
      <p>{mood.notes}</p>
      <div className="card-buttons">
        <button className="edit-btn" onClick={() => onEdit(mood.id)}>✏️</button>
        <button className="delete-btn" onClick={() => onDelete(mood.id)}>🗑️</button>
      </div>
    </div>
  );
}

export default MoodCard