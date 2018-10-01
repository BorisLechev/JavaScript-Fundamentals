function calendar([day, month, year]) {
let date=new Date(year,month-1,day);
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let monthSize = daysInMonth(date);

    let html = "<table>\n";
    html += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";

    // Print days of the previous month
    let week = 0;
    let firstDay = new Date(year, month - 1, 1);
    let dayOfWeek = date.getDay();

    if (dayOfWeek > 0) {
        html += `  <tr>`;
    }

    for (let i = 1; i <= dayOfWeek; i++) {
        html += `<td class="prev-month">` + (date.getDate() + i) + "</td>";
        week++;
    }

    // Print days in current month
    let daysInCurrentMonth = daysInMonth[month];

    for (let i = 1; i <= daysInCurrentMonth; i++) {
        if (week === 0) {
            html += `  <tr>`;
        }

        if (day === i) {
            html += `<td class="today">` + i + "</td>";
        } else {
            html += `<td>` + i + "</td>";
        }

        week++;

        if (week === 7) {
            html += '</tr>\n';
            week = 0;
        }
    }

    // Print days in next month
    for (let i = 1; week !== 0; i++) {
        html += '<td class="next-month">' + i + '</td>';

        week++;

        if (week === 7) {
            html += '</tr>\n';
            week = 0;
        }
    }


    html += '</table>';
    return html;

    // function daysInMonth(date) {
    //     return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    // }
}