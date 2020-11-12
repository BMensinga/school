document.addEventListener("DOMContentLoaded", function() {
    function Accessory(accessory, price) {
        this.accessory = accessory;
        this.price = price;
    }

    let accessories = [
        new Accessory ('Helm', 32.00),
        new Accessory ('Fietstas', 14.99),
        new Accessory ('Voor lamp',  2.10),
        new Accessory ('Achter lamp', 2.50),
        new Accessory ('Bagage drager', 49.99)
    ];

    function ShowDropdownItems() {
        for (let i = 0; i < accessories.length; i++) {
            // Creating elements and getting dropdown menu.
            let dropdown = document.getElementById("dropdown");
            let li = document.createElement("li");
            let p = document.createElement("p");

            // Getting current text.
            let text = document.innerHTML = `Accessoire ${accessories[i].accessory} is \t&euro;${accessories[i].price},-`;

            // Appending li and p tags to the dropdown.
            dropdown.appendChild(li);
            li.appendChild(p);

            // Set HTML code to be that of the text var.
            p.innerHTML = text;
            // Set dropdown item id.
            p.setAttribute("class",`dropdownItem`);
            p.setAttribute("id",`${i}`);

            dropdown.parentElement.setAttribute('class', 'selectDropdown');
        }
    }

    function showDropdownItem(item) {
        document.getElementById("first").innerHTML = `Accessoire ${accessories[item].accessory} is \t&euro;${accessories[item].price},-`;
    }

    ShowDropdownItems();

    document.querySelectorAll('.dropdownItem').forEach( item=> {
        item.addEventListener('click', event => {
            let id = item.getAttribute('id');
            showDropdownItem(id);
        })
    })

    document.getElementById("first").innerHTML = `Accessoire ${accessories[0].accessory} is \t&euro;${accessories[0].price},-`;
});