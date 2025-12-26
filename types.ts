
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
  // Metadata
  isEnabled: boolean; 
  unitBreakdown: Record<UnitType, number>; // Specific unit counts for this level
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

export type CalculationMode = 'normal' | 'split';

export interface CalculatorInputs {
  worldSpeed: number;
  baseTime: number; // seconds
  maxTimeAway: number; // hours
  multiplier: number;
  exponent: number;
  setupTime: number; // seconds (time to send expedition)
  calculationMode: CalculationMode;
  enabledLevels: number[]; // Array of Level IDs (1-4) enabled for split calculation
  army: Record<UnitType, number>; // Counts for each unit type
}
