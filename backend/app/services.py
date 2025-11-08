from utils import convert_ql_to_qn


def water_evaluate(ql, qn):
  qualitative_inputs = convert_ql_to_qn(ql)
  quantitative_inputs = qn
  final_inputs = {}
  
  for param, value in qualitative_inputs.items():
    if quantitative_inputs[param] is None:
      final_inputs[param] = value
    else:
      final_inputs[param] = quantitative_inputs[param]
        
  
  return final_inputs #pasok sa ai model natin
  

