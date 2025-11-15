import random

def convert_ql_to_qn(ql: dict):
    """
    Convert qualitative inputs to quantitative numeric values.
    Picks distinct random values within wider, non-overlapping ranges for each qualitative option.
    """
    # Define clear numeric mappings for qualitative options
    qualitative_map = {
        "water_source": {
            "River": (6.5, 7.5),
            "Tap": (7.0, 8.0),
            "LakePond": (6.0, 7.0),
            "RainWater": (6.0, 7.0),
            "ReservoirDam": (6.5, 7.5),
            "ShallowWell": (6.0, 7.0),
            "UndergroundAquifer": (7.0, 8.0)
        },
        "color": {
            "Clear": (0, 2),
            "SlightlyCloudy": (2, 4),
            "BrownMuddy": (4, 6),
            "GreenAlgal": (6, 8),
            "Yellowish": (8, 10),
            "BlackGrey": (10, 12),
            "OilySheen": (12, 14)
        },
        "odor": {
            "None": (0, 1),
            "EarthyMusty": (1, 2),
            "Sewage": (3, 4),
            "FishySmell": (2, 3),
            "ChemicalSmell": (4, 5),
            "SulfurRottenEgg": (5, 6),
            "LandfillLeachate": (6, 7),
            "ChlorineSmell": (7, 8)
        },
        "nearby_land_use": {
            "Urban": (0, 2),
            "Agriculture": (2, 4),
            "ProtectedForest": (4, 6),
            "LivestockGrazing": (6, 8),
            "MiningSite": (8, 10),
            "Aquaculture": (10, 12),
            "UrbanResidential": (12, 14)
        },
        "geological_event": {
            "None": (0, 1),
            "Earthquake": (1, 2),
            "LandslideErosion": (2, 3),
            "VolcanicActivity": (3, 4),
            "SoilErosion": (4, 5),
            "LandSubsidence": (5, 6),
            "NoneGeological": (6, 7)
        },
        "weather_event": {
            "None": (0, 1),
            "HeavyRainfall": (1, 2),
            "Typhoon": (2, 3),
            "Heatwave": (3, 4),
            "Drought": (4, 5),
            "StormSurge": (5, 6),
            "NoneWeather": (6, 7)
        }
    }

    final_qn = {}
    for key, value in ql.items():
        if value in qualitative_map.get(key, {}):
            rng = qualitative_map[key][value]
            final_qn[key.lower()] = round(random.uniform(rng[0], rng[1]), 2)
        else:
            # fallback numeric value if not found
            final_qn[key.lower()] = 0.0

    return final_qn
