class Monkey extends Animal{
    info(){
        return `${this.name} is a monkey. Because of this reasons he was jump of everwhere!!!`
    };
};

let monkey = new Monkey("Hasan",8,"black",2)

console.log(monkey.info())