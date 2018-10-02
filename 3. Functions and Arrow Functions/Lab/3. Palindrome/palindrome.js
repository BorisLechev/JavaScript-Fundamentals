function isPalindrome(input) {
    let reversedInput = input.split('').reverse().join('');

    if (input === reversedInput) {
        console.log("true");
    } else {
        console.log("false");
    }
}

isPalindrome("haha");
isPalindrome("racecar");
isPalindrome("unitinu");