import React from 'react';
import { BookOpen, Info, HelpCircle, TrendingUp, AlertTriangle, Moon, Sun, Sword, Star } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';

const InfoSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#f4e4bc] dark:bg-slate-900 rounded-lg shadow-md border-2 border-[#c1a264] dark:border-slate-800 p-6 md:p-8 transition-colors duration-300">
      <div className="flex items-start md:items-center gap-4 mb-8">
        <div className="p-3 bg-[#e7d8af] dark:bg-slate-800 rounded-lg text-[#7d510f] dark:text-brand-400 ring-1 ring-[#c1a264] dark:ring-slate-700">
          <BookOpen size={24} />
        </div>
        <div>
            <h3 className="text-xl font-bold text-[#301c06] dark:text-white leading-tight">
              {t.info.title}
            </h3>
            <p className="text-sm text-[#603000] dark:text-slate-400 mt-1">
              {t.info.subtitle}
            </p>
        </div>
      </div>
      
      {/* SECTION 1: LEVELS & MATH (GRID) */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
        {/* Left Column: Levels */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-bold text-[#402000] dark:text-white uppercase tracking-wider mb-4 border-b border-[#c1a264] dark:border-slate-800 pb-2">
            <Info size={16} className="text-[#7d510f] dark:text-brand-500" /> 
            {t.info.charTitle}
          </h4>
          <ul className="space-y-4">
            <li className="group">
                <div className="flex items-baseline justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-[#301c06] dark:text-brand-300 bg-[#e7d8af] dark:bg-brand-900/30 px-2 py-0.5 rounded border border-[#c1a264] dark:border-brand-500/30">
                        FF (10%)
                    </span>
                    <span className="text-xs font-semibold text-[#402000] dark:text-slate-100">{t.levels.names.FF}</span>
                </div>
                <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed pl-1 border-l-2 border-[#c1a264]/50 dark:border-slate-800 group-hover:border-[#7d510f] dark:group-hover:border-brand-500 transition-colors">
                    {t.info.levels.FF}
                </p>
            </li>
            <li className="group">
                <div className="flex items-baseline justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-[#301c06] dark:text-brand-300 bg-[#e7d8af] dark:bg-brand-900/30 px-2 py-0.5 rounded border border-[#c1a264] dark:border-brand-500/30">
                        BB (25%)
                    </span>
                    <span className="text-xs font-semibold text-[#402000] dark:text-slate-100">{t.levels.names.BB}</span>
                </div>
                <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed pl-1 border-l-2 border-[#c1a264]/50 dark:border-slate-800 group-hover:border-[#7d510f] dark:group-hover:border-brand-500 transition-colors">
                    {t.info.levels.BB}
                </p>
            </li>
            <li className="group">
                <div className="flex items-baseline justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-[#301c06] dark:text-brand-300 bg-[#e7d8af] dark:bg-brand-900/30 px-2 py-0.5 rounded border border-[#c1a264] dark:border-brand-500/30">
                        SS (50%)
                    </span>
                    <span className="text-xs font-semibold text-[#402000] dark:text-slate-100">{t.levels.names.SS}</span>
                </div>
                <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed pl-1 border-l-2 border-[#c1a264]/50 dark:border-slate-800 group-hover:border-[#7d510f] dark:group-hover:border-brand-500 transition-colors">
                    {t.info.levels.SS}
                </p>
            </li>
            <li className="group">
                <div className="flex items-baseline justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-[#301c06] dark:text-brand-300 bg-[#e7d8af] dark:bg-brand-900/30 px-2 py-0.5 rounded border border-[#c1a264] dark:border-brand-500/30">
                        RR (75%)
                    </span>
                    <span className="text-xs font-semibold text-[#402000] dark:text-slate-100">{t.levels.names.RR}</span>
                </div>
                <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed pl-1 border-l-2 border-[#c1a264]/50 dark:border-slate-800 group-hover:border-[#7d510f] dark:group-hover:border-brand-500 transition-colors">
                    {t.info.levels.RR}
                </p>
            </li>
          </ul>
        </div>
        
        {/* Right Column: Math & Mechanics */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-bold text-[#402000] dark:text-white uppercase tracking-wider mb-4 border-b border-[#c1a264] dark:border-slate-800 pb-2">
            <HelpCircle size={16} className="text-[#7d510f] dark:text-brand-500" /> 
            {t.info.mathTitle}
          </h4>
          <div className="space-y-6">
             <div className="bg-[#fff5da] dark:bg-slate-800 p-4 rounded-lg border border-[#c1a264]/50 dark:border-slate-700">
                <p className="text-sm text-[#603000] dark:text-slate-300 leading-relaxed font-medium">
                    {t.info.mathIntro}
                </p>
             </div>

             <div>
                <div className="flex items-center gap-2 mb-2 text-[#b91c1c] dark:text-red-400">
                    <AlertTriangle size={16} />
                    <h5 className="text-sm font-bold uppercase">{t.info.mathDiminishingTitle}</h5>
                </div>
                <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed pl-6 border-l-2 border-[#b91c1c]/30 dark:border-red-500/30">
                    {t.info.mathDiminishingDesc}
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: EXAMPLES (CARDS) */}
      <div className="mb-12">
          <h4 className="flex items-center gap-2 text-sm font-bold text-[#402000] dark:text-white uppercase tracking-wider mb-6 border-b border-[#c1a264] dark:border-slate-800 pb-2">
            <TrendingUp size={16} className="text-[#7d510f] dark:text-brand-500" /> 
            {t.info.examplesTitle}
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6">
              {/* Example 1: Active */}
              <div className="bg-[#fff5da] dark:bg-slate-800 rounded-lg p-5 border border-[#c1a264] dark:border-slate-700 shadow-sm flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                      <div className="bg-[#e7d8af] dark:bg-slate-700 p-1.5 rounded text-[#7d510f] dark:text-brand-400">
                         <Sun size={18} />
                      </div>
                      <h5 className="font-bold text-[#301c06] dark:text-white text-sm">{t.info.example1Title}</h5>
                  </div>
                  <p className="text-xs text-[#603000] dark:text-slate-400 mb-3 italic">
                      {t.info.example1Desc}
                  </p>
                  <div className="mt-auto bg-[#f4e4bc] dark:bg-slate-900/50 p-3 rounded border border-[#c1a264]/50 dark:border-slate-700/50">
                      <span className="text-[10px] font-bold text-[#7d510f] dark:text-brand-500 uppercase tracking-wider block mb-1">STRATEGIA</span>
                      <p className="text-xs text-[#402000] dark:text-slate-300 leading-snug">
                          {t.info.example1Strategy}
                      </p>
                  </div>
              </div>

              {/* Example 2: Sleep */}
              <div className="bg-[#fff5da] dark:bg-slate-800 rounded-lg p-5 border border-[#c1a264] dark:border-slate-700 shadow-sm flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                      <div className="bg-[#301c06] dark:bg-slate-950 p-1.5 rounded text-[#f4e4bc] dark:text-slate-300">
                         <Moon size={18} />
                      </div>
                      <h5 className="font-bold text-[#301c06] dark:text-white text-sm">{t.info.example2Title}</h5>
                  </div>
                  <p className="text-xs text-[#603000] dark:text-slate-400 mb-3 italic">
                      {t.info.example2Desc}
                  </p>
                  <div className="mt-auto bg-[#f4e4bc] dark:bg-slate-900/50 p-3 rounded border border-[#c1a264]/50 dark:border-slate-700/50">
                      <span className="text-[10px] font-bold text-[#7d510f] dark:text-brand-500 uppercase tracking-wider block mb-1">STRATEGIA</span>
                      <p className="text-xs text-[#402000] dark:text-slate-300 leading-snug">
                          {t.info.example2Strategy}
                      </p>
                  </div>
              </div>

              {/* Example 3: Offensive */}
              <div className="bg-[#fff5da] dark:bg-slate-800 rounded-lg p-5 border border-[#c1a264] dark:border-slate-700 shadow-sm flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                      <div className="bg-[#b91c1c] dark:bg-red-900 p-1.5 rounded text-white">
                         <Sword size={18} />
                      </div>
                      <h5 className="font-bold text-[#301c06] dark:text-white text-sm">{t.info.example3Title}</h5>
                  </div>
                  <p className="text-xs text-[#603000] dark:text-slate-400 mb-3 italic">
                      {t.info.example3Desc}
                  </p>
                  <div className="mt-auto bg-[#f4e4bc] dark:bg-slate-900/50 p-3 rounded border border-[#c1a264]/50 dark:border-slate-700/50">
                      <span className="text-[10px] font-bold text-[#7d510f] dark:text-brand-500 uppercase tracking-wider block mb-1">STRATEGIA</span>
                      <p className="text-xs text-[#402000] dark:text-slate-300 leading-snug">
                          {t.info.example3Strategy}
                      </p>
                  </div>
              </div>
          </div>
      </div>

      {/* SECTION 3: PRO TIPS */}
      <div>
          <h4 className="flex items-center gap-2 text-sm font-bold text-[#402000] dark:text-white uppercase tracking-wider mb-4 border-b border-[#c1a264] dark:border-slate-800 pb-2">
            <Star size={16} className="text-[#7d510f] dark:text-brand-500" /> 
            {t.info.tipsTitle}
          </h4>
          <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7d510f] dark:bg-brand-500 mt-2 shrink-0"></div>
                  <p className="text-sm text-[#603000] dark:text-slate-300 leading-relaxed">{t.info.tip1}</p>
              </li>
               <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7d510f] dark:bg-brand-500 mt-2 shrink-0"></div>
                  <p className="text-sm text-[#603000] dark:text-slate-300 leading-relaxed">{t.info.tip2}</p>
              </li>
               <li className="flex gap-3 items-start md:col-span-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7d510f] dark:bg-brand-500 mt-2 shrink-0"></div>
                  <p className="text-sm text-[#603000] dark:text-slate-300 leading-relaxed">{t.info.tip3}</p>
              </li>
          </ul>
      </div>

    </div>
  );
};

export default InfoSection;