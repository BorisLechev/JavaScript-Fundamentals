function addRemove(array) {
    let number = 1;
    let output = [];

    array.forEach((command) => {
        if (command === "add") {
            output.push(number);
        } else if (command === "remove") {
            output.pop();
        }

        number++;
    });

    if (output.length > 0) {
        output.forEach((number) => {
            console.log(number);
        })
    } else {
        console.log("Empty");
    }
}

addRemove(['add',
    'add',
    'add',
    'add']);
addRemove(['add',
    'add',
    'remove',
    'add',
    'add']);
addRemove(['remove',
    'remove',
    'remove']);