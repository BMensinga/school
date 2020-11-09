document.addEventListener("DOMContentLoaded", function() {
    // Create a empty array accessories.
    const accessories = [];

    // Create 5 accessory objects.
    let accessory1 = {accessoryName: 'Race Fiets', price: 150.00};
    let accessory2 = {accessoryName: 'Mountain Bike', price: 125.00};
    let accessory3 = {accessoryName: 'Oma Fiets', price: 75.00};
    let accessory4 = {accessoryName: 'Elektrische Fiets', price: 525.00};
    let accessory5 = {accessoryName: 'Eenwieler', price: 60.00};

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
});