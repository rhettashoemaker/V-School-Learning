const form = document.marioForm

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const goombas = form.goombasCaught.value;
    const boos= form.boosCaught.value;
    const bowsers = form.bowsersCaught.value;

    let goombaTotal = document.getElementById("goombaTotal");
    let booTotal = document.getElementById("booTotal");
    let bowserTotal = document.getElementById("bowserTotal");
    let grandTotal = document.getElementById("totalSum");

    goombaTotal.innerText = goombas * 5;
    booTotal.innerText = boos * 10;
    bowserTotal.innerText = bowsers * 100;

    grandTotal.innerText = goombas * 5 + boos * 10 + bowsers * 100
})
