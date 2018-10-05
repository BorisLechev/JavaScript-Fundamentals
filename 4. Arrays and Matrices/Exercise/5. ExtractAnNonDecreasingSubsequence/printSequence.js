function printSequence(array) {
    let newArray = [];
    let currentBiggestNumber = 0;

    for (let i = 0; i < array.length; i++) {
        if (currentBiggestNumber <= array[i]) {
            currentBiggestNumber = array[i];
            newArray.push(currentBiggestNumber);
        }
    }

    console.log(newArray.join('\n'));
}

printSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
printSequence([1, 2, 3, 4]);
printSequence([20, 3, 2, 15, 6, 1]);