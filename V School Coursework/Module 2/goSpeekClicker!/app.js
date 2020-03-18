
let counter = 0;
window.addEventListener( "click", function () {
    counter++;
    localStorage.setItem("tally", counter);
    let tally = localStorage.getItem("tally");
    document.getElementById("tally").innerHTML = tally;
})
