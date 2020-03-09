const rls = require( "readline-sync");

let time = 100;
let socialReserves = 50;
const deflectAbility = Math.floor(Math.random() * 20);
const inventory = [];
let counter = 0;

console.log( "Hello there! " );
const name = rls.question("What's your name? \n");
console.log("\n \nHello, " + name + "!");
console.log("You've decided to venture out of your homebody shell and go to a salsaganza with your friends! But since you only recently decided you'd go, you have only 100 minutes and 10 turns before you need to head out. The salsa-making way is fraught with both lurking time-takers and excellent music.");
console.log("\n \nTime-takers have a 60% chance of appearing and should they do so, you can choose to either avoid or engage with them. They'll automatically take a certain chunk out of your remaining time, then you exchange 'blows' of you trying to avoid/expedite the process and them sapping away a varying amount of your willpower to engage in social activities. If you choose to avoid, there's a 50% chance you will lose all motivation to go out and you'll end up staying home. So choose wisely. ")
console.log("\n \nThe remaining 40% of the time you'll be able to calmly bask in some great tunes. If you successfully stick it out with Time-Takers and/or listen to music, you'll gain experiences in your inventory. Ready?")

const eventOptions = [
    {
        name: "got visited by a Chatty Cathy neighbor",
        item: " life lessons and a deepened friendship",
        timeTaker: true,
        timeTakesUp: Math.floor(Math.random()*100),
        socialReserveSappage: Math.floor(Math.random()*40),
        persistence: 30
    },{
        name: "cut your finger",
        item: " nostalgia trip from the superhero band-aid you used on your finger",
        timeTaker: true,
        timeTakesUp: Math.floor(Math.random()*10),
        socialReserveSappage: Math.floor(Math.random()*5),
        persistence: 15
    },{
        name: "got distracted by social media",
        item: " several hilarious memes to add to your collection",
        timeTaker: true,
        timeTakesUp: Math.floor(Math.random()*30),
        socialReserveSappage: Math.floor(Math.random()*20),
        persistence: 25
    },{
        name: "remembered you need to do laundry and got distracted by that",
        item: " clean, fresh clothes",
        timeTaker: true,
        timeTakesUp: Math.floor(Math.random()*20),
        socialReserveSappage: Math.floor(Math.random()*10),
        persistence: 10
    },{
        name: " didn't have an important ingredient so you went to the store",
        item: [" the needed ingredient", " the best gummy bears in the world"],
        timeTaker: true,
        timeTakesUp: Math.floor(Math.random()*30),
        socialReserveSappage: Math.floor(Math.random()*30),
        persistence: 30
    },{
        name: "played with a needy cat",
        item: " increased bonding",
        timeTaker: true,
        timeTakesUp: Math.floor(Math.random()*30),
        socialReserveSappage: Math.floor(Math.random()*15),
        persistence: 50
    },{
        name: "'Bad Mind' by Erin Rae",
        item: " soothed anxiety",
        timeTaker: false 
    },{
        name: "'Sweet Leaf of the North' by Mik Artistik's Ego Trip",
        item: " renewed sense of hope and determination",
        timeTaker: false
    },{
        name: "'At the Purchaser's Option' by Rhiannon Giddens",
        item: " reoriented priorities",
        timeTaker: false
    },{
        name: "'When I am Laid to Earth' by Purcell",
        item: " basking in one of the most lovely arias ever composed",
        timeTaker: false
    }
]

function eventDecider () {
    return eventOptions[Math.floor(Math.random()*eventOptions.length)];
}

while (time > 0 && socialReserves > 0 && counter < 10 ) {
    const cook = rls.question ("\n \nTo cook, type 'c' then press enter. To see your stats, type 'p' then press enter.\n");
    if (cook === "p") {
        console.log("\n\nName: " + name + "Turns taken: " + counter + "\nTime left: " + time + "\nSocial Reserves left: " + socialReserves + "\nExperiences:" + inventory)
    } else if (cook === "c") {
        let event = eventDecider();
        if (event.timeTaker === false) {
            counter++;
            inventory.push(event.item);
            console.log("\n\nYou listened to " + event.name + " and addedp" + event.item + " to your day's experience.");
        }
        if (event.timeTaker) {
            let willYouEngage = rls.question ("\n\nA wild Time Taker appeared! You " + event.name + ".\n\nTime it will take up: " + event.timeTakesUp + "\nSocial reserve damage: " + event.socialReserveSappage + "\nItem: " + event.item + ". \n\nTo engage, type (e). To avoid, type (a)\n");
            if (willYouEngage === "a"){
                const avoidChance = Math.floor(Math.random()*2);
                
                if( avoidChance === 0 ){
                    console.log("\n\nWell, that didn't work out. Phooey. Better luck next time. Guess it'll be an introverted evening. How very terrible.");
                    time = 0;
                    counter++;
                    process.exit();
                } else if ( avoidChance === 1 ) {
                    console.log("\n\nYou successfully avoided that encounter! Let's keep going.");
                    counter++;
                    continue;
                }
            } else if (willYouEngage === "e") {

                if (event.persistence <= 0) {
                    inventory.push(event.item);
                    console.log("\n\nCongrats! You navigated that like a champ. You added an item to your inventory of the day's experiences.")
                } else if (event.persistence > 0 ) { 
                    while (event.persistence > 0) {
                        if (time > 0 && socialReserves > 0 && counter < 10) {
                            newEnemyHP = event.persistence - deflectAbility;
                            event.persistence -= deflectAbility;
                            console.log("\n\nYou use your best time management and deflecting skills to deflect " + deflectAbility + ", which shrinks your opponent's persistence to " + newEnemyHP + ".");
                            counter++;
                            if (event.persistence <= 0 && time > 0 && socialReserves > 0 && counter < 10) {
                                inventory.push(event.item);
                                console.log("\n\nCongrats! You navigated that like a champ. You added an item to your inventory of the day's experiences.")
                            } else if (event.persistence > 0 && time > 0 && socialReserves > 0 && counter < 10) {
                                let currentSappage = function () {
                                    return event.socialReserveSappage;
                                }
                                event.socialReserves -= currentSappage;
                                console.log("Your opponent keeps demanding engagement, and takes " + currentSappage + " of your social reserve.");
                            } else if (counter === 0) {
                                console.log("You did it! You made an absolutely tasty salsa that will delight your friends, and you kept up your steely nerve to socialize. On top of that, you gained some great experiences along the way. Have an awesome party!")
                                console.log("Name: " + name + "\nTurns taken: " + counter + "\nTime left: " + time + "\nSocial Reserves left: " + socialReserves + "\nExperiences:" + inventory)
                                process.exit();
                            }
                        }
                        continue
                    }
                }
            }
        }      
    }
}
 
