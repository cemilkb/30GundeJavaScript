let date = new Date;
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();

hour<10 ? hour = "0" + hour : hour = hour;
minute<10 ? minute = "0" + minute : minute = minute;

let one =`${year}-${month}-${day}  ${hour}:${minute}`;

console.log(one);