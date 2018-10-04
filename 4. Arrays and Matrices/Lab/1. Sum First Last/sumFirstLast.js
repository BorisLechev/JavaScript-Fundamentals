function sumFirstAndLastNumber(array) {
    let firstNumber = +array[0];
    let lastNumber = +array[array.length - 1];

    console.log(firstNumber + lastNumber);
}

sumFirstAndLastNumber([['20', '30', '40']]);
sumFirstAndLastNumber(['5', '10']);