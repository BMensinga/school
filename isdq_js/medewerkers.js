
//Waiting for HTML code to be loaded.
document.addEventListener("DOMContentLoaded", function() {

function Medewerker(firstName, lastName, age, gender ,eye) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.eye = eye;
}

var medewerkers = [
    new Medewerker ('Aaron', 'Hank', 51, 'male', 'blue'),
    new Medewerker ('Thomas', 'Bracken', 37, 'male', 'brown'),
    new Medewerker ('Marlon', 'Brecht', 29, 'female', 'blue'),
    new Medewerker ('George', 'Elliot', 25, 'male', 'green'),
    new Medewerker ('Steven', 'Erikson', 39, 'male', 'green'),
];

document.getElementById("first").innerHTML = medewerkers[0].firstName + " " + medewerkers[0].lastName;
});