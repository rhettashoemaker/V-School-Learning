//1. Double
const numbers = [2, 5, 100]
const doubleNumbers = numbers.map(function(num) {
    return num * 2
})
console.log(doubleNumbers); 

//2. Numbers -> Strings
const numeros = [2, 5, 100]
const stringItUp = numeros.map(function(arr) {
    return arr.toString()
})
console.log(stringItUp); 

//3. Properly capitalize
const messy = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const capitalizeNames = messy.map(function(arr) {
    for(i = 0; i <arr.length; i++) {
        arr.toLowerCase()
        if (arr.indexOf === 0) {
            arr.toUpperCase([0])
        }   
        return arr
    }
})
console.log(capitalizeNames);

//4. Array of objects' names
const people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
const namesOnly = people.map(function(person) {
    return person.name
})
console.log(namesOnly); 

//5. Array of names 18+
const makeStrings = people.map(function(person) {
    if (person.age < 18) {
        return person.name + " can't go see it. Sad."
    } else if (person.age >= 18) {
        return person.name + " CAN go see it! Happy!"
    }
})
console.log(makeStrings); 

//6. Array of names in <h1>s, ages in <h2>s
const readyToPutInTheDOM = people.map(function(arr) {
    const header = document.getElementById("header")
    const h1 = document.createElement("h1").innerHTML = arr.name
    h1.appendChild(header)
    const h2 = document.createElement("h2").innerHTML = arr.age
    h2.appendChild(h1)
    return arr
})
console.log(readyToPutInTheDOM); 


