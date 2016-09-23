window.onload = function () {
    changeBackground();

};
function changeBackground() {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "yellow";
    }
}
;
