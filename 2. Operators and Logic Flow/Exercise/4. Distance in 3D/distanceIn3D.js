function calculateDistanceIn3DSpace([firstX, firstY, firstZ, secondX, secondY, secondZ]) {
    let distance = Math.sqrt((secondX - firstX) ** 2 + (secondY - firstY) ** 2 + (secondZ - firstZ) ** 2);

    console.log(distance);
}

calculateDistanceIn3DSpace([1, 1, 0, 5, 4, 0]);
calculateDistanceIn3DSpace([3.5, 0, 1, 0, 2, -1]);