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

    const goombalicious = goombaTotal.innerText = goombas * 5;
    const boolicious = booTotal.innerText = boos * 10;
    const bowserlicious = bowserTotal = bowsers * 100;

    grandTotal.innerText = goombalicious + boolicious + bowserlicious;

})