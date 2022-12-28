//your code here
const itemNameInput = document.getElementById('item-name-input');
const itemPriceInput = document.getElementById('item-price-input');
const shoppingListTable = document.getElementById('shopping-list');

// Get reference to grand total element in table
const grandTotal = shoppingListTable.querySelector('#total');

// Add event listener to add button
document.getElementById('add').addEventListener('click', function() {
  // Get values from input fields
  const itemName = itemNameInput.value;
  const itemPrice = itemPriceInput.value;

  // Validate input
  if (!itemName || !itemPrice) {
    // Display error message if input is invalid
    alert('Please enter a valid item name and price');
    return;
  }

  // Add new row to table with item name and price
  const newRow = shoppingListTable.insertRow(-1);
  newRow.innerHTML = `<td>${itemName}</td><td>${itemPrice}</td>`;

  // Update grand total
  grandTotal.textContent = (parseFloat(grandTotal.textContent) + parseFloat(itemPrice)).toFixed(2);

  // Clear input fields
  itemNameInput.value = '';
  itemPriceInput.value = '';
});

