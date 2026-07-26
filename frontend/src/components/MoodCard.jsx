
import React from 'react'

function MoodCard({mood}) {

  return (
    <div>
      <h3>{mood.mood}</h3>
      <p>Scale: {mood.mood_scale}</p>
      <p>{mood.notes}</p>
    </div>
  );
}

export default MoodCard