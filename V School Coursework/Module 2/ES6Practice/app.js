//-------------------- let and const ----------------------//
const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

//-------------------- arrow functions ----------------------//

//1.
const carrots = ["bright orange", "ripe", "rotten"]
const mapVegetables = (arr) => arr.map ((type, carrot) => ({type: "carrot", name: carrot}))

//2.
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
const filterForFriendly = (arr) => arr.filter(person => person.friendly)

//3.
const doMathSum = (a, b) => a + b

const produceProduct = (a, b) => a * b

//4. + Extra credit
const printString = (firstName = "Jane", lastName = "Doe", age = 100) => console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}`)

//5.
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
const filterForDogs = (arr) =>
    arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
 
//-------------------- template literals ----------------------//

const message = (location, name) => 
    console.log(`Hi ${name}! 
    \n\nWelcome to ${location}.
    \n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`) 
