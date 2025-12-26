import React, { useMemo, useState, useEffect } from 'react';
import { CalculationResult } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, Wallet, Clock } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';

interface Props {
  results: CalculationResult[];
}

const ResultsDashboard: React.FC<Props> = ({ results }) => {
  const { t } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  // Custom Tooltip Component wrapped to access `t`
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#fff5da] dark:bg-slate-800 border-2 border-[#c1a264] dark:border-slate-700 p-3 rounded-lg shadow-xl z-50">
          <p className="font-bold text-[#402000] dark:text-white mb-1 text-sm">{label}</p>
          <p className="text-sm font-semibold text-[#7d510f] dark:text-brand-400">
            {Math.round(payload[0].value as number).toLocaleString()} <span className="text-[#603000] dark:text-slate-400 font-normal">{t.levels.resource}/h</span>
          </p>
        </div>
      );
    }
    return null;
  };

  // Monitor theme changes for Chart colors
  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const bestOption = useMemo(() => 
    results.reduce((prev, current) => (prev.lootPerHour > current.lootPerHour) ? prev : current), 
  [results]);

  const maxLootPerHour = Math.max(...results.map(r => r.lootPerHour));
  
  // Chart styling based on theme
  const activeBarColor = isDark ? '#2dd4bf' : '#7d510f'; // Brand Teal vs Tribal Wood
  const normalBarColor = isDark ? '#475569' : '#c1a264'; // Slate 600 vs Tribal Gold
  const gridColor = isDark ? '#334155' : '#c1a264';
  const axisTextColor = isDark ? '#94a3b8' : '#603000';

  const bestOptionName = t.levels.names[bestOption.level.code as keyof typeof t.levels.names];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in w-full">
        
        {/* Hero Card: Best Option */}
        <div className="relative overflow-hidden bg-[#f4e4bc] dark:bg-slate-900 rounded-lg shadow-lg border-2 border-[#c1a264] dark:border-slate-800 flex flex-col min-h-[320px]">
           <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
              <TrendingUp size={120} className="text-[#7d510f] dark:text-brand-500/50" />
           </div>
           
           <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e7d8af] dark:bg-brand-900/30 text-[#402000] dark:text-brand-300 border border-[#c1a264] dark:border-brand-500/30 text-xs font-bold uppercase tracking-wider w-fit mb-4">
               <TrendingUp size={14} className="dark:text-brand-400" />
               {t.dashboard.recommendation}
             </div>
             
             <h3 className="text-3xl font-bold text-[#301c06] dark:text-white mb-2">
               {bestOptionName}
             </h3>
             <p className="text-[#603000] dark:text-slate-400 mb-8 max-w-md text-sm md:text-base">
               {t.dashboard.bestOptionDesc.replace('{value}', bestOption.lootPerHour.toFixed(0))}
             </p>

             <div className="mt-auto grid grid-cols-2 gap-4">
               <div className="bg-[#fff5da] dark:bg-slate-800 p-4 rounded-lg border border-[#c1a264] dark:border-slate-700/50 transition-colors">
                  <span className="flex items-center gap-1.5 text-xs text-[#603000] dark:text-slate-400 mb-1">
                    <Wallet size={12} /> {t.dashboard.revenue}
                  </span>
                  <span className="block text-2xl font-bold text-[#7d510f] dark:text-brand-400">
                    {Math.round(bestOption.lootPerHour).toLocaleString()}
                    <span className="text-xs font-normal text-[#603000]/60 dark:text-slate-500 ml-1">/ h</span>
                  </span>
               </div>
               <div className="bg-[#fff5da] dark:bg-slate-800 p-4 rounded-lg border border-[#c1a264] dark:border-slate-700/50 transition-colors">
                  <span className="flex items-center gap-1.5 text-xs text-[#603000] dark:text-slate-400 mb-1">
                    <Clock size={12} /> {t.dashboard.cycle}
                  </span>
                  <span className="block text-2xl font-bold text-[#301c06] dark:text-slate-200">
                    {bestOption.durationFormatted}
                  </span>
               </div>
             </div>
           </div>
           
           {/* Decorative accent bar */}
           <div className="h-1.5 w-full bg-gradient-to-r from-[#7d510f] to-[#c1a264] dark:from-brand-500 dark:to-brand-800"></div>
        </div>

        {/* Chart Card */}
        <div className="bg-[#f4e4bc] dark:bg-slate-900 p-6 md:p-8 rounded-lg shadow-lg border-2 border-[#c1a264] dark:border-slate-800 flex flex-col min-h-[320px]">
          <div className="mb-6">
             <h3 className="text-lg font-bold text-[#301c06] dark:text-white">{t.dashboard.analysis}</h3>
             <p className="text-sm text-[#603000] dark:text-slate-400 mt-1">{t.dashboard.analysisSubtitle}</p>
          </div>
          <div className="flex-1 min-h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={results}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke={gridColor} opacity={isDark ? 0.2 : 0.3} />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="level.code" 
                  type="category" 
                  tick={{fontSize: 12, fill: axisTextColor, fontWeight: 600}} 
                  width={30} 
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  cursor={{fill: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(125, 81, 15, 0.1)'}}
                  content={<CustomTooltip />}
                />
                <Bar dataKey="lootPerHour" radius={[0, 6, 6, 0]} barSize={32}>
                  {results.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.lootPerHour === maxLootPerHour ? activeBarColor : normalBarColor} 
                      className="transition-all duration-300 hover:opacity-90"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
    </div>
  );
};

export default ResultsDashboard;