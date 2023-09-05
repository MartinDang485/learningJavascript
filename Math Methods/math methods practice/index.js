//round up and down
//take root
//take expo
//take abs

let x = 5.4;
x = Math.ceil(x);
console.log("x rounded up from 5.4 is", x);

x = 5.4;
x = Math.floor(x);
console.log("5.4 rounded down is", x);

x = 4;
x = Math.sqrt(x);
console.log("The square root of 4 is", x);

x = -4;
x = Math.abs(x);
console.log("The absolute value of -4 is", x);



//declare min and max and use them to compare which values are min and max
let a = 3;
let b = 6;
let c = -2;
let maximum = Math.max(a,b,c);
console.log("out of the digits",a,b,c,"The highest value is", maximum);
let minimum = Math.min(a,b,c);
console.log("Out of the digits", a,b,c,"The lowest digit is",minimum);



//what is the const for pi?
 v = Math.PI;
 console.log(v);