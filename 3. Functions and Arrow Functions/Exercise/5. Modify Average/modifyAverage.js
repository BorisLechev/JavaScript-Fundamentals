function modifyAverage(number) {
    let numberAsString = number.toString();

    function sumDigits(number) {
        let sum = 0;

        for (let i = 0; i < numberAsString.length; i++) {
            sum += +numberAsString[i];
        }

        return sum;
    }

    let totalSum = sumDigits(numberAsString);

    while (totalSum / numberAsString.length <= 5) {
        numberAsString += '9';
        totalSum = sumDigits(numberAsString);
    }

    console.log(numberAsString);
}

modifyAverage(101);
modifyAverage(5835);