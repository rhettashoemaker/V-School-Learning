const todoForm = document.todoListForm

function getData(){
    axios.get("")
        .then(res => listData(res.data))
        .catch(err => alert(err))
}

function listData(data){
    clearOut()
    for(let i = 0; i < data.length; i++){
        const li = document.createElement('li')
        li.textContent = data[i].title
        document.getElementById('todoList').appendChild(li)
    }
}

function clearOut(){
    const el = document.getElementById('todoList')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    const newItem = {
        task: todoListForm.name.value
    }
    
    todoListForm.title.value = ""
    
    axios.post("", newItem)
        .then(res => getData(res.data))
        .catch(err => console.log(err))
})

