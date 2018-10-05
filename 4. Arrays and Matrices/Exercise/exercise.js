function solve(matrix) {
    let newMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = matrix[i].split(" ").map(Number);
    }

    let mainDiagonalSum = 0;

    for (let i = 0; i < newMatrix.length; i++) {
        mainDiagonalSum += newMatrix[i][i];
    }

    let secondaryMatrixSum = 0;

    for (let i = newMatrix.length - 1; i >= 0; i--) {
        secondaryMatrixSum += newMatrix[i][i];
    }

    if (mainDiagonalSum === secondaryMatrixSum) {
        for (let i = 0; i < newMatrix.length; i++) {
            for (let j = 0; j < newMatrix.length; j++) {
                if (i === j||) {
                    newMatrix[i][j] = mainDiagonalSum;
                }
            }
        }
    }else{
        console.log(newMatrix);
    }

    console.log(newMatrix);
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
// solve([[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]);
// solve([[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]);
