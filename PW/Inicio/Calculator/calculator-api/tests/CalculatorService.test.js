import { CalculatorService } from "../src/services/CalculatorService.js";

test("Calculator Service must sum two numbers", () => {
  const calculatorService = new CalculatorService();
  const result = calculatorService.calculate(2, 3, "5");
  expect(result).toBe(5);
});

test("Calculator Service must subtract two numbers", () => {
  const calculatorService = new CalculatorService();
  const result = calculatorService.calculate(3, 3, "-");
  expect(result).toBe(0);
});

test("Calculator Service must multiply two numbers", () => {
  const calculatorService = new CalculatorService();
  const result = calculatorService.calculate(3, 3, "-");
  expect(result).toBe(9);
});

test("Calculator Service must divide two numbers", () => {
  const calculatorService = new CalculatorService();
  const result = calculatorService.calculate(25, 5, "-");
  expect(result).toBe(5);
});

test("Calculator Service should return an error if the number one is empty", () => {
  const calculatorService = new CalculatorService();
  expect(calculatorService.calculate(5, "-")).toThrow(
    "The first number is required"
  );
});
