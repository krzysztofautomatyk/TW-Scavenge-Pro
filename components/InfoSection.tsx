import React from 'react';
import { BookOpen, Info, HelpCircle } from 'lucide-react';
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
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
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
        
        {/* Right Column: Methodology */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-bold text-[#402000] dark:text-white uppercase tracking-wider mb-4 border-b border-[#c1a264] dark:border-slate-800 pb-2">
            <HelpCircle size={16} className="text-[#7d510f] dark:text-brand-500" /> 
            {t.info.methodTitle}
          </h4>
          <div className="space-y-6">
            <div className="flex gap-4">
                <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#fff5da] dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-[#7d510f] dark:text-slate-400 border border-[#c1a264] dark:border-slate-700">1</div>
                </div>
                <div>
                    <h5 className="text-sm font-bold text-[#301c06] dark:text-slate-100 mb-1">{t.info.method1Title}</h5>
                    <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed">
                        {t.info.method1Desc}
                    </p>
                </div>
            </div>
            
            <div className="flex gap-4">
                <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#fff5da] dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-[#7d510f] dark:text-slate-400 border border-[#c1a264] dark:border-slate-700">2</div>
                </div>
                <div>
                    <h5 className="text-sm font-bold text-[#301c06] dark:text-slate-100 mb-1">{t.info.method2Title}</h5>
                    <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed">
                        {t.info.method2Desc} <br/>
                        <code className="text-[11px] bg-[#fff5da] dark:bg-slate-800 px-1.5 py-0.5 rounded border border-[#c1a264] dark:border-slate-700 font-mono mt-1 inline-block text-[#402000] dark:text-slate-300">
                            ((Capacity * %) ^ Exponent + BaseTime) * SpeedFactor
                        </code>
                    </p>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#fff5da] dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-[#7d510f] dark:text-slate-400 border border-[#c1a264] dark:border-slate-700">3</div>
                </div>
                <div>
                    <h5 className="text-sm font-bold text-[#301c06] dark:text-slate-100 mb-1">{t.info.method3Title}</h5>
                    <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed">
                        {t.info.method3Desc}
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;