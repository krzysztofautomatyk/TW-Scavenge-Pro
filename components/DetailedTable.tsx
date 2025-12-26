import React from 'react';
import { CalculationResult, CalculationMode, CalculatorInputs } from '../types';
import { Database, Sigma, Clock, Minus, Plus } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';

interface Props {
  results: CalculationResult[];
  maxTimeAway: number;
  calculationMode: CalculationMode;
  setupTime: number;
  setInputs: React.Dispatch<React.SetStateAction<CalculatorInputs>>;
}

const DetailedTable: React.FC<Props> = ({ results, maxTimeAway, calculationMode, setupTime, setInputs }) => {
  const { t, language } = useLanguage();
  // Baseline for comparison is generally the first option in normal mode
  // In split mode, comparison per row is less relevant, but we keep it for consistency or hide it
  const baselineProfit = results.length > 0 ? results[0].lootWithinMaxTime : 0;

  // Calculate Totals for Summary Row
  const totalUnits = results.reduce((acc, curr) => acc + curr.units, 0);
  const totalCapacity = results.reduce((acc, curr) => acc + curr.capacity, 0);
  const totalLoot = results.reduce((acc, curr) => acc + curr.loot, 0);
  const totalLootMaxTime = results.reduce((acc, curr) => acc + curr.lootWithinMaxTime, 0);
  // For duration, if split, we usually wait for the longest one to return if we send all at once
  // Or if we look at "Max Cycle", it's the max of selected
  const maxDurationFormatted = results
    .filter(r => r.durationSeconds > 0)
    .reduce((prev, curr) => (curr.durationSeconds > prev.durationSeconds ? curr : prev), results[0])
    ?.durationFormatted || "00:00:00";

  const handleSetupTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setInputs(prev => ({ ...prev, setupTime: isNaN(val) ? 0 : Math.max(0, val) }));
  };

  const adjustSetupTime = (delta: number) => {
    setInputs(prev => ({ ...prev, setupTime: Math.max(0, prev.setupTime + delta) }));
  };

  const setupLabel = language === 'pl' ? 's wysyłka' : 's setup';

  // Common Input Style for consistency (Matches CalculatorForm)
  const controlContainerClass = "flex items-center bg-[#fff5da] dark:bg-slate-800 border border-[#c1a264] dark:border-slate-600 rounded-lg p-0.5 shadow-sm h-9";
  const controlBtnClass = "w-7 h-full flex items-center justify-center hover:bg-[#e7d8af] dark:hover:bg-slate-700 rounded text-[#402000] dark:text-slate-400 transition-colors";

  return (
    <div className="bg-[#f4e4bc] dark:bg-slate-900 rounded-lg shadow-lg border-2 border-[#c1a264] dark:border-slate-800 overflow-hidden animate-fade-in">
        <div className="p-4 border-b border-[#c1a264] dark:border-slate-800 flex flex-wrap items-center gap-4 bg-[#e7d8af] dark:bg-slate-900/50">
           <div className="flex items-center gap-2">
               <Database size={18} className="text-[#7d510f] dark:text-brand-500" />
               <h3 className="font-bold text-[#301c06] dark:text-white text-lg">{t.table.title}</h3>
           </div>

           <div className="hidden md:block h-6 w-px bg-[#c1a264] dark:bg-slate-700 mx-1"></div>

           {/* Enhanced Editable Setup Time Control with Buttons - STYLED EXACTLY LIKE SPEED INPUT */}
           <div className="flex items-center gap-2">
                <div className={controlContainerClass}>
                    <div className="flex items-center justify-center px-2 mr-1 border-r border-[#c1a264]/30 dark:border-slate-700/50 h-full">
                         <Clock size={14} className="text-[#7d510f] dark:text-slate-400" />
                    </div>

                    <button 
                        onClick={() => adjustSetupTime(-1)}
                        className={controlBtnClass}
                        title="-1s"
                    >
                        <Minus size={12} strokeWidth={3} />
                    </button>
                    
                    <input 
                        type="number" 
                        min="0"
                        max="99999"
                        value={setupTime}
                        onChange={handleSetupTimeChange}
                        className="w-14 text-center font-mono font-bold text-sm text-[#402000] dark:text-white bg-transparent border-none focus:ring-0 p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    
                    <button 
                        onClick={() => adjustSetupTime(1)}
                        className={controlBtnClass}
                        title="+1s"
                    >
                        <Plus size={12} strokeWidth={3} />
                    </button>
                </div>
                
                <span className="text-xs font-bold text-[#603000] dark:text-slate-400 uppercase tracking-wide">
                   {setupLabel}
                </span>
           </div>

           <span className={`text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-wide ml-auto border ${
               calculationMode === 'split' 
               ? 'bg-[#7d510f] border-[#7d510f] text-[#f4e4bc] dark:bg-brand-600 dark:border-brand-500 dark:text-white' 
               : 'bg-[#596a77] border-[#4a5b67] text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200'
           }`}>
               {calculationMode === 'split' ? t.table.splitMode : t.table.normalMode}
           </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="text-xs text-[#402000] dark:text-slate-400 uppercase bg-[#c1a264] dark:bg-slate-800/50 border-b border-[#7d510f] dark:border-slate-800">
              <tr>
                <th className="px-4 py-4 font-bold tracking-wider text-[#301c06] dark:text-slate-200">{t.table.level}</th>
                <th className="px-4 py-4 font-bold tracking-wider text-right hidden lg:table-cell text-[#301c06] dark:text-slate-200">{t.table.units}</th>
                <th className="px-4 py-4 font-bold tracking-wider text-right hidden xl:table-cell text-[#301c06] dark:text-slate-200">{t.table.capacity}</th>
                <th className="px-4 py-4 font-bold tracking-wider text-right text-[#301c06] dark:text-slate-200">{t.table.loot}</th>
                
                <th className="px-4 py-4 font-bold tracking-wider text-right text-[#301c06] dark:text-slate-200">
                    {t.table.time}
                </th>
                
                <th className="px-4 py-4 font-bold tracking-wider text-center border-l border-[#b0965b] dark:border-slate-700 text-[#301c06] dark:text-slate-200 bg-[#b8a069]/20 dark:bg-slate-800/30">
                    {t.table.runs}
                </th>
                <th className="px-4 py-4 font-bold tracking-wider text-center border-r border-[#b0965b] dark:border-slate-700 text-[#301c06] dark:text-slate-200 bg-[#b8a069]/20 dark:bg-slate-800/30">
                    {t.table.totalTime}
                </th>
                
                <th className="px-4 py-4 font-bold tracking-wider text-right text-[#301c06] dark:text-slate-200">
                    {t.table.profit} ({maxTimeAway}h)
                </th>
                
                <th className="px-4 py-4 font-bold tracking-wider text-right text-[#301c06] dark:text-slate-200">
                    {t.table.comparison}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#c1a264]/30 dark:divide-slate-800">
              {results.map((res, index) => {
                const isBaseline = index === 0;
                const levelName = t.levels.names[res.level.code as keyof typeof t.levels.names];
                
                let diffFormatted = "-";
                let diffColorClass = "";

                if (calculationMode === 'normal') {
                    const difference = res.lootWithinMaxTime - baselineProfit;
                    const percentDiff = baselineProfit !== 0 ? (difference / baselineProfit) * 100 : 0;
                    diffFormatted = isBaseline ? "100%" : `${percentDiff > 0 ? '+' : ''}${percentDiff.toFixed(1)}%`;
                    diffColorClass = isBaseline 
                        ? "text-[#603000] dark:text-slate-500 font-normal opacity-70" 
                        : (percentDiff > 0 ? "text-emerald-700 dark:text-emerald-400" : "text-red-700 dark:text-red-400");
                } else {
                    // Split mode: just show contribution % of total
                    const percentContrib = totalLootMaxTime > 0 ? (res.lootWithinMaxTime / totalLootMaxTime) * 100 : 0;
                     diffFormatted = `${percentContrib.toFixed(1)}%`;
                     diffColorClass = "text-[#603000] dark:text-slate-500";
                }

                // If disabled in split mode, fade row
                const rowOpacity = (!res.isEnabled && calculationMode === 'split') ? 'opacity-40 grayscale' : '';

                return (
                <tr 
                    key={res.level.id} 
                    className={`${rowOpacity} ${index % 2 === 0 ? 'bg-[#f4e4bc] dark:bg-transparent' : 'bg-[#fff5da] dark:bg-slate-800/30'} hover:bg-[#e7d8af] dark:hover:bg-slate-800/60 transition-all`}
                >
                  <td className="px-4 py-3">
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
                             {levelName}
                         </span>
                     </div>
                  </td>
                  <td className="px-4 py-3 text-right text-[#603000] dark:text-slate-400 hidden lg:table-cell">{res.units.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right text-[#603000] dark:text-slate-400 hidden xl:table-cell">{res.capacity.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right font-medium text-[#402000] dark:text-slate-300">{res.loot.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right text-[#603000] dark:text-slate-400 font-mono text-xs">{res.durationFormatted}</td>
                  
                  <td className="px-4 py-3 text-center font-bold text-[#301c06] dark:text-slate-200 border-l border-[#c1a264]/30 dark:border-slate-800/50 bg-[#7d510f]/[0.02] dark:bg-white/[0.02]">
                    {res.runsWithinMaxTime}
                  </td>
                  <td className="px-4 py-3 text-center font-mono text-xs text-[#603000] dark:text-slate-300 border-r border-[#c1a264]/30 dark:border-slate-800/50 bg-[#7d510f]/[0.02] dark:bg-white/[0.02]">
                    {res.totalDurationFormatted}
                  </td>
                  
                  <td className="px-4 py-3 text-right font-black text-[#7d510f] dark:text-brand-400 text-base">
                    {res.lootWithinMaxTime.toLocaleString()}
                  </td>
                  
                  <td className={`px-4 py-3 text-right font-bold ${diffColorClass} text-sm`}>
                    {diffFormatted}
                  </td>
                </tr>
              )})}
            </tbody>
            
            {/* SUMMARY ROW (TFOOT) */}
            <tfoot className="bg-[#7d510f] dark:bg-slate-900 border-t-2 border-[#c1a264] dark:border-brand-500/50 text-[#f4e4bc] dark:text-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] relative z-10">
                <tr>
                    <td className="px-4 py-4 font-black flex items-center gap-2">
                        <Sigma size={16} className="text-[#c1a264] dark:text-brand-400" />
                        {t.table.total}
                    </td>
                    <td className="px-4 py-4 text-right font-bold hidden lg:table-cell opacity-80">{totalUnits.toLocaleString()}</td>
                    <td className="px-4 py-4 text-right font-bold hidden xl:table-cell opacity-80">{totalCapacity.toLocaleString()}</td>
                    <td className="px-4 py-4 text-right font-bold opacity-80">{totalLoot.toLocaleString()}</td>
                    
                    {/* For Max duration, we usually care about the bottleneck (max of cycles) */}
                    <td className="px-4 py-4 text-right font-mono text-xs opacity-80">
                         {/* Only show if split mode, otherwise it's just repeating data */}
                         {calculationMode === 'split' ? maxDurationFormatted : '-'}
                    </td>
                    
                    <td colSpan={2} className="px-4 py-4 text-center text-xs opacity-60 italic">
                        {calculationMode === 'split' ? t.table.summarySplit : t.table.summaryNormal}
                    </td>

                    <td className="px-4 py-4 text-right font-black text-lg text-white dark:text-brand-400 tracking-tight">
                        {totalLootMaxTime.toLocaleString()}
                    </td>
                    
                    <td className="px-4 py-4"></td>
                </tr>
            </tfoot>
          </table>
        </div>
      </div>
  );
};

export default DetailedTable;