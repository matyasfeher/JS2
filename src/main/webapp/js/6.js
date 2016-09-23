var lis = document.getElementsByTagName("<li>");
var length = lis.length;
console.log(length);

colorList();

function colorList() {
    for (var i = 0; i < length; i++) {
        if (n % 2 === 0) {
            lis[i].style.backgroundColor = "red";
        }
        else {
            lis[i].style.backgroundColor = "blue";
        }
    }
}
;


for (var i = 0; i < length; i++) {
    changeFont(lis[i]);
}

function changeFont(listElement) {


    listElement.onmouseover = function () {
        listElement.style.fontSize = "xx-large";
    };

    listElement.onmouseleave = function () {
        listElement.style.fontSize = "medium";
    };

}
;