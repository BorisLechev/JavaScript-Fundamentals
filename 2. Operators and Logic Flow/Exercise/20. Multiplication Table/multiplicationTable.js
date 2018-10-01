function multiplicationTable(number) {
    let table = "<table border = '1'>";
    let header = "<tr><th>x</th>";

    for (let i = 1; i <= number; i++) {
        header += "<th>" + i + "</th>";
    }

    let tableBody = "";

    for (let i = 1; i <= number; i++) {
        tableBody += "<tr><th>" + i + "</th>";

        for (let j = 1; j <= number; j++) {
            tableBody += "<td>" + (i * j) + "</td>";
        }

        tableBody += "</tr>";
    }

    header += "<tr>";
    table += header;
    table += tableBody;
    table += "</table>";

    console.log(table);
}

multiplicationTable(5);