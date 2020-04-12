//1. 
function sum (num1, num2){
    return num1 + num2
}
console.log(sum(3,8))

// var setOne= [1,2,3]
// var setTwo= [4,5,6]

// function sumItUp (setOne, setTwo){
//     return(setOne + setTwo)
// }
// console.log(sumItUp(setOne + setTwo));

//2.
function greaterThan (num1, num2, num3) {
    if ((num1 >= num2) && (num1 >= num3)) {
        console.log(num1);
    } else if ((num2>=num1) && (num2>=num3)){
        console.log(num2);
    } else {
        console.log(num3)
    }
    return "I've been functioned!"
}

var mystring = "start"
console.log("this is mystring: " + mystring)
mystring= greaterThan (1,2,3)
console.log("this is mystring: " + mystring)

//console.log(greaterThan(10,11,12))


//3.

var numbers = [3.4, 6, 10, 13, 1000000]
for(var i = 0; i < numbers.length; i++){
    if (numbers[i] %2 === 0){
        console.log("even")
    } else {
        console.log("odd")
    }
}


//4.
// var half = stringy.slice(16)
function stringy (string) {
    if(string.length <= 20){
        console.log(string + string)
    } else {
        console.log(str.slice)
    }
}
console.log(stringy("fleeble"))

//Optional challenge
// i + counter
//     console.log(counter + result)
