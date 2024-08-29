const convertMedicationFrequency = (
  frequency: number | undefined,
  period: number | undefined,
  periodUnit: string | undefined
): string => {
  if (frequency && period && periodUnit) {
    if (periodUnit === 'h') {
      if (frequency === 1) {
        return `q${period}h`; // Example: q8h
      } else if (frequency === 2) {
        return `q${period / 2}h`; // Example: q4h
      }
    } else if (periodUnit === 'd') {
      if (frequency === 1 && period === 1) {
        return 'qd'; // Special case for "once daily"
      } else if (frequency === 1 && period > 1) {
        return `q${period}d`; // Example: q2d
      } else if (frequency === 2 && period === 1) {
        return 'BID'; // Twice daily
      } else if (frequency === 3 && period === 1) {
        return 'TID'; // Three times daily
      } else if (frequency === 4 && period === 1) {
        return 'QID'; // Four times daily
      } else if (frequency === 1 && period > 1) {
        return `q${period}d`; // Example: q2d
      }
    }
  }
