function sumByTown(input) {
    let object = {};

    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let townIncome = input[i + 1];

        if (!object.hasOwnProperty(town)) {
            object[town] = 0;
        }

        object[town] += +townIncome;
    }

    console.log(JSON.stringify(object));
}

sumByTown(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']);