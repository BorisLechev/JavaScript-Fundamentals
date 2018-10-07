function emailValidation(mail) {
    let mailPattern = /^[a-zA-Z\d]+@[a-z]+.[a-z]+$/;

    return mailPattern.test(mail) ? "Valid" : "Invalid";
}

emailValidation('valid@email.bg');
emailValidation('invalid@emai1.bg');