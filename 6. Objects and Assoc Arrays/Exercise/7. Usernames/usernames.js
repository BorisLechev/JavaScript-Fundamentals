function printSortedUsernames(input) {
    let set = new Set();

    input.forEach(name => set.add(name));

    set = [...[...set]]
        .sort((a, b) => a.length - b.length || a.localeCompare(b));

    set.forEach(output => console.log(output));
}

printSortedUsernames(["Ashton",
    "Kutcher",
    "Ariel",
    "Lilly",
    "Keyden",
    "Aizen",
    "Billy",
    "Braston"
]);