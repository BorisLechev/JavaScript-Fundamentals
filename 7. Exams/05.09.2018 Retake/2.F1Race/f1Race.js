function f1Race(array) {
    let sequence = array.shift().split(" ");
    let index = 0;

    array.map((element) => {
        let [command, pilot] = element.split(/\s+/g);

        switch (command) {
            case"Join":
                if (sequence.indexOf(pilot) === -1) {
                    sequence.push(pilot);
                }
                break;
            case"Crash":
                if (sequence.indexOf(pilot) > -1) {
                    sequence.splice(sequence.indexOf(pilot), 1);
                }
                break;
            case"Pit":
                index = sequence.indexOf(pilot);

                if (index > -1) {
                    sequence.splice(index, 1);
                    sequence.splice(index + 1, 0, pilot);
                }
                break;
            case"Overtake":
                index = sequence.indexOf(pilot);

                if (index > 0) {
                    sequence.splice(index, 1);
                    sequence.splice(index - 1, 0, pilot);
                    break;
                }
        }
    });

    console.log(sequence.join(" ~ "));
}

// f1Race(["Vetel Hamilton Slavi",
//     "Pit Hamilton",
//     "Overtake Vetel",
//     "Crash Slavi"]
// );
f1Race(["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"]
);