function printEveryNthElement(array) {
    let delimiter = +array.pop();

    array.map((item, index) => {
        if (index % delimiter === 0) {
            return item;
        }
    }).filter(x => x !== undefined)
        .forEach(x => console.log(x));
}

printEveryNthElement(['5',
    '20',
    '31',
    '4',
    '20',
    '2']);
printEveryNthElement(['dsa',
    'asd',
    'test',
    'tset',
    '2']);
printEveryNthElement(['1',
    '2',
    '3',
    '4',
    '5',
    '6']
);