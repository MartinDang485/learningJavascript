let user;
document.getElementById("myButton").onclick = function() {
    user = document.getElementById("userInput").value;
    console.log(user);

    document.getElementById("label").innerHTML = user;
}