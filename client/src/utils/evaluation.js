export async function evaluateWaterQuality(inputs) {
  try {
    const payload = {
      qualitative: {
        water_source: inputs.water_source || 'None',
        color: inputs.color || 'None',
        odor: inputs.odor || 'None',
        nearby_land_use: inputs.nearby_land_use || 'None',
        geological_event: inputs.geological_event || 'None',
        weather_event: inputs.weather_event || 'None',
      },
      quantitative: {
        temperature: parseFloat(inputs.temperature) || 25, // default 25°C
        pH: parseFloat(inputs.pH) || 7,                     // neutral pH default
        turbidity: parseFloat(inputs.turbidity) || 0,
        bod: parseFloat(inputs.bod) || 0,
        do: parseFloat(inputs.do) || 8,                     // typical DO mg/L
        nitrate: parseFloat(inputs.nitrate) || 0,
        ecoli: parseInt(inputs.ecoli) || 0,
        tds: parseFloat(inputs.tds) || 0,
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
