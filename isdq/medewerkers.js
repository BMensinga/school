document.addEventListener("DOMContentLoaded", function() {
    
// Create an empty array for medewerkers.
const medewerkers = [];

// Create 5 medewerker objects.
let medewerker1 = {firstName: 'Aaron', lastName: 'Hank'};
let medewerker2 = {firstName: 'Thomas', lastName: 'Bracken'};
let medewerker3 = {firstName: 'Marlon', lastName: 'Brecht'};
let medewerker4 = {firstName: 'George', lastName: 'Elliot'};
let medewerker5 = {firstName: 'Steven', lastName: 'Erikson'};

// Push all medewerkers objects into medewekers array.
for (let i = 1; i <= 5; i++) {
    medewerkers.push(eval("medewerker" + i));
}

// Return the full object in the array if it exists.
function showFullObject(array, key) {
    if (array.length > key) {
        for (let i = 0; i < array.length; i++) {
            if (key === i) {
                let object = array[i];
                return `Medewerker is ${object.firstName} ${object.lastName}`;
            }
        }
    } else {
        let selectedMederwerker = key;
        selectedMederwerker++;
        return `Er bestaat geen ${selectedMederwerker}e medewerker.`;
    }
}

// Print first medewerker in the HTML file.
document.querySelector("#first").innerHTML = showFullObject(medewerkers, 4);
});
