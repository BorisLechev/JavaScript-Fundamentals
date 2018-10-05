function join(array) {
    let delimiter = array.pop();
    let output = array.join(delimiter);

    console.log(output);
}

join(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']);

join(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_']);