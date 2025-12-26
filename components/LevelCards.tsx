import React from 'react';
import { CalculationResult } from '../types';
import { Package, Timer, Users } from 'lucide-react';
import { UNITS } from '../utils/unitData';
import { useLanguage } from '../utils/LanguageContext';

interface Props {
  results: CalculationResult[];
}

const LevelCards: React.FC<Props> = ({ results }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4 animate-fade-in">
      <h3 className="text-sm font-bold text-[#603000] dark:text-slate-400 uppercase tracking-wider ml-1">
        {t.levels.details}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {results.map((res) => {
          // Filter units that have count > 0 for this level
          const activeUnits = UNITS.filter(u => (res.unitBreakdown?.[u.id] || 0) > 0);
          const levelName = t.levels.names[res.level.code as keyof typeof t.levels.names];

          return (
            <div 
              key={res.level.id} 
              className={`
                rounded-lg border-2 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden flex flex-col h-full
                ${res.isEnabled 
                    ? 'bg-[#f4e4bc] dark:bg-slate-900 border-[#c1a264] dark:border-slate-800 hover:border-[#7d510f] dark:hover:border-slate-600' 
                    : 'bg-[#e0d5c7] dark:bg-slate-950 border-[#d0c5b7] dark:border-slate-900 opacity-60 grayscale-[0.5]'}
              `}
            >
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#e7d8af] text-[#402000] dark:bg-slate-800 dark:text-slate-400 border border-[#c1a264] dark:border-slate-700">
                        {res.level.code}
                      </span>
                      <span className="text-xs text-[#603000] dark:text-slate-400 font-bold">
                        {Math.round(res.level.ratio * 100)}%
                      </span>
                    </div>
                    <h4 className="font-bold text-[#301c06] dark:text-white text-lg">{levelName}</h4>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center text-sm p-2 bg-[#fff5da] dark:bg-slate-800/50 rounded-md border border-[#c1a264]/30 dark:border-none group-hover:bg-[#e7d8af] dark:group-hover:bg-slate-800 transition-colors">
                    <span className="text-[#603000] dark:text-slate-400 flex items-center gap-2">
                      <Package size={14} className="text-[#7d510f]/60 dark:text-slate-400" /> 
                      {t.levels.resource}
                    </span>
                    <span className="font-bold text-[#402000] dark:text-slate-200">{res.loot.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm p-2 bg-[#fff5da] dark:bg-slate-800/50 rounded-md border border-[#c1a264]/30 dark:border-none group-hover:bg-[#e7d8af] dark:group-hover:bg-slate-800 transition-colors">
                    <span className="text-[#603000] dark:text-slate-400 flex items-center gap-2">
                      <Timer size={14} className="text-[#7d510f]/60 dark:text-slate-400" /> 
                      {t.levels.time}
                    </span>
                    <span className="font-bold text-[#402000] dark:text-slate-200">{res.durationFormatted}</span>
                  </div>
                </div>
                
                {/* Unit Breakdown Section */}
                {activeUnits.length > 0 && res.isEnabled && (
                    <div className="mt-auto pt-3 border-t border-[#c1a264]/50 dark:border-slate-800">
                         <span className="text-[10px] font-bold text-[#603000]/70 dark:text-slate-500 uppercase mb-2 block">
                            {t.levels.assignedTroops}
                         </span>
                         <div className="grid grid-cols-4 gap-2">
                             {activeUnits.map(unit => (
                                 <div key={unit.id} className="flex flex-col items-center p-1 bg-[#fff5da]/50 dark:bg-slate-800/30 rounded border border-[#c1a264]/20 dark:border-slate-700/50" title={t.units[unit.id].name}>
                                     <img src={unit.image} alt={unit.name} className="w-5 h-5 object-contain mb-0.5" />
                                     <span className="text-[10px] font-bold text-[#301c06] dark:text-slate-300">
                                         {res.unitBreakdown[unit.id]}
                                     </span>
                                 </div>
                             ))}
                         </div>
                    </div>
                )}
                
                {(!activeUnits.length || !res.isEnabled) && (
                    <div className="mt-auto pt-3 border-t border-[#c1a264]/50 dark:border-slate-800 text-center py-2">
                        <span className="text-xs text-[#603000]/40 dark:text-slate-600 italic">{t.levels.noTroops}</span>
                    </div>
                )}

                <div className="mt-4 pt-3 border-t border-[#c1a264] dark:border-slate-800 flex justify-between items-center">
                  <span className="text-xs text-[#603000]/70 dark:text-slate-400">{t.levels.efficiency}</span>
                  <span className="font-bold text-[#7d510f] dark:text-slate-400">
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