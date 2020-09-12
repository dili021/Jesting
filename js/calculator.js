const calculator = {
  add(...nums) {
    return nums.reduce((a, b) => a + b);
  },
  subtract(...nums) {
    return nums.reduce((a, b) => a - b);
  },
  divide(...nums) {
    return nums.reduce((a, b) => a / b);
  },
  multiply(...nums) {
    return nums.reduce((a, b) => a * b);
  },
};
export default calculator;
