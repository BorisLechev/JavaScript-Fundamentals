function sortArrayBy2Criteria(array) {
    console.log(array.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n"));
}

sortArrayBy2Criteria(['alpha',
    'beta',
    'gamma']);