console.log(axios.get("https://api.vschool.io/rhettashoemaker/todo"));


const form = document.todoListForm;
const itemContainer = document.getElementById('todoItemsContainer');



//GET//

function getData (){
    axios.get("https://api.vschool.io/rhettashoemaker/todo")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}



//SHOW UP//

function clearList() {
    while(todoItemsContainer.firstChild) {
        form.removeChild(el,firstChild)
    }
}

getData()



//POST//

form.addEventListener("submit", function(event){
    event.preventDefault()

    const newItem = {
        title: form.taskName.value,
        description: form.description.value,
        price: form.taskPrice.value,
        imagURL: form.image.value,
        completed: false,
    }

    form.title.value = ""

    axios.post("https://api.vschool.io/rhettashoemaker/todo", newItem)
        .then(res => getData())
        .catch(err => console.log(err))

    axios.post("https://api.vschool.io/rhettashoemaker/todo")
        .then (response => {
            const itemTitle = document.createElement('h5');
            const itemPrice = document.createElement('h6'); 
            const itemDescription = document.createElement('p');
            const itemImageURL = document.createElement('p');
            const itemEditButton = document.createElement('button');
            const itemDeleteButton = document.createElement('button');
            const itemCompleteButton = document.createElement('button');

            itemContainer.appendChild(itemTitle);
            itemContainer.appendChild(itemPrice);
            itemContainer.appendChild(itemDescription);
            itemContainer.appendChild(itemImageURL);
            itemContainer.appendChild(itemEditButton);
            itemContainer.appendChild(itemDeleteButton);
            itemContainer.appendChild(itemCompleteButton);  
        })
        .catch(error => console.log(error))
})



//PUT//

//complete//

itemCompleteButton.addEventListener('click', function () {
    


    //     const updates = {
//         title: "",
//         description: ""
//     }

//     axios.put("https://api.vschool.io/scrimbalessons/todo/5d8bd531ee91575e6d49e06f", updates)
//         .then(respo0nse => console.log(response.data))
//         .catch(error => console.log(error))
// }       

    // itemEditButton.addEventListener('click', function () {
            
        // })
        // itemDeleteButton.addEventListener('click', function () {
        //     itemContainer.removeChild(itemContainer);
        // })
        // itemCompleteButton.addEventListener('click', function () {
        //     itemTitle.style.textDecoration = "line-through";
        //     itemTitle.style.color = "color:#86868F";
        // })



// function getData(){
//     axios.get("https://api.vschool.io/rhettashoemaker/todo")
//         .then(res => listData(res.data))
//         .catch(err => alert(err))
// }

// function listData(data){
//     clearOut()
//     for(let i = 0; i < data.length; i++){
//         const li = document.createElement('li')
//         li.textContent = data[i].title
//         document.getElementById('todoList').appendChild(li)
//     }
// }

// function clearOut(){
//     const el = document.getElementById('todoItemContainer')
//     while(el.firstChild){
//         el.removeChild(el.firstChild)
//     }
// }

// getData()

// form.addEventListener("submit", function(event){
//     event.preventDefault()
//     const newItem = {
//         title: todoListForm.title.value
//     }
    
//     todoListForm.title.value = ""
    
//     axios.post("", newItem)
//         .then(res => getData(res.data))
//         .catch(err => console.log(err))
// })

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     const item = form['shopping-item'].value;
//     addItem(item);

//     return 'Finished';
// })
