const titleInput = window.document.querySelector("input.title");
const desInput = window.document.querySelector("textarea");
const form = window.document.querySelector("form");
const lsLen = window.localStorage.length+1; //주석
const exitBt = window.document.querySelector("button.exit");
var count = {count: 0};

exitBt.addEventListener("click", () => {
    location.href = "change.html";
})

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

function saveNote(title, des, count){
    if(count.count == 0){
        window.localStorage.setItem(`${lsLen}`, `{"title": "${title}", "des": "${des}"}`);
        count.count += 1;
    }else{
        localStorage.setItem(`${lsLen}`, `{"title": "${title}", "des": "${des}"}`);
    }
}

function handleSubmit(event){
    event.preventDefault();
    saveNote(addslashes(titleInput.value), addslashes(desInput.value), count);
}

function askNote(){
    form.addEventListener("submit", handleSubmit);
}

function init(){
    askNote();
}

init();
