import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function QuantitativeInputs({ inputs, onChange }) {
  const [open, setOpen] = useState(false);

  const handleChange = (field, value) => onChange(field, value);

  return (
    <section className="bg-white shadow-lg rounded-xl p-6">
      
      {/* HEADER / TOGGLE BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between"
      >
        <h2 className="text-2xl font-bold text-gray-900">
          Quantitative Parameters (Optional)
        </h2>

        {open ? (
          <ChevronDown className="w-6 h-6 text-gray-700" />
        ) : (
          <ChevronRight className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* COLLAPSIBLE BODY */}
      {open && (
        <div className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Temperature', key: 'temperature', unit: '°C' },
              { label: 'pH Level', key: 'ph', unit: '' },
              { label: 'Biochemical Oxygen Demand (BOD)', key: 'bod', unit: 'mg/L' },
              { label: 'Turbidity', key: 'turbidity', unit: 'NTU' },
              { label: 'Dissolved Oxygen (DO)', key: 'dissolvedOxygen', unit: 'mg/L' },
              { label: 'Nitrate', key: 'nitrate', unit: 'mg/L' },
              { label: 'E. coli Count', key: 'eColi', unit: 'CFU/100mL' },
              { label: 'Total Dissolved Solids (TDS)', key: 'TDS', unit: 'mg/L' }
            ].map(({ label, key, unit }) => (
              <div key={key}>
                <label className="block text-gray-700 font-medium mb-2">{label}</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={inputs[key]}
                    onChange={(e) => handleChange(key, e.target.value)}
                    placeholder={`Enter ${label}`}
                    className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500"
                  />
                  <span className="ml-2 text-gray-500">{unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}
