function printSmallestTwoNumbers(array) {
    let sortedArray = array.sort((a, b) => a - b).splice(0, 2).join(' ');

    console.log(sortedArray);
}

printSmallestTwoNumbers([30, 15, 50, 5]);
printSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);