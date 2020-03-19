class Player {
    constructor(name, totalCoins = 0, status = "Small", hasStar = false, gameActive = true) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
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
        } else if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status === "Powered Up" && this.hasStar === true) {
            console.log("You're invincible!")
        }
    }
    gotPowerup () {
        if (this.status === "Small") {
            this.status = "Big";
            this.gameActive = false;
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
        console.log(`Name: ${player.name} \nStatus: ${player.status} \nTotal Coins: ${player.totalCoins}\n`)
    }
}

player = new Player ("Mario")

while (player.gameActive) {     
    let event = Math.floor(Math.random()*3)
    if (event === 0) {
        console.log("Oh no! You got hit.\n")
        player.gotHit();
    } else if (event === 1) {
        console.log("You got a boost in power!\n")
        player.gotPowerup();
    } else if (event === 2) {
        console.log("You added a coin! You're rolling in it.\n")
        player.addCoin();
    }
   player.print();
   continue
}

if (player.gameActive = false) {
    console.log("You died. Game over")

}