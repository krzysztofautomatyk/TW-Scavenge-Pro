import { CalculatorInputs, CalculationResult, ScavengeLevel, UnitType } from '../types';
import { UNITS } from './unitData';

export const SCAVENGE_LEVELS: ScavengeLevel[] = [
  { id: 1, code: 'FF', name: 'Leniwi szabrownicy', ratio: 0.10, description: '10% pojemności' },
  { id: 2, code: 'BB', name: 'Skromni zbieracze', ratio: 0.25, description: '25% pojemności' },
  { id: 3, code: 'SS', name: 'Sprytni zbieracze', ratio: 0.50, description: '50% pojemności' },
  { id: 4, code: 'RR', name: 'Wielcy zbieracze', ratio: 0.75, description: '75% pojemności' }
];

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.round(seconds % 60);
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export function calculateTotalCapacity(army: Record<UnitType, number>): number {
  return UNITS.reduce((total, unit) => {
    const count = army[unit.id] || 0;
    return total + (count * unit.capacity);
  }, 0);
}

export function calculateTotalUnits(army: Record<UnitType, number>): number {
   return Object.values(army).reduce((a, b) => a + b, 0);
}

export function calculateScavengeResults(inputs: CalculatorInputs): CalculationResult[] {
  const { worldSpeed, baseTime, multiplier, exponent, army, maxTimeAway } = inputs;
  
  const totalCapacity = calculateTotalCapacity(army);
  const totalUnits = calculateTotalUnits(army);
  const durationFactor = Math.pow(worldSpeed, -0.55);
  const maxTimeSeconds = maxTimeAway * 3600;

  return SCAVENGE_LEVELS.map(level => {
    // Formula: ( (capacity * capacity * multiplier * ratio * ratio)^exponent + baseTime ) * durationFactor
    
    // Logic matches Tribal Wars forum formulas
    const baseTerm = (totalCapacity * totalCapacity) * multiplier * (level.ratio * level.ratio);
    const powerTerm = Math.pow(baseTerm, exponent);
    const durationSeconds = (powerTerm + baseTime) * durationFactor;
    
    const loot = Math.round(totalCapacity * level.ratio);
    
    // Avoid division by zero
    const effectiveDuration = Math.max(1, durationSeconds);
    
    const runsPerDay = Math.floor(86400 / effectiveDuration);
    const lootPerHour = (loot / effectiveDuration) * 3600;
    const resourcesPer24h = loot * runsPerDay;

    // Calculate specifically for the user-defined Max Time
    const runsWithinMaxTime = Math.floor(maxTimeSeconds / effectiveDuration);
    const lootWithinMaxTime = loot * runsWithinMaxTime;
    const totalDurationSeconds = runsWithinMaxTime * effectiveDuration;

    return {
      level,
      units: totalUnits,
      capacity: Math.round(totalCapacity),
      loot,
      durationSeconds,
      durationFormatted: formatTime(durationSeconds),
      runsPerDay,
      lootPerHour,
      resourcesPer24h,
      // New dynamic fields
      runsWithinMaxTime,
      lootWithinMaxTime,
      totalDurationFormatted: formatTime(totalDurationSeconds)
    };
  });
}