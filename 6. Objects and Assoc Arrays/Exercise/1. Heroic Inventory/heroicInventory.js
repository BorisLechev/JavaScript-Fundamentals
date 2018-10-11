function heroicInventory(input) {
    let heroData = [];

    for (let i = 0; i < input.length; i++) {
        let splittedInput = input[i].split(" / ");

        let heroName = splittedInput[0];
        let heroLevel = +splittedInput[1];
        let heroItems = [];

        if (splittedInput.length > 2) {
            heroItems = splittedInput[2].split(", ");
        }

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));
}

heroicInventory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);