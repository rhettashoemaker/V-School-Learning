//1.
function computerWordChecker (array) {
    var counter= 0
    for (var i=0; i<array.length; i++) {
        if (officeItems[i]=== "computer") {
            counter++
        }
    }
    if (counter === 1){
        console.log("There is " + counter + " computer.")
    } else {
        console.log("There are " + counter + " computers.")
    }
}
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
computerWordChecker(officeItems)


var people = [
    {
    name: "Mike",
    age: 12,
    gender: "male"
    },{
    name: "Madeline",
    age: 80,
    gender: "female"
    },{
    name: "Cheryl",
    age: 22,
    gender: "female"
    },{
    name: "Sam",
    age: 30,
    gender: "male"
    },{
    name: "Suzy",
    age: 4,
    gender: "female"
    }
]

//2. 

function ageChecker(array){
    for(var i = 0; i < array.length; i++) {
        if(people[i].age < 18) {
            console.log("Not old enough.")
        } else {
            console.log("Old enough.")
        }
    }
}
ageChecker(people)


//2. Optional 1. & 2.

function personalizedAgeChecker(array){
    for (var i = 0; i < array.length; i++) {
        if(people[i].age < 18 && people[i].gender === "male") {
            console.log(people[i].name + " is not old enough because he's " + people[i].age + ".")
        } else if(people[i].age >= 18 && people[i].gender === "male") {
            console.log(people[i].name + " is old enough because he's " + people[i].age + ".")
        } else if(people[i].age < 18 && people[i].gender === "female") {
            console.log(people[i].name + " is not old enough because she's " + people[i].age + ".")
        } else {
            console.log(people[i].name + " is old enough because she's " + people[i].age + ".")
        }
    } 
}
personalizedAgeChecker(people)


function oldFartCounter(array){
    var counter = 0
    for (var i = 0; i < array.length; i++){
        if (people[i].age >= 18) {
            counter++
        }
    }
    console.log("There are " + counter + " old farts able to watch the movie.")
}
oldFartCounter(people)



//Optional Bonus Challenge

var light = [2, 5, 435, 4, 3]
var counter = 0
lightChecker(light)
function lightChecker (array) {
    for (var i = 0; i < array.length; i++) {
        counter +3
        if (counter %2 === 0) {
            console.log("On")
        } else {
            console.log("Off")
        }
    }
}