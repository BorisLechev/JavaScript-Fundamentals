function travelInvestigation(input) {
    let companies = input[0].split(input[1]);

    let validSentences = [];
    let invalidSentences = [];

    for (let i = 2; i < input.length; i++) {
        let currentSentence = input[i].toLowerCase();
        let isValid = true;

        for (let company of companies) {
            if (!currentSentence.includes(company)) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            validSentences.push(currentSentence);
        } else {
            invalidSentences.push(currentSentence);
        }
    }

    if (validSentences.length > 0) {
        console.log("ValidSentences");
        let position = 1;
        invalidSentences.map((sentence) => console.log(`${position++}. ${sentence}`));
    }

    if (invalidSentences.length > 0) {
        if (validSentences.length > 0) {
            console.log("=".repeat(30));
        }

        console.log("InvalidSentences");
        let invalidPosition = 1;
        invalidSentences.map((sentence) => console.log(`${invalidPosition++}. ${sentence}`));
    }
}

travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);