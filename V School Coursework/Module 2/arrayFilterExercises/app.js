//1. numbers > 5
const numbers = [3, 6, 8, 2];
const greaterThanFive = numbers.filter(function(num) {
    if (num >= 5) {
        return true
    }
})
console.log(greaterThanFive);

//2. even numbers
const evensOnly = numbers.filter(function(num) {
   if (num % 2 === 0) {
       return true
   }
})
console.log(evensOnly); 

//3. strings <= 5 characters
const campingStuff = ["dog", "wolf", "by", "family", "eaten", "camping"];
const fiveCharactersOrFewerOnly = campingStuff.filter(function(array) {
    if (array.length <= 5) {
        return true
    }
})
console.log(fiveCharactersOrFewerOnly); 

//4. filters out who doesn't belong to the club
const people = [  
{ name: "Angelina Jolie", member: true },
{ name: "Eric Jones", member: false },
{ name: "Paris Hilton", member: true },
{ name: "Kayne West", member: false },
{ name: "Bob Ziroll", member: true }
]
const peopleWhoBelongToTheIlluminati = people.filter(function(arr){
    if (arr.member === false) {
        return arr
    }
})
console.log(peopleWhoBelongToTheIlluminati);

//5. 18+
const peopleAges = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const matrixWatchers = peopleAges.filter(function(arr) {
    if (arr.age >= 18) {
        return arr
    }
})
console.log(matrixWatchers); 
