export default function ResultDisplay({ results, onReset }) {
  const { overall, human, animals, plant } = results; // use actual keys

  const color =
    overall === 'Excellent' ? 'emerald' :
    overall === 'Good' ? 'cyan' :
    overall === 'Fair' ? 'amber' : 'red';

  const cardColor = (grade) => {
    if (grade === "safe") return "emerald";
    if (grade === "risky") return "amber";
    return "red"; // unsafe
  };

  const categoryCards = [
    { label: "🧑Human Consumption", value: human },
    { label: "🐶Animal Use", value: animals },
    { label: "🌽Irrigation / Agriculture", value: plant },
  ];

  return (
    <section className="bg-white shadow-lg rounded-xl p-6 mb-6 border-t-4 border-cyan-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Evaluation Results</h2>

      {/* Overall */}
      <div className={`bg-${color}-50 border border-${color}-200 rounded-lg p-6 mb-6`}>
        <h3 className={`text-${color}-800 text-xl font-semibold mb-2`}>
          Overall Water Quality: {overall}
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

      {/* 3 Category Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {categoryCards.map(({ label, value }) => {
          const grade = value || "Unknown";
          const col = cardColor(grade);

          return (
            <div
              key={label}
              className={`border border-${col}-200 bg-${col}-50 rounded-lg p-4`}
            >
              <h4 className={`text-${col}-800 font-semibold mb-1`}>{label}</h4>
              <p className="text-gray-700 font-medium">{grade}</p>
              <p className="text-sm text-gray-600 mt-1">
                {grade === "safe"
                  ? "Generally within acceptable safety limits."
                  : grade === "risky"
                  ? "May require treatment or caution depending on exposure."
                  : "Unsafe based on current parameters."}
              </p>
            </div>
          );
        })}
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
