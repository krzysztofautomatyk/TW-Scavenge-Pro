import React from 'react';
import { CalculationResult } from '../types';
import { Database } from 'lucide-react';

interface Props {
  results: CalculationResult[];
  maxTimeAway: number;
}

const DetailedTable: React.FC<Props> = ({ results, maxTimeAway }) => {
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
                <th className="px-6 py-4 font-bold tracking-wider text-[#301c06] dark:text-slate-200">Poziom</th>
                <th className="px-6 py-4 font-bold tracking-wider text-right hidden lg:table-cell text-[#301c06] dark:text-slate-200">Jednostki</th>
                <th className="px-6 py-4 font-bold tracking-wider text-right hidden xl:table-cell text-[#301c06] dark:text-slate-200">Pojemność</th>
                <th className="px-6 py-4 font-bold tracking-wider text-right text-[#301c06] dark:text-slate-200">Łup (1x)</th>
                <th className="px-6 py-4 font-bold tracking-wider text-right text-[#301c06] dark:text-slate-200">Czas (1x)</th>
                {/* New Columns */}
                <th className="px-6 py-4 font-bold tracking-wider text-right bg-[#b0965b]/20 dark:bg-brand-900/10 text-[#301c06] dark:text-slate-200">Liczba wypraw</th>
                <th className="px-6 py-4 font-bold tracking-wider text-right bg-[#b0965b]/20 dark:bg-brand-900/10 text-[#301c06] dark:text-slate-200">Łączny czas</th>
                <th className="px-6 py-4 font-bold tracking-wider text-right text-[#301c06] dark:text-slate-200">
                    Zysk ({maxTimeAway}h)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#c1a264]/30 dark:divide-slate-800">
              {results.map((res, index) => (
                <tr 
                    key={res.level.id} 
                    className={`${index % 2 === 0 ? 'bg-[#f4e4bc] dark:bg-transparent' : 'bg-[#fff5da] dark:bg-slate-800/30'} hover:bg-[#e7d8af] dark:hover:bg-slate-800/60 transition-colors`}
                >
                  <td className="px-6 py-4 font-bold text-[#402000] dark:text-white">
                    {res.level.name}
                  </td>
                  <td className="px-6 py-4 text-right text-[#603000] dark:text-slate-400 hidden lg:table-cell">{res.units.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-[#603000] dark:text-slate-400 hidden xl:table-cell">{res.capacity.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right font-bold text-[#402000] dark:text-slate-400">{res.loot.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-[#603000] dark:text-slate-400 font-mono text-xs">{res.durationFormatted}</td>
                  
                  {/* New Columns Data */}
                  <td className="px-6 py-4 text-right font-bold text-[#301c06] dark:text-slate-200 bg-[#7d510f]/5 dark:bg-brand-900/5 border-l border-[#c1a264]/20 dark:border-none">
                    {res.runsWithinMaxTime}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-xs text-[#603000] dark:text-slate-300 bg-[#7d510f]/5 dark:bg-brand-900/5">
                    {res.totalDurationFormatted}
                  </td>
                  <td className="px-6 py-4 text-right font-black text-[#7d510f] dark:text-brand-400 border-l border-[#c1a264]/20 dark:border-none">
                    {res.lootWithinMaxTime.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default DetailedTable;