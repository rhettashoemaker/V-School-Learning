const addForm = document["add"]

addForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const add1 = Number(addForm.add1.value);
    const add2 = Number(addForm.add2.value);
    addForm.add1.value = "";
    addForm.add2.value = "";
    const addAnswer = document.getElementById('addAnswer')
    addAnswer.innerHTML = add1 + add2;
    console.log(addAnswer)
})

const subtractForm = document["subtract"]

subtractForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const subtract1 = Number(subtractForm.subtract1.value);
    const subtract2 = Number(subtractForm.subtract2.value);
    subtractForm.subtract1.value = "";
    subtractForm.subtract2.value = "";
    const subtractAnswer = document.getElementById('subtractAnswer');
    subtractAnswer.innerHTML = subtract1 - subtract2;
    console.log(subtractAnswer)
})

const multiplyForm = document["multiply"]

multiplyForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const multiply1 = multiplyForm.multiply1.value;
    const multiply2 = multiplyForm.multiply2.value;
    multiplyForm.multiply1.value = "";
    multiplyForm.multiply2.value = "";
    const multiplyAnswer = document.getElementById('multiplyAnswer');
    multiplyAnswer.innerHTML = multiply1 * multiply2;
    console.log(multiplyAnswer)
})