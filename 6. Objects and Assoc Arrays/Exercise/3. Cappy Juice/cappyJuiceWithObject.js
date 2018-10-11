function cappyJuice(input) {
    let object = {};
    let bottlesObject = {};

    for (let inputElement of input) {
        let [juiceName, juiceQuantity] = inputElement.split(" => ");

        if (!object.hasOwnProperty(juiceName)) {
            object[juiceName] = +juiceQuantity;
        } else {
            object[juiceName] += +juiceQuantity;
        }

        if (object[juiceName] >= 1000) {
            bottlesObject[juiceName] = parseInt(object[juiceName] / 1000);
        }
    }

    for (let key of Object.keys(bottlesObject)) {
        console.log(`${key} => ${bottlesObject[key]}`);
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