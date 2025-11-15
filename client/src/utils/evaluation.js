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
        temperature: inputs.temperature ? parseFloat(inputs.temperature) : null,
        pH: inputs.pH ? parseFloat(inputs.pH) : null,
        turbidity: inputs.turbidity ? parseFloat(inputs.turbidity) : null,
        bod: inputs.bod ? parseFloat(inputs.bod) : null,
        do: inputs.do ? parseFloat(inputs.do) : null,
        nitrate: inputs.nitrate ? parseFloat(inputs.nitrate) : null,
        ecoli: inputs.ecoli ? parseInt(inputs.ecoli) : null,
        tds: inputs.tds ? parseFloat(inputs.tds) : null,
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
