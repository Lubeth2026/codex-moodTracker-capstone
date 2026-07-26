
import os 
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()
app = Flask(__name__)
CORS(app)

supabase: Client = create_client(
    os.getenv("SUPABASE_URL"),
    os.getenv("SUPABASE_KEY")
)

@app.get("/")
def get_Status():
    return {"status": "Good/Working"}

@app.get("/api/moods")
def get_moods():

    response = (supabase.table("user_moods").select("*").execute())
    return response.data

@app.post("/api/moods")
def create_mood():
    data = request.get_json()

    response = (supabase.table("user_moods").insert({
            "mood": data["mood"],
            "mood_scale": data["mood_scale"],
            "notes": data["notes"]
        }).execute())
    return response.data, 201

if __name__ == '__main__':
    app.run(debug=True)