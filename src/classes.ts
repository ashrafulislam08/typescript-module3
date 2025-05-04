// OOP - Class

class Animal {
    // name: string;
    // species: string; 
    // sound: string;

    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }


    makeSound() {
        console.log(`The sound of ${this.name} is ${this.sound}`)
    }
}

const cat = new Animal("Billa", 'Cat', "Mewo mewo")
cat.makeSound()

const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew")
dog.makeSound();
dog.makeSound();