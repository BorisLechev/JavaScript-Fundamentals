function capitalizeTheWords(input) {
    let splittedInput = input.toLowerCase().split(" ");

    for (let i = 0; i < splittedInput.length; i++) {
        splittedInput[i] = splittedInput[i][0].toUpperCase() + splittedInput[i].substring(1);
    }

    console.log(splittedInput.join(" "));
}

capitalizeTheWords("Capitalize these words");
capitalizeTheWords("Was that Easy? tRY thIs onE for SiZe!");