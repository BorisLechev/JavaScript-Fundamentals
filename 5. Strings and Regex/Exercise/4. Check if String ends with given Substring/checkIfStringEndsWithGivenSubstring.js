function ifStringEndsWithGivenSubstring(mainString, substring) {
    console.log(mainString.endsWith(substring) ? "true" : "false");
}

ifStringEndsWithGivenSubstring("This sentence ends with fun?", "fun?");
ifStringEndsWithGivenSubstring("This is Houston we have…", "We have…");
ifStringEndsWithGivenSubstring("The new iPhone has no headphones jack.", "o headphones jack.");