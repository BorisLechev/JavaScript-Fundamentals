function printTheLastDayOfPreviousMonth([date, month, year]) {
    let dateFormat = new Date(year, month - 1, 0);
    let lastDayOfPreviousMonth = dateFormat.getDate();

    console.log(lastDayOfPreviousMonth);
}

printTheLastDayOfPreviousMonth([17, 3, 2002]);
printTheLastDayOfPreviousMonth([13, 12, 2004]);