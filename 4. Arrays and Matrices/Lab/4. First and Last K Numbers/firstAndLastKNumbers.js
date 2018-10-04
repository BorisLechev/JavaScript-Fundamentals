function printNumbers(array) {
    let number = array.shift();

    console.log(array.slice(0, number).join(' '));
    console.log(array.slice(array.length - number, array.length).join(' '));
}

printNumbers([2, 7, 8, 9]);
printNumbers([3, 6, 7, 8, 9]);
printNumbers([1, 5]);