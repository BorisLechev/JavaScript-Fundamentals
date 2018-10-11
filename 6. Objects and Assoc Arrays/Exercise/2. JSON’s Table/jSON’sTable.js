function table(input) {
    let html = "<table>\n";

    for (let i = 0; i < input.length; i++) {
        let currentInput = JSON.parse(input[i]);

       html+="\t<tr>\n";

       html+=`		<td>${currentInput.name}</td>\n`;
       html+=`		<td>${currentInput.position}</td>\n`;
       html+=`		<td>${currentInput.salary}</td>\n`;

        html+="\t<tr>\n";
    }

    html+="</table>";

    console.log(html);
}

table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'
]);