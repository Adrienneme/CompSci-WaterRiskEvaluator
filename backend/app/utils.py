import random
import statistics
from .ql_dict import ql_to_qn_map


def convert_ql_to_qn(ql: dict):
    """
    Convert qualitative inputs to quantitative numeric values.
    Picks random values within the defined ranges for each qualitative option.
    """
    final_qn = {}

    # Map qualitative inputs
    for key, value in ql.items():
        if value:
            ranges = ql_to_qn_map(value)
            for param, rng in ranges.items():
                # pick a random value within the range
                if isinstance(rng, tuple) and len(rng) == 2:
                    final_qn[param] = round(random.uniform(rng[0], rng[1]), 2)
                else:
                    # fallback if not a tuple
                    final_qn[param] = rng

    return final_qn