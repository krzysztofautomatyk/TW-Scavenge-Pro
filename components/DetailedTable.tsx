import React from 'react';
import { CalculationResult } from '../types';
import { Database } from 'lucide-react';

interface Props {
  results: CalculationResult[];
  maxTimeAway: number;
}

const DetailedTable: React.FC<Props> = ({ results, maxTimeAway }) => {
  // Baseline is the first result (usually FF/Level 1)
  const baselineProfit = results.length > 0 ? results[0].lootWithinMaxTime : 0;

  return (
    <div className="bg-[#f4e4bc] dark:bg-slate-900 rounded-lg shadow-lg border-2 border-[#c1a264] dark:border-slate-800 overflow-hidden animate-fade-in">
        <div className="p-5 border-b border-[#c1a264] dark:border-slate-800 flex items-center gap-2 bg-[#e7d8af] dark:bg-transparent">
           <Database size={18} className="text-[#7d510f] dark:text-slate-400" />
           <h3 className="font-bold text-[#301c06] dark:text-white">Pełne zestawienie danych</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="text-xs text-[#402000] dark:text-slate-400 uppercase bg-[#c1a264] dark:bg-slate-800/50 border-b border-[#7d510f] dark:border-slate-800">
              <tr>
                <th className="px-4 py-4 font-bold tracking-wider text-[#301c06] dark:text-slate-200">Poziom</th>
                <th className="px-4 py-4 font-bold tracking-wider text-right hidden lg:table-cell text-[#301c06] dark:text-slate-200">Jednostki</th>
                <th className="px-4 py-4 font-bold tracking-wider text-right hidden xl:table-cell text-[#301c06] dark:text-slate-200">Pojemność</th>
                <th className="px-4 py-4 font-bold tracking-wider text-right text-[#301c06] dark:text-slate-200">Łup (1x)</th>
                <th className="px-4 py-4 font-bold tracking-wider text-right text-[#301c06] dark:text-slate-200">Czas (1x)</th>
                
                {/* Improved Runs/Time Headers - Centered and Grouped */}
                <th className="px-4 py-4 font-bold tracking-wider text-center border-l border-[#b0965b] dark:border-slate-700 text-[#301c06] dark:text-slate-200 bg-[#b8a069]/20 dark:bg-slate-800/30">
                    Liczba wypraw
                </th>
                <th className="px-4 py-4 font-bold tracking-wider text-center border-r border-[#b0965b] dark:border-slate-700 text-[#301c06] dark:text-slate-200 bg-[#b8a069]/20 dark:bg-slate-800/30">
                    Łączny czas
                </th>
                
                <th className="px-4 py-4 font-bold tracking-wider text-right text-[#301c06] dark:text-slate-200">
                    Zysk ({maxTimeAway}h)
                </th>
                
                {/* New Comparison Header */}
                <th className="px-4 py-4 font-bold tracking-wider text-right text-[#301c06] dark:text-slate-200">
                    Porównanie
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#c1a264]/30 dark:divide-slate-800">
              {results.map((res, index) => {
                const isBaseline = index === 0;
                const difference = res.lootWithinMaxTime - baselineProfit;
                // Calculate percentage difference relative to baseline
                const percentDiff = baselineProfit !== 0 ? (difference / baselineProfit) * 100 : 0;
                
                const diffFormatted = isBaseline 
                    ? "100%" 
                    : `${percentDiff > 0 ? '+' : ''}${percentDiff.toFixed(1)}%`;
                
                const diffColorClass = isBaseline 
                    ? "text-[#603000] dark:text-slate-500 font-normal opacity-70" 
                    : (percentDiff > 0 ? "text-emerald-700 dark:text-emerald-400" : "text-red-700 dark:text-red-400");

                return (
                <tr 
                    key={res.level.id} 
                    className={`${index % 2 === 0 ? 'bg-[#f4e4bc] dark:bg-transparent' : 'bg-[#fff5da] dark:bg-slate-800/30'} hover:bg-[#e7d8af] dark:hover:bg-slate-800/60 transition-colors`}
                >
                  <td className="px-4 py-3">
                     {/* Enhanced Level Column with Code and Percentage */}
                     <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                         <div className="flex items-center gap-1.5 shrink-0">
                            <span className="inline-flex items-center justify-center font-mono text-[10px] font-bold h-5 px-1.5 rounded bg-[#c1a264] text-[#301c06] border border-[#7d510f]/30 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 shadow-sm min-w-[24px]">
                                {res.level.code}
                            </span>
                            <span className="text-[11px] font-bold text-[#7d510f] dark:text-slate-400 bg-[#fff5da] dark:bg-slate-800 px-1.5 py-0.5 rounded border border-[#c1a264]/30 dark:border-slate-700">
                                {Math.round(res.level.ratio * 100)}%
                            </span>
                         </div>
                         <span className="font-bold text-[#402000] dark:text-white text-sm">
                             {res.level.name}
                         </span>
                     </div>
                  </td>
                  <td className="px-4 py-3 text-right text-[#603000] dark:text-slate-400 hidden lg:table-cell">{res.units.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right text-[#603000] dark:text-slate-400 hidden xl:table-cell">{res.capacity.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right font-medium text-[#402000] dark:text-slate-300">{res.loot.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right text-[#603000] dark:text-slate-400 font-mono text-xs">{res.durationFormatted}</td>
                  
                  {/* Improved Runs/Time Cells - Lighter background, centered */}
                  <td className="px-4 py-3 text-center font-bold text-[#301c06] dark:text-slate-200 border-l border-[#c1a264]/30 dark:border-slate-800/50 bg-[#7d510f]/[0.02] dark:bg-white/[0.02]">
                    {res.runsWithinMaxTime}
                  </td>
                  <td className="px-4 py-3 text-center font-mono text-xs text-[#603000] dark:text-slate-300 border-r border-[#c1a264]/30 dark:border-slate-800/50 bg-[#7d510f]/[0.02] dark:bg-white/[0.02]">
                    {res.totalDurationFormatted}
                  </td>
                  
                  <td className="px-4 py-3 text-right font-black text-[#7d510f] dark:text-brand-400 text-base">
                    {res.lootWithinMaxTime.toLocaleString()}
                  </td>
                  
                  {/* New Comparison Cell */}
                  <td className={`px-4 py-3 text-right font-bold ${diffColorClass} text-sm`}>
                    {diffFormatted}
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default DetailedTable;