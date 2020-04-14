var shopper= {
    firstName: "Flavia",
    lastName: "de Luc",
    age: 11,
    isChemist: true,
    groceryCart: ["ricin", "strychnine", "arsenic", "cyanide", "thallium"],
    // nextItem: function(array) {
    //     for (var i = 0; i < array.length; i++){
    //         console.log(array[i])
    //     }
    // }
    fullName: function nameTheShopper () {
        console.log(this.firstName + " " + this.lastName)
    }
}
