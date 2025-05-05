// OOP - Abstraction 

// 1. Interface 2. Abstract

// idea
interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

// real implementation
class Car implements Vehicle1 {
    startEngine(): void {
        console.log(`I am starting the car engine`)
    }
    stopEngine(): void {
        console.log(`I am stopping the car engine`)
    }
    move(): void {
        console.log(`I am moving the car`)
    }


    test() {
        console.log(`I am just testing`)
    }

}

const toyotaCar = new Car();
toyotaCar.startEngine()
toyotaCar.move();
toyotaCar.stopEngine();

// abstract class 

abstract class Vehicle2 {
   abstract startEngine(): void;
   abstract stopEngine(): void
   abstract move(): void 


    test() {
        console.log(`I am just testing`)
    }
}


class ToyoTaCar extends Vehicle2 {
    startEngine(): void {
        console.log(`I am starting the car`)
    }
    stopEngine(): void {
        console.log(`I am stopping the car`)
    }
    move(): void {
        console.log(`I am moving the car`)
    }
}


const hondaCar = new ToyoTaCar();
hondaCar.startEngine()
