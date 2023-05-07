const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]



/* Q1
todo: (Iterate through the users array and get all the keys of the object using destructuring) */
let arr = Array(users.length),
i = 0;

for(let name of users){
    arr[i] = name.name;
    i++
}
let a = arr.join(",");


/* Q2
todo: (Find the persons who have less than two skills)*/

function lessThan2(){
    let get = users.filter(e => e["skills"].length< 2);
    let names = []
    for(let i= 0; i<get.length;i++){
         names.push(get[i].name);
    }
    return names.join(",");
};




/*



*/