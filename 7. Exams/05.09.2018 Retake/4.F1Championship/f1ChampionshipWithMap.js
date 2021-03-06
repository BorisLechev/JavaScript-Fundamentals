function championship(input) {
    let map = new Map();

    for (let inputElement of input) {
        let [teamName, pilotName, pilotPoints] = inputElement.split(" -> ");
        pilotPoints = +pilotPoints;

        if (!map.has(teamName)) {
            map.set(teamName, new Map());
        }

        if (!map.get(teamName).has(pilotName)) {
            map.get(teamName).set(pilotName, pilotPoints);
        } else {
            map.get(teamName).set(pilotName, map.get(teamName).get(pilotName) + +pilotPoints);
        }
    }

    let sortedMap = [...map].sort((a, b) => [...b[1].values()]
        .reduce((a, b) => a + b) - [...a[1].values()]
        .reduce((a, b) => a + b))
        .splice(0, 3);

    for (let [team, pilot] of sortedMap) {
        console.log(`${team}: ${[...pilot.values()].reduce((a, b) => a + b)}`);

        let sortedPilots = [...pilot].sort((a, b) => b[1] - a[1]);

        for (let [pilot, points] of sortedPilots) {
            console.log(`-- ${pilot} -> ${points}`);
        }
    }
}

championship(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Red Bull -> Daniel Ricciardo -> 4",
    "Red Bull -> Max Verstapen -> 6",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",]
);