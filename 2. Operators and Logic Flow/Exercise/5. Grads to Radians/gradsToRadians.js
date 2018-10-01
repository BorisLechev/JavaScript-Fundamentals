function gradesToDegrees(number) {
    if (number >= 0 && number < 400) {
        console.log(number * 0.9);
    } else if (number >= 400) {
        console.log((number * 0.9) % 360);
    } else {
        console.log(360 + number * 0.9 % 360);
    }
}

gradesToDegrees(100);
gradesToDegrees(400);
gradesToDegrees(850);
gradesToDegrees(-50);