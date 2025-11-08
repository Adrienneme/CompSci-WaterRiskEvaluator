export function evaluateWaterQuality(inputs) {
  
  const percentage = (score / 6) * 100;
  let overall = 'Poor';
  if (percentage >= 90) overall = 'Excellent';
  else if (percentage >= 70) overall = 'Good';
  else if (percentage >= 50) overall = 'Fair';

  return { overall, details };
}
