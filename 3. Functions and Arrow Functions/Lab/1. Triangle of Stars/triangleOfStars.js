function printTriangleOfStars(number) {

    // if (number === 1) {
    //     console.log("*");
    //     return;
    // }

    for (let i = 1; i <= number; i++) {
        console.log("*".repeat(i));
    }

    for (let i = number - 1; i >= 1; i--) {
        console.log("*".repeat(i));
    }
}

printTriangleOfStars(1);
printTriangleOfStars(2);
printTriangleOfStars(5);