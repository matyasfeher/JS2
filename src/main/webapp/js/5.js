var three = document.getElementById("table2Body");
var bottom = document.getElementById("button");
var tablebody2 = document.getElementById("table2Body");
bottom.onclick = function () {
    var rowtoTable2 = document.createElement("tr");
    var name = document.getElementById("namefield").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    rowtoTable2.innerHTML = "<td>" + name + "</td>";
    rowtoTable2.innerHTML += "<td>" + gender + "</td>";
    tablebody2.appendChild(rowtoTable2);
};
