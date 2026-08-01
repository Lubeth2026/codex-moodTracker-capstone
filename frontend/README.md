# Mood Tracker Capstone 

## Overview
Mood Tracker is a full-stack web app that allows users to record & manage their daily moods. Users can create, view, update, & delete mood entries while adding notes & rating their mood on a scale from 1 to 10. The app stores all data in a Supabase database through a Flask REST API & provides a React user interface.

The project demonstrates a complete CRUD (Create, Read, Update, Delete) app & cloud deployment using modern web development technologies.

### Setup Instructions
1. Clone the repo
git clone https://github.com/Lubeth2026/codex-moodTracker-capstone.git
cd codex-moodTracker-capstone/
# Backend Setup
1. Navigate to the backend folder
cd backend
2. Create and activate a virtual environment
python -m venv .venv
source .venv/Scripts/activate
3. Install Dependencies
python -m pip install -r requirements.txt
4. Create a .env file
SUPABASE_URL=https://zxnhbkkijrscrujegavj.supabase.co
SUPABASE_KEY=sb_publishable__rFHgacthHci1B1J-14lNw_9NY5BhnO
ORIGIN="http://localhost:5173"
5. Start the Flask server
flask run
6. The API should run on
http://127.0.0.1:5000
# Frontend Setup
1. Navigate to the frontend folder/ Open another terminal
cd frontend
2. Install Dependencies
npm install
3. Create a .env file
VITE_BACKEND_URL=https://codex-moodtracker-capstone.onrender.com
4. Run the React server
npm run dev
5. The React page should open at
http://localhost:5173

#### How to use the App
# Add a Mood
1. Open the app
2. Click "Add new Mood"
3. Enter: Mood, Mood Scale (1-10), Notes
4. Click save
# View Moods
The Dashboard displays every mood entry stored in the database
Each card shows:
- Mood
- Mood Scale
- Notes
# Update a Mood
1. Click the edit button on a mood
2. Modify the info 
3. Click "Update Mood"
# Delete a Mood
1. Click delete on a mood card
2. The entry is removed from the database

#### Live Application
Deployed on Render
Frontend:
d3bzjp46o058e0.cloudfront.net
Deployed on AWS, S3, and CloudFront
Backend API:
https://codex-moodtracker-capstone.onrender.com
