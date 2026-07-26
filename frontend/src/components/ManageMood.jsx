
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ManageMood() {
    const [mood, setMood] = useState("");
    const [scale, setScale] = useState("");
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();

    async function createMood(event) {
      event.preventDefault();

      try {
        const response = await fetch("http://127.0.0.1:5000/api/moods", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({mood: mood,mood_scale: Number(scale),notes: notes}),
        });

        if (!response.ok) {
          throw new Error("Failed to create mood");
        }

        const data = await response.json();
        console.log(data);
        navigate("/moods");
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <div>
      <h2>Add New Mood</h2>
      <form onSubmit={createMood}>
        <div>
          <label>Mood:</label>
          <input type="text" value={mood} onChange={(event) => setMood(event.target.value)} />
        </div>

        <div>
          <label>Mood Scale:</label>
          <input type="number" value={scale} onChange={(event) => setScale(event.target.value)} />
        </div>

        <div>
          <label>Notes:</label>
          <textarea value={notes} onChange={(event) => setNotes(event.target.value)} />
        </div>

        <button>Save Mood</button>
      </form>
    </div>
  );
}

export default ManageMood