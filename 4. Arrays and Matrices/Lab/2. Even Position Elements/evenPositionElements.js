function printNumbersAtEvenPosition(array) {
    let output = "";

    for (let i = 0; i < array.length; i += 2) {
        output += ` ${array[i]}`;
    }

    console.log(output);
}

printNumbersAtEvenPosition(['20', '30', '40']);
printNumbersAtEvenPosition(['5', '10']);