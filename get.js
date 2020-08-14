let ajax = new XMLHttpRequest();
ajax.open('GET', 'test.eko.eu/GET', true);
ajax.send();

function addApi() {
    ajax.onreadystatechange = function() {
        let divJS = document.getElementById("divHtml");
        divJS.innerHTML = ajax.response;
    }
}