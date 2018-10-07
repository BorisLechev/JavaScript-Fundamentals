function solve(input) {
    console.log("<ul>");

    for (let inputElement of input) {
        for (let i = 0; i < inputElement.length; i++) {
            switch (inputElement[i]) {
                case"<":
                    inputElement = inputElement.replace(inputElement[i], "&lt;");
                    break;
                case">":
                    inputElement = inputElement.replace(inputElement[i], "&gt;");
                    break;
                case"&":
                    inputElement = inputElement.replace(inputElement[i], "&amp;");
                    break;
                case '"':
                    inputElement = inputElement.replace(inputElement[i], "&quot;");
                    break;
            }
        }

        console.log(`  <li>${inputElement}</li>`);
    }

    console.log("</ul>");
}

solve(['<b>unescaped text</b>', 'normal text']);
solve(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);