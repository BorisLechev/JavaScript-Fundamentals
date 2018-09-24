function triangleArea(firstSide, secondSide, thirdSide) {
    let p = (firstSide + secondSide + thirdSide) / 2;

    console.log(Math.sqrt(p * (p - firstSide) * (p - secondSide) * (p - thirdSide)).toFixed(10));
}

triangleArea(2, 3.5, 4);