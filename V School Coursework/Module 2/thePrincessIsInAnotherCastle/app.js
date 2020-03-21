class Player {
    constructor(name, totalCoins = 0, status = "Small", hasStar = false, gameActive = true, counter = 0) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
        this.counter = counter;
    }
    setName (namePicked) {
        this.name = namePicked
    }
    gotHit () {
        if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false;
        } else if (this.status === "Big") {
            this.status = "Small";
        } else if (this.status === "Powered Up" && !this.hasStar) {
            this.status = "Big";
        } else if (this.status === "Powered Up" && this.hasStar) {
            player.counter++
            if (player.counter === 1) {
                console.log("Congrats! You got a star! You have 2 turns of invincibility left.")
            } else if (player.counter === 2) {
                console.log("Congrats! You still have a star! You have 1 turns of invincibility left.")
            } else if (player.counter === 3) {
                console.log("Back to mortality.")
                player.hasStar = false;
                player.counter = 0;
            }
        }
    }
    gotPowerup () {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        } else if (this.status === "Powered Up") {
            this.hasStar = true;
            console.log("Congratulations! You got a star!\n")
        }    
    }
    addCoin () {
        this.totalCoins++
    }
    print () {
        console.log(`Name: ${player.name} \nStatus: ${player.status} \nHas Star ${player.hasStar} \nTotal Coins: ${player.totalCoins}\n`)
    }
}

player = new Player ("Mario")
console.log(player.gameActive)

while (player.gameActive) {  
    let event = Math.floor(Math.random()*3);
    if (event === 0) {
        console.log("Oh no! You got hit.\n");
        player.gotHit();
    } else if (event === 1) {
        console.log("You got a boost in power!\n")
        player.gotPowerup();
    } else if (event === 2) {
        console.log("You added a coin! You're rolling in it.\n")
        player.addCoin();
    }
    player.print();
    console.log(player.gameActive)
    continue
}

if (player.gameActive = false) {
    console.log("You died. Game over")

}