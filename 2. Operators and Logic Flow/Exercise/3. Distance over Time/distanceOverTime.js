function findDistance([firstSpeed, secondSpeed, period]) {
    let firstDistance = (firstSpeed * 1000) * (period / 3600);
    let secondDistance = (secondSpeed * 1000) * (period / 3600);

    let finalDistance = Math.abs(firstDistance - secondDistance);

    console.log(finalDistance);
}

findDistance([0, 60, 3600]);
findDistance([11, 10, 120]);
findDistance([5, -5, 40]);