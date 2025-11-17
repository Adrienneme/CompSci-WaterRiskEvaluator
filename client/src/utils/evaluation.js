export async function evaluateWaterQuality(inputs) {
  try {
    const toFloatOrNull = (v) =>
      v === "" || v === null || v === undefined ? null : parseFloat(v);

    const toIntOrNull = (v) =>
      v === "" || v === null || v === undefined ? null : parseInt(v, 10);

    const payload = {
      qualitative: {
        water_source: inputs.water_source || null,
        color: inputs.color || null,
        odor: inputs.odor || null,
        nearby_land_use: inputs.nearby_land_use || null,
        geological_event: inputs.geological_event || "None",
        weather_event: inputs.weather_event || "None",
      },
      quantitative: {
        temperature: toFloatOrNull(inputs.temperature),
        pH: toFloatOrNull(inputs.pH),
        turbidity: toFloatOrNull(inputs.turbidity),
        bod: toFloatOrNull(inputs.bod),
        do: toFloatOrNull(inputs.do),
        nitrate: toFloatOrNull(inputs.nitrate),
        ecoli: toIntOrNull(inputs.ecoli),
        tds: toFloatOrNull(inputs.tds),
      }
    };

    const response = await fetch("http://127.0.0.1:8000/evaluate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API error: ${response.status} - ${text}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error calling backend:", error);
    throw error;
  }
}
