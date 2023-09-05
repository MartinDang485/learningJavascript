//userinput takes string data type

let age = window.prompt("How old are you?");

console.log(typeof age);//Get data type of a variable
age = Number(age); //Number constrcutor to convert variable into number
console.log(typeof age);
age += 1;
console.log("Happy birthday! You are", age, "years old");

let x;
let y;
let z;

x = Number("3.14"); //converts string to numner
console.log(typeof x,x);

y = String(3.14); //converts number to string
console.log(typeof y, y);

z = Boolean("pizza21"); //String to boolean, empty string=false
console.log(typeof z, z);

