//Preliminaries

if(5>3){
    console.log("is greater than")
} else {
    console.log("nope")
}

var animal= "cat"
if(animal.length === 3){
    console.log("is the length")
} else {
    console.log("nope")
}

if("cat" === "dog"){
    console.log("taxonomy what?")
} else {
    console.log("not the same")
}


//Bronze

var person = {
    name: "Bobby",
    age: 12,
}

if(person.age >= 18){
    console.log(person.name + " is allowed to go to the movie.")
} else {
    console.log(person.name + " is NOT allowed to go to the movie.")
}

if(person.name[0] === "B"){
    console.log(person.name + " is allowed to go to the movie.")
} else {
    console.log(person.name + " is NOT allowed to go to the movie.")
}

if(person.name[0] === "B" && person.age >= 18){
    console.log(person.name + " is allowed to go to the movie.")
} else {
    console.log(person.name + " is NOT allowed to go to the movie.")
}


//Silver

if(1 === "1"){
    console.log("strict")
} else if (1 == "1"){
    console.log("loose")
} else {
    console.log("not equal at all")
}

if(1 <= 2 && 2 === 4){
    console.log("yes")
} else {
    console.log("not today")
}


//Gold
//1. 
var pet = ("dog", "cat", "guinea pig", "komodo dragon")
if(typeof pet == "string") {
    console.log("It's a string!")
} else if (typeof pet == "number") {
    console.log("It's a number!")
} else if (typeof pet == "boolean") {
    console.log("It's a boolean, foolean!")
} else if(typeof pet == "object") {
    console.log("I (am an) object!")
} else if (typeof pet == "array") { 
    console.log("Looking for me? I'm in disarray!")
//this will call an array an object because that's how it functions in js, so use the statement below to accurately find an array:
} else if (pet instanceof Array) {
    console.log("No, I'm in DISarray!")
} else {
    console.log("That's all, folks!")
}

//2.
var aver = (true)
if(typeof aver == "boolean") {
    console.log("It's a me, boolean.")
} else {
    console.log("Nope, not a boolean.")
}

//3.
var whatIsBetterThan24 = 25;
if(typeof whatIsBetterThan24 !== 'undefined'){
    console.log('I exist!')
} else if(typeof whatIsBetterThan24 == 'undefined') {
    console.log("Who am I? Where am I going? Why have I come to be here?")
}

//4.
if('s' >= 12) {
    console.log("Explain this to me.")
} else {
    console.log("Well, alrighty then.")
}

//5.
if('a' >= 0) {
    console.log("a;sldkjf")
} else if ('a' >= 1) {
    console.log("pqowieur")
} else {
    console.log("nada")
}

//6.
var myNum= [10, 11, 12, 13, 14, 15];
for (var i=0; i<myNum.length; i++){
    if (myNum[i] %2 === 0){
        console.log("even")
    } else {
        console.log("odd")
    }
}