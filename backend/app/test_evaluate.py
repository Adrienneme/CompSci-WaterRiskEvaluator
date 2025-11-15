import requests
import json
import random

url = "http://127.0.0.1:8000/evaluate"
headers = {"Content-Type": "application/json"}

# Options for qualitative inputs (from your ql_to_qn_map)
water_sources = ["Tap", "DeepWell", "ShallowWell", "River", "LakePond", "ReservoirDam", "RainWater", "MountainSpring", "UndergroundAquifer", "CoastalWell", "IrrigationCanal"]
colors = ["Clear", "SlightlyCloudy", "BrownMuddy", "GreenAlgal", "BlackGrey", "Yellowish", "Reddish", "OilySheen"]
odors = ["None", "EarthyMusty", "SulfurRottenEgg", "ChemicalSmell", "SewageOdor", "FishySmell", "ChlorineSmell", "LandfillLeachate"]
land_uses = ["ProtectedForest", "Agriculture", "LivestockGrazing", "IndustrialSite", "UrbanResidential", "Landfill", "MiningSite", "Aquaculture"]
geological_events = ["NoneGeological", "VolcanicActivity", "LandslideErosion", "Earthquake", "SoilErosion", "LandSubsidence"]
weather_events = ["NoneWeather", "HeavyRainfall", "Drought", "Heatwave", "Typhoon", "StormSurge"]

# Optionally, random quantitative overrides
def random_quantitative_override():
    return {
        "pH": round(random.uniform(5.5, 8.5), 2),
        "turbidity": round(random.uniform(0.1, 100), 2),
        "bod": round(random.uniform(0.1, 20), 2),
        "do": round(random.uniform(0.5, 9), 2),
        "nitrate": round(random.uniform(0, 60), 2),
        "temperature": round(random.uniform(10, 40), 2),
        "ecoli": random.randint(0, 5000),
        "tds": round(random.uniform(10, 3000), 2)
    }

NUM_TESTS = 10  # number of random test cases

for i in range(NUM_TESTS):
    ql_input = {
        "water_source": random.choice(water_sources),
        "color": random.choice(colors),
        "odor": random.choice(odors),
        "nearby_land_use": random.choice(land_uses),
        "geological_event": random.choice(geological_events),
        "weather_event": random.choice(weather_events)
    }

    qn_input = {}  # Uncomment the next line to randomly override some quantitative inputs
    # qn_input = random_quantitative_override()

    payload = {"qualitative": ql_input, "quantitative": qn_input}

    print(f"\n===== TEST CASE {i+1} =====")
    print("Qualitative Input:", ql_input)
    if qn_input:
        print("Quantitative Override:", qn_input)

    response = requests.post(url, headers=headers, data=json.dumps(payload))
    
    try:
        result = response.json()
    except json.JSONDecodeError:
        result = response.text

    print("Status Code:", response.status_code)
    print("Response:", result)
