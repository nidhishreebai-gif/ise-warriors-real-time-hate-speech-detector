Team Name: ISE Warriors
Panel Name: Artificial Intelligence (AI) & Machine Learning (ML)
Problem Statement: Real-time hate-speech detection for chat/online messages.
Project Overview
This project detects hateful or offensive text messages in real-time.
It uses:
FastAPI (Python) for backend
ReactJS for frontend
Simple keyword-based logic for detecting hate speech
Tech Stack
Frontend
ReactJS
HTML, CSS, JavaScript
Backend
FastAPI
Python
Uvicorn
 Folder Structure
ise-warriors-real-time-hate-speech-detector/
 ├── backend/
 └── frontend/
How to Run the Project
Run Backend
cd backend
uvicorn main:app --reload
Backend runs at:
 http://127.0.0.1:8000/check
 Run Frontend
cd frontend
npm install
npm start
Frontend runs at:
http://localhost:3000/
How It Works
1. User enters a message
2. Message is sent to FastAPI backend
3. Backend checks for hate keywords
4. Backend returns:
hate_speech
not_hate_speech
Team Members:
Nidhi Shree Bai P ,
Spoorthi R
