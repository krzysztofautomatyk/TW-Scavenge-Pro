import { UnitDefinition, UnitType } from '../types';

export const UNITS: UnitDefinition[] = [
  { 
    id: 'spear', 
    name: 'Pikinier', 
    capacity: 25, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_spear.png' 
  },
  { 
    id: 'sword', 
    name: 'Miecznik', 
    capacity: 15, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_sword.png' 
  },
  { 
    id: 'axe', 
    name: 'Topornik', 
    capacity: 10, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_axe.png' 
  },
  { 
    id: 'archer', 
    name: 'Łucznik', 
    capacity: 10, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_archer.png' 
  },
  { 
    id: 'spy', 
    name: 'Zwiadowca', 
    capacity: 0, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_spy.png' 
  },
  { 
    id: 'light', 
    name: 'Lekki kawalerzysta', 
    capacity: 80, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_light.png' 
  },
  { 
    id: 'marcher', 
    name: 'Łucznik na koniu', 
    capacity: 50, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_marcher.png' 
  },
  { 
    id: 'heavy', 
    name: 'Ciężki kawalerzysta', 
    capacity: 50, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_heavy.png' 
  },
  { 
    id: 'knight', 
    name: 'Rycerz', 
    capacity: 100, 
    image: 'https://dspl.innogamescdn.com/asset/63a05504/graphic/unit/unit_knight.png' 
  }
];

export const INITIAL_ARMY: Record<UnitType, number> = {
  spear: 0,
  sword: 0,
  axe: 0,
  archer: 0,
  spy: 0,
  light: 0,
  marcher: 0,
  heavy: 0,
  knight: 0
};