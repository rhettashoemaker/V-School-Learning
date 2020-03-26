const form = document.marioForm

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const goombas = form.goombasCaught.value;
    const boos= form.boosCaught.value;
    const bowsers = form.bowsersCaught.value;

    let goombaTotal = document.getElementById("goombaTotal").innerText;
    let booTotal = document.getElementById("booTotal").innerText;
    let bowserTotal = document.getElementById("bowserTotal").innerText;
    let grandTotal = document.getElementById("totalSum").innerText;

    goombaTotal = goombas * 5;
    booTotal = boos * 10;
    bowserTotal = bowsers * 100;

    grandTotal = goombaTotal + booTotal + bowserTotal;

    alert(grandTotal)

})