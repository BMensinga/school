// Create a empty array accessories.
const accessories = [];

// Create 5 accessory objects.
let accessory1 = {accessoryName: 'Helm', price: 32.00};
let accessory2 = {accessoryName: 'Fietstas', price: 14.99};
let accessory3 = {accessoryName: 'Voor lamp', price: 2.10};
let accessory4 = {accessoryName: 'Achter lamp', price: 2.50};
let accessory5 = {accessoryName: 'Bagage drager', price: 49.99};

// Push all accessories objects into accessories array.
for (let i = 1; i <= 5; i++) {
    accessories.push(eval("accessory" + i));
}

// Return the full object in the array if it exists.
function showFullObject(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (key === i) {
            let object = array[i];
            return `Accessoire ${object.accessoryName} is \t&euro;${object.price},-`;
        }
        else {
            return 'Value does not exist!';
        }
    }
}

// Print first accessory in the HTML file.
document.querySelector("#first").innerHTML = showFullObject(accessories, 0);