export interface ScavengeLevel {
  id: number;
  name: string;
  code: string;
  ratio: number;
  description: string;
}

export interface CalculationResult {
  level: ScavengeLevel;
  units: number;
  capacity: number;
  loot: number;
  durationSeconds: number;
  durationFormatted: string;
  runsPerDay: number;
  lootPerHour: number;
  resourcesPer24h: number;
  // New fields for Max Time calculation
  runsWithinMaxTime: number;
  totalDurationFormatted: string;
  lootWithinMaxTime: number;
}

export type UnitType = 'spear' | 'sword' | 'axe' | 'archer' | 'spy' | 'light' | 'marcher' | 'heavy' | 'knight';

export interface UnitStats {
  wood: number;
  clay: number;
  iron: number;
  pop: number;
  speed: number; // minutes per field
  attack: number;
  defense: number;
  defenseCav: number;
  defenseArcher: number;
}

export interface UnitDefinition {
  id: UnitType;
  name: string;
  capacity: number;
  image: string;
  description: string;
  stats: UnitStats;
}

export interface CalculatorInputs {
  worldSpeed: number;
  baseTime: number; // seconds
  maxTimeAway: number; // hours
  multiplier: number;
  exponent: number;
  army: Record<UnitType, number>; // Counts for each unit type
}