const writeButton = window.document.querySelector("button.write");

function handleButton(){
    window.location.href = "write.html";
}

writeButton.addEventListener("click", handleButton);