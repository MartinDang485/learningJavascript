let userName = "Martin Dang";

//x.length Stores length of string
let nameLength = userName.length
console.log(nameLength);

//x.charAt Returns character at given index
let characterAt = userName.charAt(5);
console.log(characterAt);

//x.indexOf returns index of given letter
let indexValue = userName.indexOf("i");
console.log(indexValue);

//x.lastIndexOf returns last index of given letter
let string = "apple";
console.log(string.lastIndexOf("p"));

//x.trim gets rid of any empty spaces
string = "  apple   "
console.log(string);
string = string.trim(string);
console.log(string);

//x.replaceAll replaces all characters with a given one
let number = "123-456-789";
number = number.replaceAll("-", "x");
console.log(number);
