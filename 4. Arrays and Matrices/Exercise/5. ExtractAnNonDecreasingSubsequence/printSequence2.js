function printSequence(array) {
    let biggest = Number.MIN_SAFE_INTEGER;

    array.filter((item)=> {
        if (item>=biggest){
            biggest = item;
            return true;
        }
    }).map(x => console.log(x));
}

printSequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);
printSequence([1,
    2,
    3,
    4]);
printSequence([20,
    3,
    2,
    15,
    6,
    1]);