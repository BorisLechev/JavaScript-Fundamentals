function cappyJuice(input) {
    let map = new Map();
    let output = new Map();

    for (let i = 0; i < input.length; i++) {
        let [juiceName, juiceQuantity] = input[i].split(" => ");

        juiceQuantity = +juiceQuantity;

        if (!map.has(juiceName)) {
            map.set(juiceName, 0);
        }

        map.set(juiceName, map.get(juiceName) + juiceQuantity);

        if (map.get(juiceName) >= 1000) {
            output.set(juiceName, map.get(juiceName));
        }
    }

    for (let [fruit, quantity] of output) {
        console.log(`${fruit} => ${Math.floor(quantity / 1000)}`);
    }
}

cappyJuice(["Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549"
]);

cappyJuice(["Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789"
]);