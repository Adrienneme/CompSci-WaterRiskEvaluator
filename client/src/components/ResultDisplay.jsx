import { CheckCircle, XCircle } from 'lucide-react';

export default function ResultDisplay({ results, onReset }) {
  const { overall, details } = results;

  const color =
    overall === 'Excellent' ? 'emerald' :
    overall === 'Good' ? 'cyan' :
    overall === 'Fair' ? 'amber' : 'red';

  return (
    <section className="bg-white shadow-lg rounded-xl p-6 mb-6 border-t-4 border-cyan-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Evaluation Results</h2>

      <div className={`bg-${color}-50 border border-${color}-200 rounded-lg p-6 mb-4`}>
        <h3 className={`text-${color}-800 text-xl font-semibold mb-2`}>
          Overall Quality: {overall}
        </h3>
        <p className="text-gray-700">
          {overall === 'Excellent'
            ? 'Water quality is ideal for drinking and all uses.'
            : overall === 'Good'
            ? 'Water is safe but should be monitored occasionally.'
            : overall === 'Fair'
            ? 'Water may need treatment before drinking.'
            : 'Water quality is poor and unsafe for consumption.'}
        </p>
      </div>

      <div className="space-y-3">
        {details.map((d, i) => (
          <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-3">
              {d.status === 'Pass'
                ? <CheckCircle className="w-5 h-5 text-emerald-600" />
                : <XCircle className="w-5 h-5 text-red-600" />}
              <span className="font-medium text-gray-800">{d.parameter}</span>
            </div>
            <span className="text-gray-600">{d.value}</span>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={onReset}
          className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-all"
        >
          Evaluate Another Sample
        </button>
      </div>
    </section>
  );
}
