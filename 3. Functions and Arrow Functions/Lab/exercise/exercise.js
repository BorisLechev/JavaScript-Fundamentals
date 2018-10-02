function solve(input) {
    console.log(input.reduce((a, b) => a + b));
    console.log(input.reduce((a, b) => a + 1 / b));
    console.log(input.join(""));
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);