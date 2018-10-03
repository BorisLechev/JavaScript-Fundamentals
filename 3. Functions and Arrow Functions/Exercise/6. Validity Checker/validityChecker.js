function validityChecker([x1, y1, x2, y2]) {
    let t1 = getDistance(x1, y1);
    let t2 = getDistance(x2, y2);
    let t1t2 = getDistance(x2 - x1, y2 - y1);

    printResult(t1, x1, y1, 0, 0);
    printResult(t2, x2, y2, 0, 0);
    printResult(t1t2, x1, y1, x2, y2);

    function printResult(num, x1, y1, x2, y2) {
        if (Number.isInteger(num)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    function getDistance(x, y) {
        return Math.sqrt(x ** 2 + y ** 2);
    }
}

validityChecker([3, 0, 0, 4]);