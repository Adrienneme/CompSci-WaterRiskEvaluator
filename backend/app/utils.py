import random
import statistics
from ql_dict import ql_to_qn_map

def getrand(x: float, y:float):
  return random.uniform(x, y)

def convert_ql_to_qn( ql ):
  
  parameter_values = {
    "pH": [],
    "turbidity": [],
    "bod": [],
    "do": [],
    "nitrate": [],
    "temperature": [],
    "ecoli": [],
    "tds": []
  }
  
  for ql_value in ql.values():
    
    qn = ql_to_qn_map(ql_value)
    
    for parameter, (min, max) in qn.items():
      if parameter in parameter_values:
        random_value = getrand(min, max)
        parameter_values[parameter].append(random_value)
  
  ql_to_qn = {}
  for parameter, values_list in parameter_values.items():
      ql_to_qn[parameter] = statistics.mean(values_list)
  
  return ql_to_qn
