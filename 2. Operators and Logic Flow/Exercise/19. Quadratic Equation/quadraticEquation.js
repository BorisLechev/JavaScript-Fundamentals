function solveQuadraticEquation(a, b, c) {
    let discriminant = b ** 2 - (4 * a * c);

    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        console.log(+(Math.min(x1, x2).toFixed(5)));
        console.log(+(Math.max(x1, x2).toFixed(5)));
    } else if (discriminant === 0) {
        let x1 = -b / (2 * a);
        console.log(x1);
    } else {
        console.log("No");
    }
}

solveQuadraticEquation(6, 11, -35);
solveQuadraticEquation(1, -12, 36);
solveQuadraticEquation(5, 2, 1);