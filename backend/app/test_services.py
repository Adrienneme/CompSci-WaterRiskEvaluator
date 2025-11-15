# test_services.py
from .services import water_evaluate


# Sample qualitative input (adjust as needed)
ql_input = {
    "water_source": "River",
    "color": "Clear",
    "odor": "None",
    "nearby_land_use": "Urban",
    "geological_event": "None",
    "weather_event": "None"
}

# Sample quantitative input (optional, can leave empty to test qualitative conversion)
qn_input = {
    "pH": 7.0,
    "turbidity": 1.5,
    "bod": 2.0,
    "do": 8.0,
    "nitrate": 0.5,
    "temperature": 25.0,
    "ecoli": 10,
    "tds": 150
}

# Evaluate
decoded_result = water_evaluate(ql_input, qn_input)

print("\n===== DEBUG WATER EVALUATION =====")
for key, val in decoded_result.items():
    print(f"{key}: {val}")
