function radioCrystals(input) {
    let cut=(x)=>x/4;
    let lap=(x)=>x*0.8;
    let grind=(x)=>x-20;
    let etch=(x)=>x-2;
    let xRay=(x)=>x+1;
    let transportAndWash=(x)=>parseInt(x);

    let targetThickness=+input[0];

    for (let i = 1; i < input.length; i++) {
        let thickness=+input[i];

        console.log(`Processing chunk ${thickness} microns`);
    }


}