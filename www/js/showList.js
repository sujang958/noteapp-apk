const delKey = window.document.querySelector("button.del");
var lsLen = window.localStorage.length;

delKey.addEventListener("click", () => {
    window.localStorage.clear();
    window.location.href = "change.html";
})

function checkTit(){
    if(!location.href.split("#")[1]){
        for(var i = 0; i < lsLen; i++){
            var des = window.localStorage.getItem(`${i+1}`);
            var des = window.JSON.parse(des)
            var title = des.title;
            var des = des.des;
            var list = window.document.createElement("a");
            list.innerText = title;
            list.href = `view.html?id=${i+1}`
            window.document.body.appendChild(list);
            var nl = window.document.createElement("div");
            nl.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            window.document.body.appendChild(nl)
        }
    }
}

function init(){
    checkTit()
}

init();