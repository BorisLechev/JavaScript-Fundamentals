function solve(w, h, W, H) {
    let areaOfTheBigRectangle = W * H;
    let areaOfTheSmallRectangle = w * h;
    let commonArea = Math.min(w, W) * Math.min(h, H);

    let sumArea = areaOfTheBigRectangle + areaOfTheSmallRectangle - commonArea;

    console.log(sumArea);
}

solve(2, 4, 5, 3);
solve(13, 2, 5, 8);