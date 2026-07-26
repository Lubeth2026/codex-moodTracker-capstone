
import React from 'react'

function MoodCard({mood, onDelete, onEdit}) {

  return (
    <div>
      <h3>{mood.mood}</h3>
      <p>Scale: {mood.mood_scale}</p>
      <p>{mood.notes}</p>
      <button onClick={() => onEdit(mood.id)}>✏️</button>
      <button onClick={() => onDelete(mood.id)}>🗑️</button>
    </div>
  );
}

export default MoodCard