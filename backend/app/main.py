from fastapi import FastAPI

router = FastAPI()

@router.post("/evluate")
def water_evaluate():
  pass