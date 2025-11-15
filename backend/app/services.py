import pandas as pd
import joblib
import os
from .utils import convert_ql_to_qn

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
def water_evaluate(ql, qn):
    """
    Evaluate water quality using qualitative (ql) and quantitative (qn) inputs.
    - Converts qualitative inputs to quantitative using random values within mapped ranges.
    - Quantitative inputs override qualitative values.
    """
    # Convert qualitative to quantitative
    qualitative_inputs = convert_ql_to_qn(ql)

    # Merge user-provided quantitative values (override)
    final_inputs = {}
    for param in FEATURE_COLUMNS:
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

        key = qn_key_map[param]
        value = qn.get(key, None)  # user input
        if value is None:
            # Use qualitative input value (already numeric), optionally add small random noise
            value = qualitative_inputs.get(key, None)
        final_inputs[param] = value

    # Prepare DataFrame for model
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
