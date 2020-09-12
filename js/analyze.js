const analyze = arr => {
  const average = Math.round(arr.reduce((a, b) => a + b) / arr.length);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const { length } = arr;
  return {
    average,
    min,
    max,
    length,
  };
};
export default analyze;
