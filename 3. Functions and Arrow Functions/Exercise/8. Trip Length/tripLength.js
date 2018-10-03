function tripLength(input) {
    let distanceBetween1and2 = getDistance(input[0], input[1], input[2], input[3]);
    let distanceBetween1and3 = getDistance(input[0], input[1], input[4], input[5]);
    let distanceBetween2and3 = getDistance(input[2], input[3], input[4], input[5]);

    if (distanceBetween1and2 <= distanceBetween1and3 && distanceBetween1and3 >= distanceBetween2and3) {
        let a = distanceBetween1and2 + distanceBetween2and3;
        console.log(`1->2->3: ${a}`);
    } else if (distanceBetween1and2 <= distanceBetween2and3 && distanceBetween1and3 < distanceBetween2and3) {
        let b = distanceBetween1and3 + distanceBetween1and2;
        console.log(`2->1->3: ${b}`);
    } else {
        let c = distanceBetween2and3 + distanceBetween1and3;
        console.log(`1->3->2: ${c}`);
    }

    function getDistance(x1, y1, x2, y2) {
        let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    }
}

tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);
tripLength([0, 0, 2, 0, 4, 0]);