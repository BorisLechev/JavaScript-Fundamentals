function warehouseMachine(inputArray) {
    const commands = {
        "in": (products) => addCoffeeProducts(products),
        "out": (products) => unloadCoffeeProducts(products),
        "report": () => printCoffeeProducts(),
        "inspection": () => printSortedCoffeeProducts()
    };

    let warehouse = {};

    inputArray.forEach(line => {
        let command = line.split(", ")[0].toLowerCase();
        commands[command](line);
    });

    function addCoffeeProducts(line) {
        let [brand, coffeeName, expireDate, quantity] = line.split(", ").splice(1);

        if (!warehouse[brand]) {
            warehouse[brand] = {};
        }

        if (!warehouse[brand][coffeeName]) {
            warehouse[brand][coffeeName] = {};
            warehouse[brand][coffeeName].expireDate = expireDate;
            warehouse[brand][coffeeName].quantity = quantity;
        } else {
            if (warehouse[brand][coffeeName].expireDate < expireDate) {
                warehouse[brand][coffeeName].expireDate = expireDate;
                warehouse[brand][coffeeName].quantity = quantity;
            } else if (warehouse[brand][coffeeName].expireDate === expireDate) {
                warehouse[brand][coffeeName].quantity += quantity;
            }
        }
    }

    function unloadCoffeeProducts(line) {
        let [brand, coffeeName, expireDate, quantity] = line.split(", ").splice(1);

        if (warehouse[brand] && warehouse[brand][coffeeName]) {
            if (warehouse[brand][coffeeName].expireDate > expireDate && warehouse[brand][coffeeName].quantity >= +quantity) {
                warehouse[brand][coffeeName].quantity -= +quantity;
            }
        }
    }

    function printCoffeeProducts() {
        console.log(">>>>> REPORT! <<<<<");

        Object.keys(warehouse)
            .forEach(nameOfBrand => {
                console.log(`Brand: ${nameOfBrand}:`);

                Object.keys(warehouse[nameOfBrand])
                    .forEach(coffeeName => {
                        console.log(`-> ${coffeeName} -> ${warehouse[nameOfBrand][coffeeName].expireDate} -> ${warehouse[nameOfBrand][coffeeName].quantity}.`);
                    });
            });
    }

    function printSortedCoffeeProducts() {
        console.log(">>>>> INSPECTION! <<<<<");

        Object.keys(warehouse)
            .sort((a, b) => a.localeCompare(b))
            .forEach(nameOfBrand => {
                console.log(`Brand: ${nameOfBrand}:`);

                Object.entries(warehouse[nameOfBrand])
                    .sort((a, b) => b[1].quantity - a[1].quantity)
                    .forEach(coffeeName => {
                        console.log(`-> ${coffeeName[0]} -> ${coffeeName[1].expireDate} -> ${coffeeName[1].quantity}.`);
                    });
            });
    }
}

warehouseMachine([
        "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
        "IN, Folgers, Black Silk, 2023-03-01, 14",
        "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
        "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
        "IN, Folgers, Black Silk, 2022-01-01, 10",
        "IN, Lavazza, Intenso, 2022-07-19, 20",
        "OUT, Dallmayr, Espresso, 2022-07-19, 5",
        "OUT, Dallmayr, Crema, 2022-07-19, 5",
        "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
        "REPORT",
        "INSPECTION",
    ]
);