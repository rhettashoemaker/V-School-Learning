const rls = require( "readline-sync")

let time = 100
const deflectAbility = Math.floor(Math.random() * 10)

console.log( "Hello there! " )
const name = rls.question("What's your name? \n")
console.log( "Hello, " + name + ".")
console.log("We have 100 minutes to make salsa. There are some possible distractions, so watch out. ")

//function to determine if enemy appears
const eventOptions = [
    {
        name: "got visited by a Chatty Cathy neighbor",
        item: "life lessons and a deepened friendship",
        timeTaker: true,
        timeTakesUp: Math.floor(Math.random()*100),
        deflectBuffer: 25
    }, 
    {
        name: "cut your finger",
        item: "nostalgia trip from the superhero band-aid you used on your finger",
        timeTaker: true,
        timeTakesUp: Math.floor(Math.random()*10),
        deflectBuffer: 5
    },
    {
        name: "got distracted by social media",
        item: "several hilarious memes to add to your collection",
        timeTaker: true,
        timeTakesUp: Math.floor(Math.random()*30),
        deflectBuffer: 20
    },
    {
        name: "remembered you need to do laundry and got distracted by that",
        item: "clean, fresh clothes",
        timeTaker: true,
        timeTakesUp: Math.floor(Math.random()*20),
        deflectBuffer: 10 
    },
    {
        name: "didn't have an important ingredient so you went to the store",
        item: "the needed ingredient and the best gummy bears in the world",
        timeTaker: true,
        timeTakesUp: Math.floor(Math.random()*30),
        deflectBuffer: 30
    },
    {
        name: "",
        item: ,
        timeTaker: ,
        timeTakesUp: ,
        deflectBuffer: 
    },
    {
        name: ,
        item: ,
        timeTaker: 
    }{
        name: ,
        item: ,
        timeTaker: 
    }{
        name: ,
        item: ,
        timeTaker: 
    }
    {
        name: "When I am Laid to Earth",
        item: "soothing aria",
        timeTaker: false
    }
]


function eventDecider () {
    return eventOptions[Math.floor(Math.random()*eventOptions.length)]
}

while (time > 0) {
    const cook = rls.question ("Do you want to keep cooking? Type 'c' then press enter.\n")
    if (cook === "c") {
        //console.log(eventDecider().name)
        let event = eventDecider()
        if (event.timeTaker === false) {
            console.log("Ahhhhh, what lovely music. I just love '")
        }
        if (event.timeTaker) {
            let willYouEngage = rls.question ("A wild " + event.name + " has appeared! It can withstand " + event.deflectBuffer + " minutes of deflection and take up " + event.timeTakesUp + " minutes of your cooking time. Do you want to engage (e) or avoid (a)?")
            if (willYouEngage === "a"){
                const avoidChance = Math.floor(Math.random()*2)
                if( avoidChance === 0 ){
                    
                } else if ( avoidChance === 1 ) {
                    continue
                }
            }
        }
         

    }


}
//game over. Print "game over" or something. 