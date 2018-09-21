function sumAndVAT(input) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        sum += +input[i];
    }

    let vat = sum / 5;
    let total = sum + vat;

    console.log(sum = `${sum}`);
    console.log(VAT = `${vat}`);
    console.log(total = `${total}`);
}

sumAndVAT(['1.20', '2.60', '3.50']);
sumAndVAT(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);