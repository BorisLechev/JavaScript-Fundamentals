function countOccurences(targetString, text) {
    console.log(text.split(targetString).length - 1);
}

countOccurences('the', 'The quick brown fox jumps over the lay dog.');
countOccurences('ma', 'Marine mammal training is the training and caring for marine life such as,' +
    ' dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of' +
    ' the trainer to do mental and physical exercises to keep the animal healthy and happy.');