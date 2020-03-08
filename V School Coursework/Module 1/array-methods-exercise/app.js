const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1.
vegetables.pop()
console.log("vegetables: ", vegetables)

//2.
fruit.shift()
console.log("fruit: ", fruit)

//3.
const orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

//4.
fruit.push(orangeIndex)
console.log("fruit: ", fruit)

//5.
const lengthy = vegetables.length
console.log(lengthy)

//6.
vegetables.push(lengthy)
console.log("vegetables: ", vegetables)

//7.
const food = fruit.concat(vegetables)
console.log("produce: ", food)

//8.
food.splice(4,2)
console.log("produce: ", food)

//9.
food.reverse()
console.log(food)

//10.
const squishyListy = food.join()
console.log(squishyListy)

