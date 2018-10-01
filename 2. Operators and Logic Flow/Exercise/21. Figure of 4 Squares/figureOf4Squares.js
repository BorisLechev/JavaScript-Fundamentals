function figureOfFourSqueres(number) {
    if (number === 2) {
        console.log("+++");
        return;
    }

    let dashesCount = number - 2;

    console.log(`+${"-".repeat(dashesCount)}+${"-".repeat(dashesCount)}+`);

    let pipesCount = number % 2 === 0 ? (number - 4) / 2 : (number - 3) / 2;

    for (let i = 0; i < pipesCount; i++) {
        console.log(`|${" ".repeat(dashesCount)}|${" ".repeat(dashesCount)}|`);
    }

    console.log(`+${"-".repeat(dashesCount)}+${"-".repeat(dashesCount)}+`);

    for (let i = 0; i < pipesCount; i++) {
        console.log(`|${" ".repeat(dashesCount)}|${" ".repeat(dashesCount)}|`);
    }

    console.log(`+${"-".repeat(dashesCount)}+${"-".repeat(dashesCount)}+`);
}

figureOfFourSqueres(4);
figureOfFourSqueres(7);