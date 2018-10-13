function compots(input) {
    let peachKg = 0;
    let plumKg = 0;
    let cherryKg = 0;
    let otherFruitsKg = 0;

    let sumKilograms = input.map((currentFruitInput) => {
        let [fruit, weightInKilograms] = currentFruitInput.split(/\s+/g);
        switch (fruit) {
            case"peach":
                peachKg += +weightInKilograms;
                break;
            case"plum":
                plumKg += +weightInKilograms;
                break;
            case"cherry":
                cherryKg += +weightInKilograms;
                break;
            default:
                otherFruitsKg += +weightInKilograms;
                break;
        }
    });

    let peachKompots = parseInt(((peachKg * 1000) / 140) / 2.5);
    let plumKompots = parseInt(((plumKg * 1000) / 20) / 10);
    let cherryKompots = parseInt(((cherryKg * 1000) / 9) / 25);
    let rakiya = otherFruitsKg / 5;

    console.log(`Cherry kompots: ${cherryKompots}`);
    console.log(`Peach kompots: ${peachKompots}`);
    console.log(`Plum kompots: ${plumKompots}`);
    console.log(`Rakiya liters: ${rakiya.toFixed(2)}`);
}

compots(['cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0',
    'papaya 20']
);
compots(['apple 6',
        'peach 25.158',
        'strawberry 0.200',
        'peach 0.1',
        'banana 1.55',
        'cherry 20.5',
        'banana 16.8',
        'grapes 205.65'
        , 'watermelon 20.54'
    ]
);