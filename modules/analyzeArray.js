export function analyzeArray(array) {
  const average = roundTwoDecimals(findAverage());
  const min = array.reduce(findSmallerNum);
  const max = array.reduce(findLargerNum);
  const length = array.length;
  return {
    average,
    min,
    max,
    length,
  };

  function findAverage() {
    return array.reduce((a, b) => a + b) / array.length;
  }

  function roundTwoDecimals(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  function findSmallerNum(num1, num2) {
    return num1 < num2 ? num1 : num2;
  }

  function findLargerNum(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
}
