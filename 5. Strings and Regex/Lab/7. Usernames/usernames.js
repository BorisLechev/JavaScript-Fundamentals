function mail(arrayOfMails) {
    let array = [];

    for (let mail of arrayOfMails) {
        let splittedInput = mail.split("@");
        let username = splittedInput[0] + ".";

        splittedInput[1]
            .split(".")
            .forEach(x => username += x[0]);

        array.push(username);
    }

    console.log(array.join(", "));
}

mail(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);