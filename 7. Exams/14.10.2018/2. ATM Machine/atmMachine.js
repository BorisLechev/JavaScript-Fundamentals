function solve(input) {
    let atm = [];

    input.forEach(row => {
        if (row.length > 2) {
            console.log(insertMoneyIntoATM(row));
        } else if (row.length === 2) {
            console.log(withdrawMoneyFromATM(row));
        } else if (row.length === 1) {
            console.log(reportTheCountOfBanknotes(row[0]));
        }
    });

    function insertMoneyIntoATM(incomeMoney) {
        atm.push(...incomeMoney);
        let insertedMoney = incomeMoney.reduce((a, b) => a + b);
        let currentBalance = atm.reduce((a, b) => a + b);

        return `Service Report: ${insertedMoney}$ inserted. Current balance: ${currentBalance}$.`;
    }

    function withdrawMoneyFromATM(data) {
        let [currentBalance, moneyToWithdraw] = data;
        let moneyInATM = atm.length > 0 ? atm.reduce((a, b) => a + b) : 0;

        if (currentBalance < moneyToWithdraw) {
            return `Not enough money in your account. Account balance: ${currentBalance}$.`;
        } else if (moneyInATM < moneyToWithdraw) {
            return `ATM machine is out of order!`;
        } else {
            withdraw(moneyToWithdraw);
            return `You get ${moneyToWithdraw}$. Account balance: ${currentBalance-moneyToWithdraw}$. Thank you!`;
        }
    }

    function withdraw(moneyToWithdraw) {
        atm.sort((a, b) => b - a);

        while (moneyToWithdraw !== 0) {
            let index = 0;

            for (let i = 0; i < atm.length; i++) {
                if (atm[i] <= moneyToWithdraw) {
                    moneyToWithdraw -= atm[i];
                    index = i;
                    break;
                }
            }

            atm.splice(index, 1);
        }
    }

    function reportTheCountOfBanknotes(value) {
        let banknoteCount = atm.filter(b => b === value).length;

        return `Service Report: Banknotes from ${value}$: ${banknoteCount}.`;
    }
}

solve([
    [20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
]);