import { UnitType } from '../types';

type TranslationKeys = {
  header: {
    subtitle: string;
    guideButton: string;
  };
  form: {
    configuration: string;
    speed: string;
    calculation: string;
    advanced: string;
    more: string;
    baseTime: string;
    maxTime: string;
    multiplier: string;
    exponent: string;
    selectTroops: string;
    total: string;
    totalCapacity: string;
    distribution: string;
    distributionDesc: string;
    strategyTime: string;
    disclaimer: string;
  };
  levels: {
    details: string;
    assignedTroops: string;
    noTroops: string;
    efficiency: string;
    resource: string;
    time: string;
    names: {
      FF: string;
      BB: string;
      SS: string;
      RR: string;
    };
    descriptions: {
      FF: string;
      BB: string;
      SS: string;
      RR: string;
    };
  };
  table: {
    title: string;
    splitMode: string;
    level: string;
    units: string;
    capacity: string;
    loot: string;
    time: string;
    runs: string;
    totalTime: string;
    profit: string;
    comparison: string;
    total: string;
    summarySplit: string;
    summaryNormal: string;
  };
  dashboard: {
    recommendation: string;
    revenue: string;
    cycle: string;
    analysis: string;
    analysisSubtitle: string;
    bestOptionDesc: string;
  };
  info: {
    title: string;
    subtitle: string;
    charTitle: string;
    methodTitle: string;
    method1Title: string;
    method1Desc: string;
    method2Title: string;
    method2Desc: string;
    method3Title: string;
    method3Desc: string;
    levels: {
      FF: string;
      BB: string;
      SS: string;
      RR: string;
    }
  };
  units: Record<UnitType, { name: string; description: string }>;
  unitStats: {
    costs: string;
    pop: string;
    speed: string;
    carry: string;
    combat: string;
    attack: string;
    defGen: string;
    defCav: string;
    defArch: string;
  };
  guide: {
    back: string;
    title: string;
    heroTitle: string;
    heroDesc: string;
    section1Title: string;
    sec1Card1Title: string;
    sec1Card1Desc: string;
    sec1Fact: string;
    sec1Card1Conclusion: string;
    sec1Card2Title: string;
    sec1Card2Desc: string;
    sec1Total: string;
    section2Title: string;
    sec2FormulaComment: string;
    sec2Param1: string;
    sec2Param1Desc: string;
    sec2Param2: string;
    sec2Param2Desc: string;
    sec2Param3: string;
    sec2Param3Desc: string;
    section3Title: string;
    sec3CardTitle: string;
    sec3CardDesc: string;
    sec3Goal: string;
    sec3Solution: string;
    sec3TableTitle: string;
    sec3ThLevel: string;
    sec3ThWeight: string;
    sec3ThShare: string;
    sec3ThAssign: string;
    section4Title: string;
    sec4Card1Title: string;
    sec4Card1Desc: string;
    sec4Card2Title: string;
    sec4Card2Desc: string;
  }
};

export const translations: Record<'pl' | 'en', TranslationKeys> = {
  pl: {
    header: {
      subtitle: 'Zaawansowany Kalkulator',
      guideButton: 'Kompendium wiedzy'
    },
    form: {
      configuration: 'Konfiguracja',
      speed: 'Prędkość',
      calculation: 'Kalkulacja',
      advanced: 'Więcej',
      more: 'Więcej',
      baseTime: 'Czas Bazowy (s)',
      maxTime: 'Max Czas (h)',
      multiplier: 'Mnożnik',
      exponent: 'Wykładnik',
      selectTroops: 'Wybierz Wojska',
      total: 'Razem',
      totalCapacity: 'Łączna pojemność',
      distribution: 'Dystrybucja Wojsk',
      distributionDesc: 'Strategia Czasowa:',
      strategyTime: 'Wojska zostaną podzielone tak, aby czas trwania wypraw na wszystkich zaznaczonych poziomach był zbliżony (proporcjonalnie do trudności poziomu).',
      disclaimer: '*Interfejs stylizowany na oryginalny wygląd gry Plemiona'
    },
    levels: {
      details: 'Szczegóły poziomów',
      assignedTroops: 'Przypisane wojska',
      noTroops: 'Brak przypisanych wojsk',
      efficiency: 'Efektywność',
      resource: 'Surowce',
      time: 'Czas',
      names: {
        FF: 'Leniwi szabrownicy',
        BB: 'Skromni zbieracze',
        SS: 'Sprytni zbieracze',
        RR: 'Wielcy zbieracze'
      },
      descriptions: {
        FF: '10% pojemności',
        BB: '25% pojemności',
        SS: '50% pojemności',
        RR: '75% pojemności'
      }
    },
    table: {
      title: 'Pełne zestawienie danych',
      splitMode: 'Split Mode',
      level: 'Poziom',
      units: 'Jednostki',
      capacity: 'Pojemność',
      loot: 'Łup (1x)',
      time: 'Czas (1x)',
      runs: 'Liczba wypraw',
      totalTime: 'Łączny czas',
      profit: 'Zysk',
      comparison: 'Porównanie',
      total: 'RAZEM',
      summarySplit: 'Podsumowanie strategii łączonej',
      summaryNormal: 'Suma (teoretyczna przy wysłaniu wszystkiego)'
    },
    dashboard: {
      recommendation: 'Rekomendacja',
      revenue: 'Przychód',
      cycle: 'Cykl',
      analysis: 'Analiza Wydajności',
      analysisSubtitle: 'Porównanie przychodu surowców na godzinę.',
      bestOptionDesc: 'Ten poziom zapewnia najwyższy zwrot surowców w czasie ({value}/h), maksymalizując wydajność Twoich wojsk.'
    },
    info: {
      title: 'Przewodnik po wynikach',
      subtitle: 'Szczegółowe wyjaśnienie wskaźników i metodologii obliczeń.',
      charTitle: 'Charakterystyka poziomów',
      methodTitle: 'Metodologia',
      method1Title: 'Pojemność Jednostek',
      method1Desc: 'Kalkulator sumuje pojemność wszystkich wpisanych jednostek. Np. Lekkiej Kawalerii (80) i Pikinierów (25). Wartość "25" w konfiguracji jest wartością referencyjną dla Pikiniera.',
      method2Title: 'Algorytm Czasu',
      method2Desc: 'Czas trwania obliczany jest nieliniowo:',
      method3Title: 'Rekomendacja AI',
      method3Desc: 'System automatycznie wskazuje poziom z najwyższym wskaźnikiem surowców na godzinę. Jest to kluczowy parametr dla maksymalizacji zysków przy aktywnym graniu.',
      levels: {
        FF: 'Najkrótsze wyprawy. Idealne do szybkiego obrotu wojskami przy częstej aktywności na koncie.',
        BB: 'Zbalansowany poziom. Kompromis między czasem trwania a zyskiem dla średnio-aktywnych graczy.',
        SS: 'Wysoka efektywność. Często najlepszy wybór pod kątem surowców na godzinę w dłuższym oknie czasowym.',
        RR: 'Maksymalny jednorazowy łup. Najlepsze rozwiązanie na noc lub dłuższą nieobecność (AFK).'
      }
    },
    units: {
      spear: { name: 'Pikinier', description: 'Pikinier jest najprostszą jednostką. Jest efektywny w obronie przeciwko jeździe.' },
      sword: { name: 'Miecznik', description: 'Miecznicy są stosunkowo powolną jednostką, efektywną w obronie, zwłaszcza przeciwko piechocie.' },
      axe: { name: 'Topornik', description: 'Topornik to silna jednostka atakująca, ale prawie bezużyteczna w obronie.' },
      archer: { name: 'Łucznik', description: 'Łucznik jest dobrym obrońcą. Nawet opancerzona zbroja zostanie przebita jego strzałą.' },
      spy: { name: 'Zwiadowca', description: 'Zwiadowca podkrada się do wrogich wiosek, aby zdobyć informacje.' },
      light: { name: 'Lekki kawalerzysta', description: 'Lekki kawalerzysta jest dobrą jednostką ofensywną. Jego prędkość oraz pojemność łupu czynią go doskonałą jednostką do plądrowania wrogich wiosek.' },
      marcher: { name: 'Łucznik na koniu', description: 'Łucznik na koniu w szczególności niszczy precyzyjnymi strzałami wrogich łuczników czyhających za murem obcej wioski.' },
      heavy: { name: 'Ciężki kawalerzysta', description: 'Ciężki kawalerzysta jest elitą Twoich wojsk. Jego prędkość pozwala na szybkie przegrupowanie swojej defensywy między wioskami.' },
      knight: { name: 'Rycerz', description: 'Rycerz jest silną i rzadką jednostką, która może zostać powołana po zbudowaniu piedestału.' }
    },
    unitStats: {
      costs: 'Koszta',
      pop: 'Ludność',
      speed: 'Prędkość',
      carry: 'Ładunek',
      combat: 'Statystyki bitewne',
      attack: 'Siła napadu',
      defGen: 'Obrona ogólnie',
      defCav: 'Obr. kawaleria',
      defArch: 'Obr. łucznicy'
    },
    guide: {
      back: 'Powrót do kalkulatora',
      title: 'Kompendium Wiedzy o Zbieractwie',
      heroTitle: 'Matematyka Zbieractwa: Poziom Ekspert',
      heroDesc: 'Zbieractwo w Plemionach nie jest losowe. To precyzyjny system matematyczny oparty na pojemności łupu i wykładniczych funkcjach czasu. Zrozumienie poniższych mechanizmów pozwoli Ci zwiększyć wydajność farmienia nawet o 30-40% względem graczy wysyłających wojska "na oko".',
      section1Title: 'Dynamika Mieszanych Wojsk',
      sec1Card1Title: 'Mit Prędkości Jednostki',
      sec1Card1Desc: 'Wielu graczy błędnie zakłada, że wysłanie Lekkiej Kawalerii (szybkiej) sprawi, że zbieractwo wróci szybciej niż przy wysłaniu Mieczników (wolnych).',
      sec1Fact: 'FAKT: Prędkość jednostki (np. 10 min/pole) NIE MA ŻADNEGO WPŁYWU na czas zbieractwa.',
      sec1Card1Conclusion: 'Czas trwania zależy wyłącznie od łącznej pojemności łupu grupy. Nieważne czy pojemność 10.000 pochodzi od 400 Pikinierów czy 125 Lekkich Kawalerzystów - czas wyprawy będzie identyczny.',
      sec1Card2Title: 'Agregacja Pojemności',
      sec1Card2Desc: 'Kalkulator sumuje pojemność wszystkich typów jednostek do jednej zmiennej TotalCapacity.',
      sec1Total: 'RAZEM (Input do wzoru)',
      section2Title: 'Wzór Matematyczny ("Czarna Skrzynka")',
      sec2FormulaComment: '// Wzór na czas w sekundach',
      sec2Param1: 'Capacity * Ratio',
      sec2Param1Desc: 'To jest "efektywny łup". Jeśli wyślesz 1000 pojemności na poziom FF (10%), wzór "widzi" tylko 100 surowców. To dlatego poziom FF trwa krócej niż RR przy tej samej liczbie wojsk.',
      sec2Param2: 'Exponent (Wykładnik)',
      sec2Param2Desc: 'Zazwyczaj 0.45. Odpowiada za nieliniowość. Im więcej wojska wyślesz, tym *mniej wydajny* czasowo staje się każdy kolejny żołnierz (krzywa spłaszczająca się).',
      sec2Param3: 'WorldSpeedFactor',
      sec2Param3Desc: 'Obliczany jako Speed ^ -0.55. Na świecie z prędkością 2.0 czasy są mnożone przez ~0.68 (są o 32% krótsze).',
      section3Title: 'Strategia "Split Mode" (Equal Duration)',
      sec3CardTitle: 'Dlaczego dzielić wojska nierówno?',
      sec3CardDesc: 'W trybie normalnym, jeśli podzielisz 1000 pikinierów na 4 równe grupy po 250, wyniki czasowe będą drastycznie różne. Grupa FF wróci po 30 minutach, a RR po 4 godzinach. To nieefektywne, bo musisz logować się wielokrotnie. Celem Split Mode jest takie dobranie liczby wojsk, aby wszystkie 4 grupy wróciły w tym samym momencie.',
      sec3Goal: 'CEL MATEMATYCZNY',
      sec3Solution: 'ROZWIĄZANIE',
      sec3TableTitle: 'Przykład Praktyczny Podziału (dla 1000 Pojemności)',
      sec3ThLevel: 'Poziom',
      sec3ThWeight: 'Waga (1/Ratio)',
      sec3ThShare: 'Udział %',
      sec3ThAssign: 'Przydział',
      section4Title: 'Strategie Optymalizacji',
      sec4Card1Title: 'Aktywny Gracz (Co 1-2h)',
      sec4Card1Desc: 'Używaj Normal Mode i wysyłaj wszystko na poziom, który daje najwięcej surowców/h (zazwyczaj SS lub RR). Ignoruj krótsze, mniej opłacalne poziomy, chyba że masz nadmiar wojska.',
      sec4Card2Title: 'Pół-AFK / Sen (6-8h+)',
      sec4Card2Desc: 'Używaj Split Mode. System wyliczy podział tak, abyś po 8 godzinach snu miał z powrotem 100% wojsk ze wszystkich 4 wypraw, maksymalizując zysk z pojedynczego logowania.'
    }
  },
  en: {
    header: {
      subtitle: 'Advanced Calculator',
      guideButton: 'Knowledge Base'
    },
    form: {
      configuration: 'Configuration',
      speed: 'Speed',
      calculation: 'Calculation',
      advanced: 'Advanced',
      more: 'More',
      baseTime: 'Base Time (s)',
      maxTime: 'Max Time (h)',
      multiplier: 'Multiplier',
      exponent: 'Exponent',
      selectTroops: 'Select Troops',
      total: 'Total',
      totalCapacity: 'Total Capacity',
      distribution: 'Troop Distribution',
      distributionDesc: 'Time Strategy:',
      strategyTime: 'Troops will be distributed so that the duration of expeditions on all selected levels is similar (proportional to level difficulty).',
      disclaimer: '*Interface styled after the original Tribal Wars game'
    },
    levels: {
      details: 'Level Details',
      assignedTroops: 'Assigned Troops',
      noTroops: 'No troops assigned',
      efficiency: 'Efficiency',
      resource: 'Resources',
      time: 'Time',
      names: {
        FF: 'Lackadaisical Looters',
        BB: 'Humble Haulers',
        SS: 'Clever Collectors',
        RR: 'Great Gatherers'
      },
      descriptions: {
        FF: '10% capacity',
        BB: '25% capacity',
        SS: '50% capacity',
        RR: '75% capacity'
      }
    },
    table: {
      title: 'Detailed Data Breakdown',
      splitMode: 'Split Mode',
      level: 'Level',
      units: 'Units',
      capacity: 'Capacity',
      loot: 'Loot (1x)',
      time: 'Time (1x)',
      runs: 'Runs',
      totalTime: 'Total Time',
      profit: 'Profit',
      comparison: 'Comparison',
      total: 'TOTAL',
      summarySplit: 'Split strategy summary',
      summaryNormal: 'Total (theoretical if sending everything)'
    },
    dashboard: {
      recommendation: 'Recommendation',
      revenue: 'Revenue',
      cycle: 'Cycle',
      analysis: 'Performance Analysis',
      analysisSubtitle: 'Comparison of resource revenue per hour.',
      bestOptionDesc: 'This level provides the highest resource return over time ({value}/h), maximizing your troop efficiency.'
    },
    info: {
      title: 'Results Guide',
      subtitle: 'Detailed explanation of metrics and calculation methodology.',
      charTitle: 'Level Characteristics',
      methodTitle: 'Methodology',
      method1Title: 'Unit Capacity',
      method1Desc: 'The calculator sums the capacity of all entered units. E.g., Light Cavalry (80) and Spear fighters (25). The value "25" in configuration is a reference for the Spear fighter.',
      method2Title: 'Time Algorithm',
      method2Desc: 'Duration is calculated non-linearly:',
      method3Title: 'AI Recommendation',
      method3Desc: 'The system automatically indicates the level with the highest resources per hour ratio. This is a key parameter for maximizing profits when playing actively.',
      levels: {
        FF: 'Shortest expeditions. Ideal for quick troop turnover with frequent account activity.',
        BB: 'Balanced level. Compromise between duration and profit for moderately active players.',
        SS: 'High efficiency. Often the best choice for resources per hour in a longer time window.',
        RR: 'Maximum single loot. Best solution for overnight or long absence (AFK).'
      }
    },
    units: {
      spear: { name: 'Spear fighter', description: 'The spear fighter is the simplest unit. It is effective in defense against cavalry.' },
      sword: { name: 'Swordsman', description: 'Swordsmen are relatively slow units, effective in defense, especially against infantry.' },
      axe: { name: 'Axeman', description: 'The Axeman is a strong offensive unit, but almost useless in defense.' },
      archer: { name: 'Archer', description: 'The Archer is a good defender. Even plated armor will be pierced by his arrow.' },
      spy: { name: 'Scout', description: 'The Scout sneaks into enemy villages to gather information.' },
      light: { name: 'Light cavalry', description: 'Light cavalry is a good offensive unit. Its speed and loot capacity make it an excellent unit for plundering enemy villages.' },
      marcher: { name: 'Mounted archer', description: 'The Mounted archer specifically destroys enemy archers lurking behind the wall of a foreign village with precise shots.' },
      heavy: { name: 'Heavy cavalry', description: 'Heavy cavalry is the elite of your troops. Its speed allows for quick regrouping of your defense between villages.' },
      knight: { name: 'Paladin', description: 'The Paladin is a strong and rare unit that can be recruited after building a statue.' }
    },
    unitStats: {
      costs: 'Costs',
      pop: 'Pop',
      speed: 'Speed',
      carry: 'Carry',
      combat: 'Combat Stats',
      attack: 'Attack',
      defGen: 'Def. Gen',
      defCav: 'Def. Cav',
      defArch: 'Def. Arch'
    },
    guide: {
      back: 'Back to calculator',
      title: 'Scavenging Knowledge Base',
      heroTitle: 'Scavenging Mathematics: Expert Level',
      heroDesc: 'Scavenging in Tribal Wars is not random. It is a precise mathematical system based on loot capacity and exponential time functions. Understanding the mechanisms below will allow you to increase farming efficiency by up to 30-40% compared to players sending troops "by eye".',
      section1Title: 'Mixed Troop Dynamics',
      sec1Card1Title: 'Unit Speed Myth',
      sec1Card1Desc: 'Many players mistakenly assume that sending Light Cavalry (fast) will make the scavenging return faster than sending Swordsmen (slow).',
      sec1Fact: 'FACT: Unit speed (e.g., 10 min/field) HAS NO EFFECT on scavenging time.',
      sec1Card1Conclusion: 'Duration depends EXCLUSIVELY on the total loot capacity of the group. It does not matter if 10,000 capacity comes from 400 Spear fighters or 125 Light Cavalry - the expedition time will be identical.',
      sec1Card2Title: 'Capacity Aggregation',
      sec1Card2Desc: 'The calculator sums the capacity of all unit types into a single TotalCapacity variable.',
      sec1Total: 'TOTAL (Input for formula)',
      section2Title: 'Mathematical Formula ("Black Box")',
      sec2FormulaComment: '// Formula for time in seconds',
      sec2Param1: 'Capacity * Ratio',
      sec2Param1Desc: 'This is the "effective loot". If you send 1000 capacity to the FF level (10%), the formula "sees" only 100 resources. This is why the FF level takes less time than RR with the same number of troops.',
      sec2Param2: 'Exponent',
      sec2Param2Desc: 'Usually 0.45. Responsible for non-linearity. The more troops you send, the *less time-efficient* each subsequent soldier becomes (flattening curve).',
      sec2Param3: 'WorldSpeedFactor',
      sec2Param3Desc: 'Calculated as Speed ^ -0.55. On a world with speed 2.0, times are multiplied by ~0.68 (they are 32% shorter).',
      section3Title: '"Split Mode" Strategy (Equal Duration)',
      sec3CardTitle: 'Why split troops unevenly?',
      sec3CardDesc: 'In normal mode, if you split 1000 spears into 4 equal groups of 250, the time results will be drastically different. The FF group will return in 30 minutes, and RR in 4 hours. This is inefficient because you have to log in multiple times. The goal of Split Mode is to select the number of troops so that all 4 groups return at the same moment.',
      sec3Goal: 'MATHEMATICAL GOAL',
      sec3Solution: 'SOLUTION',
      sec3TableTitle: 'Practical Split Example (for 1000 Capacity)',
      sec3ThLevel: 'Level',
      sec3ThWeight: 'Weight (1/Ratio)',
      sec3ThShare: 'Share %',
      sec3ThAssign: 'Assignment',
      section4Title: 'Optimization Strategies',
      sec4Card1Title: 'Active Player (Every 1-2h)',
      sec4Card1Desc: 'Use Normal Mode and send everything to the level that gives the most resources/h (usually SS or RR). Ignore shorter, less profitable levels unless you have excess troops.',
      sec4Card2Title: 'Semi-AFK / Sleep (6-8h+)',
      sec4Card2Desc: 'Use Split Mode. The system will calculate the split so that after 8 hours of sleep you have 100% of troops back from all 4 expeditions, maximizing profit from a single login.'
    }
  }
};