function fromJSONToHTMLTable(input) {
    let string = JSON.parse(input);
    let output = "<table>\n";

    let replaceSpecialCharacters = ((text) => {
        let replace = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return text.replace(/["&<>']/g, x => replace[x]);
    });

    output += "   <tr>";

    for (let key of Object.keys(string[0])) {
        output += `<th>${key}</th>`;
    }

    output += "</tr>\n";

    for (let obj of string) {
        output += "   <tr>";

        for (let key of Object.keys(obj)) {
            if (+obj[key]) {
                output += `<td>${+obj[key]}</td>`;
            } else {
                output += `<td>${replaceSpecialCharacters(obj[key])}</td>`;
            }
        }

        output += "</tr>\n";
    }

    output += "</table>";

    console.log(output);
}

fromJSONToHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');