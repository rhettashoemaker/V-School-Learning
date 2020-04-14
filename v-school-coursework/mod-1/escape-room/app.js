const rls = require( 'readline-sync' );

const name = rls.question( 'What is your name? ' )
console.log( "Hello, " + name + ". It appears you're trapped in a room. To escape, you need to find the key to the door then unlock the door. You have three options: 1. Put your hand in a hole in the room, 2. Find the key, or 3. Open the door. ")

const player = {
    name: name,
    hasKey: false,
    hasEscaped: false
}

while ( player.hasEscaped === false ) {
    let choice = rls.question("Which would you like to do? hole, key, or door?\n")
    if ( choice === "door") {
        if ( player.hasKey === false ) {
            console.log( "It's locked." )
        } else if ( player.hasKey === true ) {
            player.hasEscaped = true;
            console.log( "You did it! You've escaped." )
        }
    } else if ( choice === "key" ) {
        if ( player.hasKey === false) {
            player.hasKey = true;
            console.log( "You found it!" )
        } else if ( player.hasKey === true) {
            console.log( "You already found it, whatcha doing lollygagging?")
        }
        continue
    } else if ( choice === "hole" ) {
        console.log( "The hole was apparently a Sarlacc pit. You Boba'd and died. But we can transfer life force now so you can keep going." )
    }
}