import React, { useState, useMemo } from 'react';
import { CalculatorInputs } from './types';
import { calculateScavengeResults } from './utils/scavengeMath';
import { INITIAL_ARMY } from './utils/unitData';
import CalculatorForm from './components/CalculatorForm';
import ResultsDashboard from './components/ResultsDashboard';
import DetailedTable from './components/DetailedTable';
import LevelCards from './components/LevelCards';
import InfoSection from './components/InfoSection';
import ThemeToggle from './components/ThemeToggle';
import { LayoutDashboard } from 'lucide-react';

const App: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    worldSpeed: 1.25,
    baseTime: 1800,
    maxTimeAway: 24,
    multiplier: 100,
    exponent: 0.45,
    army: { ...INITIAL_ARMY, axe: 10000 } // Default 10000 axes
  });

  const results = useMemo(() => calculateScavengeResults(inputs), [inputs]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pb-20">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-brand-500 to-brand-700 p-2 rounded-xl text-white shadow-lg shadow-brand-500/30">
              <LayoutDashboard size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white leading-none tracking-tight">TW Scavenge Pro</h1>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Advanced Calculator</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden sm:block text-xs font-mono font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
              v1.2.0
            </div>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* 1. Configuration (Full Width) */}
        <div className="w-full">
            <CalculatorForm inputs={inputs} setInputs={setInputs} />
        </div>

        {/* 2. Level Details Cards (Full Width) */}
        <div className="w-full">
            <LevelCards results={results} />
        </div>

        {/* 3. Detailed Table (Full Width) */}
        <div className="w-full">
            <DetailedTable results={results} maxTimeAway={inputs.maxTimeAway} />
        </div>
        
        {/* 4. Info Section (Full Width) */}
        <div className="w-full">
            <InfoSection />
        </div>

        {/* 5. Recommendation & Analysis (50% / 50%) */}
        <div className="w-full">
            <ResultsDashboard results={results} />
        </div>

      </main>
    </div>
  );
};

export default App;