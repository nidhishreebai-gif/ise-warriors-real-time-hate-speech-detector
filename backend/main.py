from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    text: str

hate_words = ["kill", "hate", "idiot", "stupid"]

def check_message(text):
    text_lower = text.lower()
    for word in hate_words:
        if word in text_lower:
            return "hate_speech"
    return "safe"

@app.post("/predict")
def predict(msg: Message):
    result = check_message(msg.text)
    return {"status": result}