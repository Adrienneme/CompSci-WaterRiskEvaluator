export default function QualitativeInputs({ inputs, onChange }) {
  const handleSelect = (field, value) => onChange(field, value);

  return (
    <section className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Qualitative Parameters</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Water Source</label>
          <select
            value={inputs.waterSource}
            onChange={(e) => handleSelect('waterSource', e.target.value)}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select source</option>
            <option>River</option>
            <option>Lake</option>
            <option>Well</option>
            <option>Tap</option>
            <option>Rainwater</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Color</label>
          <select
            value={inputs.color}
            onChange={(e) => handleSelect('color', e.target.value)}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select color</option>
            <option>Clear</option>
            <option>Slightly Cloudy</option>
            <option>Brownish</option>
            <option>Greenish</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Odor</label>
          <select
            value={inputs.odor}
            onChange={(e) => handleSelect('odor', e.target.value)}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select odor</option>
            <option>None</option>
            <option>Earthy</option>
            <option>Fishy</option>
            <option>Sewage-like</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Nearby Land Use</label>
          <select
            value={inputs.landUse}
            onChange={(e) => handleSelect('landUse', e.target.value)}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select land use</option>
            <option>Urban</option>
            <option>Agricultural</option>
            <option>Industrial</option>
            <option>Forest</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-2">Recent Geological/Weather Events</label>
          <select
            value={inputs.recentEvent}
            onChange={(e) => handleSelect('recentEvent', e.target.value)}
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
          >
            <option>None</option>
            <option>Flood</option>
            <option>Heavy Rainfall</option>
            <option>Drought</option>
            <option>Landslide</option>
          </select>
        </div>
      </div>
    </section>
  );
}
