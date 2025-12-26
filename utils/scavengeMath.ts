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
  const { worldSpeed, baseTime, multiplier, exponent, army, maxTimeAway, calculationMode, enabledLevels } = inputs;
  
  const totalCapacityRaw = calculateTotalCapacity(army);
  const totalUnitsRaw = calculateTotalUnits(army);
  const durationFactor = Math.pow(worldSpeed, -0.55);
  const maxTimeSeconds = maxTimeAway * 3600;
  const isSplitMode = calculationMode === 'split';

  // --- EQUAL DURATION LOGIC ---
  // To equalize time, capacity assigned to a level must be inversely proportional to its Ratio.
  // Weight = 1 / Ratio.
  // Formula approx: Time ~ (Capacity * Ratio)^... 
  // If (C1 * R1) = (C2 * R2), then times are roughly equal.
  
  let totalInverseWeight = 0;
  if (isSplitMode) {
      enabledLevels.forEach(id => {
          const lvl = SCAVENGE_LEVELS.find(l => l.id === id);
          if (lvl) {
              totalInverseWeight += (1 / lvl.ratio);
          }
      });
  }

  return SCAVENGE_LEVELS.map(level => {
    const isEnabled = isSplitMode ? enabledLevels.includes(level.id) : true;
    
    // Determine share percentage for this level
    let share = 0;

    if (isSplitMode) {
        if (isEnabled && totalInverseWeight > 0) {
            const weight = 1 / level.ratio;
            share = weight / totalInverseWeight;
        } else {
            share = 0;
        }
    } else {
        // Normal mode: 100% of troops are calculated for each level options
        share = 1;
    }

    // Calculate capacity and units for this level
    const currentLevelCapacity = totalCapacityRaw * share;
    const currentLevelUnits = totalUnitsRaw * share;

    // Calculate specific unit breakdown
    const unitBreakdown: Record<UnitType, number> = {} as Record<UnitType, number>;
    UNITS.forEach(u => {
        unitBreakdown[u.id] = Math.floor((army[u.id] || 0) * share);
    });

    // --- DURATION CALCULATION ---
    // Formula: ( (capacity * capacity * multiplier * ratio * ratio)^exponent + baseTime ) * durationFactor
    
    let durationSeconds = 0;
    let loot = 0;

    if (currentLevelCapacity > 0) {
        const baseTerm = (currentLevelCapacity * currentLevelCapacity) * multiplier * (level.ratio * level.ratio);
        const powerTerm = Math.pow(baseTerm, exponent);
        durationSeconds = (powerTerm + baseTime) * durationFactor;
        loot = Math.round(currentLevelCapacity * level.ratio);
    }
    
    // Avoid division by zero for rates
    const effectiveDuration = Math.max(1, durationSeconds);
    
    const runsPerDay = durationSeconds > 0 ? Math.floor(86400 / effectiveDuration) : 0;
    const lootPerHour = durationSeconds > 0 ? (loot / effectiveDuration) * 3600 : 0;
    const resourcesPer24h = loot * runsPerDay;

    // Calculate specifically for the user-defined Max Time
    const runsWithinMaxTime = durationSeconds > 0 ? Math.floor(maxTimeSeconds / effectiveDuration) : 0;
    const lootWithinMaxTime = loot * runsWithinMaxTime;
    const totalDurationSeconds = runsWithinMaxTime * effectiveDuration;

    return {
      level,
      units: Math.round(currentLevelUnits),
      capacity: Math.round(currentLevelCapacity),
      loot,
      durationSeconds,
      durationFormatted: formatTime(durationSeconds),
      runsPerDay,
      lootPerHour,
      resourcesPer24h,
      runsWithinMaxTime,
      lootWithinMaxTime,
      totalDurationFormatted: formatTime(totalDurationSeconds),
      isEnabled,
      unitBreakdown
    };
  });
}