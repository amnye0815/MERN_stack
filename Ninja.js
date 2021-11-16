
class Ninja {
    constructor(name, health) {
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log(`This ninja's name is ${this.name}`);
    }

    showStats() {
        console.log(`${this.name}'s stats are: strength: ${this.strength}, speed: ${this.speed}, health: ${this.health}.`)
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + " just added 10 to their health via drinking sake.");
        console.log("Their health is now " + this.health + ".");
    }
}

const ninja1 = new Ninja("One", 100);
const ninja2 = new Ninja("Two", 80);
const ninja3 = new Ninja("Three", 0);

ninja1.showStats();
ninja2.drinkSake();
ninja2.showStats();

