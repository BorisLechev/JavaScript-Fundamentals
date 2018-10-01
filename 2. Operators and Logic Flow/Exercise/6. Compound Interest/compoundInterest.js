function compoundInterest([principalSum, interestRate, compoundingPeriodInMonths, totalTimeSpanInYears]) {

    let compoundingPeriodInYear = 12 / compoundingPeriodInMonths;

    console.log((principalSum *
        Math.pow(1 + interestRate / (100 * compoundingPeriodInYear),
            compoundingPeriodInYear * totalTimeSpanInYears)).toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);