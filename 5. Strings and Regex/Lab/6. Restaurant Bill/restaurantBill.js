function restaurantBill(array) {
    let meals = array.filter((element, index) => index % 2 === 0);

    let sum = array
        .filter((element, index) => index % 2 === 1)
        .map(Number)
        .reduce((a, b) => a + b);

    console.log(`You purchased ${meals.join(', ')} for a total sum of ${sum}`);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);
restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);