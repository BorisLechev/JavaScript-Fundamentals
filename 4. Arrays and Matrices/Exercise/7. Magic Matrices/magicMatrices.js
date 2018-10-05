function trueOrFalse(matrix) {
    let initialSum = matrix[0].reduce((a, b) => a + b);

    for (let row = 1; row < matrix.length; row++) {
        let sumRow = matrix[row].reduce((a, b) => a + b);

        if (initialSum !== sumRow) {
            return false;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        let sumColumns = 0;

        for (let col = 0; col < matrix.length; col++) {
            sumColumns+=matrix[col][row];
        }
        
        if (sumColumns !== initialSum){
            return false;
        }
    }

    return true;
}

trueOrFalse([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);