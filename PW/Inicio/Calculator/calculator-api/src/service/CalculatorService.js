class CalculatorService {
  calculate(num1, num2, operator) {
    if (num1 == undefined || num2 == undefined || operator == undefined) {
      throw new Error("The values are not defined");
    }

    if (
      operator !== "/" &&
      operator !== "X" &&
      operator !== "+" &&
      operator !== "-"
    ) {
      throw new Error("The operator is not valid");
    }

    if (operator === "/" && num2 == 0) {
      throw new Error("You can`t divide by zero");
    }

    try {
      let result = 0;
      if (operator === "/") {
        result = parseFloat(num1) / parseFloat(num2);
      } else if (operator === "X") {
        result = parseFloat(num1) * parseFloat(num2);
      } else if (operator === "+") {
        result = parseFloat(num1) + parseFloat(num2);
      } else if (operator === "-") {
        result = parseFloat(num1) - parseFloat(num2);
      }

      return result;
    } catch (error) {
      throw new Error("An error occurred while calculating");
    }
  }

  changeSign(num) {
    if (num > 0) {
      num = -num;
    } else {
      num = Math.abs(num);
    }
  }

  porcentage(num) {
    if (num == undefined) {
      throw new Error("The value is not defined");
    }

    if (num == null) {
      throw new Error("The value is not defined");
    }

    try {
      return num / 100;
    } catch (error) {
      throw new Error("An error occurred while calculating the percentage");
    }
  }

  clear() {
    return 0;
  }
}

module.exports = CalculatorService;
