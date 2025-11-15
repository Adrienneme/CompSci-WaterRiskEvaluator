import React, { useState } from 'react';
import LandingSection from './components/LandingSection';
import Navigation from './components/Navigation';
import QualitativeInputs from './components/QualitativeInputs';
import QuantitativeInputs from './components/QuantitativeInputs';
import ResultDisplay from './components/ResultDisplay.jsx';
import { evaluateWaterQuality } from './utils/evaluation';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [results, setResults] = useState(null);

  const [inputs, setInputs] = useState({
    water_source: '',
    color: '',
    odor: '',
    nearby_land_use: '',
    geological_event: 'None',
    weather_event: 'None',
    temperature: '',
    pH: '',
    turbidity: '',
    bod: '',
    do: '',
    nitrate: '',
    ecoli: '',
    tds: ''
  });

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    inputs.water_source &&
    inputs.color &&
    inputs.odor &&
    inputs.nearby_land_use;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Please complete all required qualitative fields.");
      return;
    }

    try {
      const evaluationResults = await evaluateWaterQuality(inputs);
      setResults(evaluationResults);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      alert("Error evaluating water quality: " + err.message);
    }
  };

  const handleReset = () => {
    setInputs({
      water_source: '',
      color: '',
      odor: '',
      nearby_land_use: '',
      geological_event: 'None',
      weather_event: 'None',
      temperature: '',
      pH: '',
      turbidity: '',
      bod: '',
      do: '',
      nitrate: '',
      ecoli: '',
      tds: ''
    });
    setResults(null);
  };

  if (!showForm) {
    return (
      <>
        <Navigation currentPage="home" onNavigate={page => page === 'evaluate' && setShowForm(true)} />
        <LandingSection onGetStarted={() => setShowForm(true)} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <Navigation currentPage="evaluate" onNavigate={page => page === 'home' && setShowForm(false)} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {results && <ResultDisplay results={results} onReset={handleReset} />}
        <form onSubmit={handleSubmit} className="space-y-6">
          <QualitativeInputs inputs={inputs} onChange={handleInputChange} />
          <QuantitativeInputs inputs={inputs} onChange={handleInputChange} />
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Evaluate Water Quality
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
