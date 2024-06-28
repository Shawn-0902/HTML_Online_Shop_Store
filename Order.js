function compareAddress() {
    // Get the values from the email input fields
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;

    // Compare the emails
    if (address1 != address2) {
        document.getElementById("Address").textContent = "Emails do not match! Please try again!";
        document.getElementById("address1").value = ""; // Clear the first email field
        document.getElementById("address2").value = ""; // Clear the second email field
    }
}

function countShoePrice() {
    // Get the values from the input fields
    var selectedShoe = document.getElementById("Shoes");
    if (selectedShoe.value === 'Trendy Skate Black($120.00)') {
        Shoes = '120';
    } 
    else if(selectedShoe.value === 'Trendy Skate Brown($115.00)'){
        Shoes = '115';
    }
    else if(selectedShoe.value === 'Trendy Skate Green($125.00)'){
        Shoes = '125';
    }
    else{
        Shoes = "0"
    }
    var userInput = document.getElementById("Number of Sheo").value;
    // Perform the addition
    var ShoePrice = Shoes*0.8 *userInput;

    // Update the result on the HTML page
    document.getElementById("ShoePrice").textContent = "ShoePrice: $" + ShoePrice;
}

function countSocksPrice() {
    // Get the values from the input fields
    var selectedShoe = document.getElementById("scoks");
    if (selectedShoe.value === 'Set 1') {
        Socks = '22';
    } 
    else if(selectedShoe.value === 'Set 2'){
        Socks = '20';
    }
    else if(selectedShoe.value === 'Set 3'){
        Socks = '21';
    }
    else{
        Socks = "0"
    }
    var userInput = document.getElementById("Number of Socks").value;
    // Perform the addition
    var SocksPrice = Socks*userInput;

    // Update the result on the HTML page
    document.getElementById("SocksPrice").textContent = "SocksPrice: $" +SocksPrice ;
}

function validateCheckbox() {
    var Agreement = document.getElementById('Agreement');

    // Check if the checkbox is checked
    if (!Agreement.checked) {
      // Display an error message or take any other action to handle the error
      alert('Please check the checkbox to proceed.');
      return; // Return early to prevent further actions if the checkbox is not checked
    }
}
function TotalAmount(){
    var selectedShoe = document.getElementById("Shoes");
    if (selectedShoe.value === 'Trendy Skate Black($120.00)') {
        Shoes = '120';
    } 
    else if(selectedShoe.value === 'Trendy Skate Brown($115.00)'){
        Shoes = '115';
    }
    else if(selectedShoe.value === 'Trendy Skate Green($125.00)'){
        Shoes = '125';
    }
    else{
        Shoes = "0"
    }
    var userInput = document.getElementById("Number of Sheo").value;
    // Perform the addition
    var ShoePrice = Shoes*0.8 *userInput;

    var selectedShoe = document.getElementById("scoks");
    if (selectedShoe.value === 'Set 1') {
        Socks = '22';
    } 
    else if(selectedShoe.value === 'Set 2'){
        Socks = '20';
    }
    else if(selectedShoe.value === 'Set 3'){
        Socks = '21';
    }
    else{
        Socks = "0"
    }
    var userInput = document.getElementById("Number of Socks").value;
    // Perform the addition
    var SocksPrice = Socks*userInput;

    var TotalAmount=ShoePrice+SocksPrice;
    document.getElementById("TotalAmount").textContent = "TotalAmount: $" +TotalAmount ;
}

