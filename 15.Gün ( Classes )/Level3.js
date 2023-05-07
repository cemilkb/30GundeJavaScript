/* Q1
todo: () */

class statistics2 {
    constructor(arr) {
        this.arr = arr;
    }
    count() { return this.arr.length };
    sort() { return this.arr.sort((a, b) => a - b) };
    min() { return this.sort()[0] };
    max() { return this.sort()[this.count() - 1] };
    range() { return this.max() - this.min() };
    mean() {
        let sum = this.arr.reduce((a, b) => a + b, 0);
        return Math.ceil(sum / this.count());
    };
    median() {
        if (this.count % 2 != 0) {
            return this.arr[Math.floor(this.count() / 2)]
        }
    };
    mode() {
        let a = new Set(this.arr);
        a = [...a];
        let obj = { mode: "", count: 0 }
        for (let number of a) {
            let pattern = number;
            let flag = "g";
            let regEx = new RegExp(pattern, flag);
            let str = this.arr.join(",");
            let length = str.match(regEx).length;
            if (length > obj.count) {
                obj.mode = number;
                obj.count = length;
            }
        }
        return obj;
    };
    var() {
        let a = this.arr.map(e => (e - this.mean()) ** 2);
        let sum = a.reduce((a, b) => a + b, 0);
        return sum / this.count()
    };
    std() { return Math.sqrt(this.var()) };
    sum() { return this.arr.reduce((a, b) => a + b, 0) }
    freqDist() {
        let a = new Set(this.arr);
        a = [...a];
        let arr = Array();
        for (let number of a) {
            let pattern = number;
            let flag = "g";
            let regEx = new RegExp(pattern, flag);
            let str = this.arr.join(",");
            let length = str.match(regEx).length;
            let freqList = `(${(length / this.count()) * 100}.0, ${number})`;
            arr.push(freqList)
        }
        return arr;
    }

}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

let statistics = new statistics2(ages)



console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean:', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ', statistics.freqDist())  // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

/* Q2
todo: () */


class PersonAccount {
    constructor(name, surname) {
        this.name = name,
            this.surname = surname,
            this.income = [],
            this.expenses = []
    };
    totalIncome() { return this.income.reduce((a, b) => a + b, 0) };;
    totalExpenses() { return this.expenses.reduce((a, b) => a + b, 0) };
    accounBalance() { return this.totalIncome() - this.totalExpenses() };
    accountInfo() {
        return `This account belong to ${this.name} ${this.surname}. 
    This account Total income: ${this.totalIncome()} 
    Total expenses: ${this.totalExpenses()} and 
    Account balance is: ${this.accounBalance()}`
    };
    addIncome(a) { this.income.push(a) };
    addExpense(a) { this.expenses.push(a) }


}

let cemil = new PersonAccount("Cemil", "Köybaşı");
cemil.addIncome(23)
cemil.addIncome(123)
cemil.addExpense(3)
cemil.addExpense(33)
console.log(cemil.accountInfo())