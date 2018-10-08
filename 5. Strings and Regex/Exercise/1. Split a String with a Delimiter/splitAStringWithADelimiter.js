function splitAString(input, delimiter) {
    console.log(input
        .split(delimiter)
        .join("\n"));
}

splitAString("One-Two-Three-Four-Five",
    "-"
);

splitAString("http://platform.softuni.bg",
    "."
);