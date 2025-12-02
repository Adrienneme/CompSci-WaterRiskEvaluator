import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function QuantitativeInputs({ inputs, onChange }) {
  const [open, setOpen] = useState(false);
  const handleChange = (field, value) => onChange(field, value);

  const fields = [
    { label: 'Temperature (-5 - 100)', key: 'temperature', unit: '°C' },
    { label: 'pH Level (0-14)', key: 'pH', unit: '' },
    { label: 'Biochemical Oxygen Demand (1-10000)', key: 'bod', unit: 'mg/L' },
    { label: 'Turbidity (0-4000)', key: 'turbidity', unit: 'NTU' },
    { label: 'Dissolved Oxygen (0-40)', key: 'do', unit: 'mg/L' },
    { label: 'Nitrate (0-100)', key: 'nitrate', unit: 'mg/L' },
    { label: 'E. coli Count (0-5000000)', key: 'ecoli', unit: 'CFU/100mL' },
    { label: 'Total Dissolved Solids (0-100000)', key: 'tds', unit: 'mg/L' }
  ];

  return (
    <section className="bg-white shadow-lg rounded-xl p-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between"
      >
        <h2 className="text-2xl font-bold text-gray-900">
          Quantitative Parameters (Optional)
        </h2>
        {open ? <ChevronDown className="w-6 h-6 text-gray-700" /> : <ChevronRight className="w-6 h-6 text-gray-700" />}
      </button>

      {open && (
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {fields.map(({ label, key, unit }) => (
            <div key={key}>
              <label className="block text-gray-700 font-medium mb-2">{label}</label>
              <div className="flex items-center">
                <input
                  type="number"
                  value={inputs[key] || ''}
                  onChange={(e) => handleChange(key, e.target.value)}
                  placeholder={`Enter ${label}`}
                  className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
                />
                <span className="ml-2 text-gray-500">{unit}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
