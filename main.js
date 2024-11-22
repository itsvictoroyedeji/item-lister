var addForm = document.getElementById("addForm");
var items = document.getElementById('items');
var filter = document.getElementById('filter');

// Add Submit Event listener to form
addForm.addEventListener('submit', addItem);
// Add Click Event listener to form
items.addEventListener('click', deleteItem);
// Add keyup Event listener to search form
filter.addEventListener('keyup', filterItem);
// Event listener for touchscreens
filter.addEventListener('ontouchend', filterItem);


function addItem(e) {
  // prevent form submission
  e.preventDefault();
  // Get textItem value
  var textItem = document.querySelector('#addForm input[type="text"]').value;
  if (textItem == '') return false;
  // Add li element
  var newListItem = document.createElement('li');
  // Add li element classes
  newListItem.classList = "list-group-item";

  // Add text node and Append Text to List
  newListItem.appendChild(document.createTextNode(textItem));

  // Add new delete button
  var deleteBtn = document.createElement('button');
  // Add class to button
  deleteBtn.classList = "btn btn-danger btn-sm float-end delete";
  // Add text node and append to list Item
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append delete button to list item
  newListItem.appendChild(deleteBtn);
  // Append new list item to form
  items.appendChild(newListItem);
  
  // remove input value after submitting
  addForm[0].value = "";

}

function deleteItem(e) {
  // Get element for delete button
  if (e.target.classList.contains("delete")) {
    // Get button's parent element and remove it from the "items" list
    items.removeChild(e.target.parentElement);
  }
}

function filterItem(e) {
  // Get filter text value
  var filterText = e.target.value;
  // convert to lowercase
  filterText.toLowerCase();
  // Get list items
  var listItems = document.getElementsByTagName('li');
  // Convert List items into an array, and get each item (must be done on same line!)
  Array.from(listItems).forEach((item) => {
    // Get first child of each list item, which is the text. Then convert into string using .textContent
    var searchedItem = item.firstChild.textContent;

    // if filter text doesn't show in item list, it returns -1. Lowercase the searched list as well for a match.
    if (searchedItem.toLowerCase().indexOf(filterText) == -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  })
}

