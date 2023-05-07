/* Q1
todo: (Create a personAccount) */

function personAccount() {
    let name = "Cemil";
    let surname = "Köybaşı";
    let incomes = [];
    let expenses = [];

    function addIncomes(a) {
        incomes.push(a);
    };

    function addExpenses(a,b) {
        expenses.push({name:a, value:b});
    };

    function totalIncome() { return incomes.reduce((a, b) => a + b, 0) }

    function totalExpenses() { return expenses.reduce((a, b) => a + b.value, 0) }

    function balance(){return totalIncome()-totalExpenses()}

    function accountInfo() { return `Incomes: ${totalIncome()}  Expenses:${totalExpenses()}  Balance: ${balance()}`; };

    return {
        name,
        surname,
        incomes,
        expenses,
        addIncomes,
        addExpenses,
        totalIncome,
        totalExpenses,
        balance,
        accountInfo
    }

}

let account = personAccount()

account.addIncomes(543);
account.addIncomes(543);
account.addExpenses("ananas",43);
account.addExpenses("badılcan",43);
console.log(account.accountInfo())
console.log(account.balance())
console.log(account.name)
console.log(account.surname)
console.log(account.incomes.join(","))
console.log(account.expenses)






