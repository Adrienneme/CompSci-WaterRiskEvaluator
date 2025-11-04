import React, { useState } from 'react';
import { Droplet } from 'lucide-react';
import LandingSection from './components/LandingSection';
import Navigation from './components/Navigation';
import QualitativeInputs from './components/QualitativeInputs';
import QuantitativeInputs from './components/QuantitativeInputs';
import ResultDisplay from "./components/ResultDisplay.jsx";
import { evaluateWaterQuality } from './utils/evaluation';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [results, setResults] = useState(null);

  const [inputs, setInputs] = useState({
    waterSource: '',
    color: '',
    odor: '',
    landUse: '',
    recentEvent: 'None',
    ph: '',
    bod: '',
    turbidity: '',
    dissolvedOxygen: '',
    nitrate: '',
    temperature: '',
    eColi: ''
  });

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const evaluationResults = evaluateWaterQuality(inputs);
    setResults(evaluationResults);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setInputs({
      waterSource: '',
      color: '',
      odor: '',
      landUse: '',
      recentEvent: 'None',
      ph: '',
      bod: '',
      turbidity: '',
      dissolvedOxygen: '',
      nitrate: '',
      temperature: '',
      eColi: ''
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
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
          <Droplet className="w-8 h-8 text-cyan-600" />
          <h1 className="text-2xl font-bold text-gray-900">Water Quality Evaluation System</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {results && <ResultsDisplay results={results} onReset={handleReset} />}
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
