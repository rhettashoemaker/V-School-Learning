// add item to list via submit button

function submitButtonEvent() {
    const newItemToAdd = submitButton.value;
    const newItems = document.createElement(li);
    
    newItems.innerText = newItemToAdd;
    document.getElementById("add-todo").appendChild(newItems);
}

// added items have same format as others
// added items need delete buttons
// delete button deletes item

// added items have edit button
// edit button input box appears
// save button in place of edit button
// input button has value of list item
// can save input box's value
// on save input will disappear, new value appear
