function matchMultiplication(input) {
    console.log(input.replace(/([\d-]+)\s*\*\s*([\d-.]+)/g, (match, firstNumber, secondNumber) => +firstNumber * +secondNumber));
}

matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');