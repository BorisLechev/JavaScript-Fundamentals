function printEveryNthElement(array) {
    let steps = +array[array.length - 1];

    for (let i = 0; i < array.length - 1; i+=steps) {
        console.log(array[i]);
    }
}

printEveryNthElement(['5', '20', '31', '4', '20', '2']);