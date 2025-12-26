import { UnitDefinition, UnitType } from '../types';

export const UNITS: UnitDefinition[] = [
  { 
    id: 'spear', 
    name: 'Pikinier', 
    capacity: 25, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_spear.png',
    description: 'Pikinier jest najprostszą jednostką. Jest efektywny w obronie przeciwko jeździe.',
    stats: {
      wood: 50, clay: 30, iron: 10, pop: 1, speed: 18,
      attack: 10, defense: 15, defenseCav: 45, defenseArcher: 20
    }
  },
  { 
    id: 'sword', 
    name: 'Miecznik', 
    capacity: 15, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_sword.png',
    description: 'Miecznicy są stosunkowo powolną jednostką, efektywną w obronie, zwłaszcza przeciwko piechocie.',
    stats: {
      wood: 30, clay: 30, iron: 70, pop: 1, speed: 22,
      attack: 25, defense: 50, defenseCav: 15, defenseArcher: 40
    }
  },
  { 
    id: 'axe', 
    name: 'Topornik', 
    capacity: 10, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_axe.png',
    description: 'Topornik to silna jednostka atakująca, ale prawie bezużyteczna w obronie.',
    stats: {
      wood: 60, clay: 30, iron: 40, pop: 1, speed: 18,
      attack: 40, defense: 10, defenseCav: 5, defenseArcher: 10
    }
  },
  { 
    id: 'archer', 
    name: 'Łucznik', 
    capacity: 10, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_archer.png',
    description: 'Łucznik jest dobrym obrońcą. Nawet opancerzona zbroja zostanie przebita jego strzałą.',
    stats: {
      wood: 100, clay: 30, iron: 60, pop: 1, speed: 18,
      attack: 15, defense: 50, defenseCav: 40, defenseArcher: 5
    }
  },
  { 
    id: 'spy', 
    name: 'Zwiadowca', 
    capacity: 0, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_spy.png',
    description: 'Zwiadowca podkrada się do wrogich wiosek, aby zdobyć informacje.',
    stats: {
      wood: 50, clay: 50, iron: 20, pop: 2, speed: 9,
      attack: 0, defense: 2, defenseCav: 1, defenseArcher: 2
    }
  },
  { 
    id: 'light', 
    name: 'Lekki kawalerzysta', 
    capacity: 80, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_light.png',
    description: 'Lekki kawalerzysta jest dobrą jednostką ofensywną. Jego prędkość oraz pojemność łupu czynią go doskonałą jednostką do plądrowania wrogich wiosek.',
    stats: {
      wood: 125, clay: 100, iron: 250, pop: 4, speed: 10,
      attack: 130, defense: 30, defenseCav: 40, defenseArcher: 30
    }
  },
  { 
    id: 'marcher', 
    name: 'Łucznik na koniu', 
    capacity: 50, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_marcher.png',
    description: 'Łucznik na koniu w szczególności niszczy precyzyjnymi strzałami wrogich łuczników czyhających za murem obcej wioski.',
    stats: {
      wood: 250, clay: 100, iron: 150, pop: 5, speed: 10,
      attack: 120, defense: 40, defenseCav: 30, defenseArcher: 50
    }
  },
  { 
    id: 'heavy', 
    name: 'Ciężki kawalerzysta', 
    capacity: 50, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_heavy.png',
    description: 'Ciężki kawalerzysta jest elitą Twoich wojsk. Jego prędkość pozwala na szybkie przegrupowanie swojej defensywy między wioskami.',
    stats: {
      wood: 200, clay: 150, iron: 600, pop: 6, speed: 11,
      attack: 150, defense: 200, defenseCav: 80, defenseArcher: 180
    }
  },
  { 
    id: 'knight', 
    name: 'Rycerz', 
    capacity: 100, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_knight.png',
    description: 'Rycerz jest silną i rzadką jednostką, która może zostać powołana po zbudowaniu piedestału.',
    stats: {
      wood: 20, clay: 20, iron: 40, pop: 10, speed: 10,
      attack: 150, defense: 250, defenseCav: 400, defenseArcher: 150
    }
  }
];

export const INITIAL_ARMY: Record<UnitType, number> = {
  spear: 0, sword: 0, axe: 0, archer: 0, spy: 0, light: 0, marcher: 0, heavy: 0, knight: 0
};
