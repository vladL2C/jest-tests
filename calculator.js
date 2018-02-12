function calculator() {
  const add = (a,b) => a + b;
  const subtract = (a,b) => a - b;
  const divide = (a,b=0) => {
    if (b === 0) throw new Error('Cannot divide by 0');
    return a / b;
  }
  const multiply = (a,b) => a * b;

  return { add, subtract, divide, multiply };
}

module.exports = calculator;