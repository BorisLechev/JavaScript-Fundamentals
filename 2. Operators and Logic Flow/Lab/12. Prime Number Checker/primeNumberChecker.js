function isPrime(number) {

    let prime = true;

    let sqrt = Math.sqrt(number);

    for (let i = 2; i <= sqrt; i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }

    return prime && (number > 1);
}

console.log(isPrime(10));