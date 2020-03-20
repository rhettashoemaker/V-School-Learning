const people = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
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
    }
]

//1. Return a list of everyone older than 18
var oldGuns = people.reduce(function(final, person) {
    if (person.age > 18) {
        console.log(person)
        final.push(person)
    }
    return person
})

//2. "  " sorted alphabetically
//3. "           " each name and age is embedded in a string that looks like an HTML <li> element

//Extra Credit