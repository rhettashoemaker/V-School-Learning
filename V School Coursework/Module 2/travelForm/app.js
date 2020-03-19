const form = document.getElementById("travelForm");

form.addEventListener("submit", function(event) {
    console.log("hello world")
    event.preventDefault();
    // const firstName = form.firstName.value;
    // const lastName = form.lastName.value;
    // const age = form.age.value;
    // const gender = form.gender;
    // const location = form.location;
    // const dietaryRestrictions = [];
    // for(let i = 0; i < form.diet.length; i++) {
    //     if(form.diet[i].checked) {
    //         dietaryRestrictions.push(form.diet[i].value);
    //     }
    // }
    // alert ("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + Location + "\nDietary Restrictions: " + dietaryRestrictions);
})