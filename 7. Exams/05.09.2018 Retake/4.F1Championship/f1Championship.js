function championship(input) {
    let object = {};

    for (let inputElement of input) {
        let [teamName, pilotName, pilotPoints] = inputElement.split(" -> ");
        pilotPoints = +pilotPoints;

        if (!object.hasOwnProperty(teamName)) {
            object[teamName] = {
                totalPoints: 0,
                pilots: {}
            };
        }

        if (!object[teamName]["pilots"].hasOwnProperty(pilotName)) {
            object[teamName]["pilots"][pilotName] = 0;
        }

        object[teamName]["pilots"][pilotName] += pilotPoints;
        object[teamName]["totalPoints"] += pilotPoints;
    }

    let winners = Object.entries(object)
        .sort((a, b) => b[1]["totalPoints"] - a[1]["totalPoints"]).slice(0, 3);

    for (let team of winners) {
        console.log(`${team[0]}: ${team[1]["totalPoints"]}`);

        let sortedPilots = Object.entries(team[1]["pilots"]).sort((a, b) => b[1] - a[1]);

        for (let pilot of sortedPilots) {
            console.log(`-- ${pilot[0]} -> ${pilot[1]}`);
        }
    }
}

championship(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"]
);
championship(["Ferrari -> Kimi Raikonnen -> 25",
"Ferrari -> Sebastian Vettel -> 18",
"Mercedes -> Lewis Hamilton -> 10",
"Mercedes -> Valteri Bottas -> 8",
"Red Bull -> Max Verstapen -> 6",
"Red Bull -> Daniel Ricciardo -> 4",
"Mercedes -> Lewis Hamilton -> 25"]);