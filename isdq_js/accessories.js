document.addEventListener("DOMContentLoaded", function() {
    function Accessory(accessoryName, price) {
        this.accessory = accessoryName;
        this.price = price;
    }

    let accessories = [
        new Accessory ('Helm', 32.00),
        new Accessory ('Fietstas', 14.99),
        new Accessory ('Voor lamp',  2.10),
        new Accessory ('Achter lamp', 2.50),
        new Accessory ('Bagage drager', 49.99)
    ];

    document.getElementById("first").innerHTML = `Accessoire ${accessories[0].accessory} is \t&euro;${accessories[0].price},-`;
});