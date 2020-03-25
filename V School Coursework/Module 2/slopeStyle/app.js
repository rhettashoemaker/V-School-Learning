//green circle
//1.
const animalArray = []
function collectAnimals(...animals) {  
    return animalArray.push(...animals)
}
collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 


//2.
function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,
        sweets,
        vegetables
    }
}
combineFruit(["apple", "pear"],
            ["cake", "pie"],
            ["carrot"])


//3. 
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};
const {location} = location;
const {amount} = amount;
function parseSentence({location, duration}){
return `We're going to have a good time in ${location} for ${duration}`}


//4.
const {items} = items;
function returnFirst(items){ 
    return items[0]
}

//5. 
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites[favoriteActivities] {
    /*your code here*/
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

returnFavorites(favoriteActivities)


//blue square
function combineAnimals() {  
 
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]


//black diamond
//1.
function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }

  //2.
  function unshift(array, a, b, c, d, e) {  
    return [a, b, c, d, e].concat(array);
  }

//double black diamond

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]