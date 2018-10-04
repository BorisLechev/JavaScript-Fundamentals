function printDoubledNumbersAtOddPosition(array) {
    let reversedArray = array.filter((number, index) => index % 2 === 1).map(number => number * 2).reverse();

    console.log(reversedArray.join(' '));
}

printDoubledNumbersAtOddPosition([10, 15, 20, 25]);
printDoubledNumbersAtOddPosition([3, 0, 10, 4, 7, 3]);