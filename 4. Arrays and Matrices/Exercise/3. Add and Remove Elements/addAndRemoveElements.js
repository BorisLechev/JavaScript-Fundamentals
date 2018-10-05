function addRemove(array) {
    let output = [];
    let number = 1;

    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case"add":
                output.push(number);
                number++;
                break;
            case"remove":
                output.pop(number);
                number++;
                break;
        }
    }

    if (output.length === 0) {
        console.log("Empty");
    } else {
        console.log(output.join('\n'));
    }
}

addRemove(['add',
    'add',
    'remove',
    'add',
    'add']);