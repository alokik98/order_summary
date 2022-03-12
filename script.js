console.log("order");

const d = new Date();
console.log(d);

let getDate = document.getElementById("date");
let btn1 = document.getElementById("btn");
let getitemname = document.getElementById("itemname");
let getseller = document.getElementById("sellername");
let gettime = document.getElementById("time");

getDate.innerText = d.getDate() + '/' +(d.getMonth()+1) + '/' + d.getFullYear(); 
console.log(d.getFullYear());
console.log(d.getDate());
console.log(d.getMonth()+1);