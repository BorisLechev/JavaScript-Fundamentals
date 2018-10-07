function replace(input) {
    let username = input.shift();
    let mail = input.shift();
    let phoneNumber = input.shift();
    let form = input;

    for (let line of form) {
        console.log(line.replace(/<![a-zA-Z]+!>/g, username).replace(/<@[a-zA-Z]+@>/g, mail).replace(/<\+[a-zA-Z]+\+>/g, phoneNumber));
    }
}

replace(['Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']]);