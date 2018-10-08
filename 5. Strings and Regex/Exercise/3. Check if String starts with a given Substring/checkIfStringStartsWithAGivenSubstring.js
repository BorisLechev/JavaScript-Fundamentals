function ifStringStartsWithGivenSubstring(mainString, substring) {
    console.log(mainString.endsWith(substring) ? "true" : "false");
}

ifStringStartsWithGivenSubstring("How have you been?", "how");
ifStringStartsWithGivenSubstring("The quick brown fox…", "The quick brown fox…");
ifStringStartsWithGivenSubstring("Marketing Fundamentals, starting 19/10/2016", "Marketing Fundamentals, sta");