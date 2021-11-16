
class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
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

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    
    speakWisdom() {
        console.log("Speaking some pieces of wisdom...")
        this.drinkSake();
        console.log("We are all connected, young padawan.");
    }
}

const ninja1 = new Ninja("One", 100);
const ninja2 = new Ninja("Two", 80);
const ninja3 = new Ninja("Three", 0);
const splinter = new Sensei("Splinter");

ninja2.sayName();
ninja1.showStats();
ninja2.drinkSake();
ninja2.showStats();
splinter.speakWisdom();