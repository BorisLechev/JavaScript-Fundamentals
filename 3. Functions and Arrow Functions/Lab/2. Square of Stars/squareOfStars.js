function printSquareOfStars(number) {
    if (number === 1) {
        console.log("*");
        return;
    }

    for (let i = 0; i < number; i++) {
        console.log("* ".repeat(number));
    }
}

printSquareOfStars(2);
printSquareOfStars(5);