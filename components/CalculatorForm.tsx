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

  const adjustUnitCount = (unitId: UnitType, delta: number) => {
    setInputs(prev => ({
      ...prev,
      army: {
        ...prev.army,
        [unitId]: Math.max(0, (prev.army[unitId] || 0) + delta)
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

  // Common Input Style for consistency
  const controlContainerClass = "flex items-center bg-[#fff5da] dark:bg-slate-800 border border-[#c1a264] dark:border-slate-600 rounded-lg p-0.5 shadow-sm h-9";
  const controlBtnClass = "w-7 h-full flex items-center justify-center hover:bg-[#e7d8af] dark:hover:bg-slate-700 rounded text-[#402000] dark:text-slate-400 transition-colors";

  return (
    <div 
      className="bg-[#f4e4bc] dark:bg-slate-900 rounded-lg shadow-lg border-2 border-[#c1a264] dark:border-slate-800 overflow-hidden transition-all duration-300 relative"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Tooltip Portal/Overlay */}
      {hoveredUnit && (
        <UnitTooltip unit={hoveredUnit} position={mousePos} />
      )}

      {/* Header with Integrated Controls - UNIFIED LOOK */}
      <div className="p-4 border-b border-[#c1a264] dark:border-slate-800 bg-[#e7d8af] dark:bg-slate-900/50 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        
        {/* Left Side: Title & Controls */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <h2 className="font-bold text-[#301c06] dark:text-white flex items-center gap-2 text-lg mr-2">
              <Settings size={20} className="text-[#7d510f] dark:text-brand-500" />
              {t.form.configuration}
            </h2>

            <div className="hidden md:block h-8 w-px bg-[#c1a264] dark:bg-slate-700 mx-1"></div>

            {/* World Speed Control - IDENTICAL STYLE TO TABLE SETUP INPUT */}
            <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#603000] dark:text-slate-400 uppercase tracking-wide">
                    {t.form.speed}
                </span>
                <div className={controlContainerClass}>
                    <button 
                        onClick={() => adjustSpeed(-0.05)}
                        className={controlBtnClass}
                        title="-0.05"
                    >
                        <Minus size={14} strokeWidth={3} />
                    </button>
                    <input
                        type="number"
                        name="worldSpeed"
                        value={inputs.worldSpeed}
                        onChange={handleInputChange}
                        step="0.05"
                        className="w-16 text-center text-sm font-bold text-[#402000] dark:text-white bg-transparent border-none focus:ring-0 p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-mono"
                    />
                    <button 
                        onClick={() => adjustSpeed(0.05)}
                        className={controlBtnClass}
                        title="+0.05"
                    >
                        <Plus size={14} strokeWidth={3} />
                    </button>
                </div>
            </div>

            {/* Calculation Mode Selector */}
            <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#603000] dark:text-slate-400 uppercase tracking-wide hidden sm:inline">
                    {t.form.calculation}
                </span>
                <div className="relative">
                    <select
                        name="calculationMode"
                        value={inputs.calculationMode}
                        onChange={handleSelectChange}
                        className="appearance-none pl-3 pr-8 h-9 text-xs font-bold bg-[#fff5da] dark:bg-slate-800 border border-[#c1a264] dark:border-slate-600 rounded-lg text-[#402000] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#7d510f] dark:focus:ring-brand-500 cursor-pointer shadow-sm uppercase tracking-wide"
                    >
                        <option value="normal">Normal Mode</option>
                        <option value="split">Split Mode</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#603000] dark:text-slate-400 pointer-events-none" />
                </div>
            </div>

             {/* Advanced Toggle */}
             <button 
                onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                className={`
                    flex items-center gap-1.5 text-xs font-bold px-4 h-9 rounded-lg border transition-all uppercase tracking-wide
                    ${isAdvancedOpen 
                        ? 'bg-[#d6c498] border-[#7d510f] text-[#301c06] dark:bg-slate-700 dark:border-brand-500 dark:text-white' 
                        : 'bg-[#fff5da] border-[#c1a264] text-[#603000] hover:border-[#7d510f] dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 shadow-sm'}
                `}
            >
                {t.form.more}
                {isAdvancedOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
        </div>

        {/* Right Side: Capacity Highlight - TRIBAL HIGH FIDELITY */}
        <div className="flex items-center justify-end mt-2 xl:mt-0">
            <div className="
                relative overflow-hidden
                bg-[#301c06] dark:bg-slate-800 
                border-2 border-[#c1a264] dark:border-brand-500/50 
                px-5 py-2 rounded-lg flex flex-col items-end 
                shadow-[0_2px_4px_rgba(0,0,0,0.2)]
                min-w-[180px]
            ">
                 {/* Internal Gloss Effect */}
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                 
                 <div className="flex items-center gap-2 mb-0.5 relative z-10">
                    <ShoppingBag size={12} className="text-[#c1a264] dark:text-brand-400" />
                    <div className="text-[10px] font-bold text-[#c1a264] dark:text-brand-400/80 uppercase tracking-widest">
                        {t.form.totalCapacity}
                    </div>
                 </div>
                 
                 <div className="text-2xl font-black text-[#f4e4bc] dark:text-white leading-none tabular-nums tracking-tight relative z-10">
                    {totalCapacity.toLocaleString()}
                 </div>
            </div>
        </div>
      </div>
      
      <div className="p-5">
        {/* Advanced Settings Drawer */}
        {isAdvancedOpen && (
            <div className="bg-[#e7d8af]/40 dark:bg-slate-800/40 rounded-xl p-5 border border-[#c1a264] dark:border-slate-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-in mb-6 shadow-inner">
                <div>
                    <label className="block text-xs font-bold text-[#603000] dark:text-slate-400 mb-2 uppercase">{t.form.baseTime}</label>
                    <input
                        type="number"
                        name="baseTime"
                        value={inputs.baseTime}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 text-sm font-bold bg-[#fff5da] dark:bg-slate-900 border border-[#c1a264] dark:border-slate-600 rounded-lg focus:ring-1 focus:ring-[#7d510f] dark:focus:ring-brand-500 focus:border-[#7d510f] dark:focus:border-brand-500 outline-none transition-all text-[#402000] dark:text-white placeholder-[#603000]/30"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-[#603000] dark:text-slate-400 mb-2 uppercase">{t.form.maxTime}</label>
                    <input
                        type="number"
                        name="maxTimeAway"
                        value={inputs.maxTimeAway}
                        onChange={handleInputChange}
                         className="w-full h-10 px-3 text-sm font-bold bg-[#fff5da] dark:bg-slate-900 border border-[#c1a264] dark:border-slate-600 rounded-lg focus:ring-1 focus:ring-[#7d510f] dark:focus:ring-brand-500 focus:border-[#7d510f] dark:focus:border-brand-500 outline-none transition-all text-[#402000] dark:text-white placeholder-[#603000]/30"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-[#603000] dark:text-slate-400 mb-2 uppercase">{t.form.multiplier}</label>
                    <input
                        type="number"
                        name="multiplier"
                        value={inputs.multiplier}
                        onChange={handleInputChange}
                         className="w-full h-10 px-3 text-sm font-bold bg-[#fff5da] dark:bg-slate-900 border border-[#c1a264] dark:border-slate-600 rounded-lg focus:ring-1 focus:ring-[#7d510f] dark:focus:ring-brand-500 focus:border-[#7d510f] dark:focus:border-brand-500 outline-none transition-all text-[#402000] dark:text-white placeholder-[#603000]/30"
                    />
                </div>
                 <div>
                    <label className="block text-xs font-bold text-[#603000] dark:text-slate-400 mb-2 uppercase">{t.form.setupTime}</label>
                    <input
                        type="number"
                        name="setupTime"
                        value={inputs.setupTime}
                        onChange={handleInputChange}
                         className="w-full h-10 px-3 text-sm font-bold bg-[#fff5da] dark:bg-slate-900 border border-[#c1a264] dark:border-slate-600 rounded-lg focus:ring-1 focus:ring-[#7d510f] dark:focus:ring-brand-500 focus:border-[#7d510f] dark:focus:border-brand-500 outline-none transition-all text-[#402000] dark:text-white placeholder-[#603000]/30"
                    />
                </div>
            </div>
        )}

        {/* BOTTOM: 1:1 Replica of TW Unit Input Table */}
        <div className="space-y-4">
            <h3 className="text-xs font-bold text-[#603000] dark:text-slate-500 uppercase tracking-wider pl-1 flex items-center gap-2">
                {t.form.selectTroops}
                <div className="h-px bg-[#c1a264]/50 dark:bg-slate-800 flex-1"></div>
            </h3>
            
            {/* TRIBAL WARS STYLED CONTAINER */}
            <div className="border-2 border-[#c1a264] dark:border-slate-700 rounded-lg bg-[#e7d8af]/30 dark:bg-slate-800/30 p-2 overflow-x-auto shadow-inner transition-colors">
                <table className="w-full border-collapse">
                    <tbody>
                        {/* Header Row with Icons */}
                        <tr>
                            {UNITS.map(unit => (
                                <td key={unit.id} className="text-center p-1 align-bottom min-w-[90px]">
                                    <div className="flex flex-col items-center justify-end h-full pb-2">
                                        {/* ENHANCED ICON VISIBILITY */}
                                        <div 
                                          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#dcc695] dark:bg-slate-700 border-2 border-[#c1a264] dark:border-slate-500 shadow-sm transition-all hover:scale-110 hover:border-[#7d510f] dark:hover:border-brand-400 duration-200 group relative cursor-help"
                                          onMouseEnter={(e) => {
                                            setHoveredUnit(unit);
                                            setMousePos({ x: e.clientX, y: e.clientY });
                                          }}
                                          onMouseLeave={() => setHoveredUnit(null)}
                                        >
                                            <img 
                                                src={unit.image} 
                                                alt={unit.name} 
                                                className="w-8 h-8 object-contain"
                                                style={{ imageRendering: 'auto' }}
                                            />
                                        </div>
                                    </div>
                                </td>
                            ))}
                            {/* "All" Column */}
                            <td className="text-center p-1 align-bottom min-w-[70px] border-l border-[#c1a264]/40 dark:border-slate-700 pl-3">
                                <span className="text-[10px] font-bold text-[#603000] dark:text-slate-400 uppercase tracking-wide">{t.form.total}</span>
                            </td>
                        </tr>

                        {/* Input Row */}
                        <tr>
                            {UNITS.map(unit => (
                                <td key={`input-${unit.id}`} className="p-1">
                                    <div className="flex items-center h-10 w-full bg-[#fff5da] dark:bg-slate-900 border border-[#c1a264] dark:border-slate-600 rounded-md shadow-inner transition-colors focus-within:ring-1 focus-within:ring-[#7d510f] dark:focus-within:ring-brand-500 focus-within:border-[#7d510f] dark:focus-within:border-brand-500">
                                        <button
                                            onClick={() => adjustUnitCount(unit.id, -1)}
                                            className="w-7 h-full flex items-center justify-center hover:bg-[#e7d8af] dark:hover:bg-slate-700 text-[#603000] dark:text-slate-400 border-r border-[#c1a264]/30 dark:border-slate-700 transition-colors focus:outline-none active:bg-[#d6c498] dark:active:bg-slate-600 rounded-l-md"
                                            tabIndex={-1}
                                        >
                                            <Minus size={12} strokeWidth={3} />
                                        </button>
                                        <input 
                                            type="text" 
                                            inputMode="numeric"
                                            value={inputs.army[unit.id] === 0 ? '' : inputs.army[unit.id]}
                                            onChange={(e) => handleUnitChange(unit.id, e.target.value)}
                                            placeholder="0"
                                            className="w-full h-full text-center text-sm font-bold bg-transparent border-none text-[#301c06] dark:text-slate-200 focus:ring-0 focus:outline-none placeholder-[#603000]/20 p-0"
                                        />
                                        <button
                                            onClick={() => adjustUnitCount(unit.id, 1)}
                                            className="w-7 h-full flex items-center justify-center hover:bg-[#e7d8af] dark:hover:bg-slate-700 text-[#603000] dark:text-slate-400 border-l border-[#c1a264]/30 dark:border-slate-700 transition-colors focus:outline-none active:bg-[#d6c498] dark:active:bg-slate-600 rounded-r-md"
                                            tabIndex={-1}
                                        >
                                            <Plus size={12} strokeWidth={3} />
                                        </button>
                                    </div>
                                </td>
                            ))}
                            {/* "All" Value (Calculated Total Count) */}
                            <td className="p-1 border-l border-[#c1a264]/40 dark:border-slate-700 pl-3">
                                <div className="h-10 flex items-center justify-center bg-[#c1a264]/20 dark:bg-slate-800 rounded-md border border-[#c1a264]/30 dark:border-slate-700">
                                    <span className="font-black text-[#603000] dark:text-brand-400 text-sm">
                                        {calculateTotalUnits(inputs.army).toLocaleString()}
                                    </span>
                                </div>
                            </td>
                        </tr>
                        
                        {/* Helper Row (Optional - just like game often shows (0)) */}
                        <tr>
                            {UNITS.map(unit => (
                                <td key={`info-${unit.id}`} className="text-center text-[10px] text-[#603000]/50 dark:text-slate-500 pb-1 pt-1 font-mono">
                                    {inputs.army[unit.id] > 0 ? `(${inputs.army[unit.id]})` : '-'}
                                </td>
                            ))}
                             <td className="border-l border-[#c1a264]/40 dark:border-slate-700"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* SPLIT MODE LEVEL SELECTION */}
            {inputs.calculationMode === 'split' && (
                <div className="mt-4 bg-[#e7d8af]/40 dark:bg-slate-800/60 p-4 rounded-xl border border-[#c1a264] dark:border-slate-700 animate-fade-in shadow-inner">
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
                    <p className="text-[10px] mt-3 text-[#603000] dark:text-slate-400 italic bg-[#fff5da]/50 dark:bg-slate-900/50 p-2 rounded border border-[#c1a264]/30 dark:border-slate-700/50">
                        <span className="font-bold">{t.form.distributionDesc}</span> {t.form.strategyTime}
                    </p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;