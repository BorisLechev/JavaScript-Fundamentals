function minkeDecode(input) {
    let inputAsString = input.join("");

    let countryPattern = /([A-Z][a-z]+[A-Z])/g;
    let countryMatch = countryPattern.exec(inputAsString);
    let country = countryMatch[1];

    let startPoint = +input.shift();
    let endPoint = +input.shift();
    let substring = input.shift();

    let replacePartOfTheCountry = country.substring(0, startPoint)
        + substring + country.substring(endPoint + 1, country.length).toLowerCase();

    let numbersArray = [];
    let numberPattern = /[\d]{3}[\d.]*/g;
    let match = inputAsString.match(numberPattern);
    let convertFigureLetter = "";

    for (let currentMatch of match) {
        convertFigureLetter += String.fromCharCode(Math.ceil(currentMatch));
    }

    console.log(`${replacePartOfTheCountry}  => ${convertFigureLetter[0].toUpperCase()}${convertFigureLetter.substr(1, convertFigureLetter.length)}`);
}

minkeDecode(["3", "5", "gar", "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA" +
" - Varnd railLery101 an unpacked as he"]);
minkeDecode(["1", "4", "loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity" +
"  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);