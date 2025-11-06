from pydantic import BaseModel
from typing import Optional

class qualitative(BaseModel):
  water_source: str
  color: str
  odor: str
  nearby_land_use: str
  geological_event: str
  weather_event: str

class quantitative(BaseModel):
  temperature: Optional[float] = None
  pH: Optional[float] = None
  turbidity: Optional[float] = None
  bod: Optional[float] = None
  do: Optional[float] = None
  nitrate: Optional[float] = None
  ecoli: Optional[int] = None
  tds: Optional[float] = None
  
class inputRequest(BaseModel):
  qualitative: qualitative
  quantitative: quantitative