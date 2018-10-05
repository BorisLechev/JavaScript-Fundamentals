function printSpiralMatrix(rows, columns) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    let startRow = 0;
    let startColumn = 0;
    let endRow = rows - 1;
    let endColumn = columns - 1;
    let number = 1;

    while (startRow <= endRow || startColumn <= endColumn) {
        for (let i = startRow; i <= endRow; i++) {
            matrix[startRow][i] = number++;
        }

        for (let i = startRow + 1; i <= endRow; i++) {
            matrix[i][endColumn] = number++;
        }

        for (let i = endColumn - 1; i >= startColumn; i--) {
            matrix[endRow][i] = number++;
        }

        for (let i = endRow - 1; i > startRow; i--) {
            matrix[i][startRow] = number++;
        }

        startRow++;
        startColumn++;
        endRow--;
        endColumn--;
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

printSpiralMatrix(5, 5);