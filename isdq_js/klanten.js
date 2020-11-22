document.addEventListener("DOMContentLoaded", function() {
    function User(firstname, lastname, age, city) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.city = city;
    }

    let users = [
        new User ('Tino', 'Joao', 33, 'Den Haag'),
        new User ('Antonio', 'Teca', 34, 'Den Haag'),
        new User ('Antonio', 'Frank', 35, 'Rijswijk'),
        new User ('Denilson', 'Coelho', 32, 'Rotterdam'),
        new User ('Giel', 'Deelen', 32, 'Delf')
    ];

    // Update dropdown menu with the item from the accessories array.
    function ShowDropdownItems() {
        // Getting dropdown menu.
        let dropdown = document.getElementById("dropdown");

        // Delete old dropdown.
        dropdown.innerHTML = "";

        for (let i = 0; i < users.length; i++) {
            // Creating elements.
            let li = document.createElement("li");
            let p = document.createElement("p");

            // Getting current text.
            let text = document.innerHTML = `De klant: ${users[i].firstname} ${users[i].lastname}`;

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
        document.getElementById("first").innerHTML = `De klant: ${users[item].firstname} ${users[item].lastname} heeft de leeftijd ${users[item].age} jaar en woont in: ${users[item].city}`;
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
                for (let j = 0; j < users.length; j++) {
                    if (inputs[i].value == users[j][Object.keys(users[j])[i]]) {
                        goThroughCheck = false;
                    }
                }
            }
        }

        // Check if goThroughCheck is true run addItemToArray(). Else notify user that item already exists.
        if (goThroughCheck) {
            addItemToArray(inputs);
        } else {
            alert('De klant bestaat al! Voeg een andere klant toe');
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

        // Add new accessory with all fields in your form. Every addItem should be a field in the array.
        users.push(new User(addItem[0], addItem[1], addItem[2], addItem[3]));

        // console.log full array.
        console.log(users);

        // Update dropdown menu.
        ShowDropdownItems();
    }

    // Run ShowDropdownItems().
    ShowDropdownItems();

    // If you click on the accessory-button show the form.
    document.getElementById("accessory-button").addEventListener('click', event => {
        document.getElementById('form').className = 'block';
    });

    // If you click on the submit button run serializeForm by the form id.
    document.getElementById("submit").addEventListener('click', event => {
        let formId = document.getElementById("form").getAttribute('id');
        serializeForm(formId);
    });

    // Get #first element and set the html to be the string.
    document.getElementById("first").innerHTML = `De klant: ${users[0].firstname} ${users[0].lastname} heeft de leeftijd ${users[0].age} jaar en woont in: ${users[0].city}`;
});
