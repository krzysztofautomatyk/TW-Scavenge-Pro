import React, { useMemo } from 'react';
import { CalculationResult } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, TooltipProps } from 'recharts';
import { TrendingUp, Wallet, Clock } from 'lucide-react';

interface Props {
  results: CalculationResult[];
}

// Custom Tooltip Component for better styling and Dark Mode support
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#fff5da] dark:bg-slate-800 border-2 border-[#c1a264] dark:border-slate-700 p-3 rounded-lg shadow-xl z-50">
        <p className="font-bold text-[#402000] dark:text-white mb-1 text-sm">{label}</p>
        <p className="text-sm font-semibold text-[#7d510f] dark:text-brand-400">
          {Math.round(payload[0].value as number).toLocaleString()} <span className="text-[#603000] dark:text-slate-400 font-normal">Surowce/h</span>
        </p>
      </div>
    );
  }
  return null;
};

const ResultsDashboard: React.FC<Props> = ({ results }) => {
  const bestOption = useMemo(() => 
    results.reduce((prev, current) => (prev.lootPerHour > current.lootPerHour) ? prev : current), 
  [results]);

  const maxLootPerHour = Math.max(...results.map(r => r.lootPerHour));
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in w-full">
        
        {/* Hero Card: Best Option */}
        <div className="relative overflow-hidden bg-[#f4e4bc] dark:bg-slate-900 rounded-lg shadow-lg border-2 border-[#c1a264] dark:border-slate-800 flex flex-col min-h-[320px]">
           <div className="absolute top-0 right-0 p-3 opacity-10">
              <TrendingUp size={120} className="text-[#7d510f] dark:text-brand-400" />
           </div>
           
           <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e7d8af] dark:bg-brand-900/50 text-[#402000] dark:text-brand-300 border border-[#c1a264] dark:border-none text-xs font-bold uppercase tracking-wider w-fit mb-4">
               <TrendingUp size={14} />
               Rekomendacja
             </div>
             
             <h3 className="text-3xl font-bold text-[#301c06] dark:text-white mb-2">
               {bestOption.level.name}
             </h3>
             <p className="text-[#603000] dark:text-slate-400 mb-8 max-w-md">
               Ten poziom zapewnia najwyższy zwrot surowców w czasie ({bestOption.lootPerHour.toFixed(0)}/h), maksymalizując wydajność Twoich wojsk.
             </p>

             <div className="mt-auto grid grid-cols-2 gap-4">
               <div className="bg-[#fff5da] dark:bg-slate-800 p-4 rounded-lg border border-[#c1a264] dark:border-slate-700/50">
                  <span className="flex items-center gap-1.5 text-xs text-[#603000] dark:text-slate-400 mb-1">
                    <Wallet size={12} /> Przychód
                  </span>
                  <span className="block text-2xl font-bold text-[#7d510f] dark:text-brand-400">
                    {Math.round(bestOption.lootPerHour).toLocaleString()}
                    <span className="text-xs font-normal text-[#603000]/60 dark:text-slate-400 ml-1">/ h</span>
                  </span>
               </div>
               <div className="bg-[#fff5da] dark:bg-slate-800 p-4 rounded-lg border border-[#c1a264] dark:border-slate-700/50">
                  <span className="flex items-center gap-1.5 text-xs text-[#603000] dark:text-slate-400 mb-1">
                    <Clock size={12} /> Cykl
                  </span>
                  <span className="block text-2xl font-bold text-[#301c06] dark:text-slate-200">
                    {bestOption.durationFormatted}
                  </span>
               </div>
             </div>
           </div>
           
           {/* Decorative gradient bar - Tribal Colors in Light Mode */}
           <div className="h-1.5 w-full bg-gradient-to-r from-[#7d510f] to-[#c1a264] dark:from-brand-500 dark:to-emerald-400"></div>
        </div>

        {/* Chart Card */}
        <div className="bg-[#f4e4bc] dark:bg-slate-900 p-6 md:p-8 rounded-lg shadow-lg border-2 border-[#c1a264] dark:border-slate-800 flex flex-col min-h-[320px]">
          <div className="mb-6 flex justify-between items-end">
             <div>
                <h3 className="text-lg font-bold text-[#301c06] dark:text-white">Analiza Wydajności</h3>
                <p className="text-sm text-[#603000] dark:text-slate-400 mt-1">Porównanie przychodu surowców na godzinę.</p>
             </div>
          </div>
          <div className="flex-1 min-h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={results}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#c1a264" opacity={0.3} />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="level.code" 
                  type="category" 
                  tick={{fontSize: 12, fill: '#603000', fontWeight: 600}} 
                  width={30} 
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  cursor={{fill: 'rgba(125, 81, 15, 0.1)'}}
                  content={<CustomTooltip />}
                />
                <Bar dataKey="lootPerHour" radius={[0, 6, 6, 0]} barSize={32}>
                  {results.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.lootPerHour === maxLootPerHour ? '#7d510f' : '#c1a264'} 
                      className="transition-all duration-300 hover:opacity-80"
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