function cityMarkets(input) {
    let map = new Map();

    for (let currentRow of input) {
        let splittedInput = currentRow.split(" -> ");
        let income = splittedInput[2]
            .split(" : ")
            .reduce((a, b) => +a * +b);

        if (!map.has(splittedInput[0])) {
            map.set(splittedInput[0], new Map());
        }

        if (!map.get(splittedInput[0]).has(splittedInput[1])) {
            map.get(splittedInput[0]).set(splittedInput[1], 0);
        }

        map.get(splittedInput[0]).set(splittedInput[1], map.get(splittedInput[0]).get(splittedInput[1]) + income);
    }

    for (let [town, product] of map) {
        console.log(`Town - ${town}`);

        for (let [product, income] of map.get(town)) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);