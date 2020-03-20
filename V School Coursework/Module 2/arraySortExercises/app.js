//1. Sort an array from smallest to largest
const leastToGreatest = [1, 3, 5, 2, 90, 20]
leastToGreatest.sort((a, b) => a - b) 
console.log(leastToGreatest); 

//2. Sort an array from largest to smallest
const greatestToLeast = [1, 3, 5, 2, 90, 20]
leastToGreatest.sort((a, b) => b - a)
console.log(leastToGreatest);  

//3. Sort an array from shortest string to longest
const array = ["dog", "wolf", "by", "family", "eaten"]
array.sort((a, b) => a.length - b.length)
console.log(array)

//4. Sort an array alphabetically
array.sort()
console.log(array);

//5. Sort objects in array by age
const byAge = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
byAge.sort((a, b) => a.age - b.age)
console.log(byAge);