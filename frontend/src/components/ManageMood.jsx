
import React, { useState } from 'react'

function ManageMood() {
    const [mood, setMood] = useState("");
    const [scale, setScale] = useState("");
    const [notes, setNotes] = useState("");

  return (
    <div>
      <h2>Add New Mood</h2>
      <form>
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