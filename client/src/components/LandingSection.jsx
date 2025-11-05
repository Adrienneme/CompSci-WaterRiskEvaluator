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

          {/* Qualitative */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Qualitative Assessment</h2>
            </div>
            <p className="text-gray-600 mb-4">
              These are field-observed characteristics. They do not measure a numeric value, but they are used by WHO & EPA
              inspectors because visual and contextual indicators strongly correlate to likely contamination type.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Water Source:</strong> measures inherent hydrogeologic risk (groundwater vs surface water) and indicates probability of natural vs human contamination.</li>
              <li>• <strong>Color & Odor:</strong> measures visible/molecular contamination profiles. Unusual color or bad smell usually means organic decay or chemical pollution.</li>
              <li>• <strong>Land Use:</strong> measures dominant contamination probability based on the landscape (agricultural = nitrate risk, industrial = chemical/metals, residential = domestic waste/sewage).</li>
              <li>• <strong>Recent Events:</strong> measures increased contamination risk due to disturbance (floods = higher pathogen load, drought = concentrated chemicals).</li>
            </ul>
          </div>

          {/* Quantitative */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Beaker className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Quantitative Analysis</h2>
            </div>
            <p className="text-gray-600 mb-4">
              These are laboratory / device-based measurements. Each one measures a different dimension of contamination.
              Combined together, they reveal which pollution pathway is present.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>pH Level:</strong> measures acidity/alkalinity. Affects solubility of heavy metals and microbial survival.</li>
              <li>• <strong>BOD:</strong> measures organic load by how much oxygen microbes consume. High BOD = high organic pollution.</li>
              <li>• <strong>DO:</strong> measures dissolved oxygen availability. Low DO indicates that the water ecosystem is suffocating due to pollution.</li>
              <li>• <strong>Turbidity:</strong> measures suspended particles. Higher turbidity protects pathogens from disinfection and indicates possible waste or erosion.</li>
              <li>• <strong>Nitrate:</strong> measures agricultural runoff/sewage presence. Excess nitrate harms infants and crops.</li>
              <li>• <strong>E. coli:</strong> measures fecal contamination. Direct indicator of pathogen presence → immediately unsafe.</li>
              <li>• <strong>TDS (mg/L):</strong> measures total dissolved minerals/metals/organics. High TDS indicates chemical imbalance and can affect taste, corrosion, and crop compatibility.</li>
            </ul>
          </div>
        </div>

        {/* Scientific Basis */}
        <div className="bg-white border-l-4 border-cyan-600 rounded-md p-6 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Scientific Basis & Thresholds</h3>
          <p className="text-gray-700">
            This platform uses evidence-based interpretation using WHO (2022) and US EPA standards. Each parameter
            relates to a contamination mechanism. The system looks at patterns — not just individual numbers —
            to determine risk for humans, animals, and plant irrigation.
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
