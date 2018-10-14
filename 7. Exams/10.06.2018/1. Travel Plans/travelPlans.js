function clumsyPlans(input) {
    let specializedProfessions = ["Programming", "Hardware maintenance", "Cooking", "Translating", "Designing"];
    let averageProfessions = ["Driving", "Managing", "Fishing", "Gardening"];
    let clumsyProfessions = ["Singing", "Accounting", "Teaching", "Exam-Making", "Acting",
        "Writing", "Lecturing", "Modeling", "Nursing"];

    let sum = 0;
    let specializedCounter = 0;
    let clumsyCounter = 0;

    for (let i = 0; i < input.length; i++) {
        let [profession, gold] = input[i].split(" : ");
        gold = +gold;

        if (specializedProfessions.includes(profession) && gold >= 200) {
            sum += gold * 0.8;
            specializedCounter++;

            if (specializedCounter % 2 === 0) {
                sum += 200;
            }
        } else if (clumsyProfessions.includes(profession)) {
            clumsyCounter++;

            if (clumsyCounter % 2 === 0) {
                sum += gold * 0.95;
            } else if (clumsyCounter % 3 === 0) {
                sum += gold * 0.9;
            } else {
                sum += gold;
            }
        } else if (averageProfessions.includes(profession)) {
            sum += gold;
        }
    }

    console.log(`Final sum: ${sum.toFixed(2)}`);
    console.log(sum < 1000 ? `Mariyka need to earn ${(1000 - sum).toFixed(2)} gold more to continue in the next task.`
        : `Mariyka earned ${(sum - 1000).toFixed(2)} gold more.`);
}

clumsyPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199",
    "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);