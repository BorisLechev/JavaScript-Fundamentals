function ticketScan(text, infoToPrint) {
    const passengerNamePattern = / [A-Z][a-zA-Z]*\-[A-Z][a-zA-Z]*(.-[A-Z][a-zA-Z]*)? /g;
    const airportPattern = / ([A-Z]{3})\/([A-Z]{3}) /g;
    const flightNumberPattern = / [A-Z]{1,3}\d{1,5} /g;
    const companyPattern = /- ([A-Z][a-zA-Z]*\*[A-Z][a-z]*) /g;

    let name = text.match(passengerNamePattern)[0].trim().replace("-", " ");
    name = name.replace("-", " ");
    const flightNumber = text.match(flightNumberPattern)[0].trim();
    const airports = text.match(airportPattern)[0].trim();
    const [fromAirport, toAirport] = airports.split("/");
    let company = text.match(companyPattern)[0].trim().replace("*", " ");
    company = company.replace("- ", "");

    if (infoToPrint === "name") {
        console.log(`Mr/Ms, ${name}, have a nice flight!`);
    } else if (infoToPrint === "flight") {
        console.log(`Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`);
    } else if (infoToPrint === "company") {
        console.log(`Have a nice flight with ${company}.`);
    } else if (infoToPrint === "all") {
        console.log(`Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`);
    }
}

ticketScan('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all');
ticketScan(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'flight');
ticketScan('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'name');