
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

    async function deleteMood(id) {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/moods/" + id, {method: "DELETE"});

        if (!response.ok) {
          throw new Error("Failed to delete mood");
        }

        setMoods(moods.filter((mood) => mood.id !== id));
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <div>
      <h2>My Mood Entries</h2>
      {moods.map((mood) => (
        <MoodCard key={mood.id} mood={mood} onDelete={deleteMood} />
      ))}
    </div>
  );
}

export default Dashboard