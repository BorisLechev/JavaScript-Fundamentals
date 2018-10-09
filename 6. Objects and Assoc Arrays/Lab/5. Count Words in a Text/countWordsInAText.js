function countWordsInText(input) {
    let array = input[0]
        .split(/\W+/g)
        .filter(x => x !== "");

    let object = {};

    for (let word of array) {
        if (!object.hasOwnProperty(word)) {
            object[word] = 1;
        } else {
            object[word]++;
        }
    }

    console.log(JSON.stringify(object));
}

countWordsInText(['Far too slow, you\'re far too slow.']);
countWordsInText(['JS devs use Node.js for server-side JS.-- JS for devs']);