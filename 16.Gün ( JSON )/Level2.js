/* Q1
todo: (Stringify the students object with only firstName, lastName and skills properties) */

let strChoice = JSON.stringify(student,["firstName", "lastName", "skills"],4);
console.log(strChoice);