import React, { useState } from 'react';
import { CalculatorInputs, UnitType, UnitDefinition } from '../types';
import { UNITS } from '../utils/unitData';
import { calculateTotalCapacity, calculateTotalUnits } from '../utils/scavengeMath';
import { Settings, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import UnitTooltip from './UnitTooltip';

interface Props {
  inputs: CalculatorInputs;
  setInputs: React.Dispatch<React.SetStateAction<CalculatorInputs>>;
}

const CalculatorForm: React.FC<Props> = ({ inputs, setInputs }) => {
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
              <span className="hidden sm:inline">Konfiguracja</span>
            </h2>

            <div className="hidden sm:block h-6 w-px bg-[#c1a264] dark:bg-slate-700"></div>

            {/* World Speed Control */}
            <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#603000] dark:text-slate-400 uppercase">
                    Prędkość
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
                Więcej opcji
                {isAdvancedOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
        </div>

        {/* Right Side: Capacity Highlight */}
        <div className="flex items-center justify-end">
            <div className="bg-[#fff5da] dark:bg-amber-900/10 border border-[#c1a264] dark:border-amber-800/50 px-5 py-2 rounded-xl flex flex-col items-end shadow-sm">
                 <div className="text-[10px] font-bold text-[#603000]/80 dark:text-amber-500/80 uppercase tracking-wider mb-0.5">
                    Łączna pojemność
                 </div>
                 <div className="text-2xl font-black text-[#402000] dark:text-amber-500 leading-none tabular-nums">
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
                    <label className="block text-xs font-medium text-[#603000] dark:text-slate-400 mb-1.5">Czas Bazowy (s)</label>
                    <input
                        type="number"
                        name="baseTime"
                        value={inputs.baseTime}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm bg-[#fff5da] dark:bg-slate-900 border border-[#c1a264] dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#7d510f]/20 dark:focus:ring-brand-500/20 focus:border-[#7d510f] dark:focus:border-brand-500 outline-none transition-all text-[#402000] dark:text-white"
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-[#603000] dark:text-slate-400 mb-1.5">Max Czas (h)</label>
                    <input
                        type="number"
                        name="maxTimeAway"
                        value={inputs.maxTimeAway}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm bg-[#fff5da] dark:bg-slate-900 border border-[#c1a264] dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#7d510f]/20 dark:focus:ring-brand-500/20 focus:border-[#7d510f] dark:focus:border-brand-500 outline-none transition-all text-[#402000] dark:text-white"
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-[#603000] dark:text-slate-400 mb-1.5">Mnożnik</label>
                    <input
                        type="number"
                        name="multiplier"
                        value={inputs.multiplier}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm bg-[#fff5da] dark:bg-slate-900 border border-[#c1a264] dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#7d510f]/20 dark:focus:ring-brand-500/20 focus:border-[#7d510f] dark:focus:border-brand-500 outline-none transition-all text-[#402000] dark:text-white"
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-[#603000] dark:text-slate-400 mb-1.5">Wykładnik</label>
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
                Wybierz Wojska
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
                                <span className="text-[10px] font-bold text-[#603000] dark:text-slate-400 uppercase tracking-wide">Razem</span>
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
            <p className="text-[10px] text-[#603000]/60 dark:text-slate-500 text-right italic">
                *Interfejs stylizowany na oryginalny wygląd gry Plemiona
            </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;