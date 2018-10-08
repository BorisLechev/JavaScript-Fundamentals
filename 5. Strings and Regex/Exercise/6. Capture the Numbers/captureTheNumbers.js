function captureTheNumbers(input) {
    let numbersArray = [];
    let numberPattern = /\d+/g;

    let match = numberPattern.exec(input);

    while (match) {
        numbersArray.push(match);

        match = numberPattern.exec(input);
    }

    console.log(numbersArray.join(" "));
}

captureTheNumbers(["The300",
    "What is that?",
    "I think it’s the 3rd movie.",
    "Lets watch it at 22:45"]);