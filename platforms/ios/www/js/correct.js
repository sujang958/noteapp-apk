var exitButton = window.document.querySelector("button.exit");
var form = window.document.querySelector("form");
var titleInput = form.querySelector("input.title");
var desInput = form.querySelector("textarea");
var submitButton = form.querySelector("button.submitbutton")
var id = getUrlQuery().id;
var ls = window.JSON.parse(window.localStorage.getItem(`${id}`));
var title = ls.title;
var des = ls.des;

function addslashes(string) {
    return string.replace(/\\/g, '\\\\').
        replace(/\u0008/g, '\\b').
        replace(/\t/g, '\\t').
        replace(/\n/g, '\\n').
        replace(/\f/g, '\\f').
        replace(/\r/g, '\\r').
        replace(/'/g, '\\\'').
        replace(/"/g, '\\"');
}

function getUrlQuery() {
    var query = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { query[key] = value; });
    return query;
}

function handleSubmit(event){
    event.preventDefault();
    var json = `{ "title" : "${addslashes(titleInput.value)}", "des" : "${addslashes(desInput.value)}" }`;
    window.localStorage.setItem(id, json);
    window.location.href = "index.html";
}

function init(){
    titleInput.value = `${title}`;
    desInput.innerText = `${des}`;
    form.addEventListener("submit", handleSubmit);
    exitButton.addEventListener("click", () => {
        location.href = "./index.html";
    })
}

init();
