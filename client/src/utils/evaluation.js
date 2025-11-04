export function evaluateWaterQuality(inputs) {
  const details = [];
  let score = 0;

  // Example evaluation rules
  const addResult = (parameter, value, condition, passMessage, failMessage) => {
    const passed = condition(value);
    details.push({
      parameter,
      value: passed ? passMessage : failMessage,
      status: passed ? 'Pass' : 'Fail'
    });
    if (passed) score += 1;
  };

  addResult('pH Level', inputs.ph, v => v >= 6.5 && v <= 8.5, 'Ideal range', 'Out of range');
  addResult('BOD', inputs.bod, v => v <= 3, 'Acceptable', 'High organic pollution');
  addResult('Turbidity', inputs.turbidity, v => v <= 5, 'Clear', 'Too cloudy');
  addResult('Dissolved Oxygen', inputs.dissolvedOxygen, v => v >= 5, 'Healthy', 'Too low');
  addResult('Nitrate', inputs.nitrate, v => v <= 10, 'Safe', 'Too high');
  addResult('E. coli', inputs.eColi, v => v == 0, 'Absent', 'Present');

  const percentage = (score / 6) * 100;
  let overall = 'Poor';
  if (percentage >= 90) overall = 'Excellent';
  else if (percentage >= 70) overall = 'Good';
  else if (percentage >= 50) overall = 'Fair';

  return { overall, details };
}
