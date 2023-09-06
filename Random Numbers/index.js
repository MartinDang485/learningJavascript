//let x = Math.round(Math.random() * 6) + 1;

//console.log(x);

let dice1;
let dice2;
let dice3;

document.getElementById("button").onclick = function() {
    dice1 = Math.round(Math.random() * 6 + 1);
    dice2 = Math.round(Math.random() * 6 + 1);
    dice3 = Math.round(Math.random() * 6 + 1);
    document.getElementById("x").innerHTML = dice1;
    document.getElementById("y").innerHTML = dice2;
    document.getElementById("z").innerHTML = dice3;
}