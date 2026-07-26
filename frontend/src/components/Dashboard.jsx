
import React, { useEffect, useState } from 'react'
import MoodCard from './MoodCard';

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
        <MoodCard key={mood.id} mood={mood} />
      ))}
    </div>
  );
}

export default Dashboard