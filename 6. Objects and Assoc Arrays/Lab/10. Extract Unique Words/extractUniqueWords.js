function extractUniqueWords(input) {
    let set = new Set();

    for (let i = 0; i < input.length; i++) {
        let currentSentence = input[i].split(/\W+/g).filter(x => x !== "").map(x => x.toLowerCase());

        for (let currentWord of currentSentence) {
            set.add(currentWord);
        }
    }

    console.log([...set].join(", "));
}

extractUniqueWords(["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Pellentesque quis hendrerit dui.",
    "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
    "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
    "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.",
    "Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
    "Integer ac turpis commodo, varius nulla sed, elementum lectus.",
    "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."]);