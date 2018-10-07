function employeeData(data) {
    let pattern = /^([A-Z][a-zA-Z]*)\s-\s([1-9]\d*)\s-\s([a-zA-Z\d-\s]+)$/;

    for (let employee of data) {
        let match = pattern.exec(employee);

        if (match) {
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
    }
}

employeeData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']);
employeeData(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader']);