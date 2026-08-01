
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ManageMood() {
    const [mood, setMood] = useState("");
    const [scale, setScale] = useState("");
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    async function createMood(event) {
      event.preventDefault();

      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/moods",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              mood: mood,
              mood_scale: Number(scale),
              notes: notes,
            }),
          },
        );

        if (!response.ok) {
          throw new Error("Failed to create mood");
        }

        const data = await response.json();
        clearForm();
        navigate("/moods");
      } catch (error) {
        console.error(error);
      }
    }

    async function getOneMood() {
      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/moods/" + id);
        const data = await response.json();

        setMood(data[0].mood);
        setScale(data[0].mood_scale);
        setNotes(data[0].notes);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      if (id) {
        getOneMood();
      }
    }, [id]);

    async function updateMood(event) {
      event.preventDefault();

      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/moods" + id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              mood: mood,
              mood_scale: Number(scale),
              notes: notes,
            }),
          },
        );

        if (!response.ok) {
          throw new Error("Failed to update mood");
        }

        const data = await response.json();
        console.log(data);
        clearForm();
        navigate("/moods");
      } catch (error) {
        console.error(error);
      }
    }

    function clearForm() {
      setMood("");
      setScale("");
      setNotes("");
    }

    
  return (
    <div className="form-container">
      <h1>{id ? "Update Mood" : "Add New Mood"}</h1>
      <form onSubmit={id ? updateMood : createMood}>
        <div>
          <label htmlFor="mood">Mood:</label>
          <input
            type="text"
            id="mood"
            value={mood}
            onChange={(event) => setMood(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="scale">Mood Scale:</label>
          <input
            type="number"
            id="scale"
            value={scale}
            onChange={(event) => setScale(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            value={notes}
            id="notes"
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>

        <div className="submit-button">
          <button>{id ? "Update Mood" : "Save Mood"}</button>
        </div>
      </form>
    </div>
  );
}

export default ManageMood