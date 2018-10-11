function carCompany(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let [carBrand, carModel, producedCars] = input[i].split(" | ");

        producedCars = +producedCars;

        if (!map.has(carBrand)) {
            map.set(carBrand, new Map());
        }

        if (!map.get(carBrand).has(carModel)) {
            map.get(carBrand).set(carModel, 0);
        }

        map.get(carBrand).set(carModel, producedCars + map.get(carBrand).get(carModel));
    }

    for (let [carBrand, carModels] of map) {
        console.log(carBrand);

        for (let [carModel, producedCars] of carModels) {
            console.log(`###${carModel} -> ${producedCars}`);
        }
    }
}

carCompany(["Audi | Q7 | 1000",
    "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
    "Citroen | C5 | 10"
]);

carCompany(["Mercedes-Benz | 50PS | 123",
    "Mini | Clubman | 20000",
    "Mini | Convertible | 1000",
    "Mercedes-Benz | 60PS | 3000",
    "Hyunday | Elantra GT | 20000",
    "Mini | Countryman | 100",
    "Mercedes-Benz | W210 | 100",
    "Mini | Clubman | 1000",
    "Mercedes-Benz | W163 | 200"
]);