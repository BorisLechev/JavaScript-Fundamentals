function findOccurrencesInSentence(sentence, word) {
    let regex = new RegExp(`\\b${word}\\b`, "gi");

    console.log(regex.test(sentence) ? sentence.match(regex).length : 0);
}

findOccurrencesInSentence("The waterfall was so high, that the child couldn’t see its peak.",
    "the"
);

findOccurrencesInSentence("How do you plan on achieving that? How? How can you even think of that?",
    "how"
);

findOccurrencesInSentence('How do you plan on achieving that? How? How can you even think of that?',
    'how'
);