function capitalizeTheWords(input) {
    console.log(input
        .toLowerCase()
        .split(" ")
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(" "));
}

capitalizeTheWords("Capitalize these words");
capitalizeTheWords("Was that Easy? tRY thIs onE for SiZe!");