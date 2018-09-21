function filterByAge(a, b, c, d, e) {
    let minAge = a;
    let firstName = b;
    let firstAge = c;
    let secondName = d;
    let secondAge = e;

    if (firstAge > minAge) {
        console.log({name: `${firstName}`, age: firstAge});
    }

    if (secondAge >= minAge) {
        console.log({name: `${secondName}`, age: secondAge});
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);