
window.addEventListener( "click", function () {
    counter++;
    localStorage.setItem("tally", counter);
    const tally = localStorage.getItem("tally");
    document.getElementById("tally").innerHTML = tally;
})