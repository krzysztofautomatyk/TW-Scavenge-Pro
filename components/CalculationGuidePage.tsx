import React from 'react';
import { ArrowLeft, Calculator, Clock, PieChart, Users, Zap, BookOpen, Divide, Sigma, Target } from 'lucide-react';
import { UNITS } from '../utils/unitData';

interface Props {
  onBack: () => void;
}

const CalculationGuidePage: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#f9f7f2] dark:bg-slate-950 animate-fade-in pb-20">
      
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#c1a264] border-b-4 border-[#7d510f] dark:bg-slate-900/95 dark:backdrop-blur dark:border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-[#7d510f] text-[#f4e4bc] rounded-lg hover:bg-[#5c3b0b] transition-colors font-bold shadow-sm dark:bg-brand-600 dark:hover:bg-brand-700 dark:text-white"
          >
            <ArrowLeft size={20} />
            Powrót do kalkulatora
          </button>
          <div className="h-8 w-px bg-[#7d510f]/20 dark:bg-slate-700 mx-2 hidden sm:block"></div>
          <h1 className="text-xl font-bold text-[#301c06] dark:text-white flex items-center gap-2">
            <BookOpen size={24} className="opacity-80"/>
            Kompendium Wiedzy o Zbieractwie
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">

        {/* Hero Section */}
        <div className="bg-[#f4e4bc] dark:bg-slate-900 p-8 rounded-xl border-2 border-[#c1a264] dark:border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <Calculator size={200} />
            </div>
            <h2 className="text-3xl font-black text-[#301c06] dark:text-white mb-4 relative z-10">
                Matematyka Zbieractwa: Poziom Ekspert
            </h2>
            <p className="text-lg text-[#603000] dark:text-slate-300 max-w-3xl relative z-10 leading-relaxed">
                Zbieractwo w Plemionach nie jest losowe. To precyzyjny system matematyczny oparty na pojemności łupu i wykładniczych funkcjach czasu.
                Zrozumienie poniższych mechanizmów pozwoli Ci zwiększyć wydajność farmienia nawet o <strong>30-40%</strong> względem graczy wysyłających wojska "na oko".
            </p>
        </div>

        {/* SECTION 1: MIXED TROOPS */}
        <section className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-[#c1a264] dark:border-slate-800 pb-2">
                <div className="p-2 bg-[#7d510f] dark:bg-brand-600 rounded text-white">
                    <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#301c06] dark:text-white">Dynamika Mieszanych Wojsk</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-[#c1a264] dark:border-slate-800 shadow-sm">
                    <h4 className="font-bold text-lg mb-4 text-[#7d510f] dark:text-brand-400">Mit Prędkości Jednostki</h4>
                    <p className="text-[#402000] dark:text-slate-300 mb-4 text-sm leading-relaxed">
                        Wielu graczy błędnie zakłada, że wysłanie Lekkiej Kawalerii (szybkiej) sprawi, że zbieractwo wróci szybciej niż przy wysłaniu Mieczników (wolnych).
                    </p>
                    <div className="bg-red-100 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                        <p className="font-bold text-red-800 dark:text-red-400 text-sm">
                            FAKT: Prędkość jednostki (np. 10 min/pole) NIE MA ŻADNEGO WPŁYWU na czas zbieractwa.
                        </p>
                    </div>
                    <p className="text-[#402000] dark:text-slate-300 text-sm leading-relaxed">
                        Czas trwania zależy <strong>wyłącznie</strong> od łącznej pojemności łupu grupy. Nieważne czy pojemność 10.000 pochodzi od 400 Pikinierów czy 125 Lekkich Kawalerzystów - czas wyprawy będzie identyczny.
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-[#c1a264] dark:border-slate-800 shadow-sm">
                    <h4 className="font-bold text-lg mb-4 text-[#7d510f] dark:text-brand-400">Agregacja Pojemności</h4>
                    <p className="text-[#402000] dark:text-slate-300 mb-4 text-sm">
                        Kalkulator sumuje pojemność wszystkich typów jednostek do jednej zmiennej <code>TotalCapacity</code>.
                    </p>
                    
                    <div className="bg-[#f9f7f2] dark:bg-slate-950 p-4 rounded border border-[#c1a264]/30 dark:border-slate-700 space-y-2">
                        <div className="flex justify-between text-sm border-b border-dashed border-gray-300 dark:border-slate-700 pb-2">
                            <span className="text-[#603000] dark:text-slate-400">100 Pikinierów (25 cap)</span>
                            <span className="font-mono font-bold dark:text-white">2,500</span>
                        </div>
                        <div className="flex justify-between text-sm border-b border-dashed border-gray-300 dark:border-slate-700 pb-2">
                            <span className="text-[#603000] dark:text-slate-400">50 Lekkiej Kaw. (80 cap)</span>
                            <span className="font-mono font-bold dark:text-white">4,000</span>
                        </div>
                        <div className="flex justify-between text-sm border-b border-dashed border-gray-300 dark:border-slate-700 pb-2">
                            <span className="text-[#603000] dark:text-slate-400">1 Rycerz (100 cap)</span>
                            <span className="font-mono font-bold dark:text-white">100</span>
                        </div>
                        <div className="flex justify-between text-base pt-2">
                            <span className="font-bold text-[#7d510f] dark:text-brand-400">RAZEM (Input do wzoru)</span>
                            <span className="font-mono font-black text-[#301c06] dark:text-white">6,600</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 2: THE CORE FORMULA */}
        <section className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-[#c1a264] dark:border-slate-800 pb-2">
                <div className="p-2 bg-[#7d510f] dark:bg-brand-600 rounded text-white">
                    <Sigma size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#301c06] dark:text-white">Wzór Matematyczny ("Czarna Skrzynka")</h3>
            </div>

            <div className="bg-[#301c06] text-[#f4e4bc] p-6 rounded-lg shadow-inner font-mono text-sm md:text-base overflow-x-auto">
                <p className="opacity-70 mb-2">// Wzór na czas w sekundach</p>
                Duration = ( ( (Capacity * Ratio)^2 * Multiplier )^Exponent + BaseTime ) * WorldSpeedFactor
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-[#fff5da] dark:bg-slate-800 rounded border border-[#c1a264] dark:border-slate-700">
                    <strong className="block text-[#7d510f] dark:text-brand-400 mb-1">Capacity * Ratio</strong>
                    <p className="text-xs text-[#402000] dark:text-slate-300">
                        To jest "efektywny łup". Jeśli wyślesz 1000 pojemności na poziom FF (10%), wzór "widzi" tylko 100 surowców. To dlatego poziom FF trwa krócej niż RR przy tej samej liczbie wojsk.
                    </p>
                </div>
                <div className="p-4 bg-[#fff5da] dark:bg-slate-800 rounded border border-[#c1a264] dark:border-slate-700">
                    <strong className="block text-[#7d510f] dark:text-brand-400 mb-1">Exponent (Wykładnik)</strong>
                    <p className="text-xs text-[#402000] dark:text-slate-300">
                        Zazwyczaj <strong>0.45</strong>. Odpowiada za nieliniowość. Im więcej wojska wyślesz, tym *mniej wydajny* czasowo staje się każdy kolejny żołnierz (krzywa spłaszczająca się).
                    </p>
                </div>
                <div className="p-4 bg-[#fff5da] dark:bg-slate-800 rounded border border-[#c1a264] dark:border-slate-700">
                    <strong className="block text-[#7d510f] dark:text-brand-400 mb-1">WorldSpeedFactor</strong>
                    <p className="text-xs text-[#402000] dark:text-slate-300">
                        Obliczany jako <code>Speed ^ -0.55</code>. Na świecie z prędkością 2.0 czasy są mnożone przez ~0.68 (są o 32% krótsze).
                    </p>
                </div>
            </div>
        </section>

        {/* SECTION 3: SPLIT MODE LOGIC */}
        <section className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-[#c1a264] dark:border-slate-800 pb-2">
                <div className="p-2 bg-[#7d510f] dark:bg-brand-600 rounded text-white">
                    <PieChart size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#301c06] dark:text-white">Strategia "Split Mode" (Equal Duration)</h3>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-[#c1a264] dark:border-slate-800">
                <h4 className="font-bold text-lg mb-4">Dlaczego dzielić wojska nierówno?</h4>
                <p className="text-[#402000] dark:text-slate-300 mb-6 leading-relaxed">
                    W trybie normalnym, jeśli podzielisz 1000 pikinierów na 4 równe grupy po 250, wyniki czasowe będą drastycznie różne. 
                    Grupa FF wróci po 30 minutach, a RR po 4 godzinach. To nieefektywne, bo musisz logować się wielokrotnie.
                    <br/><br/>
                    <strong>Celem Split Mode</strong> jest takie dobranie liczby wojsk, aby wszystkie 4 grupy wróciły <strong>w tym samym momencie</strong>.
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-6 bg-[#f9f7f2] dark:bg-slate-950 rounded-lg border border-dashed border-[#c1a264]">
                    <div className="text-center">
                        <div className="text-sm font-bold text-[#603000] dark:text-slate-400 mb-2">CEL MATEMATYCZNY</div>
                        <div className="font-mono bg-white dark:bg-slate-800 px-4 py-2 rounded shadow text-[#7d510f] dark:text-brand-400">
                            Time(FF) ≈ Time(BB) ≈ Time(SS) ≈ Time(RR)
                        </div>
                    </div>
                    <Zap className="text-[#c1a264] hidden md:block" />
                    <div className="text-center">
                        <div className="text-sm font-bold text-[#603000] dark:text-slate-400 mb-2">ROZWIĄZANIE</div>
                        <div className="font-mono bg-white dark:bg-slate-800 px-4 py-2 rounded shadow text-[#7d510f] dark:text-brand-400">
                            Capacity ∝ (1 / Ratio)
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold text-[#301c06] dark:text-white">Przykład Praktyczny Podziału (dla 1000 Pojemności)</h4>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse border border-[#c1a264] dark:border-slate-700">
                        <thead className="bg-[#e7d8af] dark:bg-slate-800">
                            <tr>
                                <th className="p-3 border border-[#c1a264] dark:border-slate-700 text-[#301c06] dark:text-slate-200">Poziom</th>
                                <th className="p-3 border border-[#c1a264] dark:border-slate-700 text-[#301c06] dark:text-slate-200">Ratio</th>
                                <th className="p-3 border border-[#c1a264] dark:border-slate-700 text-[#301c06] dark:text-slate-200">Waga (1/Ratio)</th>
                                <th className="p-3 border border-[#c1a264] dark:border-slate-700 text-[#301c06] dark:text-slate-200">Udział %</th>
                                <th className="p-3 border border-[#c1a264] dark:border-slate-700 font-bold text-[#7d510f] dark:text-brand-400">Przydział</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-900">
                            <tr>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">FF (Leniwi)</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">0.10</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">10.0</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">57.7%</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 font-bold dark:text-white">577</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">BB (Skromni)</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">0.25</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">4.0</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">23.1%</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 font-bold dark:text-white">231</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">SS (Sprytni)</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">0.50</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">2.0</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">11.5%</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 font-bold dark:text-white">115</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">RR (Wielcy)</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">0.75</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">1.33</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 dark:text-slate-300">7.7%</td>
                                <td className="p-3 border border-[#c1a264]/30 dark:border-slate-700 font-bold dark:text-white">77</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* SECTION 4: OPTIMIZATION TIPS */}
        <section className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-[#c1a264] dark:border-slate-800 pb-2">
                <div className="p-2 bg-[#7d510f] dark:bg-brand-600 rounded text-white">
                    <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#301c06] dark:text-white">Strategie Optymalizacji</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#fff5da] dark:bg-slate-800 p-6 rounded-lg border-l-4 border-[#7d510f] dark:border-brand-500">
                    <h4 className="font-bold text-[#301c06] dark:text-white mb-2">Aktywny Gracz (Co 1-2h)</h4>
                    <p className="text-sm text-[#603000] dark:text-slate-300 leading-relaxed">
                        Używaj <strong>Normal Mode</strong> i wysyłaj wszystko na poziom, który daje najwięcej surowców/h (zazwyczaj SS lub RR). Ignoruj krótsze, mniej opłacalne poziomy, chyba że masz nadmiar wojska.
                    </p>
                </div>
                <div className="bg-[#fff5da] dark:bg-slate-800 p-6 rounded-lg border-l-4 border-[#c1a264] dark:border-brand-400/50">
                    <h4 className="font-bold text-[#301c06] dark:text-white mb-2">Pół-AFK / Sen (6-8h+)</h4>
                    <p className="text-sm text-[#603000] dark:text-slate-300 leading-relaxed">
                        Używaj <strong>Split Mode</strong>. System wyliczy podział tak, abyś po 8 godzinach snu miał z powrotem 100% wojsk ze wszystkich 4 wypraw, maksymalizując zysk z pojedynczego logowania.
                    </p>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default CalculationGuidePage;