from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import pipeline
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# List of origins that should be allowed to make cross-origin requests.
# For local development, you can allow localhost:3000, or use ["*"] to allow all.
origins = [
    "http://localhost:3000",
    # "http://127.0.0.1:3000", # If you sometimes use 127.0.0.1
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # or ["*"] in development
    allow_credentials=True,
    allow_methods=["*"],            # or specify ["GET", "POST", "OPTIONS"] etc.
    allow_headers=["*"],
)

# Define the request model
class TextInput(BaseModel):
    text: str

# Load the AI model when the app starts
@app.on_event("startup")
def load_model():
    global generator
    # Using a text generation model (distilgpt2)
    generator = pipeline("text-generation", model="distilgpt2")

@app.post("/predict")
async def predict(input: TextInput):
    try:
        # Generate text based on the input
        output = generator(input.text, max_length=50)
        return {"result": output}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
