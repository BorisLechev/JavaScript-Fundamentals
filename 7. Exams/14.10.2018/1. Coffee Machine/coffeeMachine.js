function coffeeMachine(input) {
    let income = 0;

    input.forEach(el => {
        let orderedDrinks = el.split(", ");

        let insertedCoins = +orderedDrinks[0];
        let drink = orderedDrinks[1];
        let totalPrice = 0;

        if (drink === "coffee") {
            let typeOfDrink = orderedDrinks[2];

            switch (typeOfDrink) {
                case "caffeine":
                    totalPrice = 0.8;
                    break;
                case "decaf":
                    totalPrice = 0.9;
                    break;
            }

            if (orderedDrinks[3] === "milk") {
                totalPrice += +((totalPrice * 0.1).toFixed(1));
                totalPrice = orderedDrinks[4] > 0 && orderedDrinks[4] <= 5 ? totalPrice + 0.1 : totalPrice;
            } else {
                totalPrice = orderedDrinks[3] > 0 && orderedDrinks[3] <= 5 ? totalPrice + 0.1 : totalPrice;
            }
        }

        if (drink === "tea") {
            totalPrice = 0.8;

            if (orderedDrinks[2] === "milk") {
                totalPrice += +((totalPrice * 0.1).toFixed(1));
                totalPrice = orderedDrinks[3] > 0 && orderedDrinks[3] <= 5 ? totalPrice + 0.1 : totalPrice;
            } else {
                totalPrice = orderedDrinks[2] > 0 && orderedDrinks[2] <= 5 ? totalPrice + 0.1 : totalPrice;
            }
        }

        if (insertedCoins >= totalPrice) {
            console.log(`You ordered ${drink}. Price: ${(totalPrice).toFixed(2)}$ Change: ${(insertedCoins - totalPrice).toFixed(2)}$`);
            income += totalPrice;
        } else {
            console.log(`Not enough money for ${drink}. Need ${(totalPrice - insertedCoins).toFixed(2)}$ more.`);
        }
    });

    console.log(`Income Report: ${(income).toFixed(2)}$`);
}

coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']);

coffeeMachine(['8.00, coffee, decaf, 4',
    '1.00, tea, 2']);