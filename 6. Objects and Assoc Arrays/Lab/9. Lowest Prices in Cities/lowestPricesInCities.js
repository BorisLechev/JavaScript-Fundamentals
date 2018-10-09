function lowestPrices(input) {
    let map = new Map();

    for (let currentRow of input) {
        let splittedInput = currentRow.split(" | ");

        if (!map.has(splittedInput[1])) {
            map.set(splittedInput[1], new Map());
        }

        map.get(splittedInput[1]).set(splittedInput[0], +splittedInput[2]);
    }

    for (let [product, towns] of map) {
        let lowestPrice = Number.MAX_VALUE;
        let townWithLowestPrice = "";

        for (let [town, price] of towns) {
            if (price < lowestPrice) {
                lowestPrice = price;
                townWithLowestPrice = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }
}

lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);