let age = 17; //numbers
age = age + 1;

let firstName = "Martin"; //strings
let student = true; //boolean

console.log("Hello",firstName);
console.log("You are",age, "years old");
console.log("Enrolled:",student);

//Change html element by targeting id
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " Years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;