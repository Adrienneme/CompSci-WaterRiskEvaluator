import { Droplet, Home, Beaker } from 'lucide-react';

export default function Navigation({ currentPage, onNavigate }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <Droplet className="w-7 h-7 text-cyan-600" />
            <span className="text-lg font-bold text-gray-900">WaterQuality</span>
          </div>

          <div className="flex gap-1">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 'home'
                  ? 'bg-cyan-50 text-cyan-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button
              onClick={() => onNavigate('evaluate')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 'evaluate'
                  ? 'bg-cyan-50 text-cyan-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Beaker className="w-5 h-5" />
              <span>Evaluate</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
