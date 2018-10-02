function functionalCalculator([firstNumber, secondNumber, operator]) {
    let result = 0;

    switch (operator) {
        case "+":
            result = sumNumbers(firstNumber, secondNumber);
            break;
        case"-":
            result = substractNumbers(firstNumber, secondNumber);
            break;
        case"/":
            result = divideNumbers(firstNumber, secondNumber);
            break;
        case"*":
            result = multiplyNumbers(firstNumber, secondNumber);
            break;
    }

    return result;

    function sumNumbers(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    function substractNumbers(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    function multiplyNumbers(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }

    function divideNumbers(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }
}

console.log(functionalCalculator([2, 4, '+']));
console.log(functionalCalculator([3, 3, '/']));
console.log(functionalCalculator([18, -1, '*']));