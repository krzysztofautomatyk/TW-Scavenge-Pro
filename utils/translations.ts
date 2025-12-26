
import { UnitType } from '../types';

type TranslationKeys = {
  header: {
    subtitle: string;
    guideButton: string;
    visits: string;
  };
  auth: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    error: string;
    attempts: string;
    bannedTitle: string;
    bannedDesc: string;
    bannedUntil: string;
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
    setupTime: string;
    selectTroops: string;
    total: string;
    totalCapacity: string;
    distribution: string;
    distributionDesc: string;
    strategyTime: string;
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
    normalMode: string;
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
    setupTimeNote: string;
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
    levels: {
      FF: string;
      BB: string;
      SS: string;
      RR: string;
    };
    mathTitle: string;
    mathIntro: string;
    mathDiminishingTitle: string;
    mathDiminishingDesc: string;
    examplesTitle: string;
    example1Title: string;
    example1Desc: string;
    example1Strategy: string;
    example2Title: string;
    example2Desc: string;
    example2Strategy: string;
    example3Title: string;
    example3Desc: string;
    example3Strategy: string;
    tipsTitle: string;
    tip1: string;
    tip2: string;
    tip3: string;
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
    glossaryTitle: string;
    glossarySubtitle: string;
    
    // Glossary Items
    termSpeed: string;
    descSpeed: string;
    termSetup: string;
    descSetup: string;
    termSplit: string;
    descSplit: string;
    termNormal: string;
    descNormal: string;
    termBaseTime: string;
    descBaseTime: string;
    termMaxTime: string;
    descMaxTime: string;
    
    // Modes deep dive
    modesTitle: string;
    modesSubtitle: string;
    modeNormalTitle: string;
    modeNormalDesc: string;
    modeNormalUse: string;
    modeSplitTitle: string;
    modeSplitDesc: string;
    modeSplitUse: string;

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
    sec2SetupTitle: string;
    sec2SetupDesc: string;
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
  };
  footer: {
    copyright: string;
    inspiration: string;
  };
};

export const translations: Record<'pl' | 'en', TranslationKeys> = {
  pl: {
    header: {
      subtitle: 'Zaawansowany Kalkulator',
      guideButton: 'Kompendium wiedzy',
      visits: 'Wizyt'
    },
    auth: {
      title: 'Strefa Zabezpieczona',
      subtitle: 'Wprowadź hasło dostępu do narzędzia.',
      placeholder: 'Podaj hasło...',
      button: 'Odblokuj dostęp',
      error: 'Nieprawidłowe hasło',
      attempts: 'Pozostało prób: ',
      bannedTitle: 'Dostęp Zablokowany',
      bannedDesc: 'Przekroczono limit prób logowania. Ze względów bezpieczeństwa dostęp został zablokowany na 24 godziny.',
      bannedUntil: 'Blokada wygasa: '
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
      setupTime: 'Czas wysyłki (s)',
      selectTroops: 'Wybierz Wojska',
      total: 'Razem',
      totalCapacity: 'Łączna pojemność',
      distribution: 'Dystrybucja Wojsk',
      distributionDesc: 'Strategia Czasowa:',
      strategyTime: 'Wojska zostaną podzielone tak, aby czas trwania wypraw na wszystkich zaznaczonych poziomach był zbliżony (proporcjonalnie do trudności poziomu).'
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
      normalMode: 'Normal Mode',
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
      summaryNormal: 'Suma (teoretyczna przy wysłaniu wszystkiego)',
      setupTimeNote: '+{time}s wysyłka'
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
      title: 'Przewodnik Strategiczny',
      subtitle: 'Charakterystyka, matematyka i przykłady użycia.',
      charTitle: 'Charakterystyka poziomów',
      levels: {
        FF: 'Najkrótsze wyprawy. Idealne do szybkiego obrotu wojskami przy częstej aktywności na koncie.',
        BB: 'Zbalansowany poziom. Kompromis między czasem trwania a zyskiem dla średnio-aktywnych graczy.',
        SS: 'Wysoka efektywność. Często najlepszy wybór pod kątem surowców na godzinę w dłuższym oknie czasowym.',
        RR: 'Maksymalny jednorazowy łup. Najlepsze rozwiązanie na noc lub dłuższą nieobecność (AFK).'
      },
      mathTitle: 'Mechanika Gry',
      mathIntro: 'Zbieractwo opiera się na formule nieliniowej. Oznacza to, że podwojenie liczby wojska NIE podwaja ilości surowców zdobywanych w tym samym czasie.',
      mathDiminishingTitle: 'Zjawisko Malejących Zwrotów',
      mathDiminishingDesc: 'Im więcej wojska wyślesz na jedną wyprawę, tym dłużej ona trwa. W pewnym momencie dodanie kolejnych 1000 toporników wydłuża czas wyprawy tak bardzo, że surowce/godzinę (Yield) zaczynają spadać. Dlatego dla dużych armii (np. 10k LK) często lepiej wysyłać mniejsze partie częściej (jeśli jesteś aktywny).',
      examplesTitle: 'Scenariusze Użycia (Przykłady)',
      example1Title: 'Scenariusz 1: Aktywny Farming',
      example1Desc: 'Masz 100 LK i możesz logować się co godzinę.',
      example1Strategy: 'Użyj "Normal Mode". Wyślij wszystko na poziom, który trwa ok. 45-50 minut (zazwyczaj SS lub RR przy małej liczbie wojska), aby zmaksymalizować zysk/h.',
      example2Title: 'Scenariusz 2: Tryb Nocny (Sen)',
      example2Desc: 'Masz 5000 Pikinierów. Idziesz spać na 8 godzin.',
      example2Strategy: 'Użyj "Split Mode". Jeśli wyślesz wszystko na RR, wrócą np. po 4h i będą stać bezczynnie. Split Mode podzieli wojska tak, by wszystkie 4 poziomy wróciły równo po 8h, przynosząc łącznie o wiele więcej surowców.',
      example3Title: 'Scenariusz 3: Offensywa',
      example3Desc: 'Masz pełną zagrodę Toporników (20.000). Chcesz zebrać surowce.',
      example3Strategy: 'Przy tak dużej armii, czasy wypraw są ogromne (>24h). Jeśli potrzebujesz surowców "na już", wyślij tylko małą część (np. 2000 toporników) na szybki cykl, a resztę zostaw w wiosce na akcję militarną. Wysyłanie całego offa na zbieractwo jest nieefektywne czasowo.',
      tipsTitle: 'Wskazówki Eksperta',
      tip1: 'Zawsze odblokuj wszystkie 4 poziomy zbieractwa tak szybko jak to możliwe. To darmowe surowce.',
      tip2: 'Czas wysyłki (Setup Time) ma znaczenie przy bardzo krótkich wyprawach (FF). Jeśli wyprawa trwa 5 min, a klikasz 1 min, tracisz 20% czasu.',
      tip3: 'Lekka Kawaleria jest najlepsza do zbieractwa ze względu na pojemność (80), ale wczesny "mass Pikinier" jest tańszy i zwraca się szybciej.'
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
      heroDesc: 'Zbieractwo w Plemionach nie jest losowe. To precyzyjny system matematyczny oparty na pojemności łupu i wykładniczych funkcjach czasu. Poniżej znajdziesz definicje wszystkich pojęć użytych w kalkulatorze.',
      
      glossaryTitle: 'Słownik Pojęć (Interfejs)',
      glossarySubtitle: 'Zrozumienie tych parametrów jest kluczowe dla precyzyjnych wyliczeń.',
      
      termSpeed: 'Prędkość Świata (World Speed)',
      descSpeed: 'Parametr serwera (zazwyczaj od 1.0 do 2.0). NIE jest to prędkość jednostek. Jeśli grasz na świecie z prędkością 1.6, czas trwania zbieractwa jest redukowany według wzoru: czas * (prędkość^-0.55). Wyższa prędkość świata = szybszy powrót surowców.',
      
      termSetup: 'Czas wysyłki (Setup Time)',
      descSetup: 'Czynnik ludzki. W grze nie da się wysłać 4 ekspedycji w 0 sekund. Musisz kliknąć, wybrać jednostki, potwierdzić. Zajmuje to np. 15 sekund na falę. Jeśli Twoja wyprawa trwa 20 minut, a wysyłanie zajmuje 1 minutę, tracisz 5% wydajności na samą obsługę interfejsu. Kalkulator dolicza ten czas do każdego cyklu, aby pokazać REALNY zysk na godzinę, a nie teoretyczny.',
      
      termSplit: 'Split Mode (Tryb Dzielony)',
      descSplit: 'Zaawansowany algorytm, który dzieli Twoje wojska na 2, 3 lub 4 grupy tak, aby WSZYSTKIE wróciły w tym samym momencie. Jest to idealne rozwiązanie, gdy idziesz spać na 8h lub idziesz do pracy. Zamiast wysyłać wszystko na jeden poziom, wysyłasz na cztery, maksymalizując zysk przy jednorazowym logowaniu.',
      
      termNormal: 'Normal Mode (Tryb Normalny)',
      descNormal: 'Standardowe obliczenia. Kalkulator pokazuje, ile zyskasz, jeśli wyślesz CAŁE dostępne wojsko na konkretny poziom (np. tylko na SS). Służy do porównywania, który poziom jest najbardziej opłacalny "per capita".',
      
      termBaseTime: 'Czas Bazowy',
      descBaseTime: 'Stała wartość w kodzie gry (zazwyczaj 1800 sekund = 30 minut). Jest to minimalny narzut czasu, który jest dodawany do wzoru wykładniczego. Zmieniając ten parametr w ustawieniach zaawansowanych, możesz dostosować kalkulator do niestandardowych światów (np. szybkich/special).',

      termMaxTime: 'Max Czas Wyprawy',
      descMaxTime: 'Limit czasowy dla analizy "Surowce/24h". Jeśli ustawisz to na 24h, kalkulator sprawdzi, ile pełnych cykli (wyprawa + powrót + czas wysyłki) zmieści się w dobie.',

      modesTitle: 'Szczegółowa Analiza Trybów',
      modesSubtitle: 'Kiedy używać którego trybu?',
      
      modeNormalTitle: 'Normal Mode',
      modeNormalDesc: 'Symuluje scenariusz "Wszystko na jedną kartę". Oblicza wynik dla 100% wojsk na każdym poziomie oddzielnie.',
      modeNormalUse: 'ZALECANE DLA AKTYWNYCH GRACZY. Jeśli możesz logować się co godzinę, użyj tego trybu, aby znaleźć poziom z najwyższym wskaźnikiem "Surowce/h" (zazwyczaj SS lub RR) i wysyłaj tam wszystko.',

      modeSplitTitle: 'Split Mode',
      modeSplitDesc: 'Simulates "Diversification". Divides troops by weight (1/Ratio) to equalize return times.',
      modeSplitUse: 'ZALECANE DLA GRACZY AFK. Jeśli idziesz spać, nie chcesz, aby poziom FF wrócił po 30 minutach i stał bezczynnie przez 7.5 godziny. Split Mode ensures all levels return exactly after 8 hours, bringing in significantly more total resources than a single long RR run.',

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
      sec2SetupTitle: 'Czas Wysyłki (Setup Time)',
      sec2SetupDesc: 'Wysłanie 4 wypraw w grze nie dzieje się błyskawicznie. Wymaga to około 15-20 sekund klikania na każdą falę. Kalkulator dolicza domyślne 60s do każdego pełnego cyklu (powrotu), aby wskaźnik Surowców/h był realistyczny, a nie teoretyczny.',
      section3Title: 'Strategia "Split Mode" (Equal Duration)',
      sec3CardTitle: 'Dlaczego dzielić wojska nierówno?',
      sec3CardDesc: 'W trybie normalnym, jeśli podzielisz 1000 pikinierów na 4 równe grupy po 250, wyniki czasowe będą drastycznie różne. Grupa FF wróci po 30 minutach, a RR po 4 godzinach. To nieefektywne, bo musisz logować się wielokrotnie. Celem Split Mode jest takie dobranie liczby wojsk, aby wszystkie 4 grupy wróciły w tym samym momencie.',
      sec3Goal: 'MATHEMATICAL GOAL',
      sec3Solution: 'ROZWIĄZANIE',
      sec3TableTitle: 'Przykład Praktyczny Podziału (dla 1000 Pojemności)',
      sec3ThLevel: 'Poziom',
      sec3ThWeight: 'Waga (1/Ratio)',
      sec3ThShare: 'Udział %',
      sec3ThAssign: 'Przydział',
      section4Title: 'Optimization Strategies',
      sec4Card1Title: 'Aktywny Gracz (Co 1-2h)',
      sec4Card1Desc: 'Używaj Normal Mode i wysyłaj wszystko na poziom, który daje najwięcej surowców/h (zazwyczaj SS lub RR). Ignoruj krótsze, mniej opłacalne poziomy, chyba że masz nadmiar wojska.',
      sec4Card2Title: 'Pół-AFK / Sen (6-8h+)',
      sec4Card2Desc: 'Używaj Split Mode. System wyliczy podział tak, abyś po 8 godzinach snu miał z powrotem 100% wojsk ze wszystkich 4 wypraw, maksymalizując zysk z pojedynczego logowania.'
    },
    footer: {
      copyright: '© 2025 KTD',
      inspiration: 'Inspiracja:'
    }
  },
  en: {
    header: {
      subtitle: 'Advanced Calculator',
      guideButton: 'Knowledge Base',
      visits: 'Visits'
    },
    auth: {
      title: 'Protected Zone',
      subtitle: 'Enter password to access tool.',
      placeholder: 'Enter password...',
      button: 'Unlock Access',
      error: 'Invalid password',
      attempts: 'Attempts left: ',
      bannedTitle: 'Access Blocked',
      bannedDesc: 'Too many failed login attempts. For security reasons, access has been blocked for 24 hours.',
      bannedUntil: 'Ban expires: '
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
      setupTime: 'Send Delay (s)',
      selectTroops: 'Select Troops',
      total: 'Total',
      totalCapacity: 'Total Capacity',
      distribution: 'Troop Distribution',
      distributionDesc: 'Time Strategy:',
      strategyTime: 'Troops will be distributed so that the duration of expeditions on all selected levels is similar (proportional to level difficulty).'
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
      normalMode: 'Normal Mode',
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
      summaryNormal: 'Total (theoretical if sending everything)',
      setupTimeNote: '+{time}s setup'
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
      title: 'Strategic Guide',
      subtitle: 'Characteristics, mathematics, and usage examples.',
      charTitle: 'Level Characteristics',
      levels: {
        FF: 'Shortest expeditions. Ideal for quick troop turnover with frequent account activity.',
        BB: 'Balanced level. Compromise between duration and profit for moderately active players.',
        SS: 'High efficiency. Often the best choice for resources per hour in a longer time window.',
        RR: 'Maximum single loot. Best solution for overnight or long absence (AFK).'
      },
      mathTitle: 'Game Mechanics',
      mathIntro: 'Scavenging relies on a non-linear formula. Doubling the troops DOES NOT double the resources gained in the same time.',
      mathDiminishingTitle: 'Diminishing Returns',
      mathDiminishingDesc: 'The more troops you send on one expedition, the longer it takes. At some point, adding another 1000 axemen extends the duration so much that resources/hour (Yield) starts to drop. For large armies (e.g. 10k LC) it is often better to send smaller batches frequently.',
      examplesTitle: 'Usage Scenarios (Examples)',
      example1Title: 'Scenario 1: Active Farming',
      example1Desc: 'You have 100 LC and can log in every hour.',
      example1Strategy: 'Use "Normal Mode". Send everything to the level that takes about 45-50 minutes (usually SS or RR with low troops) to maximize profit/h.',
      example2Title: 'Scenario 2: Night Mode (Sleep)',
      example2Desc: 'You have 5000 Spears. You are going to sleep for 8 hours.',
      example2Strategy: 'Use "Split Mode". If you send all to RR, they return in e.g. 4h and sit idle. Split Mode ensures all 4 levels return exactly after 8 hours, bringing in significantly more total resources than a single long RR run.',
      example3Title: 'Scenario 3: Offensive Army',
      example3Desc: 'You have a full farm of Axemen (20,000). You want resources.',
      example3Strategy: 'With such a large army, durations are huge (>24h). If you need resources "now", send only a small part (e.g., 2000 axes) for a quick cycle, keeping the rest ready for battle. Sending the whole offense scavenging is time-inefficient.',
      tipsTitle: 'Pro Tips',
      tip1: 'Always unlock all 4 scavenging levels as soon as possible. It is free resources.',
      tip2: 'Setup Time matters for very short runs (FF). If a run is 5 min and you take 1 min to send, you lose 20% efficiency.',
      tip3: 'Light Cavalry is best for scavenging due to capacity (80), but early "mass Spear" is cheaper and pays off faster.'
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
      heroDesc: 'Scavenging in Tribal Wars is not random. It is a precise mathematical system based on loot capacity and exponential time functions. Below you will find definitions of all concepts used in the calculator.',
      
      glossaryTitle: 'Glossary of Terms (Interface)',
      glossarySubtitle: 'Understanding these parameters is key to precise calculations.',
      
      termSpeed: 'World Speed',
      descSpeed: 'A server parameter (usually 1.0 to 2.0). It is NOT unit speed. If you play on a world with speed 1.6, scavenging duration is reduced by the formula: time * (speed^-0.55). Higher world speed = faster resource return.',
      
      termSetup: 'Setup Time / Send Delay',
      descSetup: 'The human factor. You cannot send 4 expeditions in 0 seconds in-game. You have to click, select units, confirm. This takes e.g., 15 seconds per wave. If your expedition lasts 20 minutes and sending takes 1 minute, you lose 5% efficiency on interface handling alone. The calculator adds this time to every cycle to show REAL profit per hour, not theoretical.',
      
      termSplit: 'Split Mode',
      descSplit: 'Advanced algorithm that divides your troops into 2, 3, or 4 groups so that ALL return at the same moment. Ideal when you go to sleep for 8h or work. Instead of sending everything to one level, you send to four, maximizing profit from a single login.',
      
      termNormal: 'Normal Mode',
      descNormal: 'Standard calculation. Shows how much you gain if you send ALL available troops to a specific level (e.g., only SS). Used to compare which level is most profitable "per capita".',
      
      termBaseTime: 'Base Time',
      descBaseTime: 'A constant value in game code (usually 1800 seconds = 30 minutes). It is the minimum time overhead added to the exponential formula. By changing this in advanced settings, you can adjust the calculator for custom worlds (e.g., speed/special).',

      termMaxTime: 'Max Expedition Time',
      descMaxTime: 'Time limit for "Resources/24h" analysis. If set to 24h, the calculator checks how many full cycles (expedition + return + setup time) fit in a day.',

      modesTitle: 'Detailed Mode Analysis',
      modesSubtitle: 'When to use which mode?',
      
      modeNormalTitle: 'Normal Mode',
      modeNormalDesc: 'Simulates "All in one basket". Calculates result for 100% troops on each level separately.',
      modeNormalUse: 'RECOMMENDED FOR ACTIVE PLAYERS. If you can login every hour, use this mode to find the level with the highest "Resources/h" (usually SS or RR) and send everything there.',

      modeSplitTitle: 'Split Mode',
      modeSplitDesc: 'Simulates "Diversification". Divides troops by weight (1/Ratio) to equalize return times.',
      modeSplitUse: 'RECOMMENDED FOR AFK PLAYERS. If you go to sleep, you don\'t want level FF to return after 30 mins and sit idle for 7.5 hours. Split Mode ensures all levels return exactly after 8 hours, bringing in significantly more total resources than a single long RR run.',

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
      sec2Param1Desc: 'This is the "effective loot". If you send 1000 capacity to FF (10%), formula sees 100 resources. That is why FF is shorter than RR.',
      sec2Param2: 'Exponent',
      sec2Param2Desc: 'Usually 0.45. Responsible for non-linearity. The more troops you send, the *less time-efficient* each additional soldier becomes.',
      sec2Param3: 'WorldSpeedFactor',
      sec2Param3Desc: 'Calculated as Speed ^ -0.55. On speed 2.0 times are ~32% shorter.',
      sec2SetupTitle: 'Setup Time',
      sec2SetupDesc: 'Sending 4 expeditions takes time (clicking). Calculator adds default 60s to every cycle to show REAL profit/h.',
      section3Title: 'Split Mode Strategy (Equal Duration)',
      sec3CardTitle: 'Why divide troops unequally?',
      sec3CardDesc: 'In normal mode, splitting troops equally yields wildly different times. FF returns in 30min, RR in 4h. This is inefficient. Split Mode calculates troop amounts so all groups return at the same exact time.',
      sec3Goal: 'MATHEMATICAL GOAL',
      sec3Solution: 'SOLUTION',
      sec3TableTitle: 'Practical Split Example (for 1000 Capacity)',
      sec3ThLevel: 'Level',
      sec3ThWeight: 'Weight (1/Ratio)',
      sec3ThShare: 'Share %',
      sec3ThAssign: 'Assignment',
      section4Title: 'Optimization Strategies',
      sec4Card1Title: 'Active Player (Every 1-2h)',
      sec4Card1Desc: 'Use Normal Mode. Send everything to the best Yield/h level (usually SS/RR). Ignore shorter ones unless you have excess troops.',
      sec4Card2Title: 'Semi-AFK / Sleep (6-8h+)',
      sec4Card2Desc: 'Use Split Mode. The system calculates the split so that after 8 hours of sleep you have 100% of troops back from all 4 expeditions, maximizing profit from a single login.'
    },
    footer: {
      copyright: '© 2025 KTD',
      inspiration: 'Inspiration:'
    }
  }
};
