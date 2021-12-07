// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let textElement = document.getElementById("text");
    textElement.innerHTML = "This is really cool!";
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered")