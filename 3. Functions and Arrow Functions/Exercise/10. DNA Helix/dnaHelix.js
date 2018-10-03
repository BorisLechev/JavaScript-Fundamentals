function dnaHelix(number) {
    let sequence = "ATCGTTAGGG";

    let star = [2, 1, 0, 1];

    for (let i = 0; i < sequence.length; i += 2) {
        console.log("*".repeat(star[0]) + `${sequence[i]}` + "-".repeat() **);
    }
}

dnaHelix(4);