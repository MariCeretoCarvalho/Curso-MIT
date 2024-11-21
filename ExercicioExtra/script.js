document.addEventListener("DOMContentLoaded", function () {
    var colorButton = document.getElementById("colorButton");
    var container = document.querySelector(".container");
    colorButton.addEventListener("click", function () {
    var randomColor = getRandomColor();
    container.style.backgroundColor = randomColor;
    });
    function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    });