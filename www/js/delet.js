function getUrlQuery() {
    var query = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { query[key] = value; });
    return query;
}

window.localStorage.removeItem(`${getUrlQuery().id}`);
window.location.href = "./index.html";