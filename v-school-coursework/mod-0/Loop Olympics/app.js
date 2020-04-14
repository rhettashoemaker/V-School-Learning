//Preliminaries
//1. 
for(var i = 0; i <= 9; i++) {
    console.log(i)
}

//2.
for(var i = 9; i > 0; i--){
    console.log(i)
}

//3.
var fruit= ["banana", "orange", "apple", "kiwi"]

for(var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}


//Bronze
//1.
var numeros = [10,11,12,];
numeros.push(0,1,2,3,4,5,6,7,8,9)
console.log(numeros)

//2.
for(var i = 0; i < 100; i++){
    if (i % 2 === 0) {
        console.log(i)
    }
}

//3. 
var fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach",]
for (var i = 0; i <fruits.length; i + 2){
    console.log (fruits)
}


//Silver

var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

// //1.
// for (var i = 0; i < 0; i++) {
//     console.log(people.Array[i].name)
// }

// //2. 
// for (var i = 0; i > 0; i++) {
//     push (peopleArray[i].name)
// }
