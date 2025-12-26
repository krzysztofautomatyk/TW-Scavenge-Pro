import React from 'react';
import { CalculationResult } from '../types';
import { Package, Timer } from 'lucide-react';

interface Props {
  results: CalculationResult[];
}

const LevelCards: React.FC<Props> = ({ results }) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">
        Szczegóły poziomów
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {results.map((res) => {
          return (
            <div 
              key={res.level.id} 
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-slate-600 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        {res.level.code}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {Math.round(res.level.ratio * 100)}%
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-lg">{res.level.name}</h4>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg group-hover:bg-brand-50/50 dark:group-hover:bg-slate-800 transition-colors">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <Package size={14} className="text-slate-400" /> 
                      Surowce
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-200">{res.loot.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg group-hover:bg-brand-50/50 dark:group-hover:bg-slate-800 transition-colors">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <Timer size={14} className="text-slate-400" /> 
                      Czas
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-200">{res.durationFormatted}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-xs text-slate-400">Efektywność</span>
                  <span className="font-bold text-slate-600 dark:text-slate-400">
                    {Math.round(res.lootPerHour).toLocaleString()} / h
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default LevelCards;