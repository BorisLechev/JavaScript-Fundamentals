function expressionSplit(input) {
    let pattern = /[^(),;.\s']+/g;

    let match = input.match(pattern);

    console.log(match.join('\n'));
}

expressionSplit('let sum = 4 * 4,b = "wow";');
expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');