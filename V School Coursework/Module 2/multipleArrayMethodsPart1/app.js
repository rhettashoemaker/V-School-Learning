const people = [
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }, 
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    }
]

//1. Return a list of everyone older than 18
const oldGuns = people.reduce (function (final, person) {
    if (person.age > 18) {
        final.push (person)
    }
    return final
}, [])
console.log(oldGuns)

//2. "  " sorted alphabetically

const alphabetical = oldGuns.sort (function (a, b) {
    if (a.lastName < b.lastName) {
        return -1;
    } else if (a.lastName > b.lastName) {
        return 1;
    } else {
        return 0
    }
}
)
console.log(alphabetical)

//3. "           " each name and age is embedded in a string that looks like an HTML <li> element

const listical = alphabetical.map (person => { return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`})
console.log(listical)

//Extra Credit