import React from 'react';
import { UnitDefinition } from '../types';
import { Info, Swords, Shield, X } from 'lucide-react';

interface Props {
  unit: UnitDefinition;
  position: { x: number; y: number };
}

const UnitTooltip: React.FC<Props> = ({ unit, position }) => {
  // Determine if we need to flip the tooltip to the left if it's near the right edge
  const isNearRightEdge = typeof window !== 'undefined' && position.x > window.innerWidth - 320;
  
  const style: React.CSSProperties = {
    position: 'fixed',
    top: position.y + 15,
    left: isNearRightEdge ? position.x - 310 : position.x + 15,
    zIndex: 9999,
  };

  return (
    <div 
      style={style} 
      className="w-[300px] rounded-sm shadow-[0_4px_15px_rgba(0,0,0,0.5)] font-sans text-xs leading-normal pointer-events-none transition-colors duration-200
                 bg-[#f4e4bc] border-2 border-[#804000] text-[#402000]
                 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-200"
    >
      {/* Header */}
      <div className="p-1 border-b flex justify-between items-center transition-colors
                      bg-[#c1a264] border-[#804000] text-black
                      dark:bg-slate-800 dark:border-slate-600 dark:text-white">
        <span className="font-bold text-sm px-1">{unit.name}</span>
        <X size={14} className="opacity-50 text-[#5c2e08] dark:text-slate-400" />
      </div>

      {/* Content */}
      <div className="p-2 relative">
        {/* Description Section */}
        <div className="mb-3 flex gap-2">
            <Info size={24} className="shrink-0 mt-0.5 text-[#5c2e08] dark:text-brand-500" />
            <p className="italic leading-tight text-[#402000] dark:text-slate-400">
                {unit.description}
            </p>
        </div>

        {/* Layout: Data Left, Image Right */}
        <div className="flex gap-2">
            <div className="flex-1 space-y-3">
                {/* Costs */}
                <div>
                    <div className="px-1 font-bold border mb-0.5 transition-colors
                                    bg-[#e7d8af] border-[#c5b58d] text-[#5c2e08]
                                    dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">
                        Koszta
                    </div>
                    <div className="flex gap-2 items-center text-[11px] dark:text-slate-300">
                        <span className="flex items-center gap-1"><div className="w-3 h-3 bg-[#a06840] rounded-full border border-black/20" title="Drewno"></div> {unit.stats.wood}</span>
                        <span className="flex items-center gap-1"><div className="w-3 h-3 bg-[#e88840] rounded-full border border-black/20" title="Glina"></div> {unit.stats.clay}</span>
                        <span className="flex items-center gap-1"><div className="w-3 h-3 bg-[#888899] rounded-full border border-black/20" title="Żelazo"></div> {unit.stats.iron}</span>
                    </div>
                </div>

                {/* Population / Speed / Carry */}
                <div className="grid grid-cols-3 gap-1 text-center">
                    <div className="px-0.5 py-0.5 border transition-colors
                                    bg-[#e7d8af] border-[#c5b58d]
                                    dark:bg-slate-800 dark:border-slate-700">
                        <div className="font-bold text-[10px] text-[#5c2e08] dark:text-slate-400">Ludność</div>
                        <div className="dark:text-slate-200">{unit.stats.pop}</div>
                    </div>
                    <div className="px-0.5 py-0.5 border transition-colors
                                    bg-[#e7d8af] border-[#c5b58d]
                                    dark:bg-slate-800 dark:border-slate-700">
                        <div className="font-bold text-[10px] text-[#5c2e08] dark:text-slate-400">Prędkość</div>
                        <div className="dark:text-slate-200">{unit.stats.speed}m</div>
                    </div>
                    {/* Highlighted Capacity */}
                    <div className="px-0.5 py-0.5 border transition-colors relative overflow-hidden
                                    bg-[#ffeeb0] border-[#b08d55] shadow-sm
                                    dark:bg-brand-900/40 dark:border-brand-500 dark:shadow-[inset_0_0_10px_rgba(20,184,166,0.1)]">
                        <div className="font-black text-[10px] text-[#402000] dark:text-brand-300 uppercase tracking-wide scale-95 transform">Ładunek</div>
                        <div className="font-black text-sm text-[#2b1602] dark:text-white leading-none mt-0.5">{unit.capacity}</div>
                    </div>
                </div>
            </div>

            {/* Large Image Right */}
            <div className="w-24 shrink-0 flex items-start justify-center">
                 <img src={unit.image} alt={unit.name} className="max-w-full h-auto drop-shadow-md" />
            </div>
        </div>

        {/* Combat Stats Table */}
        <div className="mt-3">
             <div className="px-1 font-bold border border-b-0 transition-colors
                             bg-[#c1a264] border-[#804000] text-[#2b1602]
                             dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200">
                Statystyki bitewne
             </div>
             <table className="w-full border-collapse border transition-colors
                               border-[#c5b58d] bg-[#f8efd4]
                               dark:border-slate-700 dark:bg-slate-900/50">
                <tbody>
                    <tr className="border-b transition-colors border-[#dfcf9e] dark:border-slate-700">
                        <td className="p-1 flex items-center gap-1 dark:text-slate-300">
                             <Swords size={12} className="text-black dark:text-slate-400" /> Siła napadu
                        </td>
                        <td className="p-1 text-right font-bold dark:text-slate-200">{unit.stats.attack}</td>
                    </tr>
                    <tr className="border-b transition-colors 
                                   border-[#dfcf9e] bg-[#f0e2be]
                                   dark:border-slate-700 dark:bg-slate-800">
                        <td className="p-1 flex items-center gap-1 dark:text-slate-300">
                             <Shield size={12} className="text-[#1a3875] dark:text-blue-400" /> Obrona ogólnie
                        </td>
                        <td className="p-1 text-right font-bold dark:text-slate-200">{unit.stats.defense}</td>
                    </tr>
                    <tr className="border-b transition-colors border-[#dfcf9e] dark:border-slate-700">
                        <td className="p-1 flex items-center gap-1 dark:text-slate-300">
                             <Shield size={12} className="text-[#5c3e1c] dark:text-amber-500" /> Obr. kawaleria
                        </td>
                        <td className="p-1 text-right font-bold dark:text-slate-200">{unit.stats.defenseCav}</td>
                    </tr>
                    <tr className="transition-colors
                                   bg-[#f0e2be] dark:bg-slate-800">
                        <td className="p-1 flex items-center gap-1 dark:text-slate-300">
                             <Shield size={12} className="text-[#2d5c1c] dark:text-emerald-500" /> Obr. łucznicy
                        </td>
                        <td className="p-1 text-right font-bold dark:text-slate-200">{unit.stats.defenseArcher}</td>
                    </tr>
                </tbody>
             </table>
        </div>
      </div>
    </div>
  );
};

export default UnitTooltip;