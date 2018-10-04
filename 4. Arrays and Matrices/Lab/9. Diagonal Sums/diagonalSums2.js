function diagonalSums(input) {
    let secondaryDiagonalSum = input
        .map((item, index) => { // за първия вход врема два масива [20,40] и [10,60]
            return item
                .map((element) => { // парсваме елементите на текущия масив
                    return +element;
                })
                .filter((innerElement, innerIndex) => { // филтрираме текущия масив
                    return innerIndex === item.length - 1 - index;
                })[0];
        })
        .reduce((acc, cur) => {
            return acc + cur;
        });

    let mainDiagonalSum = input
        .map((item, index) => {
            return item
                .map((element) => {
                    return +element;
                })
                .filter((innerIndex, innerElement) => {
                    //console.log(item[innerElement]);
                    return item[index] === innerIndex;
                })[0];
        })
        .reduce((acc, cur) => {
            return acc + cur;
        });

    console.log(mainDiagonalSum + " " + secondaryDiagonalSum);
}

diagonalSums([[20, 40],
    [10, 60]]
);
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);