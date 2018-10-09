function countWords(input) {
    let keys = input[0]
        .toLowerCase()
        .split(/\W+/g)
        .filter(x => x !== "");

    let map = new Map();

    for (let key of keys) {
        if (!map.has(key)) {
            map.set(key, 0);
        }

        map.set(key, map.get(key) + 1)
    }

    map = [...map].sort();

    for (let [word, count] of map) {
        console.log(`'${word}' -> ${count} times`);
    }
}

countWords(['Far too slow, you\'re far too slow.']);