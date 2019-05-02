var json = [
    {
        "name": "Jane Doe",
        "sex": "f",
        "born": "1876",
        "died": "1956",
        "father": "Petrus de Milliano",
        "mother": "Sophia van Damme"
    },
    {
        "name": "Jane Ramirez",
        "sex": "f",
        "born": "1882",
        "died": "1953",
        "father": "King Arthur",
        "mother": "Gretchen Smith"
    },
    {
        "name": "John Doe",
        "sex": "m",
        "born": "1923",
        "died": "2010",
        "father": "Billy Ray Cyrus",
        "mother": "Victoria Eastwood"
    },
    {
        "name": "Henry Smith",
        "sex": "m",
        "born": "1563",
        "died": "1601",
        "father": "Jim Smith",
        "mother": "Betsy Ross"
    },
    {
        "name": "Jill Pill",
        "sex": "f",
        "born": "1378",
        "died": "1478",
        "father": "Warren Pill",
        "mother": "Sadie Pill"
    }
];

function printJson()
{
    var searchedName = document.getElementById("name").value.trim().toLowerCase();
    var output = document.getElementById("output");

    output.innerHTML = "";

    for (var i = 0; i < json.length; i++) {
        var fullName = json[i].name.trim().toLowerCase();
        var firstName = fullName.split(' ')[0];
        var lastName = fullName.split(' ')[1];


        if (searchedName === fullName || searchedName === firstName || searchedName === lastName) {
            output.innerHTML +=
                "<p>Name: " + json[i].name +
                "<br>Sex: " + json[i].sex +
                "<br>Born: "+ json[i].born +
                "<br>Died: "+ json[i].died +
                "<br>Father: "+ json[i].father +
                "<br>Mother: "+ json[i].mother
            "</p><br>";
        }
    }

    if(output.innerHTML === "") {
        output.innerHTML += "No person found";
    }

}