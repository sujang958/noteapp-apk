var centerButton = document.querySelector("button#center");
var leftButton = document.querySelector("button#left");
var rightButton = document.querySelector("button#right");

centerButton.addEventListener("click", function(){
    document.body.className = "center"
})

leftButton.addEventListener("click", function(){
    document.body.className = "left"
})

rightButton.addEventListener("click", function(){
    document.body.className = "right"
})
