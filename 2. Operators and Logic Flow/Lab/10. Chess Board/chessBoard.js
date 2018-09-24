function colorfulNumbers(number) {
    console.log("<div class='chessboard'>");

    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0){
            console.log(" <div>");
            console.log("  <span class = \"white\"></span>");
            console.log("  <span class = \"black\"></span>");
            console.log("  <span class = \"white\"></span>");
            console.log(" </div>");
        }

        else {
            console.log(" <div>");
            console.log("  <span class = \"black\"></span>");
            console.log("  <span class = \"white\"></span>");
            console.log("  <span class = \"black\"></span>");
            console.log(" </div>");
        }
    }

    console.log("</div>");
}


colorfulNumbers(10);