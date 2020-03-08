//Preliminaries-----------------------------------------------

const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
h1.className = "header";
document.getElementById("header").appendChild(h1);

const sub = document.createElement("span");
sub.textContent = "Rhetta";
sub.className = "name header";
document.getElementById("header").appendChild(sub);

const sub2 = document.createElement("span");
sub2.textContent = " wrote the JavaScript";
sub2.className = "header";
document.getElementById("header").appendChild(sub2);


//Bronze-------------------------------------------------------

//Change text
let happyThoughts = document.getElementsByClassName("message");

happyThoughts[0].textContent = "'Gratitude";
happyThoughts[1].textContent = " turns what we have";
happyThoughts[2].textContent = " into enough.'";
happyThoughts[3].textContent = " -Aesop";

//Clear
function clearOut(array) { 
    for ( let i = 0 ; i < happyThoughts.length ; i ++ ) {
        happyThoughts[i].textContent = " "
    }
}

//Silver-----------------------------------------------------
document.getElementById("redBlackTheme").addEventListener('click', function () {
    const leftTexts = document.getElementsByClassName("message left");
    leftTexts.style.backgroundColor = "#FF0000";

    const rightTexts = document.getElementsByClassName("message right");
    rightTexts.style.backgroundColor = "#000000";
    rightTexts.style.color = "#ffffff"
})


//Gold-------------------------------------------------------