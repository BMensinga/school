document.addEventListener("DOMContentLoaded", function() {
    // Array medewerkers
    let medewerkers = []

    // Objects medewerkers
    let medewerkerOne = {Firstname: 'Aaron', Lastname: 'Hank'};
    let medewerkerTwo = {Firstname: 'Thomas', Lastname: 'Bracken'};
    let medewerkerThree = {Firstname: 'Marlon', Lastname: 'Brecht'};
    let medewerkerFour = {Firstname: 'George', Lastname: 'Elliot'};
    let medewerkerFive = {Firstname: 'Steven', Lastname: 'Erikson'};

    // Push medewerkers
    medewerkers.push(medewerkerOne);
    medewerkers.push(medewerkerTwo);
    medewerkers.push(medewerkerThree);
    medewerkers.push(medewerkerFour);
    medewerkers.push(medewerkerFive);

    // ForLoop medewerkers
    for (let i = 0; i < medewerkers.length; i++) {
        console.log(medewerkers[i]);
    }

    // Print medewerker in HTML
    document.querySelector("#first").innerHTML = medewerkerOne.Firstname + " " + medewerkerOne.Lastname;
});