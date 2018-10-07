function agregateTable(input) {
    let arrayCities = [];
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let splittedArray = input[i]
            .split("|")
            .filter(x => x !== " ");

        arrayCities.push(splittedArray[1].trim());
        sum += +splittedArray[2];
    }

    console.log(arrayCities.join(', '));
    console.log(sum);
}

agregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);