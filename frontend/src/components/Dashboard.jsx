
import React, { useEffect, useState } from 'react'

function Dashboard() {
    const [moods, setMoods] = useState([]);

    async function getMoods() {
       try {
         const response = await fetch("http://127.0.0.1:5000/api/moods");
         const data = await response.json();

         setMoods(data);
       } catch (error) {
         console.error(error);
       }
    }

    useEffect(() => {
      getMoods();
    }, []);

  return (
    <div>
      <h2>My Mood Entries</h2>
      {moods.map((mood) => (
        <div key={mood.id}>
          <h3>{mood.mood}</h3>
          <p>Scale: {mood.mood_scale}</p>
          <p>{mood.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard