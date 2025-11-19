from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .schema import inputRequest
from .services import water_evaluate

app = FastAPI()

# Allow requests from frontend
origins = ["http://localhost:5173","http://localhost:5174" ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# This defines the POST /evaluate route
@app.post("/evaluate")
def water_evaluate_route(inputs: inputRequest):
    ql = inputs.qualitative.model_dump()
    qn = inputs.quantitative.model_dump()
  
    response = water_evaluate(ql, qn)
    if response is None:
        raise HTTPException(
            status_code=404,
            detail="Could not process water evaluation"
        )
    return response

@app.get("/")
def root():
    return {"message": "Water evaluation API is running"}
