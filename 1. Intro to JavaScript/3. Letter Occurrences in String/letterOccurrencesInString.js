function letterOccurrencesInString(firstInput, secondInput) {
    let word = firstInput;
    let letter = secondInput;
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            counter++;
        }
    }

    console.log(counter);
}

letterOccurrencesInString('hello', 'l');
letterOccurrencesInString('panther', 'n');