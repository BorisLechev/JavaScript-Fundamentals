function dnaEx(input) {
    let pattern = /([a-z!@#$?]+)=([\d]+)--([\d]+)<<([a-z]+)/;
    let object = {};

    for (let line of input) {
        if (line === "Stop!") {
            break;
        }

        let match = line.match(pattern);

        if (match) {
            let name = match[1].replace(/([^a-z]+)/g, "");

            if (name.length == match[2]) {
                if (!object.hasOwnProperty(match[4])) {
                    object[match[4]] = +match[3];
                } else {
                    object[match[4]] += +match[3];
                }
            }
        }
    }

    let sortedArray = [];

    for (let element in object) {
        sortedArray.push([element, object[element]]);
    }

    sortedArray.sort((a, b) => {
        return b[1] - a[1];
    });
    sortedArray.forEach(x => console.log(`${x[0]} has genome size of ${x[1]}`));
}

dnaEx(["!@ab?si?di!a@=7--152<<human",
    "b!etu?la@=6--321<<dog",
    "!curtob@acter##ium$=14--230<<dog",
    "!some@thin@g##=9<<human",
    "Stop!"
]);