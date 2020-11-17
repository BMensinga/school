function Klant (voornaam, achternaam, leeftijd, woonplaats) {
    
    this.voornaam = voornaam;
    this.achternaam = achternaam;
    this.leeftijd = leeftijd;
    this.woonplaats = woonplaats;

};
// Create an array with 5 objects.
var klanten = [
    new Klant ('Tino', 'Joao',33, 'Den Haag' ),
    new Klant ('Antonio', 'Teca', 34, 'Den Haag'),
    new Klant ('Antonio', 'Frank' 35, 'Rijswijk'),
    new Klant ('Denilson', 'Coelho' 32, Rotterdam ),
    new Klant ('Giel', 'Deelen', 32, 'Delf'),
];

document.getElementById(klantVoornaam).innerHTML = klantArray[0].voornaam;
document.getElementById(klantAchternaam).innerHTML = klantArray[0].achternaam;
document.getElementById(klantLeeftijd).innerHTML = klantArray[0].leeftijd;
document.getElementById(klantWoonplaats).innerHTML = klantArray[0].woonplaats;




    

