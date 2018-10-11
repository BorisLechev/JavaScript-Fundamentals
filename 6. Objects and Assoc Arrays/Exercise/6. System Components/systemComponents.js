function systemComponents(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let [systemName, componentName, subcomponentName] = input[i].split(" | ");

        if (!map.has(systemName)) {
            map.set(systemName, new Map());
        }

        if (!map.get(systemName).has(componentName)) {
            map.get(systemName).set(componentName, []);
        }

        map.get(systemName).get(componentName).push(subcomponentName);
    }

    map = [...map].sort((a, b) => {
        if (a[1].size > b[1].size) return -1;
        if (a[1].size < b[1].size) return 1;
        if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
        if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
    });

    for (let [system, components] of map) {
        console.log(system);

        components = [...components].sort((a, b) => {
            if (a[1].length > b[1].length) return -1;
            if (a[1].length < b[1].length) return 1;
        });

        for (let [component, subs] of components) {
            console.log(`|||${component}`);

            for (let sub of subs) {
                console.log(`||||||${sub}`);
            }
        }
    }
}

systemComponents(["SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security"
]);