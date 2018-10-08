function findWordInSentence(input) {
    let pattern = /\b_([a-zA-Z\d]+)\b/g;
    let array = [];
    let match = pattern.exec(input);

    while (match) {
        array.push(match[1]);

        match = pattern.exec(input);
    }

    console.log(array.join(","));
}

findWordInSentence("The _id and _age variables are both integers.");
findWordInSentence("Calculate the _area of the _perfectRectangle object.");
findWordInSentence("__invalidVariable _evenMoreInvalidVariable_ _validVariable");