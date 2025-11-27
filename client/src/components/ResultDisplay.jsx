export default function ResultDisplay({ results, onReset }) {
  const { overall, human, animals, plant } = results || {};

  const gradeClasses = {
    safe: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-800",
    },
    risky: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-800",
    },
    unsafe: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
    },
    unknown: {
      bg: "bg-gray-50",
      border: "border-gray-200",
      text: "text-gray-800",
    },
  };

  const normalizeGrade = (grade) =>
    grade === "safe" || grade === "risky" || grade === "unsafe"
      ? grade
      : "unknown";

  const overallKey = normalizeGrade(overall);
  const overallCol = gradeClasses[overallKey];

  const categoryCards = [
    { label: "🧑 Human Consumption", value: human },
    { label: "🐶 Animal Use", value: animals },
    { label: "🌽 Irrigation / Agriculture", value: plant },
  ];

  return (
    <section className="bg-white shadow-lg rounded-xl p-6 mb-6 border-t-4 border-cyan-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Evaluation Results
      </h2>

      {/* Overall Result */}
      <div
        className={`${overallCol.bg} ${overallCol.border} rounded-lg p-6 mb-6`}
      >
        <h3 className={`${overallCol.text} text-xl font-semibold mb-2`}>
          Overall Water Quality: {overall || "Unknown"}
        </h3>

        <p className="text-gray-700">
          {overall === "safe"
            ? "Water quality is ideal for drinking and all uses."
            : overall === "risky"
            ? "Water is safe but should be monitored occasionally."
            : overall === "unsafe"
            ? "Water may need treatment before drinking."
            : "Water quality could not be fully determined from the data provided."}
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {categoryCards.map(({ label, value }) => {
          const grade = value || "unknown";
          const key = normalizeGrade(grade);
          const col = gradeClasses[key];

          return (
            <div
              key={label}
              className={`${col.bg} ${col.border} rounded-lg p-4`}
            >
              <h4 className={`${col.text} font-semibold mb-1`}>{label}</h4>
              <p className="text-gray-700 font-medium capitalize">
                {grade}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {grade === "safe"
                  ? "Generally within acceptable safety limits."
                  : grade === "risky"
                  ? "May require treatment or caution depending on exposure."
                  : grade === "unsafe"
                  ? "Unsafe based on current parameters."
                  : "No clear assessment available for this category."}
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
