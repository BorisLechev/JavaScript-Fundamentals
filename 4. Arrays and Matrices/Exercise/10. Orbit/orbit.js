function orbit([width, height, x, y]) {
    let matrix = [width];

    for (let i = 0; i < width; i++) {
        matrix[i] = [];
        for (let j = 0; j < height; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let rows = 0; rows < matrix.length; rows++) {
        for (let cols = 0; cols < matrix.length; cols++) {

            matrix[rows][cols] = Math.max(Math.abs(x - rows), Math.abs(y - cols)) + 1;
        }
    }

    console.log(matrix.map(x => x.join(' ')).join('\n'));
}

orbit([4, 4, 0, 0]);