import React, { useState } from 'react';
import { CalculatorInputs, UnitType, UnitDefinition, CalculationMode } from '../types';
import { UNITS } from '../utils/unitData';
import { calculateTotalCapacity, calculateTotalUnits, SCAVENGE_LEVELS } from '../utils/scavengeMath';
import { Settings, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, PieChart, Check } from 'lucide-react';
import UnitTooltip from './UnitTooltip';
import { useLanguage } from '../utils/LanguageContext';

interface Props {
  inputs: CalculatorInputs;
  setInputs: React.Dispatch<React.SetStateAction<CalculatorInputs>>;
}

const CalculatorForm: React.FC<Props> = ({ inputs, setInputs }) => {
  const { t } = useLanguage();
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [hoveredUnit, setHoveredUnit] = useState<UnitDefinition | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value as CalculationMode
    }));
  };

  const adjustSpeed = (delta: number) => {
    setInputs(prev => ({
      ...prev,
      worldSpeed: Math.max(0.1, Number((prev.worldSpeed + delta).toFixed(2)))
    }));
  };

  const handleUnitChange = (unitId: UnitType, value: string) => {
    const numValue = parseInt(value) || 0;
    setInputs(prev => ({
      ...prev,
      army: {
        ...prev.army,
        [unitId]: Math.max(0, numValue)
      }
    }));
  };

  const toggleLevel = (levelId: number) => {
    setInputs(prev => {
        const current = prev.enabledLevels;
        const exists = current.includes(levelId);
        let newLevels;
        if (exists) {
            newLevels = current.filter(id => id !== levelId);
        } else {
            newLevels = [...current, levelId].sort();
        }
        return { ...prev, enabledLevels: newLevels };
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (hoveredUnit) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const totalCapacity = calculateTotalCapacity(inputs.army);

  return (
    <div 
      className="bg-[#f4e4bc] dark:bg-slate-900 rounded-lg shadow-md border-2 border-[#c1a264] dark:border-slate-800 overflow-hidden transition-colors duration-300 relative"
      onMouseMove={handleMouseMove}
    >
       {/* Corner decorations for light mode could go here, but keeping it clean for 'banking' feel */}

      {/* Custom Tooltip Portal/Overlay */}
      {hoveredUnit && (
        <UnitTooltip unit={hoveredUnit} position={mousePos} />
      )}

      {/* Header with Integrated Controls */}
      <div className="p-4 border-b border-[#c1a264] dark:border-slate-800 bg-[#e7d8af]/50 dark:bg-slate-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left Side: Title & Controls */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <h2 className="font-semibold text-[#402000] dark:text-white flex items-center gap-2">
              <div className="p-1.5 bg-[#7d510f]/10 dark:bg-brand-900/30 rounded-md text-[#7d510f] dark:text-brand-400">
                <Settings size={18} />
              </div>
              <span className="hidden sm:inline">{t.form.configuration}</span>
            </h2>

            <div className="hidden sm:block h-6 w-px bg-[#c1a264] dark:bg-slate-700"></div>

            {/* World Speed Control */}
            <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#603000] dark:text-slate-400 uppercase">
                    {t.form.speed}
                </span>
                <div className="flex items-center bg-[#fff5da] dark:bg-slate-800 border border-[#c1a264] dark:border-slate-700 rounded-lg p-0.5 shadow-sm">
                    <button 
                        onClick={() => adjustSpeed(-0.05)}
                        className="p-1 hover:bg-[#e7d8af] dark:hover:bg-slate-700 rounded text-[#402000] dark:text-slate-400 transition-colors"
                        title="-0.05"
                    >
                        <Minus size={14} />
                    </button>
                    <input
                        type="number"
                        name="worldSpeed"
                        value={inputs.worldSpeed}
                        onChange={handleInputChange}
                        step="0.05"
                        className="w-14 text-center text-sm font-bold text-[#402000] dark:text-white bg-transparent border-none focus:ring-0 p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button 
                        onClick={() => adjustSpeed(0.05)}
                        className="p-1 hover:bg-[#e7d8af] dark:hover:bg-slate-700 rounded text-[#402000] dark:text-slate-400 transition-colors"
                        title="+0.05"
                    >
                        <Plus size={14} />
                    </button>
                </div>
            </div>

            {/* Calculation Mode Selector */}
            <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#603000] dark:text-slate-400 uppercase hidden lg:inline">
                    {t.form.calculation}
                </span>
                <div className="relative">
                    <select
                        name="calculationMode"
                        value={inputs.calculationMode}
                        onChange={handleSelectChange}
                        className="appearance-none pl-3 pr-8 py-1.5 text-xs font-bold bg-[#fff5da] dark:bg-slate-800 border border-[#c1a264] dark:border-slate-700 rounded-lg text-[#402000] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7d510f] dark:focus:ring-brand-500 cursor-pointer shadow-sm"
                    >
                        <option value="normal">Normal Mode</option>
                        <option value="split">Split Mode</option>
                    </select>
                    <ChevronDown size={12} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#603000] dark:text-slate-400 pointer-events-none" />
                </div>
            </div>

             {/* Advanced Toggle */}
             <button 
                onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                className={`
                    flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all
                    ${isAdvancedOpen 
                        ? 'bg-[#e7d8af] border-[#7d510f] text-[#402000] dark:bg-brand-900/20 dark:border-brand-800 dark:text-brand-400' 
                        : 'bg-[#fff5da] border-[#c1a264] text-[#603000] hover:border-[#7d510f] dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 shadow-sm'}
                `}
            >
                {t.form.more}
                {isAdvancedOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
        </div>

        {/* Right Side: Capacity Highlight - HIGH VISIBILITY VERSION */}
        <div className="flex items-center justify-end">
            <div className="
                relative overflow-hidden
                bg-gradient-to-br from-[#7d510f] via-[#5c2e08] to-[#3d1e04] 
                dark:from-slate-800 dark:to-slate-900 
                border-[3px] border-[#c1a264] dark:border-brand-500/50 
                px-6 py-2.5 rounded-lg flex flex-col items-end 
                shadow-[0_4px_12px_rgba(0,0,0,0.3)] dark:shadow-lg
                group
            ">
                 {/* Decorative background glow for light mode */}
                 <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#c1a264] rounded-full blur-xl opacity-20 dark:opacity-0 pointer-events-none"></div>
                 
                 <div className="flex items-center gap-2 mb-0.5">
                    <ShoppingBag size={14} className="text-[#c1a264] dark:text-brand-400" />
                    <div className="text-[11px] font-bold text-[#e7d8af] dark:text-brand-400/80 uppercase tracking-widest">
                        {t.form.totalCapacity}
                    </div>
                 </div>
                 
                 <div className="text-3xl font-black text-white dark:text-brand-400 leading-none tabular-nums drop-shadow-md tracking-tight">
                    {totalCapacity.toLocaleString()}
                 </div>
            </div>
        </div>
      </div>
      
      <div className="p-5">
        {/* Advanced Settings Drawer */}
        {isAdvancedOpen && (
            <div className="bg-[#e7d8af]/30 dark:bg-slate-800/40 rounded-xl p-4 border border-[#c1a264] dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in mb-6 shadow-inner">
                <div>
                    <label className="block text-xs font-medium text-[#603000] dark:text-slate-400 mb-1.5">{t.form.baseTime}</label>
                    <input
                        type="number"
                        name="baseTime"
                        value={inputs.baseTime}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm bg-[#fff5da] dark:bg-slate-900 border border-[#c1a264] dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#7d510f]/20 dark:focus:ring-brand-500/20 focus:border-[#7d510f] dark:focus:border-brand-500 outline-none transition-all text-[#402000] dark:text-white"
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-[#603000] dark:text-slate-400 mb-1.5">{t.form.maxTime}</label>
                    <input
                        type="number"
                        name="maxTimeAway"
                        value={inputs.maxTimeAway}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm bg-[#fff5da] dark:bg-slate-900 border border-[#c1a264] dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#7d510f]/20 dark:focus:ring-brand-500/20 focus:border-[#7d510f] dark:focus:border-brand-500 outline-none transition-all text-[#402000] dark:text-white"
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-[#603000] dark:text-slate-400 mb-1.5">{t.form.multiplier}</label>
                    <input
                        type="number"
                        name="multiplier"
                        value={inputs.multiplier}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm bg-[#fff5da] dark:bg-slate-900 border border-[#c1a264] dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#7d510f]/20 dark:focus:ring-brand-500/20 focus:border-[#7d510f] dark:focus:border-brand-500 outline-none transition-all text-[#402000] dark:text-white"
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-[#603000] dark:text-slate-400 mb-1.5">{t.form.exponent}</label>
                    <input
                        type="number"
                        name="exponent"
                        value={inputs.exponent}
                        onChange={handleInputChange}
                        step="0.01"
                        className="w-full px-3 py-2 text-sm bg-[#fff5da] dark:bg-slate-900 border border-[#c1a264] dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#7d510f]/20 dark:focus:ring-brand-500/20 focus:border-[#7d510f] dark:focus:border-brand-500 outline-none transition-all text-[#402000] dark:text-white"
                    />
                </div>
            </div>
        )}

        {/* BOTTOM: 1:1 Replica of TW Unit Input Table */}
        <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#603000] dark:text-slate-500 uppercase tracking-wider pl-1">
                {t.form.selectTroops}
            </h3>
            
            {/* TRIBAL WARS STYLED CONTAINER */}
            <div className="border-2 border-[#7d510f] dark:border-slate-700 rounded-sm bg-[#f4e4bc] dark:bg-slate-800/50 p-1 overflow-x-auto shadow-sm transition-colors">
                <table className="w-full border-collapse">
                    <tbody>
                        {/* Header Row with Icons */}
                        <tr>
                            {UNITS.map(unit => (
                                <td key={unit.id} className="text-center p-1 align-bottom min-w-[60px]">
                                    <div className="flex flex-col items-center justify-end h-full pb-2">
                                        {/* ENHANCED ICON VISIBILITY */}
                                        <div 
                                          className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-slate-200 border-2 border-[#c6b078] dark:border-slate-400 shadow-md transition-all hover:scale-105 duration-200 group relative cursor-help"
                                          onMouseEnter={(e) => {
                                            setHoveredUnit(unit);
                                            setMousePos({ x: e.clientX, y: e.clientY });
                                          }}
                                          onMouseLeave={() => setHoveredUnit(null)}
                                        >
                                            <img 
                                                src={unit.image} 
                                                alt={unit.name} 
                                                // Removed title attribute to prevent native tooltip overlapping custom one
                                                className="w-10 h-10 object-contain transform transition-transform duration-200"
                                                style={{ imageRendering: 'auto' }}
                                            />
                                        </div>
                                    </div>
                                </td>
                            ))}
                            {/* "All" Column */}
                            <td className="text-center p-1 align-bottom min-w-[60px] border-l border-[#c6b078]/50 dark:border-slate-700">
                                <span className="text-[10px] font-bold text-[#603000] dark:text-slate-400 uppercase tracking-wide">{t.form.total}</span>
                            </td>
                        </tr>

                        {/* Input Row */}
                        <tr>
                            {UNITS.map(unit => (
                                <td key={`input-${unit.id}`} className="p-1">
                                    <input 
                                        type="text" 
                                        inputMode="numeric"
                                        value={inputs.army[unit.id] === 0 ? '' : inputs.army[unit.id]}
                                        onChange={(e) => handleUnitChange(unit.id, e.target.value)}
                                        placeholder="0"
                                        className="w-full h-10 px-1 text-center text-sm font-bold border border-[#7d510f] dark:border-slate-700 text-[#301c06] dark:text-slate-200 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[#7d510f] dark:focus:ring-brand-500 focus:outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] rounded-sm transition-colors"
                                    />
                                </td>
                            ))}
                            {/* "All" Value (Calculated Total Count) */}
                            <td className="p-1 border-l border-[#c6b078]/50 dark:border-slate-700 text-center font-black text-[#603000] dark:text-brand-400 text-sm">
                                {calculateTotalUnits(inputs.army).toLocaleString()}
                            </td>
                        </tr>
                        
                        {/* Helper Row (Optional - just like game often shows (0)) */}
                        <tr>
                            {UNITS.map(unit => (
                                <td key={`info-${unit.id}`} className="text-center text-[10px] text-[#603000]/70 dark:text-slate-500 pb-1 pt-0.5">
                                    ({inputs.army[unit.id]})
                                </td>
                            ))}
                             <td className="border-l border-[#c6b078]/50 dark:border-slate-700"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* SPLIT MODE LEVEL SELECTION */}
            {inputs.calculationMode === 'split' && (
                <div className="mt-3 bg-[#e7d8af] dark:bg-slate-800/60 p-4 rounded-lg border border-[#c1a264] dark:border-slate-700 animate-fade-in shadow-inner">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#c1a264]/50 dark:border-slate-700/50">
                        <PieChart size={16} className="text-[#7d510f] dark:text-brand-400"/>
                        <span className="text-xs font-bold text-[#603000] dark:text-slate-300 uppercase tracking-wide">{t.form.distribution}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {SCAVENGE_LEVELS.map(level => {
                            const isChecked = inputs.enabledLevels.includes(level.id);
                            // Dynamic name from translations based on code (FF, BB...)
                            const translatedName = t.levels.names[level.code as keyof typeof t.levels.names];
                            return (
                            <label 
                                key={level.id} 
                                className={`
                                    relative flex flex-col items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-200
                                    ${isChecked 
                                        ? 'bg-[#fff5da] border-[#7d510f] dark:bg-slate-700/50 dark:border-brand-500 shadow-sm' 
                                        : 'bg-transparent border-[#c1a264]/50 dark:border-slate-700 text-[#603000]/60 dark:text-slate-500 hover:bg-[#fff5da]/50 dark:hover:bg-slate-800'}
                                `}
                                title={translatedName} // Full translated name toolip
                            >
                                <input 
                                    type="checkbox" 
                                    checked={isChecked}
                                    onChange={() => toggleLevel(level.id)}
                                    className="absolute opacity-0 w-0 h-0"
                                />
                                
                                {isChecked && (
                                    <div className="absolute top-1.5 right-1.5">
                                        <div className="bg-[#7d510f] dark:bg-brand-500 rounded-full p-0.5">
                                            <Check size={8} className="text-white" strokeWidth={3} />
                                        </div>
                                    </div>
                                )}

                                <span className={`text-lg font-black ${isChecked ? 'text-[#301c06] dark:text-white' : 'inherit'}`}>
                                    {level.code}
                                </span>
                                <span className={`text-xs font-bold ${isChecked ? 'text-[#7d510f] dark:text-brand-400' : 'inherit'}`}>
                                    {Math.round(level.ratio * 100)}%
                                </span>
                                <span className="text-[9px] mt-1 opacity-70 truncate max-w-full">
                                    {translatedName}
                                </span>
                            </label>
                        )})}
                    </div>
                    <p className="text-[10px] mt-3 text-[#603000] dark:text-slate-400 italic bg-[#fff5da] dark:bg-slate-900/50 p-2 rounded border border-[#c1a264]/30 dark:border-slate-700/50">
                        <span className="font-bold">{t.form.distributionDesc}</span> {t.form.strategyTime}
                    </p>
                </div>
            )}

            <p className="text-[10px] text-[#603000]/60 dark:text-slate-500 text-right italic">
                {t.form.disclaimer}
            </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;