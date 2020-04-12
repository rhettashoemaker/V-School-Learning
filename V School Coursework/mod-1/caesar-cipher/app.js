// var string = rls.question( "What phrase would you like encoded?" )
// var number = rls.question( "How many positions to the right would you like to shift the number?" )

// function caesarCipher( string, number ) {
//     var number = number % 26;
//     var lowerCaseString = string.toLowerCase();
//     var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//     var newString = "";

//     for(let i = 0; i < lowerCaseString.length; i++) {
//         var currentLetter = lowerCaseString[i];
//         if(currentLetter === ' ') {
//             newString += currentLetter;
//             continue;
//         }
//         var currentIndex = alphabet.indexOf(currentLetter);
//         var newIndex = currentIndex + number;
//         if(newIndex > 25) {
//             newIndex = newIndex - 26
//         } else if (NewIndex < 0) {
//             newIndex = 26 + newIndex + 26;
//         } else if (string[i] === string[i].toUpperCase()) {
//             newString += alphabet[newIndex].toUpperCase();
//         } else newString += alphabet[newIndex];
//     }
//     return newString
// }

// console.log(caesarCipher('g dnszzw td lhpdzxp'))


function caesarCipher(input, shift) {
    var solved = "";
    var upperCaseInput = input.toUpperCase();
    for (var i = 0; i < upperCaseInput.length; i++) {
        var asciiNum = upperCaseInput[i].charCodeAt();
        if (asciiNum >= 65 && asciiNum <= 77) {
            solved += String.fromCharCode(asciiNum + shift);
        } else if (asciiNum >= 78 && asciiNum <= 90) {
            solved += String.fromCharCode(asciiNum - shift);
        }
    }
    console.log(solved);
    return solved;
}

caesarCipher("URYYBGURER", 13)