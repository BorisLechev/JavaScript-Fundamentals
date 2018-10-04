function printLastKSequence(lengthOfTheSequence, previousNumbers) {
    let array = [1];

    for (let i = 1; i < lengthOfTheSequence; i++) {
        let start = Math.max(0, i - previousNumbers);
        let sum = 0;

        for (let j = start; j < i; j++) {
            sum += array[j];
        }

        array.push(sum);
    }

    console.log(array.join(" "));
}

printLastKSequence(6, 3);