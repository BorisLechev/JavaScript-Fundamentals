function filterByAge(input) {
    let number = +input;
    let array = [];

    for (let i = 1; i <= number; i++) {
        array.push(i);
    }

    console.log(`'${array.join('')}'`);
}

filterByAge('11');