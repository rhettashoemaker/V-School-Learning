const form = document.todoListForm;

function clearList() {
    const el = document.getElementById('todoItemsContainer')
    while(el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

function listData (data){
    clearList()

    for (let i = 0; i < data.length; i++) {
        const itemContainer = document.getElementById('todoItemsContainer');
        const itemTitle = document.createElement('h5');
        const itemPrice = document.createElement('h6'); 
        const itemDescription = document.createElement('p');
        const itemImageURL = document.createElement('p');
        //const itemEditButton = document.createElement('button');
        const itemDeleteButton = document.createElement('button');
        const itemCompleteButton = document.createElement('button');

        itemTitle.textContent = data[i].title
        itemPrice.textContent = data[i].price
        itemDescription.textContent = data[i].description
        itemImageURL.textContent = data[i].imgURL
        //itemEditButton.textContent = "Edit"
        itemDeleteButton.textContent = "Delete"
        itemCompleteButton.textContent = "Complete" 

        //itemEditButton.setAttribute('class', 'editButton')
        itemDeleteButton.setAttribute('class', 'deleteButton')
        itemCompleteButton.setAttribute('class', 'completeButton')
        
        // itemEditButton.addEventListener('click', function () {
        //     const updates {
        //     }
        //     axios.put("https://api.vschool.io/rhettashoemaker/todo/" + todo._id, updates)
        // })
        itemDeleteButton.addEventListener('click', function () {
            axios.delete("https://api.vschool.io/rhettashoemaker/todo/" + data[i]._id)
                .then(response => getData())
                .catch(error => console.log(error))
        })
        itemCompleteButton.addEventListener('click', function () {
            const updates = {
                completed: true
            }
            
            itemTitle.style.textDecoration = "line-through"
            itemPrice.style.textDecoration = "line-through"
            itemDescription.style.textDecoration = "line-through"
            itemImageURL.style.textDecoration = "line-through"
            itemTitle.style.color = "grey"
            itemPrice.style.color = "grey"
            itemDescription.style.color = "grey"
            itemImageURL.style.color = "grey"

            axios.put("https://api.vschool.io/rhettashoemaker/todo/" + data[i]._id, updates)
        })

        itemContainer.appendChild(itemTitle);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemImageURL);
        //itemContainer.appendChild(itemEditButton);
        itemContainer.appendChild(itemDeleteButton);
        itemContainer.appendChild(itemCompleteButton);
    }
}

function getData() {
    axios.get("https://api.vschool.io/rhettashoemaker/todo/")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}
getData()

form.addEventListener("submit", function(event){
    event.preventDefault()

    const newItem = {
        title: form.taskName.value,
        description: form.description.value,
        price: form.taskPrice.value,
        imagURL: form.image.value,
        completed: false,
    }

    axios.post("https://api.vschool.io/rhettashoemaker/todo/", newItem)
        .then(res => getData(res.data))
        .catch(err => console.log(err))
})

