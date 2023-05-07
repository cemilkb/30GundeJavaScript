/* Q1
todo: (Person object) */

let personAccount = {
    firstname: "Cemil",
    lastname: "Köybaşı",
    incomes: [],
    expenses: [],
    addIncome(a) { this.incomes.push(a) },
    addExpense(a) { this.expenses.push(a)},
    totalIncome() { return this.incomes.reduce((a,b)=> a+b,0) },
    totalExpense() { return this.expenses.reduce((a,b)=> a+b,0) },
    accountBalance(){return this.totalIncome()-this.totalExpense()},
    accountInfo() {console.log(`This account owner is ${this.firstname} ${this.lastname}. He have ${this.totalIncome()} income and ${this.totalExpense()} expenses. He's account balance is ${this.accountBalance()}`) }

};

personAccount.addIncome(5);
personAccount.addIncome(123);
personAccount.addExpense(2);
personAccount.addExpense(234);

console.log(personAccount);
personAccount.accountInfo();


localStorage.setItem("account", JSON.stringify(personAccount))

console.log(JSON.parse(localStorage.account))