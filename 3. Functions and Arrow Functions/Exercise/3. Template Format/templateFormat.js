function printTemplate(input) {
    let xmlCode = function xmlCode() {
        let output = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
        output += "<quiz>\n";

        for (let i = 0; i < input.length; i += 2) {
            let question = input[i];
            let answer = input[i + 1];

            output += "  <question>\n";
            output += `    ${question}\n`;
            output += "  </question>\n";
            output += "   <answer>\n";
            output += `    ${answer}\n`;
            output += `  </answer>\n`;
        }

        output += "</quiz>";

        return output;
    };

    console.log(xmlCode());
}

printTemplate(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);
printTemplate(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);