function aggregateElements(input) {
    let firstOutput = 0;
    let secondOutput = 0;

    for (let i = 0; i < input.length; i++) {
        firstOutput += input[i];
        secondOutput += 1 / input[i];
    }

    console.log(firstOutput);
    console.log(secondOutput);
    console.log(input.join(''));
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);