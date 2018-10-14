function travelTime(input) {
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

    let sortedCountries = Object.keys(object)
        .sort((a, b) => a.localeCompare(b));

    for (let country of sortedCountries) {
        let output = `${country} ->`;
        let sortedTowns = Object
            .keys(object[country])
            .sort((firstTown, secondTown) => {
                return object[country][firstTown] - object[country][secondTown];
            });

        for (let town of sortedTowns) {
            output += ` ${town} -> ${object[country][town]}`;
        }

        console.log(output);
    }
}

travelTime(["Bulgaria > Sofia > 25000",
    "aaa > Sofia > 1",
    "aa > Orgrimar > 0",
    "Albania > Tirana > 25000",
    "zz > Aarna > 25010",
    "Bulgaria > Lukovit > 10"]
);