export const calculator = (() => {
  const add = (firstNumber, secondNumber) => {
    const result = firstNumber + secondNumber;
    return roundTwoDecimals(result);
  };
  const subtract = (firstNumber, secondNumber) => {
    const result = firstNumber - secondNumber;
    return roundTwoDecimals(result);
  };
  const divide = (firstNumber, secondNumber) => {
    const result = firstNumber / secondNumber;
    return roundTwoDecimals(result);
  };
  const multiply = (firstNumber, secondNumber) => {
    const result = firstNumber * secondNumber;
    return roundTwoDecimals(result);
  };
  function roundTwoDecimals(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }
  return { add, subtract, divide, multiply };
})();
