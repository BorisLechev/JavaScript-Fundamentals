function diagonalAttack(matrix) {
    let newMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = matrix[i].split(' ').map(n => +n);
    }

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < newMatrix.length; row++) {
        mainDiagonalSum += newMatrix[row][row];
        secondaryDiagonalSum += newMatrix[row][newMatrix.length - row - 1];
    }

    if (mainDiagonalSum === secondaryDiagonalSum) {
        for (let row = 0; row < newMatrix.length; row++) {
            for (let col = 0; col < newMatrix.length; col++) {
                if (row !== col && col !== newMatrix.length - row - 1) {
                    newMatrix[row][col] = mainDiagonalSum;
                }
            }
        }

        console.log(newMatrix.map(x => x.join(' ')).join('\n'));
    } else {
        console.log(newMatrix.map(x => x.join(' ')).join('\n'));
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
);