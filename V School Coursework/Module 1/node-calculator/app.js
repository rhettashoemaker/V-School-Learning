const rls = require ( 'readline-sync' );
let name = rls.question ( "What is your name? " ) 
let num1 = rls.question ( "Hello, " + name + "! Let's do some calculating. I'll ask you to enter two numbers and then the operand of the operation you'd like to perform. Ready? Here we go. Please enter your first number: " )

function numberify ( string ) {
    string = Number ( string )
    return string
}

num1 = numberify ( num1 )

while ( typeof num1 !== "number" ) {
    let retry = rls.question ( "Sorry, that's not a number. Please enter only numbers: " ) 
    console.log ( retry )
    num1 = numberify ( num1 )
    if ( typeof num1 === 'number' ) {
        break
    }
}

let num2 = rls.question ( "Okay! Your first number is: " + num1 + ". Now please enter your second number: " )

num2 = numberify ( num2 )

while ( typeof num2 !== "number" ) {
    let retry2 = rls.question ( "Sorry, that's not a number. Please enter only numbers: " ) 
    console.log ( retry2 )
    num2 = numberify ( num2 )
    if ( typeof num2 === 'number' ) {
        break
    }
}

let operand = ( rls.question ( "Alrighty, now just for the operand. If you'd like to add, type '+'. If you'd like to subtract, type '-'. If you'd like to multiply, type '*'. Or if you'd like to divide, type '/'. Which operation would you like to perform? " ) )

//Addition

function add ( num1, num2 ) {
    answerAdd = num1 + num2
    console.log( "Your answer is " + answerAdd + " ! Thanks for playing." )
    return answerAdd
}

//Subtraction

function subtract( num1, num2 ) {
    answerSubtract = num1 - num2
    console.log( "Your answer is " + answerSubtract + " ! Thanks for playing." )
    return answerSubtract
}

//Multiplication

function multiply ( num1, num2 ) {
    answerMultiply = num1 * num2
    console.log ( "Your answer is " + answerMultiply + " ! Thanks for playing." )
    return answerMultiply
}

//Division

function divide ( num1, num2 ) {
    answerDivide = num1 / num2
    console.log ( "Your answer is " + answerDivide + " ! Thanks for playing." )
    return answerDivide
}

function operationStation ( number1, number2, operanda ) {
    if ( operanda === '+' ) {
        add ( number1, number2 )
    } else if ( operanda === '-') {
        subtract ( number1, number2 )
    } else if ( operanda === '*' || operanda === 'x' || operanda === 'X' ) {
        multiply ( number1, number2 )
    } else if ( operanda === '/' ) {
        divide ( number1, number2 )
    } else {
        console.log ( "Whoops, that's not a operand." )
    }
}

operationStation (num1, num2, operand)




