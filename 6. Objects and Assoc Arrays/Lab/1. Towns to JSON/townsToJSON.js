function townsToJSON(array) {
    let result = [];

    for (let i = 1; i < array.length; i++) {
        let [town, latitude, longitude] = array[i].split("|").filter(x => x !== "");

        let currentCity = {
            "Town": town.trim(),
            "Latitude": +latitude,
            "Longitude": +longitude
        };

        result.push(currentCity);
    }

    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);