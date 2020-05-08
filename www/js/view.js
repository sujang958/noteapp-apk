function getUrlQuery() {
    var query = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { query[key] = value; });
    return query;
}

var id = getUrlQuery().id;
var ls = window.JSON.parse(localStorage.getItem(`${id}`));
var title = ls.title;
var des = ls.des;

var titleDOM = window.document.createElement("div")
titleDOM.innerText = title;
var desDOM = window.document.createElement("div")
desDOM.innerText = des;
var space = window.document.createElement("br")
var update = window.document.createElement("button")
update.addEventListener("click", () => {
    window.location.href = `./correct.html?id=${id}`
})
update.innerText = "수정"
var delet = window.document.createElement("button")
delet.addEventListener("click", () => {
    window.location.href = `./delet.html?id=${id}`
})
delet.innerText = "삭제"
var line = window.document.createElement("p")
line.className = "line"

window.document.body.appendChild(update);
window.document.body.appendChild(delet);
window.document.body.appendChild(space);
window.document.body.appendChild(line);
window.document.body.appendChild(space);
window.document.body.appendChild(titleDOM);
window.document.body.appendChild(line);
window.document.body.appendChild(desDOM);


var exitKey = window.document.querySelector("button.exit");
exitKey.addEventListener("click", () => {
    location.href = 'change.html'
})