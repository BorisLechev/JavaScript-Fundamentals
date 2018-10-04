function sortNumbers(input) {
    let output = [];

    for (let arrayElement of input) {
        if (+arrayElement < 0) {
            output.unshift(arrayElement);
        } else {
            output.push(arrayElement);
        }
    }

    console.log(output.join("\n"));
}

sortNumbers([7, -2, 8, 9]);
sortNumbers([3, -2, 0, -1]);