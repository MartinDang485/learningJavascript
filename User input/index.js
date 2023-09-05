//How to accept user input

//Easy way with window prompt
//let username = window.prompt("What is your name?");  //window.prompt = opens window for user input
//console.log(username);


//With html textbox
let username;
document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);

    document.getElementById("myLabel").innerHTML = username;
}