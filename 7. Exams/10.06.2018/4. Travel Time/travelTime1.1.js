function solve(input) {  // 33 points
    let map = new Map();

    for (let inputElement of input) {
        let [countryName, townName, travelCost] = inputElement.split(" > ");
        travelCost = +travelCost;

        if (!map.has(countryName)) {
            map.set(countryName, new Map());
        }

        if (!map.get(countryName).has(townName)) {
            map.get(countryName).set(townName, travelCost);
        }

        if (map.get(countryName).get(townName) > travelCost) {
            map.get(countryName).set(townName, travelCost);
        }
    }

    let sortedCountriesAlphabetically = [...map.keys()].sort((a, b) => a.localeCompare(b));

    for (let country of sortedCountriesAlphabetically) {
        let output = `${country} ->`;
        let sortedTowns = [...map.get(country).keys()].sort((a, b) => map.get(country).get(a) - map.get(country).get(b));

        for (let town of sortedTowns) {
            output += ` ${town} -> ${map.get(country).get(town)}`;
        }

        console.log(output);
    }
}

solve(["Bulgaria > Sofia > 25000",
    "aaa > Sofia > 1",
    "aa > Orgrimar > 0",
    "Albania > Tirana > 25000",
    "zz > Aarna > 25010",
    "Bulgaria > Lukovit > 10"]
);