import { Droplet, Beaker, Activity, AlertTriangle } from 'lucide-react';

export default function LandingSection({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-cyan-600 p-4 rounded-full">
              <Droplet className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Water Quality Evaluation System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Assess water safety through comprehensive qualitative and quantitative analysis.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Qualitative Assessment</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Evaluate observable characteristics that provide immediate insights into potential contamination.
              These qualitative clues are also part of WHO & EPA field inspection guidelines for initial screening.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Water Source:</strong> Identifies natural contamination risks.</li>
              <li>• <strong>Color & Odor:</strong> Visual and olfactory indicators of pollutants.</li>
              <li>• <strong>Land Use:</strong> Environment impacts water through runoff.</li>
              <li>• <strong>Recent Events:</strong> Changes like floods or droughts.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Beaker className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Quantitative Analysis</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Measure chemical and biological parameters that define water safety.
              These values are interpreted following international standards such as WHO Guidelines for Drinking Water Quality and US EPA thresholds.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>pH Level:</strong> Measures acidity.</li>
              <li>• <strong>BOD & DO:</strong> Indicate organic pollution levels.</li>
              <li>• <strong>Turbidity:</strong> Cloudiness measure.</li>
              <li>• <strong>Nitrate & E. coli:</strong> Runoff and fecal indicators.</li>
            </ul>
          </div>
        </div>

        {/* NEW Scientific Basis Section */}
        <div className="bg-white border-l-4 border-cyan-600 rounded-md p-6 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Scientific Basis & Thresholds</h3>
          <p className="text-gray-700">
            This platform applies evidence-based interpretation using data ranges referenced from WHO (Guidelines for Drinking Water Quality, 2022), US EPA (National Primary Drinking Water Regulations), and peer-reviewed hydrology studies. Each parameter influences the biological, chemical, or ecological condition of water—and the combined profile determines safety for human consumption and agricultural use.
          </p>
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Comprehensive Safety Evaluation</h3>
              <p className="text-amber-800">
                The system evaluates water quality for human consumption, irrigation, and animal welfare.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onGetStarted}
            className="bg-cyan-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Water Quality Assessment
          </button>
        </div>
      </div>
    </div>
  );
}
