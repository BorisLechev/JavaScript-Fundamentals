function solve(input) {
    let startingPoint = +input.shift();
    let endPoint = +input.shift();
    let stringForReplace = input.shift();

    let countryPattern = /([A-Z][a-z]+[A-Z])/g;
    let countryMatch = countryPattern.exec(input);
    let country = countryMatch[1];

    let changedCountry = country.substring(0, startingPoint) + stringForReplace.toLowerCase() +
        country.substring(endPoint + 1).toLowerCase();

    let threeDigitArray = [];
    let threeDigitNumbersPattern = /(\d{3}\.?\d*)/g;
    let match;

    while (match = threeDigitNumbersPattern.exec(input)) {
        threeDigitArray.push(Math.ceil(match[1]));
    }

    let city = String.fromCharCode(threeDigitArray.shift()).toUpperCase();

    for (let ascii of threeDigitArray) {
        city += String.fromCharCode(ascii);
    }

    console.log(`${changedCountry} => ${city}`);
}

solve(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA" +
" railLery1a0s1 111 an unpacked as 109 he"]);