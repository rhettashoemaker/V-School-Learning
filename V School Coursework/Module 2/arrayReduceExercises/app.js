//1. Turn an array of numbers into a total of all the numbers
const numbers = [1, 2, 3]

const sum = numbers.reduce(function(final, num) {
    final += num
    return final
})
console.log(sum)

//2. Turn an array of numbers into a long string of all those numbers
const concat = numbers.reduce(function(final, num) {
    const string = num.toString();
    final += string;
    return final
})
console.log(concat)

//3. Turn an array of voter objects into a count of how many people voted
const voter = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const totalVotes = voter.reduce(function(final, voter) {
    if(voter.voted) {
        final++
    }
    return final
}, 0)
console.log(totalVotes)

//4. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
const wishlistCost = wishlist.reduce (function(final, item) {
    final += item.price
    return final
}, 0)
console.log(wishlistCost)

//5. Given an array of arrays, flatten them into a single array
const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
const smooshedArray = arrays.reduce(function(final, array) {
    final += array
    //or final.concat(array)
    return final
})
console.log(smooshedArray, "\nType: " + typeof(smooshedArray))

//6. Given an array of potential voters, return an object representing the resuts of the vote
//Include: 
//Number potential and actual voters: 18-25, 26-35, 36-55

const voterTurnoutDemographics = voter.reduce(function(final, voter) {
    if (voter.age >= 18 && voter.age <= 25 && voter.voted) {
        final.youngAdultPool ++
        final.youngAdultVotes ++
    } else if (voter.age >= 18 && voter.age <= 25 && !voter.voted) {
        final.youngAdultPool ++
    } else if (voter.age >= 26 && voter.age <= 35 && voter.voted) {
        final.midAdultPool ++
        final.midAdultVotes ++
    } else if (voter.age >= 26 && voter.age <= 35 && !voter.voted) {
       final. midAdultPool ++
    } else if (voter.age >= 36 && voter.age <= 55 && voter.voted) {
        final.upperAdultPool ++
        final.upperAdultVotes ++
    } else if (voter.age >= 36 && voter.age <= 55 && !voter.voted) {
        final.upperAdultPool ++
    }
    return final

}, {youngAdultPool: 0, youngAdultVotes: 0, midAdultPool: 0, midAdultVotes: 0, upperAdultPool: 0, upperAdultVotes: 0})
console.log(voterTurnoutDemographics)

