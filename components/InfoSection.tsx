import React from 'react';
import { BookOpen, Info, HelpCircle, ArrowRight } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="bg-[#f4e4bc] dark:bg-slate-900 rounded-lg shadow-md border-2 border-[#c1a264] dark:border-slate-800 p-6 md:p-8 transition-colors duration-300">
      <div className="flex items-start md:items-center gap-4 mb-8">
        <div className="p-3 bg-[#e7d8af] dark:bg-brand-900/20 rounded-lg text-[#7d510f] dark:text-brand-400 ring-1 ring-[#c1a264] dark:ring-brand-900/40">
          <BookOpen size={24} />
        </div>
        <div>
            <h3 className="text-xl font-bold text-[#301c06] dark:text-white leading-tight">
              Przewodnik po wynikach
            </h3>
            <p className="text-sm text-[#603000] dark:text-slate-400 mt-1">
              Szczegółowe wyjaśnienie wskaźników i metodologii obliczeń.
            </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column: Levels */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-bold text-[#402000] dark:text-white uppercase tracking-wider mb-4 border-b border-[#c1a264] dark:border-slate-800 pb-2">
            <Info size={16} className="text-[#7d510f] dark:text-brand-500" /> 
            Charakterystyka poziomów
          </h4>
          <ul className="space-y-4">
            <li className="group">
                <div className="flex items-baseline justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-[#301c06] dark:text-brand-300 bg-[#e7d8af] dark:bg-brand-900/30 px-2 py-0.5 rounded border border-[#c1a264] dark:border-brand-900/50">
                        FF (10%)
                    </span>
                    <span className="text-xs font-semibold text-[#402000] dark:text-slate-100">Leniwi szabrownicy</span>
                </div>
                <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed pl-1 border-l-2 border-[#c1a264]/50 dark:border-slate-800 group-hover:border-[#7d510f] dark:group-hover:border-brand-800 transition-colors">
                    Najkrótsze wyprawy. Idealne do szybkiego obrotu wojskami przy częstej aktywności na koncie.
                </p>
            </li>
            <li className="group">
                <div className="flex items-baseline justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-[#301c06] dark:text-brand-300 bg-[#e7d8af] dark:bg-brand-900/30 px-2 py-0.5 rounded border border-[#c1a264] dark:border-brand-900/50">
                        BB (25%)
                    </span>
                    <span className="text-xs font-semibold text-[#402000] dark:text-slate-100">Skromni zbieracze</span>
                </div>
                <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed pl-1 border-l-2 border-[#c1a264]/50 dark:border-slate-800 group-hover:border-[#7d510f] dark:group-hover:border-brand-800 transition-colors">
                    Zbalansowany poziom. Kompromis między czasem trwania a zyskiem dla średnio-aktywnych graczy.
                </p>
            </li>
            <li className="group">
                <div className="flex items-baseline justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-[#301c06] dark:text-brand-300 bg-[#e7d8af] dark:bg-brand-900/30 px-2 py-0.5 rounded border border-[#c1a264] dark:border-brand-900/50">
                        SS (50%)
                    </span>
                    <span className="text-xs font-semibold text-[#402000] dark:text-slate-100">Sprytni zbieracze</span>
                </div>
                <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed pl-1 border-l-2 border-[#c1a264]/50 dark:border-slate-800 group-hover:border-[#7d510f] dark:group-hover:border-brand-800 transition-colors">
                    Wysoka efektywność. Często najlepszy wybór pod kątem surowców na godzinę w dłuższym oknie czasowym.
                </p>
            </li>
            <li className="group">
                <div className="flex items-baseline justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-[#301c06] dark:text-brand-300 bg-[#e7d8af] dark:bg-brand-900/30 px-2 py-0.5 rounded border border-[#c1a264] dark:border-brand-900/50">
                        RR (75%)
                    </span>
                    <span className="text-xs font-semibold text-[#402000] dark:text-slate-100">Wielcy zbieracze</span>
                </div>
                <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed pl-1 border-l-2 border-[#c1a264]/50 dark:border-slate-800 group-hover:border-[#7d510f] dark:group-hover:border-brand-800 transition-colors">
                    Maksymalny jednorazowy łup. Najlepsze rozwiązanie na noc lub dłuższą nieobecność (AFK).
                </p>
            </li>
          </ul>
        </div>
        
        {/* Right Column: Methodology */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-bold text-[#402000] dark:text-white uppercase tracking-wider mb-4 border-b border-[#c1a264] dark:border-slate-800 pb-2">
            <HelpCircle size={16} className="text-[#7d510f] dark:text-brand-500" /> 
            Metodologia
          </h4>
          <div className="space-y-6">
            <div className="flex gap-4">
                <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#fff5da] dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-[#7d510f] dark:text-slate-400 border border-[#c1a264] dark:border-slate-700">1</div>
                </div>
                <div>
                    <h5 className="text-sm font-bold text-[#301c06] dark:text-slate-100 mb-1">Pojemność Jednostek</h5>
                    <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed">
                        Kalkulator sumuje pojemność wszystkich wpisanych jednostek. Np. Lekkiej Kawalerii (80) i Pikinierów (25). Wartość "25" w konfiguracji jest wartością referencyjną dla Pikiniera.
                    </p>
                </div>
            </div>
            
            <div className="flex gap-4">
                <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#fff5da] dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-[#7d510f] dark:text-slate-400 border border-[#c1a264] dark:border-slate-700">2</div>
                </div>
                <div>
                    <h5 className="text-sm font-bold text-[#301c06] dark:text-slate-100 mb-1">Algorytm Czasu</h5>
                    <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed">
                        Czas trwania obliczany jest nieliniowo: <br/>
                        <code className="text-[11px] bg-[#fff5da] dark:bg-slate-800 px-1.5 py-0.5 rounded border border-[#c1a264] dark:border-slate-700 font-mono mt-1 inline-block text-[#402000] dark:text-slate-300">
                            ((Pojemność * %) ^ Wykładnik + CzasBazowy) * Prędkość
                        </code>
                    </p>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#fff5da] dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-[#7d510f] dark:text-slate-400 border border-[#c1a264] dark:border-slate-700">3</div>
                </div>
                <div>
                    <h5 className="text-sm font-bold text-[#301c06] dark:text-slate-100 mb-1">Rekomendacja AI</h5>
                    <p className="text-sm text-[#603000] dark:text-slate-400 leading-relaxed">
                        System automatycznie wskazuje poziom z najwyższym wskaźnikiem <strong>surowców na godzinę</strong>. Jest to kluczowy parametr dla maksymalizacji zysków przy aktywnym graniu.
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