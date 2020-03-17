const addForm = document["add"]

addForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const add1 = Number(addForm.add1.value);
    const add2 = Number(addForm.add2.value);
    addForm.add1.value = "";
    addForm.add2.value = "";
    const addAnswer = document.createElement('h2');
    addAnswer.textContent = add1 + add2;
    console.log(addAnswer)
    document.getElementById("addEnd").append(addAnswer);
    //document.getElementsByTagName("body")[0].append(addAnswer);
})

const subtractForm = document["subtract"]

subtractForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const subtract1 = Number(subtractForm.subtract1.value);
    const subtract2 = Number(subtractForm.subtract2.value);
    subtractForm.subtract1.value = "";
    subtractForm.subtract2.value = "";
    const subtractAnswer = document.createElement('h2');
    subtractAnswer.textContent = (subtract1 + subtract2);
    document.getElementById("subtract").append(subtractAnswer)
})

const multiplyForm = document["multiply"]

multiplyForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const add1 = multiplyForm.amultiply1.value;
    const add2 = multiplyForm.multiply2.value;
    multiplyForm.multiply1.value = "";
    multiplyForm.multiply2.value = "";
    const multiplyAnswer = document.createElement('h2');
    multiplyAnswer.textContent = (multiply1 + multiply2);
    document.getElementById("multiply").append(multiplyAnswer)
})