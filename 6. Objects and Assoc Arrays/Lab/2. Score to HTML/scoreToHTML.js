function scoreToHTML(input) {
    let html = `<table>\n`;
    html += `  <tr><th>name</th><th>score</th></tr>\n`;

    let parse = JSON.parse(input);

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

    for (let parseElement of parse) {
        html += `  <tr><td>${replaceSpecialCharacters(parseElement["name"])}</td><td>${parseElement["score"]}</td></tr>\n`;
    }

    html += "</table>";

    console.log(html);
}

scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');