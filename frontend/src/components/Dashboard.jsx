
import React, { useEffect, useState } from 'react'
import MoodCard from './MoodCard';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [moods, setMoods] = useState([]);
    const navigate = useNavigate();

    async function getMoods() {
       try {
         const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/moods");
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
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/moods" + id,
              { method: "DELETE" },
            );
            
            if (!response.ok) {
                throw new Error("Failed to delete mood");
            }
            
            setMoods(moods.filter((mood) => mood.id !== id));
        } catch (error) {
            console.error(error);
        }
    }
    
    function editMood(id) {
      navigate("/manage/" + id);
    }

  return (
    <div>
      <h1 className="dashboard-title">My Mood Entries</h1>
      {moods.length === 0 ? (<p>No moods have been added yet.</p>) : (
        moods.map((mood) => (
          <MoodCard key={mood.id} mood={mood} onDelete={deleteMood} onEdit={editMood} />))
      )}
    </div>
  );
}

export default Dashboard