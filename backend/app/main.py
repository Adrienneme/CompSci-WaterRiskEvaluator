from fastapi import FastAPI, HTTPException, status
from schema import inputRequest
from services import water_evaluate

router = FastAPI()

@router.post("/evluate")
def water_evaluate_route(inputs: inputRequest):
  ql = inputs.qualitative.model_dump()
  qn = inputs.quantitative.model_dump()
  
  response = water_evaluate(ql, qn)
  if response is None:
    raise HTTPException(
      status_code = 404,
      detail = "Could not process water evaluation"
    )
  return response
#response = {
#   "overall": "" 
#   "human": ""
#   "animal": ""
#   "plant": ""
#}
  
  