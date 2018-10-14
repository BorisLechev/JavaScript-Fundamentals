function travelInvestigation(input) {
    let validSentences = [];
    let invalidSentences = [];

    let companies = input.shift();
    let delimiter = input.shift();
    let splittedCompanies = companies.split(delimiter);

    for (let i = 0; i < input.length; i++) {
        let currentSentence = input[i].toLowerCase();
        let isValid = true;

        for (let company of splittedCompanies) {
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
        let position = 1;
        console.log("ValidSentences");
        validSentences.map((sentence) => console.log(`${position++}. ${sentence}`));

        if (invalidSentences.length > 0) {
            console.log("=".repeat(30));
        }
    }

    if (invalidSentences.length > 0) {
        let position = 1;
        console.log("InvalidSentences");
        invalidSentences.map((sentence) => console.log(`${position++}. ${sentence}`));
    }
}

travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]
);
travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);