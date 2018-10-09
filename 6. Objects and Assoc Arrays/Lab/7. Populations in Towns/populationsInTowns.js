function populationsInTowns(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let splittedInput = input[i].split(" <-> ");

        if (!map.has(splittedInput[0])) {
            map.set(splittedInput[0], 0);
        }

        map.set(splittedInput[0], map.get(splittedInput[0]) + +(splittedInput[1]));
    }

    for (let [town, population] of map) {
        console.log(`${town} : ${population}`);
    }
}

populationsInTowns(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

populationsInTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);