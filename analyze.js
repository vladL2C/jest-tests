/*

function analyze(array) {
  const length = () => array.length;
  const min = () => Math.min(...array);
  const max = () => Math.max(...array);
  const average = array.reduce((n,sum) => n + sum / array.length,0);
  return { average: average, min: min(), max: max(), length: length() }
}

*/

const analyze = (array) => ({
  length: array.length,
  min: Math.min(...array),
  max: Math.max(...array),
  average: array.reduce((n,sum) => n + sum / array.length,0) 
});

module.exports = analyze;