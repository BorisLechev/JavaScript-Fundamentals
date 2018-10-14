function solve(input) {
    let object = {};

    for (let i = 0; i < input.length; i++) {
        let [country, town, travelCost] = input[i].split(" > ");
        travelCost = +travelCost;
        town = town[0].toUpperCase() + town.substring(1);

        if (!object.hasOwnProperty(country)) {
            object[country] = {};
        }
        if (!object[country].hasOwnProperty(town)) {
            object[country][town] = travelCost;
        }
        if (object[country][town] > travelCost) {
            object[country][town] = travelCost;
        }
    }

    let sortedCountries = Object.keys(object).sort((a, b) => a.localeCompare(b));

    for (let sortedCountry of sortedCountries) {
        let output = `${sortedCountry} -> `;
        let sortedTowns = Object.keys(object[sortedCountry])
            .sort((a, b) => object[sortedCountry][a] - object[sortedCountry][b]);

        for (let sortedTown of sortedTowns) {
            output+=`${sortedTown} -> ${object[sortedCountry][sortedTown]} `;
        }

        console.log(output);
    }
}

// travelTime(["Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"]
// );
solve(["Bulgaria > Sofia > 25000",
    "aaa > Sofia > 1",
    "aa > Orgrimar > 0",
    "Albania > Tirana > 25000",
    "zz > Aarna > 25010",
    "Bulgaria > Lukovit > 10"]);