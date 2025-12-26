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
import CalculationGuidePage from './components/CalculationGuidePage';
import { LayoutDashboard, Info, Languages } from 'lucide-react';
import { useLanguage } from './utils/LanguageContext';

type ViewState = 'calculator' | 'guide';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('calculator');
  const { t, language, setLanguage } = useLanguage();

  const [inputs, setInputs] = useState<CalculatorInputs>({
    worldSpeed: 1.25,
    baseTime: 1800,
    maxTimeAway: 24,
    multiplier: 100,
    exponent: 0.45,
    calculationMode: 'normal',
    enabledLevels: [1, 2, 3, 4], // Default all enabled
    army: { ...INITIAL_ARMY, axe: 10000, spear: 371 } // Default 10000 axes and 371 spears
  });

  const results = useMemo(() => calculateScavengeResults(inputs), [inputs]);

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  // Conditional Rendering for Views
  if (currentView === 'guide') {
    return <CalculationGuidePage onBack={() => setCurrentView('calculator')} />;
  }

  return (
    <div className="min-h-screen bg-[#d2c09e] dark:bg-slate-950 transition-colors duration-300 pb-20 font-sans">
      {/* Header */}
      <header className="bg-[#c1a264] border-b-4 border-[#7d510f] dark:bg-slate-900/80 dark:backdrop-blur-md dark:border-slate-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#7d510f] dark:bg-gradient-to-br dark:from-brand-500 dark:to-brand-700 p-2 rounded-lg text-[#f4e4bc] dark:text-white shadow-inner border border-[#f4e4bc]/30 dark:border-none">
              <LayoutDashboard size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#301c06] dark:text-white leading-none tracking-tight drop-shadow-sm">TW Scavenge Pro</h1>
              <span className="text-xs text-[#603000] dark:text-slate-400 font-bold opacity-80">{t.header.subtitle}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <div className="hidden sm:block text-xs font-mono font-bold text-[#603000] dark:text-slate-500 bg-[#e7d8af] dark:bg-slate-800 px-3 py-1.5 rounded-md border border-[#7d510f]/30 dark:border-slate-700 shadow-sm">
              v1.2.0
            </div>
            <div className="h-6 w-px bg-[#7d510f]/30 dark:bg-slate-700 hidden sm:block"></div>
            
            {/* Info Button - Switches to Guide Page */}
            <button
              onClick={() => setCurrentView('guide')}
              className="p-2 rounded-lg shadow-sm
                         bg-[#e7d8af] text-[#603000] border border-[#7d510f]/30 hover:bg-[#dec893] hover:text-[#402000]
                         dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-200
                         transition-colors focus:outline-none focus:ring-2 focus:ring-[#7d510f] dark:focus:ring-brand-500"
              title={t.header.guideButton}
            >
              <Info size={20} />
            </button>
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg shadow-sm flex items-center justify-center gap-2
                         bg-[#e7d8af] text-[#603000] border border-[#7d510f]/30 hover:bg-[#dec893] hover:text-[#402000]
                         dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-200
                         transition-colors focus:outline-none focus:ring-2 focus:ring-[#7d510f] dark:focus:ring-brand-500"
              title={language === 'pl' ? 'Switch to English' : 'Przełącz na Polski'}
            >
                <Languages size={18} />
                <span className="font-bold text-xs leading-none pt-0.5">{language.toUpperCase()}</span>
            </button>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
        
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
            <DetailedTable results={results} maxTimeAway={inputs.maxTimeAway} calculationMode={inputs.calculationMode} />
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