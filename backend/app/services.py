import pandas as pd
import joblib
import os
import random
from .ql_dict import ql_to_qn_map  # your original ql_dict.py

# ---- Load models at startup ----
MODEL_DIR = os.path.join(os.path.dirname(__file__), "models")
MODEL_PATH = os.path.join(MODEL_DIR, "water_quality_rf.pkl")
ENCODER_PATH = os.path.join(MODEL_DIR, "label_encoders.pkl")

model = joblib.load(MODEL_PATH)
label_encoders = joblib.load(ENCODER_PATH)

FEATURE_COLUMNS = [
    "pH",
    "Turbidity_NTU",
    "BOD_mg_L",
    "DO_mg_L",
    "Nitrate_mg_L",
    "Temperature_C",
    "Ecoli_CFU_per_100mL",
    "TDS_mg_L"
]

def convert_ql_to_qn(ql: dict):
    """
    Convert qualitative inputs to quantitative numeric values using ql_dict.py.
    Picks random values within the ranges defined in ql_to_qn_map.
    """
    final_qn = {}
    for key, value in ql.items():
        if not value:
            continue
        numeric_ranges = ql_to_qn_map(value)
        for param, rng in numeric_ranges.items():
            final_qn[param.lower()] = round(random.uniform(rng[0], rng[1]), 2)
    return final_qn

def water_evaluate(ql, qn):
    """
    Evaluate water quality using qualitative (ql) and quantitative (qn) inputs.
    Returns dictionary with human, animals, plant, overall.
    """
    qualitative_inputs = convert_ql_to_qn(ql)

    # Merge quantitative & qualitative inputs
    final_inputs = {}
    qn_key_map = {
        "pH": "pH",
        "Turbidity_NTU": "turbidity",
        "BOD_mg_L": "bod",
        "DO_mg_L": "do",
        "Nitrate_mg_L": "nitrate",
        "Temperature_C": "temperature",
        "Ecoli_CFU_per_100mL": "ecoli",
        "TDS_mg_L": "tds"
    }

    for param in FEATURE_COLUMNS:
        key = qn_key_map[param]
        value = qn.get(key) or qualitative_inputs.get(key) or 0
        final_inputs[param] = value

    # Prepare DataFrame
    input_df = pd.DataFrame([final_inputs], columns=FEATURE_COLUMNS)

    # Predict
    try:
        pred = model.predict(input_df)[0]
    except Exception as e:
        raise RuntimeError(f"Model prediction failed: {str(e)}")

    # Decode predictions
    decoded_pred = {}
    for i, col in enumerate(["human", "animals", "plant", "overall"]):
        decoded_pred[col] = label_encoders[col].inverse_transform([pred[i]])[0]

    return decoded_pred


