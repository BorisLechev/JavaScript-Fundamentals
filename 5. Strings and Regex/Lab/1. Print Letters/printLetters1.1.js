function printLetter(input) {
    input
        .split('')
        .forEach((element, index) => console.log(`str[${index}] -> ${element}`));
}

printLetter('Hello, World!');