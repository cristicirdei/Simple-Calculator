var width = window.screen.width;
var height = window.screen.height;
var mess = "<h2>Width:</h2>" + "<p class=\"stats\">" + width + "</p>";
mess += "<h2>Height:</h2>" + "<p class=\"stats\">" + height + "</p>";

var doc = document.getElementById("newContent").innerHTML = mess;

$(function() {
    $window.on('scroll', function() {
    if(window.scrollTop() > 100) {
        document.body.style.backgroundColor = "black";
    } 
    else {
        document.body.style.backgroundColor = "white";
    }
});
});