function storeCatalogue(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let [product, productPrice] = input[i].split(" : ");

        productPrice = +productPrice;
        let firstLetter = product[0];

        if (!map.has(firstLetter)) {
            map.set(firstLetter, new Map());
        }

        if (!map.get(firstLetter).has(product)) {
            map.get(firstLetter).set(product, 0);
        }

        map.get(firstLetter).set(product, productPrice);
    }

    for (let [letter, products] of [...map].sort()) {
        console.log(letter);

        for (let [product, price] of [...products].sort()) {
            console.log(`  ${product}: ${price}`);
        }
    }
}

storeCatalogue(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"
]);

storeCatalogue(["Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10"
]);