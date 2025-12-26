import React from 'react';
import { CalculationResult } from '../types';
import { Database } from 'lucide-react';

interface Props {
  results: CalculationResult[];
  maxTimeAway: number;
}

const DetailedTable: React.FC<Props> = ({ results, maxTimeAway }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden animate-fade-in">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
           <Database size={18} className="text-slate-400" />
           <h3 className="font-bold text-slate-800 dark:text-white">Pełne zestawienie danych</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4 font-semibold tracking-wider">Poziom</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right hidden lg:table-cell">Jednostki</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right hidden xl:table-cell">Pojemność</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right">Łup (1x)</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right">Czas (1x)</th>
                {/* New Columns */}
                <th className="px-6 py-4 font-semibold tracking-wider text-right bg-brand-50/50 dark:bg-brand-900/10">Liczba wypraw</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right bg-brand-50/50 dark:bg-brand-900/10">Łączny czas</th>
                <th className="px-6 py-4 font-semibold tracking-wider text-right font-bold text-slate-700 dark:text-slate-200">
                    Zysk ({maxTimeAway}h)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {results.map((res) => (
                <tr key={res.level.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                    {res.level.name}
                  </td>
                  <td className="px-6 py-4 text-right text-slate-600 dark:text-slate-400 hidden lg:table-cell">{res.units.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-slate-600 dark:text-slate-400 hidden xl:table-cell">{res.capacity.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right font-medium text-slate-600 dark:text-slate-400">{res.loot.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-slate-600 dark:text-slate-400 font-mono text-xs">{res.durationFormatted}</td>
                  
                  {/* New Columns Data */}
                  <td className="px-6 py-4 text-right font-bold text-slate-800 dark:text-slate-200 bg-brand-50/30 dark:bg-brand-900/5">
                    {res.runsWithinMaxTime}
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-xs text-slate-600 dark:text-slate-300 bg-brand-50/30 dark:bg-brand-900/5">
                    {res.totalDurationFormatted}
                  </td>
                  <td className="px-6 py-4 text-right font-black text-brand-600 dark:text-brand-400">
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