window.onload = function () {
    buildTable();

};
function buildTable() {
    var persons = [person = {fname: "Matyas", lname: "Feher", phone: "123456789", email: "something@something.dk"}, person = {fname: "Balint", lname: "Gergely", phone: "987654321", email: "aha@persze.dk"}, person = {fname: "Mark", lname: "Herczegfalvy", phone: "123456789789", email: "persze@aha.dk"}];
    var tbody = document.getElementById("people");
    persons.forEach(function (person) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>" + person.fname + "</td>" + "<td>" + person.lname + "</td>"+"<td>" + person.phone + "</td>" + "<td>" + person.email + "</td>";
        tbody.appendChild(row);

    });
}