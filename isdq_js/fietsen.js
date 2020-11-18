document.addEventListener("DOMContentLoaded", function() {
    function Bike(bike, price) {
        this.bike = bike;
        this.price = price;
    }

    let bikes = [
        new Bike ('Race Fiets', 150.00),
        new Bike ('Mountain Bike', 125.00),
        new Bike ('Oma Fiets',  75.00),
        new Bike ('Elektrische Fiets', 525.00),
        new Bike ('Eenwieler', 60.00)
    ];

    // Update dropdown menu with the item from the bikes array.
    function ShowDropdownItems() {
        // Getting dropdown menu.
        let dropdown = document.getElementById("dropdown");

        // Delete old dropdown.
        dropdown.innerHTML = "";

        for (let i = 0; i < bikes.length; i++) {
            // Creating elements.
            let li = document.createElement("li");
            let p = document.createElement("p");

            // Getting current text.
            let text = document.innerHTML = `De ${bikes[i].bike} is \t&euro;${bikes[i].price},-`;

            // Appending li and p tags to the dropdown.
            dropdown.appendChild(li);
            li.appendChild(p);

            // Set HTML code to be that of the text var.
            p.innerHTML = text;
            // Set dropdown item id.
            p.setAttribute("class",`dropdownItem`);
            p.setAttribute("id",`${i}`);

            // Add class for the selected dropdown.
            dropdown.parentElement.setAttribute('class', 'selectDropdown');
        }

        // When you click on an item in the dropdown call showDropdownItem with the parameter id of the item you clicked on.
        document.querySelectorAll('.dropdownItem').forEach( item=> {
            item.addEventListener('click', event => {
                let id = item.getAttribute('id');
                showDropdownItem(id);
            });
        });
    }

    // Update the text in #first id with that of item var.
    function showDropdownItem(item) {
        document.getElementById("first").innerHTML = `De ${bikes[item].bike} is \t&euro;${bikes[item].price},-`;
    }

    // Check if values put in form are already filled in. If not run the addItemToArray().
    function serializeForm(formId) {
        let inputs;
        let goThroughCheck = true;

        // Get all inputs in form.
        inputs = document.getElementById(formId).getElementsByTagName('input');

        // Serialize the inputs one by one and change the goThroughCheck if element already exists.
        for (let i = 0; i < inputs.length; i++) {

            // Get check attribute from input element.
            let check = document.getElementsByTagName('input')[i].getAttribute('check');

            // Check if field needs to be checked.
            if (check != 'none') {
                for (let j = 0; j < bikes.length; j++) {
                    if (inputs[i].value == bikes[j][Object.keys(bikes[j])[i]]) {
                        goThroughCheck = false;
                    }
                }
            }
        }

        // Check if goThroughCheck is true run addItemToArray(). Else notify user that item already exists.
        if (goThroughCheck) {
            addItemToArray(inputs);
        } else {
            alert('De accessoire bestaat al! Voeg een andere accessoire toe');
        }
    }

    // Add item to the array.
    function addItemToArray(inputs) {
        // Define addItem array.
        let addItem = [];

        // Get all values from inputs and push them in the addItem array.
        for (let i = 0; i < inputs.length; i++) {
            /* Check if input is a number. If so convert it to a float and push it into the array. Else push item into
            * the array.
            */
            if (!isNaN(inputs[i].value) && inputs[i].value !== "") {
                let convertedInput = Number(inputs[i].value);
                addItem.push(convertedInput);
            } else {
                addItem.push(inputs[i].value);
            }
        }

        // Add new bike with all fields in your form. Every addItem should be a field in the array.
        bikes.push(new Bike(addItem[0], addItem[1]));

        // console.log full array.
        console.log(bikes);

        // Update dropdown menu.
        ShowDropdownItems();
    }

    // Run ShowDropdownItems().
    ShowDropdownItems();

    // If you click on the bike-button show the form.
    document.getElementById("accessory-button").addEventListener('click', event => {
        document.getElementById('form').className = 'block';
    });

    // If you click on the submit button run serializeForm by the form id.
    document.getElementById("submit").addEventListener('click', event => {
        let formId = document.getElementById("form").getAttribute('id');
        serializeForm(formId);
    });

    // Get #first element and set the html to be the string.
    document.getElementById("first").innerHTML = `De ${bikes[0].bike} is \t&euro;${bikes[0].price},-`;
});