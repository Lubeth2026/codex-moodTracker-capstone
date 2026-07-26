
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
        const response = await fetch("http://127.0.0.1:5000/api/moods", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({mood: mood,mood_scale: Number(scale),notes: notes}),
        });

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
        const response = await fetch("http://127.0.0.1:5000/api/moods/" + id);
        const data = await response.json();

        setMood(data[0].mood);
        setScale(data[0].mood_scale);
        setNotes(data[0].notes);
      } catch (error) {
        console.error(error);
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
        const response = await fetch("http://127.0.0.1:5000/api/moods/" + id, {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            mood: mood,
            mood_scale: Number(scale),
            notes: notes}),
        });

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
    <div>
      <h1>{id ? "Update Mood" : "Add New Mood"}</h1>
      <form onSubmit={id ? updateMood : createMood}>
        <div>
          <label>Mood:</label>
          <input
            type="text"
            value={mood}
            onChange={(event) => setMood(event.target.value)}
          />
        </div>

        <div>
          <label>Mood Scale:</label>
          <input
            type="number"
            value={scale}
            onChange={(event) => setScale(event.target.value)}
          />
        </div>

        <div>
          <label>Notes:</label>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>

        <button>{id ? "Update Mood" : "Save Mood"}</button>
      </form>
    </div>
  );
}

export default ManageMood