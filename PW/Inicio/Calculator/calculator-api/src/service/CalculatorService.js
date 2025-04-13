class CalculatorService {
    calculate(num1, num2, operator) {
        let result = 0

        if (operator === "/") {
            result = (parseFloat(num1) / parseFloat(num2));
          } else if (operator === "X") {
            result = (parseFloat(num1) * parseFloat(num2));
          } else if (operator === "+") {
            result = (parseFloat(num1) + parseFloat(num2));
          } else if (operator === "-") {
            result = (parseFloat(num1) - parseFloat(num2));
          }

        return result
    }

    changeSign(num){
        if (num > 0) {
            num = -num;
          } else {
            num = Math.abs(num);
          }
    }

    porcentage(num){
        return num / 100
    }

    clear(){
        return 0
    }
}

module.exports = CalculatorService