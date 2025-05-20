const CalculatorService = require("../src/service/CalculatorService");

test("Calculator Service must sum two numbers", () => {
  const calculatorService = new CalculatorService();
  const result = calculatorService.calculate(2, 3, "+");
  expect(result).toBe(5);
});

test("Calculator Service must subtract two numbers", () => {
  const calculatorService = new CalculatorService();
  const result = calculatorService.calculate(3, 3, "-");

  expect(result).toBe(0);
});

test("Calculator Service must multiply two numbers", () => {
  const calculatorService = new CalculatorService();
  const result = calculatorService.calculate(3, 3, "X");
  expect(result).toBe(9);
});

test("Calculator Service must divide two numbers", () => {
  const calculatorService = new CalculatorService();
  const result = calculatorService.calculate(25, 5, "/");
  expect(result).toBe(5);
});

test("Calculator Service should return an error if the number one is empty", () => {
  const calculatorService = new CalculatorService();
  expect(() => calculatorService.calculate(5, "-")).toThrow(
    "The values are not defined"
  );
});

test("Calculator Service should return an error if the number two is empty", () => {
  const calculatorService = new CalculatorService();
  expect(() => calculatorService.calculate(5, "+")).toThrow(
    "The values are not defined"
  );
});

test("Calculator Service should return an error if the number one and the number two are empty", () => {
  const calculatorService = new CalculatorService();
  expect(() => calculatorService.calculate("+")).toThrow(
    "The values are not defined"
  );
});

test("Calculator Service should return an error if the operator is empty", () => {
  const calculatorService = new CalculatorService();
  expect(() => calculatorService.calculate(5, 5)).toThrow(
    "The values are not defined"
  );
});

test("Calculator Service should return an error if the operator is not valid", () => {
  const calculatorService = new CalculatorService();
  expect(() => calculatorService.calculate(5, 5, "a")).toThrow(
    "The operator is not valid"
  );
});

test("Calculator Service should  return an error if the operatio is a division by zero", () => {
  const calculatorService = new CalculatorService();
  expect(() => calculatorService.calculate(5, 0, "/")).toThrow(
    "You can`t divide by zero"
  );
});

test("Calculator Service should return 10% of 100", () => {
  const calculatorService = new CalculatorService();
  const result = calculatorService.porcentage(100);
  expect(result).toBe(1);
});

test("The Calculator Service should return an error if the number is empty", () => {
  const calculatorService = new CalculatorService();
  expect(() => calculatorService.porcentage()).toThrow(
    "The value is not defined"
  );
});

test("The Calculator Service should return zero", () => {
  const calculatorService = new CalculatorService();
  const result = calculatorService.clear();
  expect(result).toBe(0);
});
