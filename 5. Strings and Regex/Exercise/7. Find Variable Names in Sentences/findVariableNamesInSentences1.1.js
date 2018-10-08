function findNames(input) {
    let pattern = /\b_[a-zA-Z\d]+\b/g;
    let match = input.match(pattern);
    let array = [];

    for (let element of match) {
        array.push(element.substring(1));
    }

    console.log(array.join());
}

findNames("The _id and _age variables are both integers.");
findNames("Calculate the _area of the _perfectRectangle object.");
findNames("__invalidVariable _evenMoreInvalidVariable_ _validVariable");