function printExtractText(input) {
    let openBracketIndex = input.indexOf("(");
    let closeBracketIndex = input.indexOf(")", openBracketIndex);
    let array = [];

    while (openBracketIndex > -1 && closeBracketIndex > -1) {
        let text = input.substring(openBracketIndex + 1, closeBracketIndex);

        array.push(text);

        openBracketIndex = input.indexOf("(", closeBracketIndex);
        closeBracketIndex = input.indexOf(")", openBracketIndex);
    }

    console.log(array.join(", "));
}

printExtractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');