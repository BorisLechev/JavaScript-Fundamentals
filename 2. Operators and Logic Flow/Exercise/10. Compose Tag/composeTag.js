function composeTag([locationOfTheFile, alternateText]) {
    console.log(`<img src="${locationOfTheFile}" alt="${alternateText}">`);
}

composeTag(['smiley.gif', 'Smiley Face']);